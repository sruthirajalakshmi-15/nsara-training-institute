// src/app/courses/[slug]/page.tsx

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Star, Clock, BarChart3, BookOpen, Monitor, CheckCircle, Trophy, UserCheck, Briefcase,
  Layers, FileText, Check, Users as UsersIcon, Award as AwardIcon,
  Lightbulb,
  UsersRound,
  ClipboardCheck,
  MessageSquareText
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { findCourseBySlug, getAllSubCourses, SubCourseItem } from '@/lib/course-data';

// For static generation (SSG) in Next.js App Router
export async function generateStaticParams() {
  const allSlugs = getAllSubCourses().map(course => ({
    slug: course.slug,
  }));
  return allSlugs;
}

// Dynamically generate metadata (SEO title and description) for each course page.
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = findCourseBySlug(slug);
  if (!course || !course.details) {
    return {
      title: "Course Not Found | N.SARA Training Institute",
      description: "The requested course could not be found.",
    };
  }
  return {
    title: `${course.fullTitle || course.name} | N.SARA Training Institute`,
    description: course.description || `Learn about the ${course.fullTitle || course.name} course at N.SARA Training Institute, offering industry-relevant training.`,
  };
}

// FIXED FUNCTION SIGNATURE FOR NEXT.JS 15
// Changed params to be a Promise<{ slug: string }>
export default async function SingleCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = findCourseBySlug(slug); // Get the full course object
  const courseData = course?.details; // Extract details
  const courseName = course?.name || "Course";

  if (!courseData || !course) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">The course you are looking for does not exist or is not available yet.</p>
        <Link href="/courses">
          <Button>View All Courses</Button>
        </Link>
      </div>
    );
  }

  // Define the type for a single navigation item for clarity
  type NavItem = {
    name: string;
    href: string;
  };

  const navItems = [
    courseData.overview && { name: 'Overview', href: '#overview' },
    courseData.whatYouWillLearn && courseData.whatYouWillLearn.length > 0 && { name: 'What You\'ll Learn', href: '#what-you-will-learn' },
    courseData.curriculum && courseData.curriculum.length > 0 && { name: 'Curriculum', href: '#curriculum' },
    courseData.requirements && courseData.requirements.length > 0 && { name: 'Requirements', href: '#requirements' },
    courseData.instructors && courseData.instructors.length > 0 && { name: 'Instructors', href: '#instructors' },
    courseData.testimonials && courseData.testimonials.length > 0 && { name: 'Success Stories', href: '#testimonials' },
    courseData.faq && courseData.faq.length > 0 && { name: 'FAQ', href: '#faq' },
  ]
  // Use a type guard to inform TypeScript of the filter's effect
  .filter((item): item is NavItem => Boolean(item));


  return (
    <div className="pt-20 bg-background text-foreground">
      {/* Course Hero */}
      <header className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 via-background to-secondary/5 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4">Course</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{course.fullTitle || courseName}</h1>
            {courseData.subtitle && <p className="mt-4 text-lg lg:text-xl text-muted-foreground">{courseData.subtitle}</p>}

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {courseData.duration && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">{courseData.duration}</span>
                </div>
              )}
              {courseData.level && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span className="font-medium">{courseData.level}</span>
                </div>
              )}
              {courseData.certification && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span className="font-medium">{courseData.certification}</span>
                </div>
              )}
              {courseData.tags && courseData.tags.length > 0 && (
                <div className="col-span-2 md:col-span-1 flex items-center gap-2 text-muted-foreground">
                    <Layers className="h-5 w-5 text-primary" />
                    <span className="font-medium">{courseData.tags.join(', ')}</span>
                </div>
              )}
               {courseData.softwareCovered && courseData.softwareCovered.length > 0 && (
                <div className="col-span-2 md:col-span-1 flex items-center gap-2 text-muted-foreground">
                    <Monitor className="h-5 w-5 text-primary" />
                    <span className="font-medium">Software: {courseData.softwareCovered.join(', ')}</span>
                </div>
              )}
            </div>
            {courseData.includes && courseData.includes.length > 0 && (
                <div className="mt-8 pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                        {courseData.includes.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 text-muted-foreground">
                                {item.icon && <item.icon className="h-5 w-5 text-primary" />}
                                <span className="font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {courseData.overview && (
              <section id="overview">
                <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{courseData.overview}</p>
              </section>
            )}

            {courseData.whatYouWillLearn && courseData.whatYouWillLearn.length > 0 && (
              <section id="what-you-will-learn">
                <h3 className="text-2xl font-bold mb-4">What You&apos;ll Learn</h3>
                <ul className="space-y-3">
                  {courseData.whatYouWillLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {courseData.curriculum && courseData.curriculum.length > 0 && (
              <section id="curriculum">
                <h2 className="text-3xl font-bold mb-6">Curriculum</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {courseData.curriculum.map((phase, index) => (
                    <AccordionItem key={phase.title || `item-${index}`} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card/50 hover:bg-muted/50">
                      <AccordionTrigger className="text-xl text-left font-semibold hover:no-underline">{phase.title}</AccordionTrigger>
                      <AccordionContent className="pt-2">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {phase.modules.map((module, moduleIndex) => <li key={moduleIndex}>{module}</li>)}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {courseData.requirements && courseData.requirements.length > 0 && (
              <section id="requirements">
                <h2 className="text-3xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {courseData.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {courseData.instructors && courseData.instructors.length > 0 && (
              <section id="instructors">
                <h2 className="text-3xl font-bold mb-6">Meet Your Instructors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {courseData.instructors.map(instructor => (
                    <Card key={instructor.name} className="flex items-center gap-4 p-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={instructor.image} alt={instructor.name} />
                        <AvatarFallback>{instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-lg">{instructor.name}</h4>
                        <p className="text-primary">{instructor.role}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {courseData.testimonials && courseData.testimonials.length > 0 && (
              <section id="testimonials">
                <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
                {courseData.testimonials.map((t, index) => (
                  <Card key={index} className="bg-card/50 p-8 mb-6 last:mb-0">
                    <div className="flex items-center mb-4">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-lg italic text-muted-foreground mb-6">&quot;{t.content}&quot;</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12"><AvatarImage src={t.image} /><AvatarFallback>{t.name.split(' ').map(n=>n[0])}</AvatarFallback></Avatar>
                      <div className="ml-4">
                        <p className="font-bold">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </section>
            )}

            {courseData.faq && courseData.faq.length > 0 && (
              <section id="faq">
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {courseData.faq.map((item, index) => (
                     <AccordionItem key={item.q} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card/50 hover:bg-muted/50">
                      <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline">{item.q}</AccordionTrigger>
                      <AccordionContent className="pt-2 text-base text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Start Your Journey</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courseData.price && <div className="text-4xl font-bold">{courseData.price} <span className="text-lg font-normal text-muted-foreground">/ full course</span></div>}
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">Enroll Now</Button>
                  <Button size="lg" variant="outline" className="w-full">
                    <Link href="/enquiry">Enquire for Details</Link>
                  </Button>
                  {courseData.includes && courseData.includes.length > 0 && (
                    <div className="pt-4 border-t border-border mt-4">
                      <h4 className="font-semibold mb-2">This course includes:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {courseData.includes.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            {item.icon && <item.icon className="h-4 w-4 text-primary" />}
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
              {navItems.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Course Navigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav>
                      <ul className="space-y-2">
                        {navItems.map((item) => (
                          <li key={item.name}>
                            <a href={item.href} className="block p-2 rounded-md text-muted-foreground hover:bg-muted hover:text-primary transition-colors">{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </CardContent>
                </Card>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}