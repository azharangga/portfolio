import Link from "next/link";
import Image from "next/image";
import { FolderGit2, FileText, User } from "lucide-react";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants, Button } from "@/components/ui/button";
import { CertificateModal } from "@/components/modals/certificate-modal";
import { cn } from "@/lib/utils";
import { Typewriter } from "@/components/ui/typewriter";
import { useLanguage } from "@/context/language-context";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function HeroSection() {
  const { resumeData, t } = useLanguage();

  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <div className="gap-2 flex justify-between flex-col-reverse md:flex-row">
          <div className="justify-center flex-col flex flex-1 space-y-1.5">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <p className="mx-auto md:mx-0 text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-center md:text-left">
                Hi, I&apos;m {resumeData.name} <Image src="/blob-wave-reverse.gif" alt="blob" width={42} height={42} className="inline-block align-middle" unoptimized />
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY + 0.05}>
              <p className="mx-auto md:mx-0 text-base md:text-lg font-medium text-foreground text-center md:text-start">
                {resumeData.rolePrefix || "Specializing in"}{" "}
                <Typewriter
                  words={resumeData.roles}
                  className="text-primary font-semibold"
                />
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY + 0.08}>
              <Markdown className="text-center md:text-start max-w-[600px] text-pretty font-sans text-sm md:text-base text-muted-foreground">
                {resumeData.description}
              </Markdown>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY + 0.1}>
              <div className="flex gap-2 justify-center md:justify-start mt-4">
                <Link
                  href="#projects"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full sm:w-auto flex items-center gap-2"
                  )}
                >
                  <FolderGit2 className="size-4" />
                  {t("view_projects")}
                </Link>
                <CertificateModal
                  trigger={
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto flex items-center gap-2"
                    >
                      <FileText className="size-4" />
                      {t("download_cv")}
                    </Button>
                  }
                  href={resumeData.resumeUrl}
                  alt="Resume"
                />
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-36 mx-auto">
              <AvatarImage alt={resumeData.name} src={resumeData.avatarUrl} />
              <AvatarFallback>
                <User className="size-16 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}