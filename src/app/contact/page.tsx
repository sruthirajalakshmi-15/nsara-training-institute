// src/app/contact/page.tsx

import { Card } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - N.SARA Training Institute",
  description: "Get in touch with N.SARA Training Institute. Find our email, phone number, location, and business hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We&apos;d love to hear from you. Find our contact information, office location, and business hours below.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto">
          {/* Centered Card with Contact Details */}
          <Card className="max-w-3xl mx-auto p-8 sm:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">Our Contact Details</h2>
            <div className="space-y-8">
              {/* Email Address */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">For general inquiries, support, and course information.</p>
                  <Link href="mailto:info@nsara.institute" className="text-primary hover:underline font-medium break-all">
                    info@nsara.institute
                  </Link>
                </div>
              </div>
              
              {/* Phone Number */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">Speak directly with our student support team.</p>
                  <Link href="tel:+971565499249" className="text-primary hover:underline font-medium">
                    +971 56 549 9249
                  </Link>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-foreground">Our Location</h3>
                  <p className="text-muted-foreground">
                    Office 211, Al-Zarooni Building, Al-Rigga, Deira, Dubai, UAE
                  </p>
                  <a href="https://www.google.com/maps/place/Al+Zarooni+Building+-+Deira+-+Al+Rigga+-+Dubai" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    Get Directions →
                  </a>
                </div>
              </div>

             
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}