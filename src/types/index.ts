import { DATA } from "@/data/resume";

export type ResumeData = typeof DATA;

export type ProjectItem = (typeof DATA.projects)[number] & { active?: boolean };
export type ExperienceItem = (typeof DATA.work)[number] & { active?: boolean };
export type EducationItem = (typeof DATA.education)[number] & { active?: boolean };
export type TrainingItem = (typeof DATA.training)[number] & { active?: boolean };
export type CertificationItem = (typeof DATA.certifications)[number] & { active?: boolean };
export type AchievementItem = (typeof DATA.achievements)[number] & { active?: boolean };

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