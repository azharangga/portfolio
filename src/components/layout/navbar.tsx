import React, { useState, useRef, useEffect } from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Languages, Check } from "lucide-react";

export default function Navbar() {
  const { resumeData, lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Mobile Bottom Navigation Bar (Sticks to screen) */}
      <div className="fixed bottom-0 left-0 right-0 z-45 bg-background/90 backdrop-blur-lg border-t border-border/40 flex items-center justify-around h-16 px-2 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)] sm:hidden pointer-events-auto">
        {resumeData.navbar
          .filter((item) => ["#experience", "#education", "#projects"].includes(item.href))
          .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground hover:text-foreground active:text-foreground transition-colors"
            >
              <item.icon className="size-5" />
              <span className="text-[9px] mt-1 font-medium line-clamp-1">{item.label}</span>
            </Link>
          ))}
        
        {/* Language button */}
        <div ref={dropdownRef} className="relative flex flex-col items-center justify-center flex-1 h-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-center justify-center w-full h-full text-muted-foreground hover:text-foreground active:text-foreground transition-colors"
          >
            <Languages className="size-5" />
            <span className="text-[9px] mt-1 font-medium">{lang === "en" ? "Lang" : "Bhs"}</span>
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-background border rounded-lg shadow-xl p-1 z-50 flex flex-col gap-1 min-w-[140px]"
              >
                <button
                  onClick={() => {
                    setLang("en");
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between px-3 py-1.5 text-xs rounded-md font-medium transition-colors w-full text-left",
                    lang === "en"
                      ? "bg-foreground text-background"
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  <span>English</span>
                  {lang === "en" && <Check className="size-3" />}
                </button>
                <button
                  onClick={() => {
                    setLang("id");
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between px-3 py-1.5 text-xs rounded-md font-medium transition-colors w-full text-left",
                    lang === "id"
                      ? "bg-foreground text-background"
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  <span>Bahasa</span>
                  {lang === "id" && <Check className="size-3" />}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme button */}
        <div className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground">
          <ModeToggle />
          <span className="text-[9px] font-medium -mt-1">{lang === "en" ? "Theme" : "Tema"}</span>
        </div>
      </div>

      {/* Desktop Floating Dock */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:flex pointer-events-none fixed inset-x-0 bottom-10 z-30 mx-auto mb-4 origin-bottom h-full max-h-14"
      >
        <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
        <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-accent dark:bg-transparent dark:backdrop-blur-3xl dark:backdrop-brightness-50 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
          {resumeData.navbar.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                    aria-label="Navigation"
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <div ref={dropdownRef} className="relative flex items-center justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="size-12"
                    aria-label="Toggle language"
                  >
                    <Languages className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{lang === "en" ? "Change Language" : "Ubah Bahasa"}</p>
                </TooltipContent>
              </Tooltip>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-background border rounded-lg shadow-xl p-1 z-50 flex flex-col gap-1 min-w-[150px] pointer-events-auto"
                  >
                    <button
                      onClick={() => {
                        setLang("en");
                        setIsOpen(false);
                      }}
                      className={cn(
                        "flex items-center justify-between px-3 py-1.5 text-xs rounded-md font-medium transition-colors w-full text-left",
                        lang === "en"
                          ? "bg-foreground text-background"
                          : "hover:bg-muted text-foreground"
                      )}
                    >
                      <span>English</span>
                      {lang === "en" && <Check className="size-3" />}
                    </button>
                    <button
                      onClick={() => {
                        setLang("id");
                        setIsOpen(false);
                      }}
                      className={cn(
                        "flex items-center justify-between px-3 py-1.5 text-xs rounded-md font-medium transition-colors w-full text-left",
                        lang === "id"
                          ? "bg-foreground text-background"
                          : "hover:bg-muted text-foreground"
                      )}
                    >
                      <span>Bahasa Indonesia</span>
                      {lang === "id" && <Check className="size-3" />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>{lang === "en" ? "Theme" : "Tema"}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </motion.div>
    </>
  );
}
