// src/app/about/page.tsx
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card'; // CardContent is not directly imported but used via Card
import {
  BookOpen,      // Specific for Mission
  GraduationCap, // Specific for Vision
  Gavel,         // Specific for Integrity & Ethics
  RefreshCw,     // Specific for Continuous Improvement
  Star,          // Specific for Excellence in Education
  Users,         // Used for stats and also general users/students
  Award,         // Used for job placement stat
  Globe,         // Used for countries reached stat and global online presence
  Zap,           // Used for partner companies stat
  Lightbulb,     // Used for innovation in values
  CheckCircle,   // New icon for quality/certification (for Why Choose Us)
  UsersRound,    // New icon for expert faculty (for Why Choose Us)
  HardHat,       // New icon for hands-on training (for Why Choose Us)
  Calendar,      // New icon for flexible schedules (for Why Choose Us)
  HandCoins,     // New icon for affordable fees (for Why Choose Us)
  Trophy,        // New icon for recognized certification (for Why Choose Us)
  Phone,         // For contact numbers
  Monitor,       // For online learning / accessibility
  ChevronRight,  // For linking to other pages like "Join Waitlist"
} from 'lucide-react'; // Import all necessary Lucide icons
import type { Metadata } from 'next';
import Link from 'next/link'; // Import Link for internal navigation
import { cn } from '../../lib/utils'; // Import cn utility for conditional classnames

export const metadata: Metadata = {
  title: "About Us | N.SARA Training Institute",
  description: "Welcome to N.SARA Training Institute, your trusted destination for career-focused and industry-relevant training programs dedicated to empowering students and professionals.",
};

// --- Data for About Page Sections ---

// REMOVED: teamMembers array is no longer needed as the "Meet Our Leadership" section is removed.

// Why Choose N. Sara Training Institute? (From your latest text document)
const whyChooseUs = [
  {
    icon: CheckCircle, // Fitting for certification/quality
    title: 'KHDA Approved & ISO 9001:2005 Certified',
    description: 'Trusted and recognized for quality training, ensuring your certification holds global value and recognition.'
  },
  {
    icon: UsersRound, // Fitting for expert faculty
    title: 'Experienced Faculty', // Renamed from "Industry-Expert Trainers" for direct match
    description: 'Learn from certified instructors with real-world experience who are passionate about teaching and mentorship, providing invaluable insights.'
  },
  {
    icon: HardHat, // Fitting for hands-on/practical
    title: 'Hands-On Training',
    description: 'We emphasize practical sessions, workshops, and real-life projects to help you immediately apply what you learn and build a strong portfolio.'
  },
  {
    icon: Calendar, // Fitting for schedules/options
    title: 'Flexible Learning Options',
    description: 'Choose from online modes to suit your schedule and learning preferences, ensuring education fits into your lifestyle.'
  },
  {
    icon: HandCoins, // Fitting for fees/affordability
    title: 'Affordable Fees',
    description: 'Quality training shouldn\'t be expensive. We offer competitive pricing and easy payment options to make education accessible.'
  },
  {
    icon: Trophy, // Fitting for recognized certification
    title: 'Recognized Certification',
    description: 'Earn a certificate that is highly valued by employers and significantly enhances your professional profile and career prospects.'
  },
];


// Our Core Values (Content from your latest Image 6 and text document, icons chosen for best fit)
const values = [
  {
    icon: Star, // Fitting for "Excellence"
    title: 'Excellence in Education',
    description: 'We strive for the highest quality in all our programs, curriculum, and teaching methodologies, fostering superior learning outcomes.',
    color: 'text-yellow-500'
  },
  {
    icon: Users, // Fitting for "Student-Centered"
    title: 'Student-Centered Approach',
    description: 'Our focus is on empowering each student with personalized support, flexible learning paths, and an environment conducive to individual growth.',
    color: 'text-blue-500'
  },
  {
    icon: Gavel, // Fitting for "Integrity and Ethics"
    title: 'Integrity and Ethics',
    description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions and operations.',
    color: 'text-red-500'
  },
  {
    icon: Lightbulb, // Fitting for "Innovation"
    title: 'Innovation & Industry Relevance',
    description: 'We constantly adapt our programs to align with emerging industry trends, ensuring our students gain the most current and valuable skills.',
    color: 'text-green-500'
  },
  {
    icon: RefreshCw, // Fitting for "Continuous Improvement"
    title: 'Commitment to Continuous Improvement',
    description: 'We are dedicated to ongoing evaluation and enhancement of our services, striving for excellence in every aspect of our training.',
    color: 'text-purple-500'
  },
];


