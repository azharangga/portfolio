import React from "react";
import * as SiIcons from "react-icons/si";
import { PROJECT_DETAILS_EN } from "./project-details-en";
import { PROJECT_DETAILS_ID } from "./project-details-id";

export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  coverImage: string;
  coverVideo?: string;
  category: string;
  status: "Completed" | "Ongoing" | "Archived";
  year: string;
  role: string;
  duration: string;
  type: "Personal" | "Team";
  version: string;
  license: string;
  visibility: "Open Source" | "Private";
  lastUpdated: string;
  links: {
    website?: string;
    source?: string;
    apiDocs?: string;
    notebook?: string;
    figma?: string;
    presentation?: string;
    videoDemo?: string;
    downloadDocs?: string;
  };
  overview: string;
  problemBackground: string;
  solutionApproach: {
    design: string;
    techExplanation: string;
    workflow: string[];
  };
  featureDocs: {
    title: string;
    description: string;
    problemSolved: string;
    howItWorks: string;
    techUsed: string[];
    benefit: string;
    image: string;
  }[];
  techStack: {
    category: string;
    items: { name: string; version?: string; reason: string; role: string; iconName: string }[];
  }[];
  finalResultImpact: {
    description: string;
    metrics: { label: string; value: string; description: string }[];
  };
  gallery: {
    image: string;
    title: string;
    caption: string;
  }[];
  lessonsLearned: {
    experience: string;
    technicalPivot: string;
    evaluation: string;
    improvements: string;
    growth: string;
  };
}

export function getIcon(name: string) {
  const IconComponent = (SiIcons as any)[name];
  if (IconComponent) {
    return React.createElement(IconComponent, { className: "size-5 text-foreground/80" });
  }
  return null;
}

// Re-export the translations database
export { PROJECT_DETAILS_EN, PROJECT_DETAILS_ID };

