"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { DATA_EN, DATA_ID } from "@/data/resume";

type Language = "en" | "id";

const translations = {
  en: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    training: "Training",
    certifications: "Certifications",
    achievements: "Achievements",
    projects: "Projects",
    contact: "Contact",
    contact_title: "Get in Touch",
    contact_subtitle: "Want to chat? Just shoot me a message or find me on my social media platforms.",
    download_cv: "Download CV",
    view_projects: "View Projects",
    active_language: "English",
  },
  id: {
    about: "Tentang Saya",
    skills: "Keahlian",
    experience: "Pengalaman",
    education: "Pendidikan",
    training: "Pelatihan",
    certifications: "Sertifikasi",
    achievements: "Prestasi",
    projects: "Proyek",
    contact: "Kontak",
    contact_title: "Hubungi Saya",
    contact_subtitle: "Ingin berdiskusi? Kirimkan saya pesan langsung atau hubungi saya melalui media sosial.",
    download_cv: "Unduh CV",
    view_projects: "Lihat Proyek",
    active_language: "Bahasa Indonesia",
  },
};

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations["en"]) => string;
  resumeData: typeof DATA_EN;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as Language;
    if (savedLang === "en" || savedLang === "id") {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "id" : "en";
    setLang(newLang);
  };

  const t = (key: keyof typeof translations["en"]) => {
    return translations[lang][key] || translations["en"][key] || key;
  };

  const resumeData = (lang === "en" ? DATA_EN : DATA_ID) as unknown as typeof DATA_EN;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, resumeData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
