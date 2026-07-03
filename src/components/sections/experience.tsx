import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/cards/resume-card";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function ExperienceSection() {
  const WORK_DELAY = BLUR_FADE_DELAY * 7;

  return (
    <section id="experience" className="pt-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={WORK_DELAY}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        {DATA.work.map((work, id) => (
          <BlurFade key={work.company + id} delay={WORK_DELAY + id * 0.05}>
            <ResumeCard
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
              location={work.location}
              certificateUrl={work.certificateUrl}
              gallery={work.gallery}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}