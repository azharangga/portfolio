"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, User, Layers, Menu, X, Languages, Check, Clock,
  Tag, FolderGit2, Globe, Code, FileText, FileCode, CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import Markdown from "react-markdown";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { 
  PROJECT_DETAILS_EN, 
  PROJECT_DETAILS_ID, 
  getProjectDetailFallback, 
  getIcon,
  ProjectDetail 
} from "@/data/project-details";
import { Icons } from "@/components/icons";
import { slugify } from "@/lib/slugify";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { PrototypeDialog } from "@/components/modals/prototype-dialog";
import { NotebookDialog } from "@/components/modals/notebook-dialog";
import { ProjectGalleryModal } from "@/components/modals/project-gallery-modal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { lang, setLang, resumeData } = useLanguage();

  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const [avatarErrors, setAvatarErrors] = useState<Record<string, boolean>>({});
  const [avatarLoading, setAvatarLoading] = useState<Record<string, boolean>>({});
  const [galleryLoading, setGalleryLoading] = useState<Record<number, boolean>>({});
  const [galleryErrors, setGalleryErrors] = useState<Record<number, boolean>>({});
  const [relatedLoading, setRelatedLoading] = useState<Record<number, boolean>>({});
  const [relatedErrors, setRelatedErrors] = useState<Record<number, boolean>>({});

  // Language Dropdown state
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Load correct project detail data for active project
  const projectList = resumeData.projects;
  const matchingProject = projectList.find(p => p.active && slugify(p.title) === slug);
  
  const isId = lang === "id";
  const detailsDb = isId ? PROJECT_DETAILS_ID : PROJECT_DETAILS_EN;
  
  let detail: ProjectDetail;
  if (matchingProject) {
    if (detailsDb[slug]) {
      detail = detailsDb[slug];
    } else {
      detail = getProjectDetailFallback(
        slug, 
        matchingProject.title, 
        matchingProject.description, 
        matchingProject.technologies,
        matchingProject.category || "web",
        matchingProject.links,
        isId
      );
    }
  } else {
    // Fallback if accessed
    const firstDetail = Object.values(detailsDb)[0];
    detail = detailsDb[slug] || firstDetail;
  }

  // Map category strictly to 1 of 3 canonical categories from the home page: Web Development, Machine Learning, or UI/UX Design
  const rawCat = (matchingProject?.category || detail?.category || "").toLowerCase();
  let displayCategory = "Web Development";
  if (rawCat.includes("ui") || rawCat.includes("ux") || rawCat.includes("design")) {
    displayCategory = "UI/UX Design";
  } else if (rawCat.includes("machine") || rawCat.includes("learning") || rawCat.includes("ml")) {
    displayCategory = "Machine Learning";
  }

  // Related active projects (3 items at bottom)
  const relatedProjects = projectList
    .filter(p => p.active && slugify(p.title) !== slug)
    .slice(0, 3);

  // Next / Previous active projects navigation
  const activeProjects = projectList.filter(p => p.active);
  const currentIndex = activeProjects.findIndex(p => slugify(p.title) === slug);
  const prevProject = currentIndex > 0 ? activeProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < activeProjects.length - 1 ? activeProjects[currentIndex + 1] : null;

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 6 specific requested sections
  const sections = [
    { id: "overview", label: isId ? "Ringkasan" : "Overview" },
    { id: "problem", label: isId ? "Latar Belakang Masalah" : "Problem Background" },
    { id: "solution", label: isId ? "Pendekatan Solusi" : "Solution Approach" },
    { id: "techstack", label: "Tech Stack" },
    { id: "features", label: isId ? "Fitur Utama" : "Key Features" },
    ...(detail.contributors && detail.contributors.length > 0 ? [{ id: "team", label: isId ? "Tim Proyek" : "Project Team" }] : []),
    { id: "gallery", label: isId ? "Galeri Proyek" : "Project Gallery" }
  ];

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Helper to render text strictly as bullet points without paragraphs
  const renderAsBulletPoints = (text: string) => {
    if (!text) return null;
    const rawLines = text.split(/\n+/);
    const items: string[] = [];

    rawLines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;
      if (trimmed.startsWith("###") || trimmed.startsWith("##")) return; // Skip headers

      if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("• ")) {
        items.push(trimmed.replace(/^[-*•]\s*/, ""));
      } else {
        // Split paragraph into distinct sentence bullets
        const sentences = trimmed.split(/(?<=\.)\s+/);
        sentences.forEach((s) => {
          const cleanSentence = s.trim().replace(/^[-*•]\s*/, "");
          if (cleanSentence.length > 5) {
            items.push(cleanSentence);
          }
        });
      }
    });

    if (items.length === 0) return null;

    return (
      <ul className="space-y-2.5 list-disc pl-5 text-sm text-muted-foreground leading-relaxed">
        {items.map((item, idx) => (
          <li key={idx} className="pl-1">
            <Markdown components={{ p: ({ children }) => <span>{children}</span> }}>
              {item}
            </Markdown>
          </li>
        ))}
      </ul>
    );
  };

  const galleryImages = detail.gallery && detail.gallery.length > 0 
    ? detail.gallery 
    : [{ image: detail.coverImage, title: detail.title, caption: detail.tagline }];

  // Tech stack items: prioritize home page project technologies if matchingProject exists
  const homeTechs = matchingProject?.technologies;
  const allTechItems = homeTechs && homeTechs.length > 0
    ? homeTechs.map(t => ({ name: t, iconName: t }))
    : detail.techStack 
      ? detail.techStack.flatMap(group => group.items)
      : [];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background pb-24">
      {/* Scroll indicator bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-foreground z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Header Navbar matching main page styling & animations */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="size-4" />
            {isId ? "Kembali ke Proyek" : "Back to Projects"}
          </Link>

          <div className="flex items-center gap-3">
            {/* Animated Language Dropdown matching home page navbar */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 border rounded-lg hover:bg-muted/40 text-xs font-semibold transition-colors cursor-pointer bg-background"
                aria-label="Toggle language"
              >
                <Languages className="size-3.5 text-foreground/80" />
                <span>{lang === "en" ? "EN" : "ID"}</span>
              </button>
              
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 bg-background border rounded-lg shadow-xl p-1 z-50 flex flex-col gap-1 min-w-[160px]"
                  >
                    <button
                      onClick={() => {
                        setLang("en");
                        setLangDropdownOpen(false);
                      }}
                      className={cn(
                        "flex items-center justify-between px-3 py-1.5 text-xs rounded-md font-medium transition-colors w-full text-left cursor-pointer whitespace-nowrap gap-3",
                        lang === "en" ? "bg-foreground text-background" : "hover:bg-muted text-foreground"
                      )}
                    >
                      <span>English</span>
                      {lang === "en" && <Check className="size-3 flex-shrink-0" />}
                    </button>
                    <button
                      onClick={() => {
                        setLang("id");
                        setLangDropdownOpen(false);
                      }}
                      className={cn(
                        "flex items-center justify-between px-3 py-1.5 text-xs rounded-md font-medium transition-colors w-full text-left cursor-pointer whitespace-nowrap gap-3",
                        lang === "id" ? "bg-foreground text-background" : "hover:bg-muted text-foreground"
                      )}
                    >
                      <span>Bahasa Indonesia</span>
                      {lang === "id" && <Check className="size-3 flex-shrink-0" />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main theme toggle matching home page */}
            <ModeToggle />
            
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 hover:bg-muted rounded-lg transition-colors border"
              aria-label="Toggle navigation menu"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-background border-l p-6 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-semibold uppercase tracking-wider">{isId ? "Navigasi Proyek" : "Project Navigation"}</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 hover:bg-muted rounded-full">
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors font-medium ${
                      activeSection === sec.id 
                        ? "bg-foreground text-background" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="max-w-[1200px] mx-auto px-6 pt-8 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        
        {/* SIDEBAR NAVIGATION (Desktop) */}
        <aside className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto pr-4">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-2">
              {isId ? "Navigasi Proyek" : "Project Navigation"}
            </p>
            <div className="h-[1px] bg-border w-full mb-4" />
          </div>
          <nav className="space-y-1.5">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`relative w-full text-left flex items-center py-2 px-3.5 text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                  activeSection === sec.id
                    ? "bg-muted font-bold text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {activeSection === sec.id && (
                  <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-4 bg-foreground rounded-full transition-all" />
                )}
                <span className={activeSection === sec.id ? "pl-1.5" : ""}>
                  {sec.label}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* MAIN EDITORIAL CONTENT */}
        <article className="space-y-10 min-w-0">
          
          {/* HEADER SECTION (Title, Tagline, Role, Duration, Project Type, Category, Status) */}
          <section className="space-y-6 border-b pb-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">{detail.title}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">{detail.tagline}</p>
            </div>

            {/* Meta Info Bar: Role, Project Type, Category, Duration (Far Right) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 border rounded-xl bg-muted/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted border flex-shrink-0">
                  <User className="size-4 text-foreground/80" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground/70 tracking-wider block">{isId ? "Peran" : "Role"}</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-xs font-semibold text-foreground truncate cursor-default">{detail.role}</p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">{detail.role}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted border flex-shrink-0">
                  <FolderGit2 className="size-4 text-foreground/80" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground/70 tracking-wider block">{isId ? "Tipe Proyek" : "Project Type"}</span>
                  <p className="text-xs font-semibold text-foreground truncate">{detail.type}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted border flex-shrink-0">
                  <Tag className="size-4 text-foreground/80" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground/70 tracking-wider block">{isId ? "Kategori" : "Category"}</span>
                  <p className="text-xs font-semibold text-foreground truncate">{displayCategory}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted border flex-shrink-0">
                  <Clock className="size-4 text-foreground/80" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground/70 tracking-wider block">{isId ? "Durasi" : "Duration"}</span>
                  <p className="text-xs font-semibold text-foreground truncate">{detail.duration || (isId ? "1 Bulan" : "1 Month")}</p>
                </div>
              </div>
            </div>

            {/* Action Links (Sourced from project-details dataset) */}
            {(() => {
              // Build link items array from detail.links (project-details-id.ts / project-details-en.ts)
              const detailLinksList = [
                ...(detail.links?.website ? [{ type: "Website", href: detail.links.website, icon: <Icons.globe className="size-3.5" /> }] : []),
                ...(detail.links?.source ? [{ type: "Source", href: detail.links.source, icon: <Icons.github className="size-3.5" /> }] : []),
                ...(detail.links?.prototype ? [{ type: "Prototype", href: detail.links.prototype, icon: <Icons.figma className="size-3.5" /> }] : []),
                ...(detail.links?.notebook ? [{ type: "Notebook", href: detail.links.notebook, icon: <Icons.doc className="size-3.5" /> }] : []),
                ...(detail.links?.apiDocs ? [{ type: "API Docs", href: detail.links.apiDocs, icon: <Icons.doc className="size-3.5" /> }] : []),
                ...(detail.links?.figma ? [{ type: "Design", href: detail.links.figma, icon: <Icons.figma className="size-3.5" /> }] : []),
                ...(detail.links?.model ? [{ type: "Model", href: detail.links.model, icon: <FolderGit2 className="size-3.5" /> }] : []),
              ];

              // Primary authority: detail.links. Fallback: matchingProject.links from resumeData
              const projectLinks = detailLinksList.length > 0 
                ? detailLinksList 
                : (matchingProject?.links || []);

              if (!projectLinks || projectLinks.length === 0) return null;

              // Helper for English button labels
              const getLinkLabel = (type: string) => {
                const typeLower = type.toLowerCase();
                if (typeLower.includes("website")) return "Visit Website";
                if (typeLower.includes("source")) return "Source Code";
                if (typeLower.includes("prototype")) return "Figma Prototype";
                if (typeLower.includes("notebook")) return "Training Notebook";
                if (typeLower.includes("api") || typeLower.includes("doc")) return "API Docs";
                if (typeLower.includes("design") || typeLower.includes("figma")) return "Figma Design";
                if (typeLower.includes("model")) return "Hugging Face Model";
                return type;
              };

              return (
                <div className="flex flex-wrap gap-2 pt-1">
                  {projectLinks.map((linkItem: any, idx: number) => {
                    const isDisabled = !linkItem.href && !linkItem.notebooks;
                    const label = getLinkLabel(linkItem.type);
                    const isPrimary = idx === 0 && !isDisabled;

                    // Cloned icon with exact size-3.5 for detail page
                    const iconElement = React.isValidElement(linkItem.icon)
                      ? React.cloneElement(linkItem.icon as React.ReactElement<any>, { className: "size-3.5" })
                      : <Globe className="size-3.5" />;

                    // Disabled State Button with Toast
                    if (isDisabled) {
                      return (
                        <button
                          key={idx}
                          onClick={() => toast.error(`Resource "${linkItem.type}" is private and cannot be accessed.`)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border opacity-40 cursor-not-allowed bg-muted/20 text-muted-foreground"
                        >
                          {iconElement}
                          <span>{label}</span>
                        </button>
                      );
                    }

                    // Prototype Dialog
                    if (linkItem.type === "Prototype" && linkItem.href) {
                      return (
                        <PrototypeDialog
                          key={idx}
                          href={linkItem.href}
                          label={label}
                          icon={iconElement}
                        />
                      );
                    }

                    // Notebook Dialog
                    if (linkItem.type === "Notebook") {
                      return (
                        <NotebookDialog
                          key={idx}
                          title={detail.title}
                          description={detail.tagline}
                          githubUrl={linkItem.href}
                          notebooks={linkItem.notebooks}
                          trigger={
                            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border hover:bg-muted/40 transition-all cursor-pointer">
                              {iconElement}
                              <span>{label}</span>
                            </button>
                          }
                        />
                      );
                    }

                    // Standard Link Button
                    return (
                      <Link
                        key={idx}
                        href={linkItem.href || "#"}
                        target="_blank"
                        className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all",
                          isPrimary
                            ? "bg-foreground text-background hover:opacity-90 shadow-sm"
                            : "border hover:bg-muted/40 text-foreground"
                        )}
                      >
                        {iconElement}
                        <span>{label}</span>
                      </Link>
                    );
                  })}
                </div>
              );
            })()}
          </section>

          {/* DISCLAIMER SECTION (Optional, placed right before Overview) */}
          {detail.disclaimer && (
            <section id="disclaimer" className="space-y-3 scroll-mt-24">
              <div className="p-4 border rounded-xl bg-amber-500/5 border-amber-500/20 text-foreground space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Disclaimer
                </h3>
                <div className="prose dark:prose-invert max-w-none text-xs text-muted-foreground leading-relaxed">
                  <Markdown>{detail.disclaimer}</Markdown>
                </div>
              </div>
            </section>
          )}

          {/* 1. OVERVIEW */}
          <section id="overview" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Ringkasan" : "Overview"}
            </h2>
            <div className="prose dark:prose-invert max-w-none text-sm text-muted-foreground leading-relaxed">
              <Markdown>{detail.overview}</Markdown>
            </div>
          </section>

          {/* 2. PROBLEM BACKGROUND (Bullet points without paragraphs) */}
          <section id="problem" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Latar Belakang Masalah" : "Problem Background"}
            </h2>
            {renderAsBulletPoints(detail.problemBackground)}
          </section>

          {/* 3. SOLUTION APPROACH (Bullet points without paragraphs) */}
          <section id="solution" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Pendekatan Solusi" : "Solution Approach"}
            </h2>
            {renderAsBulletPoints(
              `${detail.solutionApproach.design || ""}\n${detail.solutionApproach.techExplanation || ""}`
            )}

            {detail.solutionApproach.workflow && detail.solutionApproach.workflow.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  {isId ? "Alur Kerja Sistem" : "System Workflow"}
                </h3>
                <ol className="space-y-3">
                  {detail.solutionApproach.workflow.map((flow, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 flex size-6 items-center justify-center rounded-full bg-muted border text-xs font-bold text-foreground">
                        {index + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-0.5">{flow}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </section>

          {/* 4. TECH STACK (Icon + Technology Name) */}
          <section id="techstack" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {allTechItems.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2.5 px-3.5 py-2 border rounded-xl bg-muted/10 hover:bg-muted/20 transition-colors"
                >
                  <span className="flex-shrink-0">
                    {(tech.iconName && getIcon(tech.iconName)) || getIcon(tech.name) || <Layers className="size-4 text-foreground/80" />}
                  </span>
                  <span className="text-xs font-semibold text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. KEY FEATURES */}
          <section id="features" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Fitur Utama" : "Key Features"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detail.featureDocs.map((feat, index) => (
                <div 
                  key={index} 
                  className="group border rounded-xl p-5 bg-card hover:bg-muted/10 space-y-2.5 hover:border-foreground/30 transition-all duration-300 shadow-sm relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-3 border-b pb-2.5">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{feat.title}</h3>
                    <span className="text-[10px] font-bold text-muted-foreground/70 px-2 py-0.5 rounded border bg-muted/30 flex-shrink-0">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">{feat.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECT TEAM SECTION */}
          {detail.contributors && detail.contributors.length > 0 && (
            <section id="team" className="space-y-6 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
                {isId ? "Tim Proyek" : "Project Team"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {detail.contributors.map((member, idx) => {
                  const initials = member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)
                    .toUpperCase();

                  const isMemberLoading = avatarLoading[member.name] ?? true;
                  const isMemberError = avatarErrors[member.name] || !member.avatar;

                  return (
                    <div key={idx} className="border rounded-xl p-4 bg-muted/5 flex items-center gap-3.5 hover:border-foreground/20 transition-all">
                      {/* CIRCLE AVATAR */}
                      <div className="relative size-11 rounded-full overflow-hidden flex-shrink-0 bg-primary/10 border border-primary/20 flex items-center justify-center">
                        {!isMemberError ? (
                          <>
                            {isMemberLoading && (
                              <div className="absolute inset-0 premium-shimmer z-10" />
                            )}
                            <Image
                              src={member.avatar!}
                              alt={member.name}
                              fill
                              className={cn(
                                "object-cover transition-opacity duration-300",
                                isMemberLoading ? "opacity-0" : "opacity-100"
                              )}
                              onLoad={() => setAvatarLoading((prev) => ({ ...prev, [member.name]: false }))}
                              onError={() => {
                                setAvatarLoading((prev) => ({ ...prev, [member.name]: false }));
                                setAvatarErrors((prev) => ({ ...prev, [member.name]: true }));
                              }}
                            />
                          </>
                        ) : (
                          <span className="text-xs font-bold text-primary">{initials}</span>
                        )}
                      </div>

                      {/* INFO & BUTTONS */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <h3 className="text-xs font-bold text-foreground truncate">{member.name}</h3>
                        <p className="text-[10px] font-medium text-muted-foreground truncate">{member.role}</p>

                        {/* GITHUB & LINKEDIN BUTTONS */}
                        <div className="flex items-center gap-1.5 pt-1">
                          {member.github && (
                            <Link
                              href={member.github}
                              target="_blank"
                              className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground hover:text-foreground border rounded px-1.5 py-0.5 bg-background hover:bg-muted/40 transition-colors"
                            >
                              <FaGithub className="size-3 text-foreground/80" />
                              <span>GitHub</span>
                            </Link>
                          )}
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              target="_blank"
                              className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground hover:text-foreground border rounded px-1.5 py-0.5 bg-background hover:bg-muted/40 transition-colors"
                            >
                              <FaLinkedin className="size-3 text-[#0A66C2]" />
                              <span>LinkedIn</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 6. PROJECT GALLERY */}
          <section id="gallery" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Galeri Proyek" : "Project Gallery"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((item, idx) => {
                const isImgLoading = galleryLoading[idx] ?? true;
                const isImgError = galleryErrors[idx] || !item.image;

                return (
                  <div 
                    key={idx}
                    className="group border rounded-xl overflow-hidden bg-card hover:border-foreground/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    onClick={() => {
                      if (!isImgError) {
                        setSelectedGalleryIndex(idx);
                        setGalleryModalOpen(true);
                      }
                    }}
                  >
                    <div className="relative w-full overflow-hidden bg-muted/20 flex items-center justify-center">
                      {!isImgError ? (
                        <>
                          {isImgLoading && (
                            <div className="absolute inset-0 min-h-[180px] premium-shimmer z-10" />
                          )}
                          <Image 
                            src={item.image} 
                            alt={item.title || `Gallery screenshot ${idx + 1}`} 
                            width={1200}
                            height={750}
                            className={cn(
                              "w-full h-auto object-contain dark:brightness-[0.95] group-hover:scale-[1.01] transition-all duration-300",
                              isImgLoading ? "opacity-0" : "opacity-100"
                            )}
                            onLoad={() => setGalleryLoading((prev) => ({ ...prev, [idx]: false }))}
                            onError={() => {
                              setGalleryLoading((prev) => ({ ...prev, [idx]: false }));
                              setGalleryErrors((prev) => ({ ...prev, [idx]: true }));
                            }}
                          />
                        </>
                      ) : (
                        <div className="py-12 flex flex-col items-center justify-center gap-2 text-muted-foreground/50">
                          <FolderGit2 className="size-10" />
                          <span className="text-xs">{isId ? "Gambar tidak tersedia" : "Image unavailable"}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-3 space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/70 px-1.5 py-0.5 border rounded-md bg-muted/20">
                        {isId ? `Tampilan ${idx + 1}` : `Screen ${idx + 1}`}
                      </span>
                      <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                      {item.caption && (
                        <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{item.caption}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FULL FEATURED GALLERY SLIDER MODAL */}
            <ProjectGalleryModal
              isOpen={galleryModalOpen}
              onOpenChange={setGalleryModalOpen}
              title={detail.title}
              items={galleryImages}
              initialIndex={selectedGalleryIndex}
            />
          </section>

          <hr className="border-border" />

          {/* NEXT / PREVIOUS ACTIVE PROJECT NAVIGATION */}
          <div className="flex justify-between items-center gap-4 py-4">
            {prevProject ? (
              <Link href={`/projects/${slugify(prevProject.title)}`} className="group flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase text-muted-foreground/60 group-hover:-translate-x-1 transition-transform">
                  &larr; {isId ? "Proyek Sebelumnya" : "Previous Project"}
                </span>
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link href={`/projects/${slugify(nextProject.title)}`} className="group flex flex-col text-right">
                <span className="text-[10px] font-bold uppercase text-muted-foreground/60 group-hover:translate-x-1 transition-transform">
                  {isId ? "Proyek Selanjutnya" : "Next Project"} &rarr;
                </span>
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : <div />}
          </div>

          {/* RELATED CASE STUDIES SECTION */}
          {relatedProjects.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {isId ? "PROYEK LAINNYA" : "OTHER PROJECTS"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProjects.map((p, idx) => {
                  const isRelLoading = relatedLoading[idx] ?? true;
                  const isRelError = relatedErrors[idx] || !p.image;

                  return (
                    <Link 
                      href={`/projects/${slugify(p.title)}`} 
                      key={idx} 
                      className="group border rounded-xl overflow-hidden bg-card hover:border-foreground/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="relative w-full overflow-hidden bg-muted/20 flex items-center justify-center">
                        {!isRelError ? (
                          <>
                            {isRelLoading && (
                              <div className="absolute inset-0 min-h-[140px] premium-shimmer z-10" />
                            )}
                            <Image 
                              src={p.image!} 
                              alt={p.title} 
                              width={600}
                              height={375}
                              className={cn(
                                "w-full h-auto object-contain dark:brightness-[0.95] group-hover:scale-[1.02] transition-all duration-300",
                                isRelLoading ? "opacity-0" : "opacity-100"
                              )} 
                              onLoad={() => setRelatedLoading((prev) => ({ ...prev, [idx]: false }))}
                              onError={() => {
                                setRelatedLoading((prev) => ({ ...prev, [idx]: false }));
                                setRelatedErrors((prev) => ({ ...prev, [idx]: true }));
                              }}
                            />
                          </>
                        ) : (
                          <div className="py-10 flex flex-col items-center justify-center gap-1.5 text-muted-foreground/40">
                            <FolderGit2 className="size-8" />
                            <span className="text-[10px]">No Image</span>
                          </div>
                        )}
                      </div>

                      <div className="p-3 space-y-1">
                        <span className="text-[8px] uppercase font-bold text-muted-foreground/70 px-1.5 py-0.5 border rounded-md bg-muted/20">
                          {p.category.replace(/&/g, "and")}
                        </span>
                        <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{p.title}</h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* CONTACT CTA BANNER */}
          <section className="border rounded-xl p-8 bg-foreground text-background text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{isId ? "Mari Diskusikan Proyek Anda" : "Let's Build Something Together"}</h2>
            <p className="text-xs sm:text-sm text-background/80 max-w-md mx-auto">
              {isId 
                ? "Hubungi saya untuk mendiskusikan peluang kerja sama penuh waktu, konsultasi teknis, atau proyek lepas." 
                : "Reach out if you want to chat about product engineering opportunities, full-time positions, or custom architectural consulting."}
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link href="https://www.linkedin.com/in/azharanggakusuma" target="_blank" className="px-4 py-2 rounded-lg bg-background text-foreground hover:opacity-90 transition-opacity text-xs font-bold">
                {isId ? "Profil LinkedIn" : "LinkedIn Profile"}
              </Link>
              <Link href="mailto:azharanggakusuma01@gmail.com" className="px-4 py-2 rounded-lg border border-background/20 hover:bg-background/10 transition-colors text-xs font-bold">
                {isId ? "Kirim Email" : "Send Email"}
              </Link>
            </div>
          </section>

        </article>
      </main>

      {/* SCROLL TO TOP BUTTON */}
      <ScrollToTop />
    </div>
  );
}
