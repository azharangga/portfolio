"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { TrainingCard } from "@/components/cards/training-card";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { GroupedTraining } from "@/types";

const TRAINING_DELAY = BLUR_FADE_DELAY * 11;

export function TrainingAndCertificationsSection() {
  const [showAll, setShowAll] = useState(false);

  const groupedTrainings = DATA.trainingAndCertifications.reduce(
    (acc: GroupedTraining[], item) => {
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
  const isExpandable = groupedTrainings.length > initialItems;
  const visibleTrainings = showAll ? groupedTrainings : groupedTrainings.slice(0, initialItems);

  return (
    <section id="training-and-certifications" className="pt-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={TRAINING_DELAY}>
          <h2 className="text-xl font-bold">Training and Certification</h2>
        </BlurFade>

        {visibleTrainings.map((group, id) => (
          <BlurFade key={group.school + id} delay={TRAINING_DELAY + id * 0.05}>
            <TrainingCard
              school={group.school}
              logoUrl={group.logoUrl}
              href={group.href}
              items={group.items}
            />
          </BlurFade>
        ))}

        {isExpandable && (
          <BlurFade delay={TRAINING_DELAY + visibleTrainings.length * 0.05}>
            <div className="flex justify-center mt-2">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center justify-center p-2 rounded-full border bg-muted/40 hover:bg-muted/80 text-foreground transition-all duration-300"
                aria-label={showAll ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
              >
                <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                <span className="overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 group-hover:pr-2">
                  {showAll ? "Lebih Sedikit" : "Lebih Banyak"}
                </span>
              </button>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
