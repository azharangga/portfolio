import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { PrototypeDialog } from "@/components/modals/prototype-dialog";
import React, { useState } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  openSource?: boolean;
  category?: "web" | "ui/ux" | "app" | "ml/dl";
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  openSource,
  category,
  className,
}: Props) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Card
      className={cn(
        "relative flex h-full flex-col overflow-hidden border hover:shadow-md transition duration-300 rounded-xl",
        className
      )}
    >
      {/* ⭐ Mini badge — top-right (Open Source / Closed Source) */}
      {typeof openSource === "boolean" && (
        <div className="absolute top-2 right-2 z-20">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2 py-[2px] text-[8px] font-medium shadow-sm",
              "bg-white/70 backdrop-blur-sm",
              openSource
                ? "border-emerald-300 text-emerald-700"
                : "border-rose-300 text-rose-700"
            )}
            title={openSource ? "Open Source" : "Closed Source"}
          >
            {openSource ? "Open Source" : "Closed Source"}
          </span>
        </div>
      )}

      {/* MEDIA */}
      <Link href={href || "#"} className="block cursor-pointer">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none w-full h-40 object-cover object-top"
          />
        )}
        {image && (
          <div className="relative w-full h-40 overflow-hidden bg-muted">
            {imageLoading && (
              <div className="absolute inset-0 premium-shimmer" />
            )}
            <Image
              src={image}
              alt={title}
              width={300}
              height={150}
              onLoad={() => setImageLoading(false)}
              className={cn(
                "w-full h-40 object-cover dark:brightness-[0.9] dark:hover:brightness-100 transition-opacity duration-300",
                imageLoading ? "opacity-0" : "opacity-100"
              )}
            />
          </div>
        )}
      </Link>

      {/* HEADER */}
      <CardHeader className="px-2 pt-3 space-y-1">
        <CardTitle className="text-base">{title}</CardTitle>

        {dates && <time className="text-xs font-sans">{dates}</time>}

        <Markdown className="prose text-xs text-muted-foreground max-w-full dark:prose-invert">
          {description}
        </Markdown>
      </CardHeader>

      {/* TAGS */}
      <CardContent className="px-2 mt-auto">
        {tags && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-1 py-0 text-[10px] opacity-80"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {/* LINKS */}
      <CardFooter className="px-2 pb-2">
        <div className="flex flex-wrap gap-2">
          {links?.map((link, idx) => {
            // --- LOGIC DISABLE ---
            // 1. Jika link kosong (!link.href) -> Disable
            // 2. Jika project Close Source (!openSource) -> Disable SEMUA tombol
            const isDisabled = !link.href || !openSource;

            if (isDisabled) {
              return (
                <span key={idx} className="cursor-not-allowed" title="Link Disabled (Closed Source or Empty)">
                  <Badge
                    className="px-2 py-1 text-[10px] flex gap-2 transition-all duration-200
                      opacity-50 pointer-events-none" 
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </span>
              );
            }

            // --- JIKA AKTIF (Open Source & Ada Link) ---

            // A. Tipe "Prototype" -> Buka Modal
            if (link.type === "Prototype") {
              return (
                <PrototypeDialog
                  key={idx}
                  href={link.href}
                  label={link.type}
                  icon={link.icon}
                />
              );
            }

            // B. Tipe Lainnya (Design, Source, Website) -> Buka Tab Baru
            return (
              <Link href={link.href} key={idx} target="_blank">
                <Badge className="px-2 py-1 text-[10px] opacity-90 hover:opacity-100 transition flex gap-2">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}