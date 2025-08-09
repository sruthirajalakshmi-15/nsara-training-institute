// src/app/courses/page.tsx (This is now a Server Component)
import { Metadata } from 'next';
import CourseListingView from './CourseListingView'; // Import the client component

// Metadata for this page (must be in a Server Component)
export const metadata: Metadata = {
  title: "Explore Our Courses | N.SARA Training Institute",
  description: "Browse our comprehensive catalog of industry-leading courses in technology, business, and design. Find the perfect program to accelerate your career.",
};

export default function CoursesPage() {
  // This component is rendered on the server, it just renders the client component.
  // The pt-20 from layout.tsx will apply to this div.
  return <CourseListingView />;
}