import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/cards/resume-card";
import { useLanguage } from "@/context/language-context";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function ExperienceSection() {
  const { resumeData, t, lang } = useLanguage();
  const WORK_DELAY = BLUR_FADE_DELAY * 7;

  return (
    <section id="experience" className="pt-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={WORK_DELAY}>
          <h2 className="text-xl font-bold">{t("experience")}</h2>
        </BlurFade>
        {resumeData.work.map((work, id) => (
          <BlurFade key={work.company + id} delay={WORK_DELAY + id * 0.05}>
            <ResumeCard
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={work.start === work.end ? work.start : `${work.start} - ${work.end ? work.end : (lang === "en" ? "Present" : "Sekarang")}`}
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