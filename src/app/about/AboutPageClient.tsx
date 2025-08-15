'use client'; 

import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import {
  BookOpen,
  GraduationCap,
  Gavel,
  RefreshCw,
  Star,
  Users,
  CheckCircle,
  UsersRound,
  HardHat,
  Calendar,
  HandCoins,
  Trophy,
  Phone,
  ChevronRight,
  MapPin,
  Mail,
  Lightbulb,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// --- Data for About Page Sections ---
const whyChooseUs = [
  { icon: CheckCircle, title: 'KHDA Approved & ISO 9001:2005 Certified', description: 'Trusted and recognized for quality training, ensuring your certification holds global value and recognition.' },
  { icon: UsersRound, title: 'Experienced Faculty', description: 'Learn from certified instructors with real-world experience who are passionate about teaching and mentorship, providing invaluable insights.' },
  { icon: HardHat, title: 'Hands-On Training', description: 'We emphasize practical sessions, workshops, and real-life projects to help you immediately apply what you learn and build a strong portfolio.' },
  { icon: Calendar, title: 'Flexible Learning Options', description: 'Choose from online modes to suit your schedule and learning preferences, ensuring education fits into your lifestyle.' },
  { icon: HandCoins, title: 'Affordable Fees', description: 'Quality training shouldn\'t be expensive. We offer competitive pricing and easy payment options to make education accessible.' },
  { icon: Trophy, title: 'Recognized Certification', description: 'Earn a certificate that is highly valued by employers and significantly enhances your professional profile and career prospects.' },
];

const values = [
  // REMOVED `color` property as it is no longer needed
  { icon: Star, title: 'Excellence in Education', description: 'We strive for the highest quality in all our programs, curriculum, and teaching methodologies, fostering superior learning outcomes.' },
  { icon: Users, title: 'Student-Centered Approach', description: 'Our focus is on empowering each student with personalized support, flexible learning paths, and an environment conducive to individual growth.' },
  { icon: Gavel, title: 'Integrity and Ethics', description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions and operations.' },
  { icon: Lightbulb, title: 'Innovation & Industry Relevance', description: 'We constantly adapt our programs to align with emerging industry trends, ensuring our students gain the most current and valuable skills.' },
  { icon: RefreshCw, title: 'Commitment to Continuous Improvement', description: 'We are dedicated to ongoing evaluation and enhancement of our services, striving for excellence in every aspect of our training.' },
];

const contactDetails = [
    { location: 'Dubai, UAE', icon: MapPin, phones: ['+971 58 856 1969', '+971 50 855 7323'] },
    { location: 'Bangalore, India', icon: MapPin, phones: ['+91 95140 19936', '+91 86104 55389'] }
];
const generalEmail = 'info@nsarainstitute.com';
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }; // Adjusted stagger for new layout
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } } };

export default function AboutPageClient() {
  return (
    <div className="pt-20">
      <section className="relative isolate px-6 pt-20 lg:px-8 min-h-[70vh] flex items-center">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary/50 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-4xl py-24 sm:py-32">
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-4 py-2 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary/20 bg-muted/50 backdrop-blur-sm transition-all duration-200">
                Learn about our journey to excellence!{' '}
                <Link href="#mission-vision" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                  <span className="absolute inset-0" /> Our Story <ChevronRight className="inline h-4 w-4" />
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Welcome to <span className="text-primary block lg:inline-block">N.SARA Training Institute</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-3xl mx-auto">
              Your trusted destination for career-focused training programs. We are dedicated to empowering students and professionals with the skills needed to succeed.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-col sm:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 w-full sm:w-auto shadow-lg">
                <Link href="/courses" className="w-full flex items-center justify-center">
                  <BookOpen className="mr-2 h-5 w-5" /> Explore Our Programs
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto mt-4 sm:mt-0 border-border hover:bg-muted">
                <Link href="/enquiry" className="w-full flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" /> Enquire Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Why Choose N.SARA Training Institute?</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">We are committed to shaping futures through quality education. Here’s why students and professionals prefer us:</p>
          </div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {whyChooseUs.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6"><feature.icon className="h-8 w-8 text-primary" /></div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="mission-vision" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Our Mission and Vision</h2>
            <p className="mt-4 text-lg text-muted-foreground">The guiding principles that shape our commitment to your success.</p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.div variants={itemVariants}>
              <Card className="p-8 border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center"><BookOpen className="h-6 w-6 mr-3" /> Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">To empower individuals with the knowledge and skills needed to succeed in the global workforce.</p>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="p-8 border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center"><GraduationCap className="h-6 w-6 mr-3" /> Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">To be a leading institution for professional training, known for excellence, innovation, and industry alignment.</p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Values Section (NEW DESIGN) */}
      <section id="values" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide every decision we make.</p>
          </div>

          <motion.div 
            className="max-w-4xl mx-auto flex flex-col gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={value.title} 
                variants={itemVariants}
                className="relative flex items-start gap-6 sm:gap-8"
              >
                <div className="absolute -top-4 -left-4 text-7xl sm:text-8xl font-bold text-primary/10 -z-10 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mt-1">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact-us" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Get In Touch With Us</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">We are here to help you. Reach out to us through email or contact our offices in Dubai and Bangalore directly.</p>
          </div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow duration-300">
                <a href={`mailto:${generalEmail}`} className="flex flex-col sm:flex-row items-center gap-4 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary"><Mail className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" /></div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-foreground">General Enquiries</h3>
                    <p className="text-lg font-medium text-primary group-hover:underline">{generalEmail}</p>
                  </div>
                </a>
              </Card>
            </motion.div>
            {contactDetails.map((contact, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="p-0 mb-4"><CardTitle className="flex items-center text-2xl font-bold text-primary"><contact.icon className="h-6 w-6 mr-3" /> {contact.location}</CardTitle></CardHeader>
                  <CardContent className="p-0 flex flex-col space-y-3">
                    {contact.phones.map((phone, phoneIndex) => (
                      <a key={phoneIndex} href={`tel:${phone.replace(/\s/g, '')}`} className="group flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-5 w-5" /><span className="font-medium">{phone}</span>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Join Our Mission</h2>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-muted-foreground">Whether you're a student ready to transform your career or a company seeking top talent, we invite you to join our community.</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto shadow-lg"><Link href="/courses">Explore Programs</Link></Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-border hover:bg-muted"><Link href="/enquiry">Partner With Us</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}