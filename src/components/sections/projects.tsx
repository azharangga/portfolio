"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/cards/project-card";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "web" | "api" | "ui/ux" | "machine-learning">("all");
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 4;

  const filteredProjects = DATA.projects.filter((project) => {
    if (!project.active) return false;
    if (filter === "all") return true;
    return project.category === filter;
  });

  const isExpandable = filteredProjects.length > INITIAL_COUNT;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);

  const PROJECTS_DELAY = BLUR_FADE_DELAY * 13;

  return (
    <section id="projects" className="pt-6">
      <div className="space-y-8 w-full">
        <BlurFade delay={PROJECTS_DELAY}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground text-sm/relaxed xl:text-base/relaxed">
                A showcase of my projects in Web Development, UI/UX Design, and Machine Learning.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="flex justify-center">
          <BlurFade delay={PROJECTS_DELAY + 0.05}>
            <div className="flex gap-1 bg-muted/40 p-1 rounded-full border">
              {[
                { value: "all", label: "All" },
                { value: "web", label: "Web" },
                { value: "ui/ux", label: "UI/UX" },
                { value: "machine-learning", label: "ML" },
              ].map((tab) => {
                const active = filter === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => {
                      setFilter(tab.value as any);
                      setShowAll(false);
                    }}
                    className={
                      "px-3 py-1 text-xs sm:text-sm rounded-full transition-all duration-200 " +
                      (active
                        ? "bg-foreground text-background shadow-sm scale-[1.03]"
                        : "text-muted-foreground hover:bg-muted scale-[0.98]")
                    }
                  >
                    {tab.label}
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
              <p className="text-sm font-medium text-foreground">No projects available</p>
              <p className="text-xs text-muted-foreground mt-1">
                This category doesn’t have any projects yet.
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
                      aria-label={showAll ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
                    >
                      <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                      <span className="overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 group-hover:pr-2">
                        {showAll ? "Lebih Sedikit" : "Lebih Banyak"}
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