// Generates dynamic detail fallback when the slug does not have custom detailed fields configured
export function getProjectDetailFallback(slug: string, title: string, description: string, tags: readonly string[], category: string, links: any, isId: boolean): ProjectDetail {
  const labelText = isId ? {
    role: "Pengembang Utama",
    duration: "1 Bulan",
    type: "Personal",
    overview: "Gambaran Umum Proyek",
    overviewDesc: "Proyek ini dirancang untuk memberikan solusi perangkat lunak yang intuitif dan responsif dengan performa optimal. Dibuat menggunakan praktik terbaik pemrograman modern untuk memberikan nilai tinggi bagi pengguna.",
    problem: "Latar Belakang Masalah",
    problemDesc: "Banyak solusi yang ada di pasar kurang ramah pengguna, lambat, atau tidak sepenuhnya mendukung alur kerja modern. Proyek ini mengatasi keterbatasan tersebut dengan berfokus pada performa dan pengalaman pengguna.",
    solution: "Pendekatan Solusi",
    solutionDesc: "Kami menggunakan pendekatan modular dan mengadopsi standar arsitektur bersih. Pengembangan UI didasarkan pada umpan balik pengguna dan integrasi API yang aman.",
    techReason: "Alasan pemilihan teknologi didasarkan pada skalabilitas, kemudahan pemeliharaan, serta komunitas pengembang yang kuat.",
    result: "Hasil Akhir & Dampak",
    resultDesc: "Sistem berhasil dirilis dengan tingkat kepuasan yang tinggi. Performa aplikasi cepat dan ramah seluler.",
    metricsTitle: "Metrik Utama",
    timelineResearch: "Riset awal dan desain antarmuka",
    timelineDev: "Implementasi kode pemrograman dan integrasi sistem",
    timelineTest: "Pengujian fungsionalitas dan peluncuran produksi"
  } : {
    role: "Lead Developer",
    duration: "1 Month",
    type: "Personal",
    overview: "Project Overview",
    overviewDesc: "This project was designed to deliver a highly intuitive and responsive software solution with optimal runtime performance. It is built using modern software development paradigms to bring high value to end users.",
    problem: "Problem Background",
    problemDesc: "Many existing tools in the market are either too complex, slow, or lack proper responsive layouts. This project targets these pain points directly by providing clean interfaces and simplified user flows.",
    solution: "Solution Approach",
    solutionDesc: "We used a modular architecture focusing on clean coding practices. The UI/UX features modern aesthetics with atomic components that can be reused across the application.",
    techReason: "Technologies were selected based on stability, ease of maintenance, and vibrant ecosystem support.",
    result: "Final Result & Impact",
    resultDesc: "The application was launched successfully, providing users with a robust tool that performs beautifully across both desktop and mobile viewports.",
    metricsTitle: "Key Metrics",
    timelineResearch: "Initial requirements definition and interface mockup design",
    timelineDev: "Core implementation and layout styling integration",
    timelineTest: "End-to-end testing and deployment to staging server"
  };

  const projectImage = "/projects/" + (slug ? `${slug}.png` : "opentrip.png");

  return {
    slug,
    title,
    tagline: description.split(".")[0] || title,
    coverImage: projectImage,
    category: category.toUpperCase(),
    status: "Completed",
    year: "2026",
    role: labelText.role,
    duration: labelText.duration,
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "July 2026",
    links: {
      website: links?.find((l: any) => l.type === "Website")?.href,
      source: links?.find((l: any) => l.type === "Source")?.href,
      apiDocs: links?.find((l: any) => l.type === "API Docs")?.href,
      figma: links?.find((l: any) => l.type === "Design")?.href,
    },
    techStack: [
      {
        category: isId ? "Teknologi Utama" : "Technologies Used",
        items: tags.map((t) => ({
          name: t,
          reason: isId ? "Teknologi utama untuk membangun antarmuka dan logika." : "Essential driver for building user interaction and layouts.",
          role: "Development Tool / Library",
          iconName: "Si" + t.replace(/\.js/g, "").replace(/\s/g, "").replace(/\-/g, "")
        }))
      }
    ],
    overview: description || labelText.overviewDesc,
    problemBackground: labelText.problemDesc,
    solutionApproach: {
      design: labelText.solutionDesc,
      techExplanation: labelText.techReason,
      workflow: [
        isId ? "Pengguna mengakses aplikasi melalui browser." : "User accesses the application via web browser.",
        isId ? "Sistem melakukan rendering antarmuka." : "System renders the interface dynamically.",
        isId ? "Interaksi pengguna diproses secara real-time." : "User actions are handled with client-side state hooks."
      ]
    },
    featureDocs: [
      {
        title: isId ? "Desain UI Responsif" : "Responsive UI Design",
        description: isId ? "Mendukung penyesuaian tata letak otomatis dari layar kecil hingga layar besar." : "Auto layout scaling across custom viewport sizes.",
        problemSolved: isId ? "Tampilan rusak di perangkat seluler." : "Broken layouts on mobile devices.",
        howItWorks: isId ? "Menggunakan breakpoints responsif Tailwind CSS." : "Applies Tailwind CSS breakpoint classes.",
        techUsed: tags as string[],
        benefit: isId ? "Akses mudah di mana saja." : "Easy cross-platform readability.",
        image: projectImage
      }
    ],
    finalResultImpact: {
      description: labelText.resultDesc,
      metrics: [
        { label: "Performance", value: "98/100", description: "Lighthouse mobile audit evaluation score" },
        { label: "Component Reusability", value: "85%", description: "Ratio of reusable UI tokens used" }
      ]
    },
    gallery: [
      { image: projectImage, title: isId ? "Halaman Tampilan Utama" : "Primary Screen View", caption: isId ? "Representasi antarmuka utama dari proyek." : "Primary user interface layout of this project." }
    ],
    lessonsLearned: {
      experience: "Learned optimization best practices and modern CSS styling.",
      technicalPivot: "Decided to keep data storage serverless to reduce hosting costs.",
      evaluation: "Project meets standard expectations and works smoothly.",
      improvements: "Add comprehensive dashboard analytics charts.",
      growth: "Enhanced rapid front-end prototyping methodologies."
    }
  };
}
