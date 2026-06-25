import { DATA } from "@/data/resume";

export type ResumeData = typeof DATA;

export type ProjectItem = (typeof DATA.projects)[number];
export type ExperienceItem = (typeof DATA.work)[number];
export type EducationItem = (typeof DATA.education)[number];
export type AcademicActivityItem = (typeof DATA.academicActivities)[number];

export interface GroupedActivity {
  school: string;
  logoUrl: string;
  href: string;
  items: AcademicActivityItem[];
}