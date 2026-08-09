"use client";

import React, { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function PageTransitionLoader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isNavigating, setIsNavigating] = useState(false);

  // Dismiss loader immediately when route path changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  const showLoader = isPending || isNavigating;

  // Listen to internal link navigation clicks
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, target="_blank", or pure fragment hashes (#overview, etc.)
      if (
        anchor.target === "_blank" ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      ) {
        return;
      }

      // Extract path portion before any hash or query
      const currentPath = window.location.pathname;
      const cleanHrefPath = href.split("#")[0].split("?")[0];

      if (cleanHrefPath && cleanHrefPath !== currentPath) {
        e.preventDefault();
        setIsNavigating(true);
        startTransition(() => {
          router.push(href);
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [router]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/25 backdrop-blur-[4px] pointer-events-none select-none"
        >
          {/* Card-less Ultra Minimal Loader */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="relative size-6">
              <div className="absolute inset-0 rounded-full border-[2px] border-foreground/15" />
              <div className="absolute inset-0 rounded-full border-[2px] border-foreground border-t-transparent animate-spin" />
            </div>
            <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/80 font-sans">
              LOADING
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


