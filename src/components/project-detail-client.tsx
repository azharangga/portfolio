"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, User, Layers, Menu, X, Languages, Check, Clock,
  Tag, FolderGit2, Globe, Code, FileText, FileCode
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
import { slugify } from "@/lib/slugify";
import { cn } from "@/lib/utils";

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { lang, setLang, resumeData } = useLanguage();

  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [avatarErrors, setAvatarErrors] = useState<Record<string, boolean>>({});

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
          
          {/* HEADER SECTION (Title, Tagline, Role, Duration, Project Type, Category) */}
          <section className="space-y-6 border-b pb-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">{detail.title}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">{detail.tagline}</p>
            </div>

            {/* Meta Info Bar: Role, Duration, Project Type, Category */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 border rounded-xl bg-muted/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted border flex-shrink-0">
                  <User className="size-4 text-foreground/80" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground/70 tracking-wider block">{isId ? "Peran" : "Role"}</span>
                  <p className="text-xs font-semibold text-foreground truncate">{detail.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted border flex-shrink-0">
                  <Clock className="size-4 text-foreground/80" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground/70 tracking-wider block">{isId ? "Durasi" : "Duration"}</span>
                  <p className="text-xs font-semibold text-foreground truncate">{detail.duration || (isId ? "1 Bulan" : "1 Month")}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted border flex-shrink-0">
                  <FolderGit2 className="size-4 text-foreground/80" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground/70 tracking-wider block">{isId ? "Tipe Proyek" : "Project Type"}</span>
                  <p className="text-xs font-semibold text-foreground truncate">{detail.type}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted border flex-shrink-0">
                  <Tag className="size-4 text-foreground/80" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground/70 tracking-wider block">{isId ? "Kategori" : "Category"}</span>
                  <p className="text-xs font-semibold text-foreground truncate">{displayCategory}</p>
                </div>
              </div>
            </div>

            {/* Action Links */}
            {detail.links && (detail.links.website || detail.links.source || detail.links.apiDocs || detail.links.figma || detail.links.prototype || detail.links.model || detail.links.notebook) && (
              <div className="flex flex-wrap gap-2 pt-1">
                {detail.links.website && (
                  <Link href={detail.links.website} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-foreground text-background hover:opacity-90 transition-all">
                    <Globe className="size-3.5" />
                    {isId ? "Kunjungi Website" : "Visit Website"}
                  </Link>
                )}
                {detail.links.source && (
                  <Link href={detail.links.source} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border hover:bg-muted/40 transition-all">
                    <Code className="size-3.5" />
                    {isId ? "Kode Sumber" : "Source Code"}
                  </Link>
                )}
                {detail.links.model && (
                  <Link href={detail.links.model} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border hover:bg-muted/40 transition-all">
                    <FolderGit2 className="size-3.5" />
                    {isId ? "Model Hugging Face" : "Hugging Face Model"}
                  </Link>
                )}
                {detail.links.notebook && (
                  <Link href={detail.links.notebook} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border hover:bg-muted/40 transition-all">
                    <FileCode className="size-3.5" />
                    {isId ? "Notebook Pelatihan" : "Training Notebook"}
                  </Link>
                )}
                {detail.links.apiDocs && (
                  <Link href={detail.links.apiDocs} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border hover:bg-muted/40 transition-all">
                    <FileText className="size-3.5" />
                    {isId ? "Dokumentasi API" : "API Docs"}
                  </Link>
                )}
                {detail.links.figma && (
                  <Link href={detail.links.figma} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border hover:bg-muted/40 transition-all">
                    <FileCode className="size-3.5" />
                    {isId ? "Desain Figma" : "Figma Design"}
                  </Link>
                )}
                {detail.links.prototype && (
                  <Link href={detail.links.prototype} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border hover:bg-muted/40 transition-all">
                    <FileCode className="size-3.5" />
                    {isId ? "Purwarupa Figma" : "Figma Prototype"}
                  </Link>
                )}
              </div>
            )}
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
                <div key={index} className="border rounded-xl p-5 bg-muted/5 space-y-2 hover:border-foreground/20 transition-all">
                  <h3 className="text-sm font-bold text-foreground">{feat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
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

                  return (
                    <div key={idx} className="border rounded-xl p-4 bg-muted/5 flex items-center gap-3.5 hover:border-foreground/20 transition-all">
                      {/* CIRCLE AVATAR */}
                      <div className="relative size-11 rounded-full overflow-hidden flex-shrink-0 bg-primary/10 border border-primary/20 flex items-center justify-center">
                        {member.avatar && !avatarErrors[member.name] ? (
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            fill
                            className="object-cover"
                            onError={() => setAvatarErrors((prev) => ({ ...prev, [member.name]: true }))}
                          />
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

          {/* 6. PROJECT GALLERY (2 Images per Row Grid, Full fit without cropping, with Screen Name Box) */}
          <section id="gallery" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Galeri Proyek" : "Project Gallery"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group border rounded-xl overflow-hidden bg-muted/5 p-3 space-y-3 cursor-pointer hover:border-foreground/40 transition-all duration-300 flex flex-col justify-between"
                  onClick={() => setLightboxImage(item.image)}
                >
                  <div className="relative w-full aspect-[16/10] bg-muted/40 rounded-lg overflow-hidden border flex items-center justify-center">
                    <Image 
                      src={item.image} 
                      alt={item.title || `Gallery screenshot ${idx + 1}`} 
                      fill 
                      className="object-contain hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  <div className="pt-1 px-1 space-y-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/70 border px-1.5 py-0.5 rounded bg-muted/20">
                      {isId ? `Tampilan ${idx + 1}` : `Screen ${idx + 1}`}
                    </span>
                    <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    {item.caption && (
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{item.caption}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
                {relatedProjects.map((p, idx) => (
                  <Link href={`/projects/${slugify(p.title)}`} key={idx} className="group border rounded-xl overflow-hidden bg-muted/5 hover:border-foreground/40 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
                    <div className="relative aspect-[16/10] bg-muted/30 w-full overflow-hidden flex items-center justify-center p-1.5">
                      {p.image ? (
                        <Image src={p.image} alt={p.title} fill className="object-contain p-1.5 dark:brightness-[0.95] group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-[10px]">No Image</div>
                      )}
                    </div>
                    <div className="p-3 space-y-1 bg-background/50 border-t">
                      <span className="text-[8px] uppercase font-bold text-muted-foreground px-1.5 py-0.5 border rounded-md bg-muted/20">
                        {p.category.replace(/&/g, "and")}
                      </span>
                      <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{p.title}</h4>
                    </div>
                  </Link>
                ))}
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

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setLightboxImage(null)}
            />
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] aspect-[16/10] w-full border rounded-xl overflow-hidden bg-muted shadow-2xl"
            >
              <Image 
                src={lightboxImage} 
                alt="Zoomed view" 
                fill 
                className="object-contain"
              />
              <button 
                onClick={() => setLightboxImage(null)} 
                className="absolute top-4 right-4 p-2 bg-background/85 border backdrop-blur text-foreground rounded-full hover:bg-background transition-colors"
              >
                <X className="size-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* SCROLL TO TOP BUTTON */}
      <ScrollToTop />
    </div>
  );
}
