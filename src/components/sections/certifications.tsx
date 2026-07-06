"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { CertificationCard } from "@/components/cards/certification-card";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { GroupedCertification } from "@/types";

const CERTIFICATIONS_DELAY = BLUR_FADE_DELAY * 11.5; // slight offset from training delay

export function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);

  const groupedCertifications = DATA.certifications.reduce(
    (acc: GroupedCertification[], item) => {
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
  const isExpandable = groupedCertifications.length > initialItems;
  const visibleCertifications = showAll ? groupedCertifications : groupedCertifications.slice(0, initialItems);

  return (
    <section id="certifications" className="pt-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={CERTIFICATIONS_DELAY}>
          <h2 className="text-xl font-bold">Certifications</h2>
        </BlurFade>

        {visibleCertifications.map((group, id) => (
          <BlurFade key={group.school + id} delay={CERTIFICATIONS_DELAY + id * 0.05}>
            <CertificationCard
              school={group.school}
              logoUrl={group.logoUrl}
              href={group.href}
              items={group.items}
            />
          </BlurFade>
        ))}

        {isExpandable && (
          <BlurFade delay={CERTIFICATIONS_DELAY + visibleCertifications.length * 0.05}>
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
