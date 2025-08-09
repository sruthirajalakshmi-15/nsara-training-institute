// src/app/layout.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight,
  Code,             // Icons for categories
  Database,
  BrainCircuit,
  Globe,
  FlaskConical,
  HardHat,
  Sprout,
  Languages,
  LayoutGrid,
  HeartPulse,
} from 'lucide-react'; // Import all Lucide icons used for categories
import { Button } from '../components/ui/button';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuSeparator,
} from '../components/ui/dropdown-menu';
import { cn } from '../lib/utils';
import { Inter } from 'next/font/google';
import './globals.css';
import { allCourseCategories } from '@/lib/course-data'; // <--- IMPORT CENTRALIZED DATA
import { Award } from 'lucide-react'; // Import Award icon for footer

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

// Updated navigation links with new order
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Why Choose Us", href: "/#why-choose-us" },
  { name: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});
  const [openCourseGroups, setOpenCourseGroups] = useState<{ [key: string]: boolean }>({});
  
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  const handleSectionNavigation = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // Check if it's a hash link (section navigation)
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // If we're already on the target page, just scroll to the section
      if (pathname === path || (path === '/' && pathname === '/')) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      } else {
        // Navigate to the page first, then scroll to section
        router.push(href);
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      }
    } else {
      // Regular navigation
      router.push(href);
    }
  };

  const toggleMobileCategory = (categoryName: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const toggleMobileCourseGroup = (courseGroupName: string) => {
    setOpenCourseGroups(prev => ({
      ...prev,
      [courseGroupName]: !prev[courseGroupName]
    }));
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        {/* Floating Header */}
        <header className={cn(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out",
          "w-[95%] max-w-6xl mx-auto",
          scrolled
            ? "bg-card/80 backdrop-blur-xl border border-border shadow-lg rounded-2xl"
            : "bg-transparent"
        )}>
          <nav className="flex items-center justify-between p-4 lg:px-8">
             {/* Enhanced Logo Section with Increased Size */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src="/nsara-logo2.png"
                    alt="N.SARA Training Institute Logo"
                    width={250}
                    height={75}
                    className="h-20 w-auto transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold tracking-tight">
                      <span className="text-primary">N.</span>
                      <span className="text-foreground">SARA</span>
                    </span>
                    <span className="text-base font-medium text-foreground">TRAINING</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      KHDA-Certified
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation with Updated Order */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home Link */}
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>

              {/* About Us Link */}
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                About Us
              </Link>

              {/* Courses Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 outline-none">
                  Courses
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 p-2">
                  {allCourseCategories.map((category, index) => ( // Using `allCourseCategories` from course-data.ts
                    <div key={category.name}>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="flex items-center">
                          {category.icon && <category.icon className="mr-2 h-4 w-4" />} {/* Using Lucide icon */}
                          {category.name}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="w-64">
                          {category.courses.map((courseGroup) => (
                            <DropdownMenuSub key={courseGroup.name}>
                              <DropdownMenuSubTrigger className="font-medium">
                                {courseGroup.name}
                              </DropdownMenuSubTrigger>
                              <DropdownMenuSubContent className="w-56">
                                {courseGroup.subcourses.map((subcourse) => (
                                  <DropdownMenuItem key={subcourse.name} className="cursor-pointer">
                                    <Link href={`/courses/${subcourse.slug}`} className="w-full" onClick={() => setMobileMenuOpen(false)}>
                                      {subcourse.name}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      {index < allCourseCategories.length - 1 && <DropdownMenuSeparator />}
                    </div>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer font-medium text-primary">
                    <Link href="/courses" className="w-full">View All Courses</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Why Choose Us Link with smooth scrolling */}
              <button
                onClick={(e) => handleSectionNavigation("/#why-choose-us", e)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                Why Choose Us
              </button>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </Link>
            </div>

            <div className="hidden lg:flex items-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link href="/enquiry" className="w-full">Enquiry Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </header>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-card border-l border-border shadow-xl flex flex-col">
             {/* Enhanced Mobile Menu Header with Larger Logo */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <Link href="/" className="flex items-center space-x-3">
                  <Image
                    src="/nsara-logo2.png"
                    alt="N.SARA Training Institute Logo"
                    width={60}
                    height={60}
                    className="h-15 w-auto"
                  />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold">
                      <span className="text-primary">N.</span>SARA
                    </span>
                    <div className="flex items-center space-x-1">
                      <Award className="h-3 w-3 text-primary" />
                      <span className="text-xs font-semibold text-primary">KHDA-Certified</span>
                    </div>
                  </div>
                </Link>
                <button
                  type="button"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Scrollable Menu Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="px-6 py-4">
                  <div className="space-y-2">
                    {/* Home Link */}
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    >
                      Home
                    </Link>

                    {/* About Us Link */}
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    >
                      About Us
                    </Link>

                    {/* Mobile Courses Section */}
                    <div className="space-y-2">
                      <button
                        onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                      >
                        <span>Courses</span>
                        <ChevronRight className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          mobileCoursesOpen && "rotate-90"
                        )} />
                      </button>

                      {mobileCoursesOpen && (
                        <div className="pl-4 space-y-2">
                          {allCourseCategories.map((category) => ( // Using `allCourseCategories`
                            <div key={category.name} className="space-y-2">
                              <button
                                onClick={() => toggleMobileCategory(category.name)}
                                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                              >
                                <span className="flex items-center">
                                  {category.icon && <category.icon className="mr-2 h-4 w-4" />}
                                  {category.name}
                                </span>
                                <ChevronRight className={cn(
                                  "h-3 w-3 transition-transform duration-200",
                                  openCategories[category.name] && "rotate-90"
                                )} />
                              </button>

                              {openCategories[category.name] && (
                                <div className="pl-6 space-y-1">
                                  {category.courses.map((courseGroup) => (
                                    <div key={courseGroup.name} className="space-y-1">
                                      <button
                                        onClick={() => toggleMobileCourseGroup(courseGroup.name)}
                                        className="flex items-center justify-between w-full px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wide hover:bg-muted rounded-md"
                                      >
                                        {courseGroup.name}
                                        <ChevronRight className={cn(
                                          "h-3 w-3 transition-transform duration-200",
                                          openCourseGroups[courseGroup.name] && "rotate-90"
                                        )} />
                                      </button>
                                      {openCourseGroups[courseGroup.name] && (
                                        <div className="pl-6 space-y-1">
                                          {courseGroup.subcourses.map((subcourse) => (
                                            <Link
                                              key={subcourse.name}
                                              href={`/courses/${subcourse.slug}`}
                                              onClick={() => setMobileMenuOpen(false)}
                                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                                            >
                                              {subcourse.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                          <Link
                            href="/courses"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted rounded-lg transition-colors"
                          >
                            View All Courses
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Why Choose Us Link with smooth scrolling for mobile */}
                    <button
                      onClick={(e) => handleSectionNavigation("/#why-choose-us", e)}
                      className="block w-full text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    >
                      Why Choose Us
                    </button>

                    {/* Contact Link */}
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-border">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/enquiry" className="w-full">Enquiry Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Enhanced Footer */}
        <footer className="bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-2">
                 <div className="flex items-center space-x-3 mb-3">
                  <Image
                    src="/nsara-logo2.png"
                    alt="N.SARA Training Institute Logo"
                    width={80}
                    height={80}
                    className="h-25 w-auto"
                  />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">
                      <span className="text-primary">N.</span>SARA
                    </span>
                    <div className="flex items-center space-x-1 mt-1">
                      <Award className="h-3 w-3 text-primary" />
                      <span className="text-xs font-semibold text-primary">KHDA-Certified</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 max-w-md">
                  N.SARA Training Institute is a premier KHDA-approved and ISO 9001:2005 certified institution, dedicated to empowering students and professionals through world-class education and skill development.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                  <li><Link href="/courses" className="hover:text-primary transition-colors">All Courses</Link></li>
                  <li>
                    <button
                      onClick={(e) => handleSectionNavigation("/#why-choose-us", e)}
                      className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer p-0"
                    >
                      Why Choose Us
                    </button>
                  </li>
                  <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                  <li><Link href="/enquiry" className="hover:text-primary transition-colors">Enquiry Now</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Support & Contact</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                  <li><a href="mailto:admissions@nsara.com" className="hover:text-primary transition-colors">admissions@nsara.com</a></li>
                  <li><a href="tel:+971588561969" className="hover:text-primary transition-colors">+971 58 856 1969</a></li>
                  <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Our Programs</h4>
                <ul className="space-y-3 text-muted-foreground">
                  {allCourseCategories.map(category => (
                    <li key={category.slug}>
                      <Link href={`/courses#${category.slug}`} className="hover:text-primary transition-colors">
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} N.SARA Training Institute. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-sm text-muted-foreground">Innovative Education for a Future-Ready Generation</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}