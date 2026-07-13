"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, ExternalLink, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function PrototypeDialog({ href, label, icon }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (open) {
        setIsFullscreen(false);
        setIsLoading(true);
      }
    }}>
      <DialogTrigger asChild>
        <button className="focus:outline-none">
          <Badge className="px-2 py-1 text-[10px] opacity-90 hover:opacity-100 transition flex gap-2 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90">
            {icon}
            {label}
          </Badge>
        </button>
      </DialogTrigger>

      <DialogContent className={cn(
        "p-0 flex flex-col gap-0 bg-background overflow-hidden border border-border transition-all duration-300 ease-in-out shadow-2xl",
        "w-screen h-[100dvh] max-w-none m-0 rounded-none border-none", // default mobile: full screen
        !isFullscreen && "sm:max-w-[90vw] sm:h-[90vh] sm:rounded-lg sm:border" // desktop when not fullscreen
      )}>
        <DialogHeader className="px-4 sm:px-6 py-4 border-b flex-shrink-0 h-16 bg-muted/20 flex flex-row items-center justify-between gap-4">
          <DialogTitle className="flex items-center gap-2 text-sm sm:text-base font-bold text-left flex-1 min-w-0">
            {icon}
            <span className="truncate">{label} Preview</span>
          </DialogTitle>
          
          <div className="flex items-center gap-1.5 shrink-0 mr-8 sm:mr-10">
            {/* Fullscreen toggle - desktop only */}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 text-xs shrink-0 hidden sm:inline-flex"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              {isFullscreen ? (
                <Minimize2 className="size-4" />
              ) : (
                <Maximize2 className="size-4" />
              )}
            </Button>
            
            {/* Figma external link button */}
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs gap-1.5"
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-3.5" />
                <span className="hidden sm:inline">Open in Figma</span>
              </a>
            </Button>
          </div>
        </DialogHeader>
        
        <div className="flex-1 w-full relative bg-muted/10">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-15">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          <iframe
            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
              href
            )}`}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
