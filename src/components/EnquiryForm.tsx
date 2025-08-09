// src/components/EnquiryForm.tsx

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { User, Mail, Globe, Send, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { enquiryFormSchema } from "@/lib/validations/enquiry";
import { Alert, AlertDescription } from "./ui/alert";

// Import the new library and its CSS
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;

const countryOptions = [
  { value: "United States", label: "United States" },
  { value: "Canada", label: "Canada" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Australia", label: "Australia" },
  { value: "India", label: "India" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "Germany", label: "Germany" },
  { value: "Other", label: "Other" },
];

export function EnquiryForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "", // We no longer need to preset the country code here
      country: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: EnquiryFormValues) {
    setServerError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong.');
      }

      setSuccessMessage(result.message);
      form.reset();
    } catch (error: any) {
      setServerError(error.message);
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">Enquiry Form</CardTitle>
        <CardDescription>Fill out the form below and we'll get in touch.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* We need to add a custom class to style the phone input to match shadcn */}
        <style>{`.PhoneInputInput { flex: 1 1 0%; min-width: 0px; background-color: transparent; border: none; outline: none; }`}</style>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {serverError && (
              <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertDescription>{serverError}</AlertDescription></Alert>
            )}
            {successMessage && (
              <Alert className="border-green-500 text-green-700 dark:border-green-600 dark:text-green-400"><CheckCircle className="h-4 w-4 text-green-500" /><AlertDescription>{successMessage}</AlertDescription></Alert>
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <FormControl><Input placeholder="John Doe" {...field} className="pl-10" /></FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                   <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <FormControl><Input type="email" placeholder="you@example.com" {...field} className="pl-10" /></FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* SIMPLIFIED AND UPGRADED MOBILE NUMBER FIELD */}
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      placeholder="Enter phone number"
                      international
                      defaultCountry="AE" // Set default country to UAE
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country of Residence (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                    <FormControl>
                       <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <SelectTrigger className="pl-10"><SelectValue placeholder="Select your country" /></SelectTrigger>
                      </div>
                    </FormControl>
                    <SelectContent>
                      {countryOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6" disabled={isSubmitting}>
              {isSubmitting ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Submitting...</>
              ) : (
                <><Send className="mr-2 h-5 w-5" />Submit Enquiry</>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}