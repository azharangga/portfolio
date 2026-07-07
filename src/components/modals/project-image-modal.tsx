"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipPortal,
} from "@/components/ui/tooltip";
import Image from "next/image";
import {
  X,
  Loader2,
  ImageOff,
  Maximize2,
  Minimize2,
  Download,
  Link as LinkIcon,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

interface ProjectImageModalProps {
  src: string;
  title: string;
  children: React.ReactNode;
}

export function ProjectImageModal({
  src,
  title,
  children,
}: ProjectImageModalProps) {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleCopyLink = () => {
    const fullUrl = src.startsWith("http")
      ? src
      : `${window.location.origin}${src}`;

    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = async () => {
    if (isError) return;

    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `project-${title
        .replace(/\s+/g, "-")
        .toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download", error);
      window.open(src, "_blank");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (open) {
          setIsLoading(true);
          setIsError(false);
          setIsFullscreen(false);
        }
      }}
    >
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className={cn(
          "bg-black/95 backdrop-blur-xl p-0 overflow-hidden text-white [&>button]:hidden shadow-2xl transition-all duration-300 ease-in-out gap-0",
          "w-screen h-[100dvh] max-w-none m-0 rounded-none border-none",
          !isFullscreen &&
            "sm:max-w-6xl sm:h-auto sm:rounded-xl sm:border sm:border-white/10 sm:my-auto"
        )}
      >
        {/* Header Actions */}
        <DialogHeader className="absolute top-0 left-0 w-full z-50 p-4 bg-gradient-to-b from-black/80 to-transparent flex flex-row justify-between items-start pointer-events-none">
          <DialogTitle className="text-white text-base sm:text-lg font-semibold text-shadow-sm pt-2 pl-2 line-clamp-1 pointer-events-auto max-w-[60%] text-left">
            {title}
          </DialogTitle>

          <div className="flex items-center gap-1 pointer-events-auto">
            <TooltipProvider delayDuration={300}>
              <div
                className={cn(
                  "flex items-center gap-1 transition-all duration-500 ease-out",
                  isLoading
                    ? "opacity-0 translate-x-8 pointer-events-none"
                    : "opacity-100 translate-x-0"
                )}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-9 w-9 disabled:opacity-30 disabled:cursor-not-allowed"
                      onClick={handleDownload}
                      disabled={isError}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipPortal>
                    <TooltipContent
                      side="bottom"
                      className="bg-black text-white border-white/20 text-xs z-[9999]"
                    >
                      <p>{lang === "en" ? "Download" : "Unduh"}</p>
                    </TooltipContent>
                  </TooltipPortal>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-9 w-9 disabled:opacity-30 disabled:cursor-not-allowed"
                      onClick={handleCopyLink}
                      disabled={isError}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <LinkIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipPortal>
                    <TooltipContent
                      side="bottom"
                      className="bg-black text-white border-white/20 text-xs z-[9999]"
                    >
                      <p>{copied ? (lang === "en" ? "Copied!" : "Tersalin!") : (lang === "en" ? "Copy Link" : "Salin Tautan")}</p>
                    </TooltipContent>
                  </TooltipPortal>
                </Tooltip>
              </div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden sm:flex text-white/70 hover:text-white hover:bg-white/10 rounded-full h-9 w-9"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                  >
                    {isFullscreen ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent
                    side="bottom"
                    className="bg-black text-white border-white/20 text-xs z-[9999]"
                  >
                    <p>
                      {isFullscreen ? (lang === "en" ? "Exit Fullscreen" : "Keluar Layar Penuh") : (lang === "en" ? "Enter Fullscreen" : "Layar Penuh")}
                    </p>
                  </TooltipContent>
                </TooltipPortal>
              </Tooltip>

              <div className="hidden sm:block w-px h-6 bg-white/10 mx-1"></div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-9 w-9"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent
                    side="bottom"
                    className="bg-black text-white border-white/20 text-xs z-[9999]"
                  >
                    <p>{lang === "en" ? "Close" : "Tutup"}</p>
                  </TooltipContent>
                </TooltipPortal>
              </Tooltip>
            </TooltipProvider>
          </div>
        </DialogHeader>

        {/* KONTEN UTAMA */}
        <div
          className={cn(
            "w-full flex items-center justify-center bg-black relative",
            isFullscreen
              ? "h-[100dvh]"
              : "h-[100dvh] sm:h-[60vh] md:h-[75vh]"
          )}
        >
          {isLoading && !isError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 gap-3">
              <Loader2 className="h-10 w-10 animate-spin text-white/50" />
              <p className="text-xs text-white/30 animate-pulse">
                Loading image...
              </p>
            </div>
          )}
          
          {isError && (
            <div className="flex flex-col items-center justify-center text-center space-y-4 z-20 px-4">
              <div className="relative">
                <div className="absolute inset-0 blur-lg bg-red-500/10 rounded-full" />
                <ImageOff
                  className="h-12 w-12 text-white/20 relative z-10"
                  strokeWidth={1}
                />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium text-white/70">
                  Image Not Found
                </p>
                <p className="text-xs text-white/30 max-w-[200px] mx-auto leading-relaxed">
                  The file may have been moved or deleted from the source.
                </p>
              </div>
            </div>
          )}

          {!isError && (
            <>
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  className={cn(
                    "object-cover blur-3xl scale-110 brightness-[0.3]",
                    isLoading
                      ? "opacity-0"
                      : "opacity-100 transition-opacity duration-1000"
                  )}
                />
              </div>

              <div className="relative w-full h-full z-10 p-4 sm:p-12 pt-20 sm:pt-20">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className={cn(
                    "object-contain drop-shadow-2xl transition-all duration-500 ease-in-out",
                    isLoading
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  )}
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setIsLoading(false);
                    setIsError(true);
                  }}
                />
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
