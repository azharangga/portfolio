"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { AchievementCard } from "@/components/cards/achievement-card";
import { useLanguage } from "@/context/language-context";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { GroupedAchievement } from "@/types";

const ACHIEVEMENTS_DELAY = BLUR_FADE_DELAY * 12;

export function AchievementsSection() {
  const [showAll, setShowAll] = useState(false);
  const { resumeData, t, lang } = useLanguage();

  const groupedAchievements = resumeData.achievements.reduce(
    (acc: GroupedAchievement[], item) => {
      const existingGroup = acc.find((group) => group.school === item.school);
      if (existingGroup) {
        (existingGroup.items as any).push(item);
      } else {
        acc.push({
          school: item.school,
          logoUrl: item.logoUrl,
          href: item.href,
          items: [item],
        });
      }
      return acc;
    },
    []
  );

  const initialItems = 3;
  const isExpandable = groupedAchievements.length > initialItems;
  const visibleAchievements = showAll ? groupedAchievements : groupedAchievements.slice(0, initialItems);

  const labelMore = lang === "en" ? "Show More" : "Lebih Banyak";
  const labelLess = lang === "en" ? "Show Less" : "Lebih Sedikit";
  const ariaLabelMore = lang === "en" ? "Show More Achievements" : "Tampilkan Lebih Banyak";
  const ariaLabelLess = lang === "en" ? "Show Less Achievements" : "Tampilkan Lebih Sedikit";

  return (
    <section id="achievements" className="pt-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={ACHIEVEMENTS_DELAY}>
          <h2 className="text-xl font-bold">{t("achievements")}</h2>
        </BlurFade>

        {visibleAchievements.map((group, id) => (
          <BlurFade key={group.school + id} delay={ACHIEVEMENTS_DELAY + id * 0.05}>
            <AchievementCard
              school={group.school}
              logoUrl={group.logoUrl}
              href={group.href}
              items={group.items}
            />
          </BlurFade>
        ))}

        {isExpandable && (
          <BlurFade delay={ACHIEVEMENTS_DELAY + visibleAchievements.length * 0.05}>
            <div className="flex justify-center mt-2">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center justify-center p-2 rounded-full border bg-muted/40 hover:bg-muted/80 text-foreground transition-all duration-300"
                aria-label={showAll ? ariaLabelLess : ariaLabelMore}
              >
                <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                <span className="overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 group-hover:pr-2">
                  {showAll ? labelLess : labelMore}
                </span>
              </button>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
