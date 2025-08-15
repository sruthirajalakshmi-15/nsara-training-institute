// src/app/api/enquiry/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
// CHANGE THIS LINE: Import the new server-side schema
import { serverEnquiryFormSchema } from '@/lib/validations/enquiry-server';
import { Prisma } from '@prisma/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // CHANGE THIS LINE: Use the new server-side schema for validation
    const validationResult = serverEnquiryFormSchema.safeParse(body);

    if (!validationResult.success) {
      // The error formatting here will show the specific validation error
      return NextResponse.json(
        { error: 'Invalid input.', details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, mobile, country } = validationResult.data;

    const newEnquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        mobile,
        country: country || 'Not specified',
      },
    });

    return NextResponse.json(
      { message: 'Enquiry submitted successfully!', data: newEnquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error('API Error:', error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'An enquiry with this email already exists.' },
          { status: 409 }
        );
      }
    }
    return NextResponse.json(
      { error: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}