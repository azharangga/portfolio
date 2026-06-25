"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface EducationCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  period: string;
}

export const EducationCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
}: EducationCardProps) => {
  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="flex bg-background">
        <div className="flex-none">
          <Avatar className="size-12 m-auto bg-muted-foreground/10">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs mt-1 text-muted-foreground">
                {subtitle}
              </div>
            )}
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
};