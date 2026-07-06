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
import { FolderGit2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

import { ProjectImageModal } from "@/components/modals/project-image-modal";

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
  category?: "web" | "ui/ux" | "machine-learning";
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
  const [imageError, setImageError] = useState(false);

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
      {video ? (
        <Link href={href || "#"} className="block cursor-pointer">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none w-full h-40 object-cover object-top"
          />
        </Link>
      ) : image && !imageError ? (
        <ProjectImageModal src={image} title={title}>
          <div className="relative w-full h-40 overflow-hidden bg-muted cursor-zoom-in">
            {imageLoading && (
              <div className="absolute inset-0 premium-shimmer" />
            )}
            <Image
              src={image}
              alt={title}
              width={300}
              height={150}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageLoading(false);
                setImageError(true);
              }}
              className={cn(
                "w-full h-40 object-cover dark:brightness-[0.9] dark:hover:brightness-100 transition-opacity duration-300",
                imageLoading ? "opacity-0" : "opacity-100"
              )}
            />
          </div>
        </ProjectImageModal>
      ) : (
        <div className="relative w-full h-40 flex items-center justify-center bg-muted border-b">
          <FolderGit2 className="size-12 text-muted-foreground/40" />
        </div>
      )}

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
            const isDisabled = !link.href;

            if (isDisabled) {
              return (
                <span
                  key={idx}
                  className="cursor-not-allowed"
                  onClick={() => toast.error(`Resource "${link.type}" is private and cannot be accessed.`)}
                >
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