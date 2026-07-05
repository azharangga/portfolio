"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText, Award } from "lucide-react";
import React from "react";
import Markdown from "react-markdown";
import { GalleryModal } from "@/components/modals/gallery-modal";
import { CertificateModal } from "@/components/modals/certificate-modal";
import { AchievementItem } from "@/types";

interface AchievementCardProps {
  readonly school: string;
  readonly logoUrl: string;
  readonly href?: string;
  readonly items: readonly AchievementItem[];
}

export const AchievementCard = ({
  school,
  logoUrl,
  items,
}: AchievementCardProps) => {
  const isGrouped = items.length > 1;

  // --- RENDERING UNTUK SINGLE ITEM (1 Achievement) ---
  if (!isGrouped) {
    const item = items[0];
    return (
      <div className="flex gap-4">
        <div className="flex-none">
          <Avatar className="size-12 bg-muted-foreground/10">
            <AvatarImage
              src={logoUrl}
              alt={school}
              className="object-contain"
            />
            <AvatarFallback>
              <Award className="size-6 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow flex-col">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {school}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {item.start === item.end
                ? item.start
                : `${item.start} - ${item.end}`}
            </div>
          </div>
          
          <div className="font-sans text-xs mt-1 font-medium">
            {item.degree}
          </div>
          
          {item.location && (
            <div className="font-sans text-xs mt-1 text-muted-foreground">
              {item.location}
            </div>
          )}
          
          <div className="mt-2 text-xs sm:text-sm">
            {item.description && (
              <Markdown className="prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
                {item.description}
              </Markdown>
            )}
            <ActionButtons item={item} />
          </div>
        </div>
      </div>
    );
  }

  // --- RENDERING UNTUK GROUPED ITEM (Banyak Achievements) ---
  return (
    <div className="flex gap-4">
      <div className="flex-none w-12 flex flex-col items-center">
        <Avatar className="size-12 bg-muted-foreground/10">
          <AvatarImage src={logoUrl} alt={school} className="object-contain" />
          <AvatarFallback>
            <Award className="size-6 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="mb-4 h-12 flex items-center">
          <h3 className="font-semibold text-xs sm:text-sm">{school}</h3>
        </div>

        <div className="flex flex-col">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <div key={index} className="relative pl-0 pb-4 last:pb-0">
                {!isLast && (
                  <div
                    className="absolute w-[2px] bg-border"
                    style={{
                      left: "-41px",
                      top: "10px",
                      bottom: "-10px",
                    }}
                  />
                )}

                <div
                  className="absolute rounded-full border bg-muted-foreground ring-4 ring-background z-10"
                  style={{
                    width: "10px",
                    height: "10px",
                    left: "-45px",
                    top: "6px",
                  }}
                />

                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h4 className="font-medium text-xs leading-none">
                      {item.degree}
                    </h4>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right shrink-0">
                      {item.start === item.end
                        ? item.start
                        : `${item.start} - ${item.end}`}
                    </div>
                  </div>

                  {item.location && (
                    <div className="font-sans text-xs mt-1 text-muted-foreground">
                      {item.location}
                    </div>
                  )}

                  {/* Description: text-sm */}
                  <div className="mt-2 text-xs sm:text-sm">
                    {item.description && (
                      <Markdown className="prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
                        {item.description}
                      </Markdown>
                    )}
                    <ActionButtons item={item} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ActionButtons = ({ item }: { item: AchievementItem }) => (
  <div className="flex flex-wrap gap-2 mt-1">
    {item.certificateUrl && (
      <CertificateModal
        href={item.certificateUrl}
        alt={`${item.degree} Certificate`}
        trigger={
          <Button
            variant="outline"
            size="sm"
            className="mt-3 gap-1.5 text-[10px] h-7 font-medium"
          >
            <FileText className="h-3 w-3" />
            Certificate
          </Button>
        }
      />
    )}
    {item.gallery && item.gallery.length > 0 && (
      <GalleryModal title={item.degree} items={item.gallery} />
    )}
  </div>
);
