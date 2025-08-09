// src/lib/validations/enquiry-server.ts

import * as z from "zod";
// Import from the server-safe library
import { isValidPhoneNumber } from "libphonenumber-js";

// This schema is ONLY for the server
export const serverEnquiryFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  mobile: z.string().refine(
    (value) => isValidPhoneNumber(value), 
    { message: "Invalid phone number." }
  ),
  country: z.string().optional(),
});