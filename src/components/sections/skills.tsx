import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function SkillsSection() {
  const SKILLS_DELAY = BLUR_FADE_DELAY * 5;

  return (
    <section id="skills" className="pt-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={SKILLS_DELAY}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name + id} delay={SKILLS_DELAY + id * 0.05}>
              <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                <skill.icon className="h-4 w-4" />
                {skill.name}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}