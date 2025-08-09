// src/app/page.tsx
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import {
  BookOpen,
  Briefcase,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Globe,
  HandCoins,
  HardHat,
  Play,
  Settings,
  Star,
  Trophy,
  UsersRound,
  BrainCircuit, // Icon for AI course
  Lightbulb,    // Icon for Marketing course
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { allCourseCategories, getFeaturedCourses } from '@/lib/course-data';

export const metadata: Metadata = {
  title: "N.SARA Training Institute - Innovative Online Education for a Future-Ready Generation",
  description: "N.SARA Training Institute is a KHDA-approved and ISO 9001:2005 certified online learning center empowering professionals through globally relevant education and skill development.",
};

// --- Data for Homepage Sections ---

// Features: "Why Choose N.SARA Training Institute?" - Refined for online-only model
const features = [
  {
    icon: ClipboardCheck,
    title: 'KHDA Approved & ISO Certified',
    description: 'Trusted and recognized for quality online training, ensuring your certification holds global value.'
  },
  {
    icon: UsersRound,
    title: 'Experienced Faculty',
    description: 'Learn from certified instructors with real-world experience, delivering engaging lessons in our virtual classrooms.'
  },
  {
    icon: HardHat,
    title: 'Hands-On Virtual Labs',
    description: 'We emphasize practical sessions, workshops, and real-life projects you can complete from anywhere.'
  },
  {
    icon: Clock,
    title: 'Flexible Online Learning',
    description: 'Our 100% online model allows you to choose schedules and learn from anywhere in the world.'
  },
  {
    icon: HandCoins,
    title: 'Affordable Fees',
    description: 'Quality online training shouldn\'t be expensive. We offer competitive pricing and easy payment options.'
  },
  {
    icon: Trophy,
    title: 'Recognized Certification',
    description: 'Earn a certificate that is valued by employers globally and enhances your professional profile.'
  }
];

// Flexible Learning Model - Adjusted for a fully online experience
const flexibleLearningOptions = [
  { label: "Weekend Batches", value: "35%", description: "Ideal for working professionals, providing maximum flexibility for your schedule." },
  { label: "Flexible Timings", value: "30%", description: "Choose class schedules that fit your lifestyle and time zone." },
  { label: "Global Classroom", value: "20%", icon: Globe, description: "Learn and network with a diverse group of peers from around the world." },
  { label: "Customized Learning Pace", value: "15%", description: "Tailor your study speed to optimize your online learning journey." },
];

// 5 Key Steps to Set Up a Virtual Classroom - Already perfect for online model
const virtualClassroomSteps = [
  { step: "STEP 1", title: "Choose Platform", description: "Select optimal tools like Zoom or Google Classroom for seamless online teaching and collaboration." },
  { step: "STEP 2", title: "Design Course", description: "Plan comprehensive syllabus, set schedules, and upload all necessary digital learning materials." },
  { step: "STEP 3", title: "Set Up Access for All", description: "Create and manage secure user accounts for trainers and students with appropriate permissions." },
  { step: "STEP 4", title: "Conduct Orientation & Trial", description: "Provide basic training and run a demo session to ensure a smooth virtual experience for everyone." },
  { step: "STEP 5", title: "Launch & Monitor", description: "Begin live online classes, actively track student engagement, and gather feedback for continuous improvement." },
];



export default function HomePage() {
  const initialFeatured = getFeaturedCourses();

  // --- START: Added new courses for homepage display ---
  const additionalCourses = [
    {
      slug: 'ai-machine-learning-expert',
      name: 'AI & Machine Learning Expert',
      fullTitle: 'AI & Machine Learning Expert',
      description: 'Dive into the world of Artificial Intelligence. Master algorithms, data models, and build intelligent systems from scratch.',
      details: {
        level: 'Advanced',
        duration: '6 months',
        certification: 'Certified AI & ML Professional',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP'],
        price: null,
      }
    },
    {
      slug: 'advanced-digital-marketing',
      name: 'Advanced Digital Marketing',
      fullTitle: 'Advanced Digital Marketing',
      description: 'Master SEO, SEM, social media, and content strategy. Drive growth and measure ROI with cutting-edge digital marketing techniques.',
      details: {
        level: 'Intermediate',
        duration: '4 months',
        certification: 'Advanced Digital Marketing Certificate',
        tags: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
        price: null,
      }
    }
  ];
  // --- END: Added new courses ---


  // Combine the original featured courses with the new ones
  const featuredPrograms = [...additionalCourses, ...initialFeatured];

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-20 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary/50 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-4xl py-24 sm:py-32 text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-4 py-2 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary/20 bg-muted/50 backdrop-blur-sm transition-all duration-200">
                New online cohort starting soon - Limited seats!{' '}
                <Link href="/enquiry" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                  <span className="absolute inset-0" />
                  Enquire Now <ChevronRight className="inline h-4 w-4" />
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Transform Your Career with
              <span className="text-primary block lg:inline-block lg:ml-4">Expert Online Training</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-3xl mx-auto">
              Join thousands of professionals who've accelerated their careers through our industry-leading online programs. Learn from experts, build real projects, and land your dream job with our proven methodology.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-lg">
                <Link href="/enquiry" className="flex items-center justify-center">
                    <Play className="mr-2 h-5 w-5" />
                    Start Learning Today
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-border hover:bg-muted">
                <Link href="/courses" className="flex items-center justify-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    View All Courses
                </Link>
              </Button>
            </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Featured Programs</h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">Comprehensive online programs designed to fast-track your career growth with industry-relevant skills.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredPrograms.map((program) => (
              // --- UPDATED: Enhanced hover effects on course card ---
              <Card key={program.slug} className="transition-all duration-300 border border-border bg-card group hover:scale-105 hover:shadow-xl hover:border-primary flex flex-col">
                <Link href={`/courses/${program.slug}`} className="block h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      {(() => {
                        // Dynamically find icon for each course
                        const categoryWithProgram = allCourseCategories.find(cat =>
                          cat.courses.some(group => group.subcourses?.some(sub => sub.slug === program.slug))
                        );
                        // Fallback icons for our manually added courses
                        let IconComponent = categoryWithProgram?.icon;
                        if (program.slug === 'ai-machine-learning-expert') IconComponent = BrainCircuit;
                        if (program.slug === 'advanced-digital-marketing') IconComponent = Lightbulb;
                        
                        return IconComponent ? (
                          <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary transition-colors duration-300">
                            <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                          </div>
                        ) : null;
                      })()}
                      {program.details?.level && <Badge variant="secondary" className="text-xs">{program.details.level}</Badge>}
                    </div>
                    <CardTitle className="text-xl text-foreground">{program.fullTitle || program.name}</CardTitle>
                    {program.description && <p className="text-muted-foreground text-sm mt-2 line-clamp-2 h-10">{program.description}</p>}
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="space-y-3 mb-6">
                      {program.details?.duration && (
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-muted-foreground"><Clock className="h-4 w-4 mr-2 text-primary" />Duration: {program.details.duration}</div>
                          {program.details.price && <span className="font-bold text-foreground">{program.details.price}</span>}
                        </div>
                      )}
                      {program.details?.certification && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Trophy className="h-4 w-4 mr-2 text-primary" />{program.details.certification}
                        </div>
                      )}
                    </div>
                    {program.details?.tags && program.details.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.details.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    )}
                    <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all mt-auto">Learn More</Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/courses">
              <Button variant="outline" size="lg" className="text-lg">View All Courses <ChevronRight className="ml-2 h-5 w-5" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="why-choose-us" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose N.SARA Training Institute?</h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">We're committed to your success with proven methodologies and comprehensive support, all online.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {features.map((feature, index) => (
              // --- UPDATED: Enhanced hover effects on feature card ---
              <div key={index} className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Learning Model Section */}
      <section id="flexible-learning" className="py-24 bg-gradient-to-r from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Smart & Flexible Online Learning Model</h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">"Designed to fit every learner's lifestyle with prioritized options"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {flexibleLearningOptions.map((option, index) => (
              <Card key={index} className="text-center p-6 border-border hover:shadow-xl transition-all duration-300 group hover:border-primary">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  {option.icon ? <option.icon className="h-8 w-8 text-primary" /> : <span className="text-2xl font-bold text-primary">{option.value}</span>}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{option.label}</h3>
                <p className="text-muted-foreground leading-relaxed">{option.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Virtual Classroom Steps Section */}
      <section id="virtual-classroom-steps" className="py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20 fade-in-up">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Methodology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Your Path to Success</p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Our 5-step process ensures a seamless and effective online learning experience from start to finish.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* The Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-border/70 -translate-x-1/2" />

            {virtualClassroomSteps.map((step, i) => (
              <div key={step.title} className="relative mb-12 fade-in-up" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                <div className={cn(
                  "flex items-center w-full",
                  i % 2 === 1 && "md:flex-row-reverse"
                )}>
                  {/* Timeline Node and Connector */}
                  <div className="hidden md:block w-1/2">
                     <div className={cn("h-0.5 w-full", i % 2 === 1 ? "bg-gradient-to-l" : "bg-gradient-to-r", "from-primary/50 to-transparent")} />
                  </div>
                   <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                      <div className="h-8 w-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                   </div>

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 p-2 pl-12 md:p-4">
                     <Card className={cn(
                       "p-6 rounded-xl shadow-md border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:shadow-primary/10",
                       i % 2 === 1 ? "md:mr-4" : "md:ml-4"
                     )}>
                        <div className="flex items-baseline gap-4 mb-4">
                           <span className="text-5xl font-bold text-primary/80">{step.step}</span>
                           <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                     </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Career?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80">Don't wait to unlock your potential. Our next online cohort is filling up fast. Enroll now and take the first step towards your dream job.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-lg">
                <Link href="/enquiry" className="w-full flex items-center justify-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Enquire Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}