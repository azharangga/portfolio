import React from "react";
import * as SiIcons from "react-icons/si";
import { PROJECT_DETAILS_EN } from "./project-details-en";
import { PROJECT_DETAILS_ID } from "./project-details-id";

export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  coverImage: string;
  category: string;
  role: string;
  duration: string;
  type: "Personal" | "Team";
  status?: "Completed" | "Ongoing" | "Archived";
  year?: string;
  version?: string;
  license?: string;
  visibility?: "Open Source" | "Private";
  lastUpdated?: string;
  coverVideo?: string;
  links: {
    website?: string;
    source?: string;
    apiDocs?: string;
    model?: string;
    notebook?: string;
    figma?: string;
    prototype?: string;
    presentation?: string;
    videoDemo?: string;
    downloadDocs?: string;
  };
  overview: string;
  disclaimer?: string;
  problemBackground: string;
  solutionApproach: {
    design: string;
    techExplanation?: string;
    workflow: string[];
  };
  featureDocs: {
    title: string;
    description: string;
  }[];
  contributors?: {
    name: string;
    role: string;
    avatar?: string;
    cohortId?: string;
    github?: string;
    linkedin?: string;
  }[];
  techStack: {
    category: string;
    items: { name: string; iconName?: string; version?: string; reason?: string; role?: string }[];
  }[];
  finalResultImpact?: {
    description: string;
    metrics: { label: string; value: string; description: string }[];
  };
  gallery: {
    image: string;
    title: string;
    caption?: string;
  }[];
  lessonsLearned?: {
    experience: string;
    technicalPivot: string;
    evaluation: string;
    improvements: string;
    growth: string;
  };
}

export function getIcon(name?: string) {
  if (!name) return null;

  // 1. Direct match on SiIcons
  if ((SiIcons as any)[name]) {
    return React.createElement((SiIcons as any)[name], { className: "size-4 text-foreground/80" });
  }

  // 2. Normalize technology name mapping to react-icons/si icon component names
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  const iconMapping: Record<string, string> = {
    php: "SiPhp",
    mysql: "SiMysql",
    javascript: "SiJavascript",
    js: "SiJavascript",
    bootstrap: "SiBootstrap",
    reactjs: "SiReact",
    react: "SiReact",
    nextjs: "SiNextdotjs",
    next: "SiNextdotjs",
    typescript: "SiTypescript",
    ts: "SiTypescript",
    tailwindcss: "SiTailwindcss",
    tailwind: "SiTailwindcss",
    python: "SiPython",
    fastapi: "SiFastapi",
    supabase: "SiSupabase",
    postgresql: "SiPostgresql",
    postgres: "SiPostgresql",
    figma: "SiFigma",
    tensorflow: "SiTensorflow",
    keras: "SiKeras",
    pytorch: "SiPytorch",
    pandas: "SiPandas",
    numpy: "SiNumpy",
    scikitlearn: "SiScikitlearn",
    googlecolab: "SiGooglecolab",
    huggingface: "SiHuggingface",
    git: "SiGit",
    jquery: "SiJquery",
    shadcnui: "SiShadcnui",
    shadcn: "SiShadcnui",
    leafletjs: "SiLeaflet",
    leaflet: "SiLeaflet",
    geminiapi: "SiGoogle",
    gemini: "SiGoogle",
    html: "SiHtml5",
    html5: "SiHtml5",
    css: "SiCss3",
    css3: "SiCss3",
    whimsical: "SiWhimsical",
    autolayout: "SiFigma",
    designsystem: "SiFigma",
    userflows: "SiFigma",
    wireframing: "SiFigma",
    uikit: "SiFigma",
    interactiveprototyping: "SiFigma",
    tmdbapi: "SiThemoviedatabase",
    pddiktiapi: "SiBookstack",
    statsmodels: "SiPython",
    matplotlib: "SiPython",
    nltk: "SiPython",
    sastrawi: "SiPython",
    hlsjs: "SiJavascript",
    hls: "SiJavascript"
  };

  const matchedKey = iconMapping[cleanName];
  if (matchedKey && (SiIcons as any)[matchedKey]) {
    return React.createElement((SiIcons as any)[matchedKey], { className: "size-4 text-foreground/80" });
  }

  // 3. Try PascalCase with Si prefix (e.g. "SiPhp", "SiMysql")
  const pascalName = "Si" + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  if ((SiIcons as any)[pascalName]) {
    return React.createElement((SiIcons as any)[pascalName], { className: "size-4 text-foreground/80" });
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
    role: labelText.role,
    duration: labelText.duration,
    type: "Personal",
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
          iconName: t
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
        description: isId ? "Mendukung penyesuaian tata letak otomatis dari layar kecil hingga layar besar." : "Auto layout scaling across custom viewport sizes."
      }
    ],
    gallery: [
      { image: projectImage, title: isId ? "Halaman Tampilan Utama" : "Primary Screen View", caption: isId ? "Representasi antarmuka utama dari proyek." : "Primary user interface layout of this project." }
    ]
  };
}
