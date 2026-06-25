"use client";

import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { AcademicSection } from "@/components/sections/academic";
import { ProjectsSection } from "@/components/sections/projects";
import { GithubSection } from "@/components/sections/github";
import { ContactSection } from "@/components/sections/contact";
import Navbar from "@/components/layout/navbar";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <TooltipProvider delayDuration={0}>
        <div
          className={cn(
            "min-h-screen bg-background font-sans antialiased max-w-2xl xl:max-w-3xl mx-auto py-12 sm:py-24 px-6"
          )}
        >
          <main className="flex flex-col min-h-[100dvh]">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <AcademicSection />
            <ProjectsSection />
            <GithubSection />
            <ContactSection />
          </main>
          <Navbar />
          <ScrollToTop />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}