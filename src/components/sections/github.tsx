"use client";

import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { useTheme } from "next-themes";
import { DATA } from "@/data/resume";

export function GithubSection() {
  const Object_KEYS = Object.keys(DATA.contact.social);
  const githubEntry = Object.entries(DATA.contact.social).find(([name]) => name.toLowerCase() === "github");
  let username = "azharangga"; // fallback
  
  if (githubEntry) {
    const url = githubEntry[1].url;
    // Extract username from https://github.com/username
    const matches = url.match(/github\.com\/([^\/]+)/);
    if (matches && matches[1]) {
      username = matches[1];
    }
  }

  const GITHUB_DELAY = BLUR_FADE_DELAY * 14; 
  const { theme } = useTheme();
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    
    let suffix = 'th';
    if (day % 10 === 1 && day !== 11) suffix = 'st';
    if (day % 10 === 2 && day !== 12) suffix = 'nd';
    if (day % 10 === 3 && day !== 13) suffix = 'rd';
    
    return `${month} ${day}${suffix}.`;
  };

  return (
    <section id="github" className="pt-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={GITHUB_DELAY}>
          <h2 className="text-xl font-bold">
            GitHub Contributions
          </h2>
        </BlurFade>
        <BlurFade delay={GITHUB_DELAY + 0.1}>
          <div className="w-full flex justify-center py-2 [&_article]:w-full [&_svg]:!w-full [&_svg]:!h-auto">
            <GitHubCalendar 
              username={username} 
              colorScheme={theme === "dark" ? "dark" : "light"}
              fontSize={14}
              blockSize={14}
              blockMargin={5}
              theme={{
                light: ['hsl(var(--muted))', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['hsl(var(--muted))', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              renderBlock={(block, activity) => (
                React.cloneElement(block as React.ReactElement, {
                  "data-tooltip-id": "react-tooltip",
                  "data-tooltip-html": activity.count === 0 
                    ? `No contributions on ${formatDate(activity.date)}`
                    : `${activity.count} contributions on ${formatDate(activity.date)}`,
                } as any)
              )}
            />
            <ReactTooltip 
              id="react-tooltip" 
              style={{ fontSize: '11px', padding: '4px 8px', borderRadius: '4px', zIndex: 50, backgroundColor: 'rgba(0,0,0,0.85)', color: '#fff' }} 
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
