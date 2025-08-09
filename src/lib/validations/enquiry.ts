// src/lib/validations/enquiry.ts

import * as z from "zod";
// Import the validation function from the library
import { isValidPhoneNumber } from "react-phone-number-input";

export const enquiryFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  // A single field for the mobile number now
  mobile: z.string().refine(isValidPhoneNumber, {
    message: "Please enter a valid phone number.",
  }),
  country: z.string().optional(),
});