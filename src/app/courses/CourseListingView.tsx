// src/app/courses/CourseListingView.tsx
"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ChevronRight, Clock, Trophy, Search, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { allCourseCategories, SubCourseItem } from '@/lib/course-data';

export default function CourseListingView() {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allSubCourses: SubCourseItem[] = useMemo(() => 
    allCourseCategories.flatMap(category =>
      category.courses.flatMap(group => group.subcourses || [])
    ), []);

  const filteredCourses = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return allSubCourses.filter(course => {
      const matchesCategory = !selectedCategorySlug ||
        allCourseCategories.some(cat =>
          cat.slug === selectedCategorySlug &&
          cat.courses.some(group => group.subcourses?.some(sub => sub.slug === course.slug))
        );

      const matchesSearch = lowerCaseSearchTerm === '' ||
        (course.name && course.name.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (course.fullTitle && course.fullTitle.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (course.description && course.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (course.details?.tags && course.details.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategorySlug, searchTerm, allSubCourses]);

  const handleCategoryClick = (slug: string | null) => {
    setSelectedCategorySlug(slug);
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid-zinc-900/[0.05] dark:bg-grid-white/[0.05]"></div>
        <div className="absolute inset-0 -z-20 bg-background"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground !leading-tight">
              Explore Our
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/70 bg-clip-text text-transparent block mt-2">
                World-Class Courses
              </span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
              Crafted by industry experts to provide you with the most in-demand skills. Find your path and start your journey today.
            </p>
          </div>
        </div>
      </section>

      {/* --- UPDATED: Filter bar is now ONLY sticky on desktop (md and up) --- */}
      <section className="py-8 md:sticky top-[110px] bg-background/80 backdrop-blur-lg z-30 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for a course..."
                className="w-full pl-11 pr-4 py-2 rounded-lg bg-background border transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full h-px md:h-6 md:w-px bg-border/80"></div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => handleCategoryClick(null)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  selectedCategorySlug === null 
                    ? "bg-primary text-primary-foreground shadow" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                All Courses
              </button>
              {allCourseCategories.map(category => (
                <button
                  key={category.slug}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                    selectedCategorySlug === category.slug 
                      ? "bg-primary text-primary-foreground shadow" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">No Courses Found</h3>
              <p className="mt-2 text-muted-foreground">Try adjusting your search or filter to find what you&apos;re looking for.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((subcourse) => (
                 <Card 
                    key={subcourse.slug} 
                    className="h-full flex flex-col bg-card/60 backdrop-blur-sm border rounded-2xl overflow-hidden group transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2"
                 >
                    <Link href={`/courses/${subcourse.slug}`} className="h-full flex flex-col p-6">
                        <CardHeader className="p-0">
                           <div className="flex items-start justify-between mb-4">
                              {(() => {
                                 const category = allCourseCategories.find(c => c.courses.some(cg => cg.subcourses.some(s => s.slug === subcourse.slug)));
                                 const Icon = category?.icon || BookOpen;
                                 return (
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                       <Icon className="h-8 w-8" />
                                    </div>
                                 );
                              })()}
                              {subcourse.details?.level && <Badge variant="outline">{subcourse.details.level}</Badge>}
                           </div>
                           <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{subcourse.fullTitle || subcourse.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-grow p-0 pt-4">
                           <p className="text-muted-foreground text-sm mt-2 line-clamp-3 flex-grow">{subcourse.description}</p>
                           <div className="mt-6 border-t pt-4 space-y-3">
                              {subcourse.details?.duration && <div className="flex items-center text-sm text-muted-foreground"><Clock className="h-4 w-4 mr-2 text-primary/80"/>{subcourse.details.duration}</div>}
                              {subcourse.details?.certification && <div className="flex items-center text-sm text-muted-foreground"><Trophy className="h-4 w-4 mr-2 text-primary/80"/>{subcourse.details.certification}</div>}
                           </div>
                           <div className="mt-auto pt-6">
                              <div className="text-primary font-semibold flex items-center transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:underline">
                                 View Details
                                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </div>
                           </div>
                        </CardContent>
                    </Link>
                 </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}