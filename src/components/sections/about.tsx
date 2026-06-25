import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function AboutSection() {
  const ABOUT_DELAY = BLUR_FADE_DELAY * 3;

  return (
    <section id="about" className="pt-6">
      <BlurFade delay={ABOUT_DELAY}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={ABOUT_DELAY + 0.05}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
}