// Direct Contact Details (New Data Array)
const directContacts = [
  { name: 'Edison Mani', number: '+91 95140 19936' },
  { name: 'Siyarsh', number: '+971 58 856 1969' },
  { name: 'Muthumurugan', number: '+91 95973 08977' },
  { name: 'Ajith Kumar', number: '+91 91595 31092' },
];

export default function AboutPage() {
  return (
    <div className="pt-20"> {/* Padding top to clear fixed header */}
      {/* About Hero Section (Updated UI to match homepage hero style) */}
      <section className="relative isolate px-6 pt-20 lg:px-8 min-h-[70vh] flex items-center"> {/* Adjusted min-height for more visual impact */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary/50 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-4xl py-24 sm:py-32"> {/* Increased vertical padding for more space */}
          <div className="text-center">
            {/* Optional: Add a "New Cohort" like banner if desired for About page */}
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-4 py-2 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary/20 bg-muted/50 backdrop-blur-sm transition-all duration-200">
                Learn about our journey to excellence!{' '} {/* Adjusted banner text */}
                <Link href="#mission-vision" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                  <span className="absolute inset-0" />
                  Our Story <ChevronRight className="inline h-4 w-4" />
                </Link>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Welcome to <span className="text-primary block lg:inline-block">N.SARA Training Institute</span>
            </h1>

         <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-3xl mx-auto">
              Welcome to N. SARA Training Institute, your trusted destination for career-focused and
              industry-relevant training programs. We are dedicated to empowering students and
              professionals with the skills and knowledge they need to succeed in today’s competitive job
              market. With a team of experienced instructors and a commitment to quality education, we offer
              both technical and soft skill development courses tailored for various industries. Whether you&apos;re
              looking to advance your career, switch industries, or build foundational skills, N. SARA Training
              Institute is here to guide you every step of the way.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-col sm:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 w-full sm:w-auto shadow-lg">
                <Link href="/courses" className="w-full flex items-center justify-center">
                    <BookOpen className="mr-2 h-5 w-5" /> {/* Changed icon to BookOpen for courses */}
                    Explore Our Programs
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto mt-4 sm:mt-0 border-border hover:bg-muted">
                <Link href="/enquiry" className="w-full flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5" /> {/* Kept Phone for contact/enquiry */}
                    Enquire Now
                </Link>
              </Button>
            </div>

            {/* This stats section is already present on the About page below the hero, 
                so we'll keep it there and not duplicate it within the hero. */}
            {/* If you wanted it *inside* the hero, the padding around it would need adjustment. */}
          </div>
        </div>
      </section>

    
      {/* Why Choose N.Sara Training Institute Section (Remains the same, good spacing) */}
      <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Why Choose N.SARA Training Institute?
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              At N. Sara Training Institute, we are committed to shaping futures through quality education and
              skill-based learning. Here’s why students and professionals prefer us:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach & Online Excellence Section (Remains the same, good spacing) */}
      <section id="online-excellence" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Globe className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Global Reach & Online Excellence
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                N.SARA Training Institute operates with a fully online delivery model, allowing us to empower students and professionals globally. This ensures you can access our high-quality programs from anywhere, at any time, providing maximum flexibility without compromising on interactive and engaging education.
              </p>
            </div>
            {/* You can add an image here if you have one, or a simple graphic */}
            <div className="flex justify-center">
              <Monitor className="h-48 w-48 text-primary/30" /> {/* Placeholder visual */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (Remains the same, good spacing) */}
      <section id="mission-vision" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Our Mission and Vision
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The guiding principles that shape our commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <BookOpen className="h-6 w-6 mr-3" /> Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower individuals with the knowledge and skills needed to succeed in the global workforce.
              </p>
            </Card>
            <Card className="p-8 border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <GraduationCap className="h-6 w-6 mr-3" /> Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a leading institution for professional training, known for excellence, innovation, and industry alignment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section (Remains the same, good spacing) */}
      <section id="values" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-5">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

    

      {/* Direct Admissions Contacts Section (Remains the same, good spacing) */}
      <section id="direct-contacts" className="py-16 sm:py-20 lg:py-24 bg-card/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Connect with Our Admissions Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Have specific questions or need immediate assistance? Our dedicated course advisors are here to guide you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {directContacts.map((contact, index) => (
              <a
                key={index}
                href={`tel:${contact.number.replace(/\s/g, '')}`} // Ensures number is clickable
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{contact.name}</h3>
                <p className="text-lg font-medium text-primary group-hover:underline">{contact.number}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA (Links updated) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Join Our Mission</h2>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-muted-foreground">
              Whether you're a student ready to transform your career, an expert looking to mentor the next generation, or a company seeking top talent, we invite you to join our community.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto shadow-lg">
                <Link href="/courses">Explore Programs</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-border hover:bg-muted">
                <Link href="/enquiry">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}