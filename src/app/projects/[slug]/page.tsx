import { DATA_EN } from "@/data/resume-en";
import { slugify } from "@/lib/slugify";
import ProjectDetailClient from "@/components/project-detail-client";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const projects = DATA_EN.projects.filter((p) => p.active);
  return projects.map((project) => ({
    slug: slugify(project.title),
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  // Find if matching project exists
  const projectExists = DATA_EN.projects.some((p) => slugify(p.title) === slug);
  if (!projectExists) {
    notFound();
  }

  return <ProjectDetailClient slug={slug} />;
}
