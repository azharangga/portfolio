"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/cards/project-card";
import { useLanguage } from "@/context/language-context";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const { resumeData, lang } = useLanguage();
  const [filter, setFilter] = useState<"all" | "web" | "api" | "ui/ux" | "machine-learning">("all");
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 4;

  const filteredProjects = resumeData.projects.filter((project) => {
    if (!project.active) return false;
    if (filter === "all") return true;
    return project.category === filter;
  });

  const isExpandable = filteredProjects.length > INITIAL_COUNT;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);

  const PROJECTS_DELAY = BLUR_FADE_DELAY * 13;

  const titleBadge = lang === "en" ? "My Projects" : "Proyek Saya";
  const mainTitle = lang === "en" ? "Check out my latest work" : "Lihat karya terbaru saya";
  const subtitle = lang === "en" 
    ? "A showcase of my projects in Web Development, UI/UX Design, and Machine Learning." 
    : "Galeri proyek saya dalam Web Development, UI/UX Design, dan Machine Learning.";

  const labelAll = lang === "en" ? "All" : "Semua";

  const labelMore = lang === "en" ? "Show More" : "Lebih Banyak";
  const labelLess = lang === "en" ? "Show Less" : "Lebih Sedikit";
  const ariaLabelMore = lang === "en" ? "Show More Projects" : "Tampilkan Lebih Banyak";
  const ariaLabelLess = lang === "en" ? "Show Less Projects" : "Tampilkan Lebih Sedikit";

  const counts = {
    all: resumeData.projects.filter((p) => p.active).length,
    web: resumeData.projects.filter((p) => p.active && p.category === "web").length,
    "ui/ux": resumeData.projects.filter((p) => p.active && p.category === "ui/ux").length,
    "machine-learning": resumeData.projects.filter((p) => p.active && p.category === "machine-learning").length,
  };

  return (
    <section id="projects" className="pt-6">
      <div className="space-y-8 w-full">
        <BlurFade delay={PROJECTS_DELAY}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {titleBadge}
              </div>
              <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                {mainTitle}
              </h2>
              <p className="text-muted-foreground text-sm/relaxed xl:text-base/relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="flex justify-center">
          <BlurFade delay={PROJECTS_DELAY + 0.05}>
            <div className="flex gap-1 bg-muted/40 p-1 rounded-full border relative">
              {[
                { value: "all", label: labelAll },
                { value: "web", label: "Web" },
                { value: "ui/ux", label: "UI/UX" },
                { value: "machine-learning", label: "ML" },
              ].map((tab) => {
                const active = filter === tab.value;
                const count = counts[tab.value as keyof typeof counts] || 0;
                return (
                  <button
                    key={tab.value}
                    onClick={() => {
                      setFilter(tab.value as any);
                      setShowAll(false);
                    }}
                    className={cn(
                      "relative px-3 py-1 text-xs sm:text-sm rounded-full transition-colors duration-300 font-medium select-none outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active
                        ? "text-background"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeProjectTab"
                        className="absolute inset-0 bg-foreground rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {tab.label}
                      <span className={cn(
                        "text-[9px] font-normal transition-colors duration-300",
                        active ? "text-background/80" : "text-muted-foreground/70"
                      )}>
                        ({count})
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </BlurFade>
        </div>

        <div className="min-h-[200px] flex flex-col items-center">
          {filteredProjects.length === 0 ? (
            <div className="mt-12 flex flex-col items-center text-center text-muted-foreground">
              <span className="text-3xl mb-3">📄</span>
              <p className="text-sm font-medium text-foreground">
                {lang === "en" ? "No projects available" : "Tidak ada proyek yang tersedia"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {lang === "en" 
                  ? "This category doesn’t have any projects yet." 
                  : "Kategori ini belum memiliki proyek."}
              </p>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
                {visibleProjects.map((project, id) => (
                  <BlurFade key={project.title + id} delay={PROJECTS_DELAY + id * 0.05}>
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                      openSource={project.openSource}
                      category={project.category}
                    />
                  </BlurFade>
                ))}
              </div>

              {isExpandable && (
                <BlurFade delay={PROJECTS_DELAY + visibleProjects.length * 0.05}>
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="group flex items-center justify-center p-2 rounded-full border bg-muted/40 hover:bg-muted/80 text-foreground transition-all duration-300"
                      aria-label={showAll ? ariaLabelLess : ariaLabelMore}
                    >
                      <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                      <span className="overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 group-hover:pr-2">
                        {showAll ? labelLess : labelMore}
                      </span>
                    </button>
                  </div>
                </BlurFade>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}