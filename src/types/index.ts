import { DATA } from "@/data/resume";

export type ResumeData = typeof DATA;

export type ProjectItem = (typeof DATA.projects)[number];
export type ExperienceItem = (typeof DATA.work)[number];
export type EducationItem = (typeof DATA.education)[number];
export type TrainingItem = (typeof DATA.training)[number];
export type CertificationItem = (typeof DATA.certifications)[number];
export type AchievementItem = (typeof DATA.achievements)[number];

export interface GroupedTraining {
  school: string;
  logoUrl: string;
  href: string;
  items: TrainingItem[];
}

export interface GroupedCertification {
  school: string;
  logoUrl: string;
  href: string;
  items: CertificationItem[];
}

export interface GroupedAchievement {
  school: string;
  logoUrl: string;
  href: string;
  items: AchievementItem[];
}