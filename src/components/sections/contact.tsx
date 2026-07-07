import Link from "next/link";
import { UrlObject } from "url";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/context/language-context";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function ContactSection() {
  const { resumeData, t, lang } = useLanguage();
  const CONTACT_DELAY = BLUR_FADE_DELAY * 15;

  return (
    <section id="contact" className="pt-6">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={CONTACT_DELAY}>
          <div className="space-y-7">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {t("contact")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t("contact_title")}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("contact_subtitle")}
              </p>
            </div>
            <div className="flex justify-center">
              <BlurFade delay={CONTACT_DELAY + 0.05}>
                <div className="flex gap-5 flex-wrap">
                  {Object.entries(resumeData.contact.social)
                    .filter(([_, social]) => social.contact)
                    .map(([name, social], index) => (
                      <Tooltip key={name + index}>
                        <TooltipTrigger asChild>
                          <Link
                            href={social.url as unknown as UrlObject}
                            aria-label={lang === "en" ? `Visit my ${name} profile` : `Kunjungi profil ${name} saya`}
                            className="text-foreground/60 hover:text-foreground transition-colors"
                          >
                            <social.icon className="size-7" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                </div>
              </BlurFade>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}