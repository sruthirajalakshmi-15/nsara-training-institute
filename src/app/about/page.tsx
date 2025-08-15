import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient'; // Step 2-la create panna pora file-a import panrom

// Idhu Server Component, so inga metadata export panradhu correct.
export const metadata: Metadata = {
  title: "About Us | N.SARA Training Institute",
  description: "Welcome to N.SARA Training Institute, your trusted destination for career-focused and industry-relevant training programs dedicated to empowering students and professionals.",
};

// Indha page, namma client component-a render mattum pannum.
export default function AboutPage() {
  return <AboutPageClient />;
}