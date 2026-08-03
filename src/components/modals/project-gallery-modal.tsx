"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export interface ProjectGalleryItem {
  image: string;
  title: string;
  caption?: string;
}

interface ProjectGalleryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  items: readonly ProjectGalleryItem[];
  initialIndex?: number;
}

export function ProjectGalleryModal({
  isOpen,
  onOpenChange,
  title,
  items,
  initialIndex = 0,
}: ProjectGalleryModalProps) {
  const { lang } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(initialIndex);
  const [copied, setCopied] = useState(false);

  const [loadingStates, setLoadingStates] = useState<boolean[]>([]);
  const [errorStates, setErrorStates] = useState<boolean[]>([]);

  useEffect(() => {
    if (isOpen && items.length > 0) {
      setLoadingStates(new Array(items.length).fill(true));
      setErrorStates(new Array(items.length).fill(false));
      setIsFullscreen(false);
      setCurrent(initialIndex);
      setCopied(false);

      if (api) {
        api.scrollTo(initialIndex, true);
      }
    }
  }, [isOpen, items, initialIndex, api]);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setCopied(false);
    });
  }, [api]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        api?.scrollNext();
      } else if (e.key === "ArrowLeft") {
        api?.scrollPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, api]);

  const isCurrentLoading = loadingStates[current];
  const isCurrentError = errorStates[current];

  const handleCopyLink = () => {
    if (isCurrentError || isCurrentLoading || !items[current]) return;

    const currentImage = items[current].image;
    const fullUrl = currentImage.startsWith("http")
      ? currentImage
      : `${window.location.origin}${currentImage}`;

    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = async () => {
    if (isCurrentError || isCurrentLoading || !items[current]) return;

    const imageUrl = items[current].image;
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title.replace(/\s+/g, "-").toLowerCase()}-${current + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download", error);
      window.open(imageUrl, "_blank");
    }
  };

  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  const handleImageError = (index: number) => {
    setLoadingStates((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
    setErrorStates((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  if (!items || items.length === 0) {
    return null;
  }

  const currentItem = items[current] || items[0];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className={cn(
          "bg-black/95 backdrop-blur-xl p-0 overflow-hidden text-white [&>button]:hidden shadow-2xl transition-all duration-300 ease-in-out gap-0",
          "w-screen h-[100dvh] max-w-none m-0 rounded-none border-none",
          !isFullscreen && "sm:max-w-6xl sm:h-auto sm:rounded-xl sm:border sm:border-white/10 sm:my-auto"
        )}
      >
        {/* Header */}
        <DialogHeader className="absolute top-0 left-0 w-full z-50 p-4 bg-gradient-to-b from-black/90 via-black/60 to-transparent flex flex-row justify-between items-start pointer-events-none">
          <DialogTitle className="text-white text-base sm:text-lg font-semibold text-shadow-sm pt-2 pl-2 line-clamp-1 pointer-events-auto max-w-[60%] text-left">
            {title}
          </DialogTitle>

          <div className="flex items-center gap-1 pointer-events-auto">
            <TooltipProvider delayDuration={300}>
              {/* GROUP: Action Buttons */}
              <div
                className={cn(
                  "flex items-center gap-1 transition-all duration-500 ease-out",
                  isCurrentLoading
                    ? "opacity-0 translate-x-8 pointer-events-none"
                    : "opacity-100 translate-x-0"
                )}
              >
                {/* 1. Download */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-9 w-9 disabled:opacity-30 disabled:cursor-not-allowed"
                      onClick={handleDownload}
                      disabled={isCurrentError}
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

                {/* 2. Copy Link */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-9 w-9 disabled:opacity-30 disabled:cursor-not-allowed"
                      onClick={handleCopyLink}
                      disabled={isCurrentError}
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

              {/* 3. Fullscreen Toggle */}
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

              {/* Separator */}
              <div className="hidden sm:block w-px h-6 bg-white/10 mx-1"></div>

              {/* 4. Close */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-9 w-9"
                    onClick={() => onOpenChange(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
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

        {/* Carousel Content Slider */}
        <div className="relative w-full h-full">
          <Carousel
            setApi={setApi}
            className="w-full relative h-full"
            opts={{ loop: false, startIndex: initialIndex }}
          >
            <CarouselContent className="h-full m-0">
              {items.map((item, index) => {
                const isLoading = loadingStates[index];
                const isError = errorStates[index];

                return (
                  <CarouselItem key={index} className="p-0 h-full">
                    <div
                      className={cn(
                        "relative w-full flex flex-col justify-center items-center bg-black overflow-hidden",
                        isFullscreen
                          ? "h-[100dvh]"
                          : "h-[100dvh] sm:h-[60vh] md:h-[75vh]"
                      )}
                    >
                      {isLoading && !isError && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-30">
                          <Loader2 className="h-8 w-8 animate-spin text-white" />
                        </div>
                      )}

                      {/* Error State */}
                      {isError && (
                        <div className="flex flex-col items-center justify-center text-center space-y-4 z-20 px-4">
                          <div className="relative">
                            <div className="absolute inset-0 blur-lg bg-red-500/10 rounded-full" />
                            <ImageOff className="h-12 w-12 text-white/20 relative z-10" strokeWidth={1} />
                          </div>
                          
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-white/70">Image Not Found</p>
                            <p className="text-xs text-white/30 max-w-[200px] mx-auto leading-relaxed">
                              The image file may be missing or the link is broken.
                            </p>
                          </div>
                        </div>
                      )}

                      {!isError && (
                        <>
                          <div className="absolute inset-0 z-0">
                            <Image
                              src={item.image}
                              alt=""
                              fill
                              className={cn(
                                "object-cover blur-3xl scale-110 brightness-[0.3]", 
                                isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"
                              )}
                              priority={index === initialIndex}
                            />
                          </div>

                          <div className="relative w-full h-full z-10 p-0 sm:p-4">
                            <Image
                              src={item.image}
                              alt={item.title || title}
                              fill
                              className={cn(
                                "object-contain drop-shadow-2xl transition-all duration-500 ease-in-out", 
                                isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                              )}
                              onLoad={() => handleImageLoad(index)}
                              onError={() => handleImageError(index)}
                              priority={index === initialIndex}
                            />
                          </div>
                        </>
                      )}

                      {/* Caption Overlay - 100% Matched to GalleryModal */}
                      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 sm:p-6 pt-20 sm:pt-24 text-left z-40 pointer-events-none pb-8 sm:pb-6">
                        <p className="text-sm sm:text-base font-medium text-white leading-tight line-clamp-2 sm:line-clamp-none pointer-events-auto">
                          {item.title || item.caption}
                        </p>
                        {item.caption && item.title && (
                          <p className="text-xs sm:text-sm text-gray-300 mt-1 font-normal line-clamp-2 sm:line-clamp-none pointer-events-auto">
                            {item.caption}
                          </p>
                        )}
                        <p className="text-[10px] sm:text-xs text-white/50 text-right mt-2 font-mono pointer-events-auto">
                          {index + 1} / {items.length}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {items.length > 1 && (
              <>
                <CarouselPrevious className="hidden sm:flex left-4 h-10 w-10 z-50 rounded-full border-transparent bg-transparent text-white/70 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed" />
                <CarouselNext className="hidden sm:flex right-4 h-10 w-10 z-50 rounded-full border-transparent bg-transparent text-white/70 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed" />
              </>
            )}
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
