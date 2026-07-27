"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Calendar, User, Clock, Cpu, Globe, Code, 
  FileText, FileCode, Layers, Menu, X, ArrowRight, ExternalLink, Languages
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { ModeToggle } from "@/components/layout/mode-toggle";
import Markdown from "react-markdown";
import { 
  PROJECT_DETAILS_EN, 
  PROJECT_DETAILS_ID, 
  getProjectDetailFallback, 
  getIcon,
  ProjectDetail 
} from "@/data/project-details";
import { slugify } from "@/lib/slugify";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { lang, resumeData, toggleLanguage } = useLanguage();

  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Load correct project detail data
  const projectList = resumeData.projects;
  const matchingProject = projectList.find(p => slugify(p.title) === slug);
  
  const isId = lang === "id";
  const detailsDb = isId ? PROJECT_DETAILS_ID : PROJECT_DETAILS_EN;
  
  let detail: ProjectDetail;
  if (matchingProject) {
    if (detailsDb[slug]) {
      detail = detailsDb[slug];
    } else {
      // Generate fallback dynamically
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
    const firstDetail = Object.values(detailsDb)[0];
    detail = detailsDb[slug] || firstDetail;
  }

  // Related Projects logic (3 related projects)
  const relatedProjects = projectList
    .filter(p => p.active && slugify(p.title) !== slug)
    .slice(0, 3);

  // Next / Previous projects for bottom navigation
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

  // 8 standard editorial sections
  const sections = [
    { id: "overview", label: isId ? "Ringkasan" : "Overview" },
    { id: "problem", label: isId ? "Permasalahan" : "Problem Background" },
    { id: "solution", label: isId ? "Solusi" : "Solution Approach" },
    { id: "techstack", label: isId ? "Teknologi" : "Tech Stack" },
    { id: "features", label: isId ? "Implementasi & Fitur" : "Features & Implementation" },
    { id: "results", label: isId ? "Hasil Akhir" : "Final Result & Impact" },
    { id: "gallery", label: isId ? "Galeri Proyek" : "Project Gallery" },
    { id: "lessons", label: isId ? "Pelajaran" : "Lessons Learned" }
  ];

  // Intersection Observer to update active navigation item
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

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background pb-24">
      {/* Page scroll indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-foreground z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="size-4" />
            {isId ? "Kembali" : "Back"}
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1 mr-2">
              <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full border bg-muted/30">
                {detail.category}
              </span>
              <span className="text-xs font-medium text-emerald-500 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                {detail.status}
              </span>
            </div>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2 py-1 border rounded-lg hover:bg-muted/40 text-[10px] font-semibold transition-colors cursor-pointer select-none bg-background"
              title={lang === "en" ? "Switch to Indonesian" : "Switch to English"}
            >
              <Languages className="size-3" />
              <span>{lang === "en" ? "EN" : "ID"}</span>
            </button>

            <ModeToggle />
            
            {/* Mobile TOC trigger */}
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

      {/* Mobile Drawer menu */}
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
                <span className="text-sm font-semibold uppercase tracking-wider">{isId ? "Navigasi Dok" : "Doc Navigation"}</span>
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
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">
              {isId ? "Navigasi Dok" : "Doc Navigation"}
            </p>
            <div className="h-[1px] bg-border w-full mb-4" />
          </div>
          <nav className="space-y-1">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`w-full text-left block py-1.5 px-3 text-xs font-medium rounded-lg transition-all ${
                  activeSection === sec.id
                    ? "bg-muted font-bold text-foreground border-l-2 border-foreground rounded-l-none pl-2.5"
                    : "text-muted-foreground hover:text-foreground hover:pl-4"
                }`}
              >
                {sec.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* MAIN EDITORIAL CONTENT */}
        <article className="space-y-20 min-w-0">
          
          {/* HERO SECTION */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">{detail.title}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-2xl">{detail.tagline}</p>
            </div>

            {/* Quick Metadata Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border rounded-xl bg-muted/10">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-semibold text-muted-foreground/70 flex items-center gap-1">
                  <User className="size-3" /> {isId ? "Peran" : "Role"}
                </span>
                <p className="text-xs font-medium text-foreground">{detail.role}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-semibold text-muted-foreground/70 flex items-center gap-1">
                  <Clock className="size-3" /> {isId ? "Durasi" : "Duration"}
                </span>
                <p className="text-xs font-medium text-foreground">{detail.duration} ({detail.year})</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-semibold text-muted-foreground/70 flex items-center gap-1">
                  <Layers className="size-3" /> {isId ? "Tipe Proyek" : "Project Type"}
                </span>
                <p className="text-xs font-medium text-foreground">{detail.type}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-semibold text-muted-foreground/70 flex items-center gap-1">
                  <Cpu className="size-3" /> {isId ? "Lisensi / Versi" : "License / Version"}
                </span>
                <p className="text-xs font-medium text-foreground">{detail.license} ({detail.version})</p>
              </div>
            </div>

            {/* Actions Links */}
            <div className="flex flex-wrap gap-2">
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
              {detail.links.apiDocs && (
                <Link href={detail.links.apiDocs} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border hover:bg-muted/40 transition-all">
                  <FileText className="size-3.5" />
                  {isId ? "Dokumentasi API" : "API Docs"}
                </Link>
              )}
              {detail.links.figma && (
                <Link href={detail.links.figma} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border hover:bg-muted/40 transition-all">
                  <FileCode className="size-3.5" />
                  Figma Design
                </Link>
              )}
            </div>

            {/* Project Image 16:9 Cover Banner */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border bg-muted">
              {detail.coverImage ? (
                <Image 
                  src={detail.coverImage} 
                  alt={detail.title} 
                  fill 
                  priority
                  className="object-cover object-top hover:scale-[1.01] transition-transform duration-500 dark:brightness-[0.9]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                  No Image Available
                </div>
              )}
            </div>
          </section>

          {/* PROJECT OVERVIEW */}
          <section id="overview" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Ringkasan Proyek" : "Project Overview"}
            </h2>
            <div className="prose dark:prose-invert max-w-none text-sm text-muted-foreground leading-relaxed">
              <Markdown>{detail.overview}</Markdown>
            </div>
          </section>

          {/* PROBLEM BACKGROUND */}
          <section id="problem" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Latar Belakang Masalah" : "Problem Background"}
            </h2>
            <div className="prose dark:prose-invert max-w-none text-sm text-muted-foreground leading-relaxed">
              <Markdown>{detail.problemBackground}</Markdown>
            </div>
          </section>

          {/* SOLUTION APPROACH */}
          <section id="solution" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Pendekatan Solusi" : "Solution Approach"}
            </h2>
            <div className="prose dark:prose-invert max-w-none text-sm text-muted-foreground leading-relaxed space-y-4">
              <Markdown>{detail.solutionApproach.design}</Markdown>
              <Markdown>{detail.solutionApproach.techExplanation}</Markdown>
            </div>

            {/* Workflow steps */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {isId ? "Alur Kerja Sistem" : "System Workflow"}
              </h3>
              <ol className="relative border-l border-border pl-6 space-y-4">
                {detail.solutionApproach.workflow.map((flow, index) => (
                  <li key={index} className="relative">
                    <span className="absolute -left-[30px] top-0 flex size-5 items-center justify-center rounded-full bg-muted border text-[10px] font-bold text-foreground">
                      {index + 1}
                    </span>
                    <p className="text-xs text-muted-foreground">{flow}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* TECHNOLOGY STACK */}
          <section id="techstack" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Teknologi & Alasan Penggunaan" : "Technology Stack & Rationale"}
            </h2>
            <div className="space-y-6">
              {detail.techStack.map((stack, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {stack.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {stack.items.map((tech, tIdx) => (
                      <div key={tIdx} className="border rounded-xl p-4 flex gap-4 bg-muted/5">
                        <div className="flex-shrink-0 mt-0.5">
                          {getIcon(tech.iconName) || <Layers className="size-5" />}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-foreground">{tech.name}</span>
                            {tech.version && (
                              <span className="text-[9px] font-mono text-muted-foreground px-1 border rounded bg-muted/20">
                                {tech.version}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Role: {tech.role}</p>
                          <p className="text-xs text-muted-foreground/80 leading-relaxed">{tech.reason}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FEATURE DOCUMENTATION */}
          <section id="features" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Implementasi & Fitur" : "Features & Implementation"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detail.featureDocs.map((feat, index) => (
                <div key={index} className="border rounded-xl overflow-hidden bg-muted/5 flex flex-col justify-between hover:border-foreground/20 transition-all">
                  <div className="p-5 space-y-3">
                    <h3 className="text-sm font-semibold text-foreground">{feat.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
                    
                    <div className="pt-2 space-y-1">
                      <p className="text-[10px] font-semibold uppercase text-muted-foreground">{isId ? "Masalah Terpecahkan" : "Problem Solved"}</p>
                      <p className="text-xs text-muted-foreground/80">{feat.problemSolved}</p>
                    </div>
                  </div>
                  <div className="bg-muted p-3 border-t">
                    <span className="text-[10px] font-bold text-muted-foreground/80 uppercase">
                      Tech: {feat.techUsed.join(", ")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL RESULT & IMPACT */}
          <section id="results" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Hasil Akhir & Metrik" : "Final Result & Impact"}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-3xl">
              {detail.finalResultImpact.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {detail.finalResultImpact.metrics.map((metric, idx) => (
                <div key={idx} className="border rounded-xl p-4 bg-muted/10 space-y-1 hover:bg-muted/20 transition-colors">
                  <span className="text-[10px] uppercase font-semibold text-muted-foreground">{metric.label}</span>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-[10px] text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECT GALLERY */}
          <section id="gallery" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Galeri Proyek (Tangkapan Layar)" : "Project Gallery (Screenshots)"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detail.gallery.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group border rounded-xl overflow-hidden bg-muted/5 cursor-pointer hover:border-foreground/30 transition-all duration-300"
                  onClick={() => setLightboxImage(item.image)}
                >
                  <div className="relative aspect-[16/10] bg-muted w-full overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover object-top hover:scale-105 transition-transform duration-500 dark:brightness-[0.9]"
                    />
                  </div>
                  <div className="p-4 border-t space-y-1">
                    <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LESSONS LEARNED */}
          <section id="lessons" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight border-b pb-2">
              {isId ? "Pelajaran & Retrospektif" : "Lessons Learned & Retrospective"}
            </h2>
            <div className="grid grid-cols-1 gap-4 text-xs sm:text-sm">
              <div className="border rounded-xl p-5 bg-muted/10 space-y-2">
                <h3 className="font-semibold text-foreground">{isId ? "Evaluasi Keputusan Teknis" : "Technical Pivot & Rationale"}</h3>
                <p className="text-muted-foreground leading-relaxed">{detail.lessonsLearned.technicalPivot}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-xl p-5 bg-muted/5 space-y-2">
                  <h3 className="font-semibold text-foreground">{isId ? "Hal yang Akan Diperbaiki" : "Future Improvements"}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs">{detail.lessonsLearned.improvements}</p>
                </div>
                <div className="border rounded-xl p-5 bg-muted/5 space-y-2">
                  <h3 className="font-semibold text-foreground">{isId ? "Pengembangan Diri" : "Engineering Growth"}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs">{detail.lessonsLearned.growth}</p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-border" />

          {/* NEXT / PREVIOUS PROJECT NAVIGATION */}
          <div className="flex justify-between items-center gap-4 py-6">
            {prevProject ? (
              <Link href={`/projects/${slugify(prevProject.title)}`} className="group flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase text-muted-foreground/60 group-hover:-translate-x-1 transition-transform">
                  &larr; Previous Case Study
                </span>
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link href={`/projects/${slugify(nextProject.title)}`} className="group flex flex-col text-right">
                <span className="text-[10px] font-bold uppercase text-muted-foreground/60 group-hover:translate-x-1 transition-transform">
                  Next Case Study &rarr;
                </span>
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : <div />}
          </div>

          {/* RELATED PROJECTS */}
          {relatedProjects.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {isId ? "Proyek Terkait" : "Related Case Studies"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProjects.map((p, idx) => (
                  <Link href={`/projects/${slugify(p.title)}`} key={idx} className="group border rounded-xl overflow-hidden bg-muted/5 hover:border-foreground/40 hover:shadow-sm transition-all duration-300">
                    <div className="relative aspect-[16/10] bg-muted w-full">
                      {p.image ? (
                        <Image src={p.image} alt={p.title} fill className="object-cover object-top dark:brightness-[0.9]" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-[10px]">No Image</div>
                      )}
                    </div>
                    <div className="p-3 space-y-1">
                      <span className="text-[8px] uppercase font-bold text-muted-foreground px-1 py-0.5 border rounded bg-muted/20">
                        {p.category}
                      </span>
                      <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{p.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CONTACT CTA */}
          <section className="border rounded-xl p-8 bg-foreground text-background text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{isId ? "Mari Diskusikan Proyek Anda" : "Let's Build Something Together"}</h2>
            <p className="text-xs sm:text-sm text-background/80 max-w-md mx-auto">
              {isId 
                ? "Hubungi saya untuk mendiskusikan peluang kerja sama penuh waktu, konsultasi teknis, atau proyek lepas." 
                : "Reach out if you want to chat about product engineering opportunities, full-time positions, or custom architectural consulting."}
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link href="https://www.linkedin.com/in/azharanggakusuma" target="_blank" className="px-4 py-2 rounded-lg bg-background text-foreground hover:opacity-90 transition-opacity text-xs font-bold">
                LinkedIn Profile
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
    </div>
  );
}
