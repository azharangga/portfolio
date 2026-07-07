import BlurFade from "@/components/magicui/blur-fade";
import { EducationCard } from "@/components/cards/education-card";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function EducationSection() {
  const EDUCATION_DELAY = BLUR_FADE_DELAY * 9;

  return (
    <section id="education" className="pt-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={EDUCATION_DELAY}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map((education, id) => (
          <BlurFade
            key={education.school + id}
            delay={EDUCATION_DELAY + id * 0.05}
          >
            <EducationCard
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={(education.start as string) === education.end ? education.start : `${education.start} - ${education.end}`}
              gpa={education.gpa}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}