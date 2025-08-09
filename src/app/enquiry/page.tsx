import { EnquiryForm } from '../../components/EnquiryForm';
import { Button } from '../../components/ui/button';
import { Mail, Phone, MapPin, Users, Award, Headphones, Clock, GraduationCap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Enquiry | InstitutePro",
  description: "Have questions or ready to start? Contact InstitutePro. Fill out our enquiry form, and our team will get back to you shortly.",
};

// --- MODIFIED: The 'Call Us' item now links to WhatsApp ---
const contactDetails = [
  { 
    icon: Mail, 
    title: "Email Us",
    text: "admissions@institutepro.com", 
    href: "mailto:admissions@institutepro.com",
    description: "Get detailed responses within 24 hours"
  },
  { 
    icon: Phone, // Phone icon is still suitable for WhatsApp
    title: "Chat on WhatsApp", // Updated title for clarity
    text: "+91 90257 82294", // Display text remains the same
    href: "https://wa.me/9025782294", // This link opens WhatsApp
    description: "Get instant answers. Mon-Fri, 9AM-6PM EST"
  },
  { 
    icon: MapPin, 
    title: "Visit Us",
    text: "123 Education Lane, Learning City, USA", 
    href: "#",
    description: "Schedule an in-person consultation"
  },
];

const benefits = [
  {
    icon: Users,
    title: "Personalized Guidance",
    description: "Get tailored course recommendations based on your career goals and current skill level."
  },
  {
    icon: Award,
    title: "Scholarship Opportunities",
    description: "Learn about flexible financing options and available scholarships to make learning affordable."
  },
  {
    icon: Headphones,
    title: "Expert Counseling",
    description: "Connect with industry experts who understand your field and can guide your learning journey."
  },
  {
    icon: Clock,
    title: "Career Planning Session",
    description: "Receive a complimentary career planning session to map out your professional development path."
  },
];



export default function EnquiryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-4 rounded-2xl shadow-lg">
                <GraduationCap className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Your Career?
              </span>
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Take the first step towards your professional growth. Our expert advisors are here to guide you to the perfect program that matches your goals and ambitions.
            </p>

          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Left Content - 3 columns on xl screens */}
            <div className="xl:col-span-3 space-y-16">
              
              {/* Contact Information */}
              <div>
                <div className="text-center xl:text-left mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                    Get In Touch
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Choose the way that works best for you to connect with our team.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-6">
                  {contactDetails.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.href} 
                      className="group p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                      // Add target="_blank" for external links like WhatsApp
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-base text-foreground mt-1 font-medium">
                            {item.text}
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <div className="text-center xl:text-left mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                    Why Connect With Us?
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Our dedicated team is committed to your success every step of the way.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                          <benefit.icon className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form - 2 columns on xl screens */}
            <div className="xl:col-span-2">
              <div className="sticky top-24">
                <EnquiryForm />
                
                {/* Additional CTA */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">
                      Prefer to talk directly?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Book a free 15-minute consultation call with our advisors.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Schedule a Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

  
    </div>
  );
}