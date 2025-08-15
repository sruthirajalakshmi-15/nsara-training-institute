// src/app/api/enquiry/route.ts

import { NextResponse } from 'next/server';
import { serverEnquiryFormSchema } from '@/lib/validations/enquiry-server';
import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Get email addresses from environment variables for security and flexibility
const recipientEmail = process.env.INSTITUTE_RECIPIENT_EMAIL;
const senderEmail = process.env.INSTITUTE_SENDER_EMAIL;

// Best Practice: Check if environment variables are set on server startup
if (!recipientEmail || !senderEmail) {
  console.error("Missing required environment variables for email sending.");
  // In a real production app, this might even throw an error to prevent the server from starting.
}

export async function POST(request: Request) {
  // Check for missing environment variables at runtime, just in case.
  if (!recipientEmail || !senderEmail) {
    return NextResponse.json(
      { error: 'Server configuration error: Email service is not configured.' },
      { status: 500 }
    );
  }
  
  try {
    const body = await request.json();
    
    // Step 1: Validate the incoming data
    const validationResult = serverEnquiryFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input.', details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, mobile, country } = validationResult.data;

    // Step 2: Send the email using your verified domain
    const { data, error } = await resend.emails.send({
      // FROM: The address MUST use your verified domain.
      from: `NSARA Institute Enquiry <${senderEmail}>`,
      
      // TO: The address that receives the notification.
      to: [recipientEmail],
      
      // SUBJECT: Clear and informative subject line.
      subject: `New Enquiry from ${name} via Website`,
      
      // REPLY_TO: This is crucial. It sets the user's email as the reply-to
      // address, so when you hit "Reply" in your email client, you reply
      // directly to the person who made the enquiry.
      reply_to: email,
      
      // BODY: Professional and well-structured HTML for the email.
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
          <h2 style="color: #333;">New Website Enquiry</h2>
          <p>A new enquiry has been submitted through the NSARA Training Institute website.</p>
          <hr>
          <h3>Enquirer's Details:</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
            <li style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li style="margin-bottom: 10px;"><strong>Mobile:</strong> ${mobile}</li>
            <li style="margin-bottom: 10px;"><strong>Country:</strong> ${country || 'Not provided'}</li>
          </ul>
          <hr>
          <p style="font-size: 12px; color: #888;">
            To respond, simply reply to this email.
          </p>
        </div>
      `,
    });

    // Step 3: Handle the response from the email service
    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: 'We encountered an issue sending your message. Please try again later.' },
        { status: 500 }
      );
    }

    // Step 4: Send a success response to the client
    return NextResponse.json(
      { message: 'Thank you for your enquiry! We have received your message and will be in touch shortly.' },
      { status: 200 }
    );

  } catch (error) {
    // Catch any other unexpected server errors
    console.error('API Route General Error:', error);
    return NextResponse.json(
      { error: 'An internal server error occurred. Please try again.' },
      { status: 500 }
    );
  }
}