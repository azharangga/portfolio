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
  FileText,
  X,
  Loader2,
  ImageOff,
  Maximize2,
  Minimize2,
  Download,
  Link as LinkIcon,
  Check,
  FileIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CertificateModalProps {
  href: string;
  alt: string;
  trigger?: React.ReactNode;
}

// Helper untuk mengekstrak ID dari URL Google Drive
function getGoogleDriveId(url: string) {
  // PERBAIKAN: Menambahkan underscore (_) ke dalam regex agar ID dengan garis bawah terbaca
  const regex =
    /(?:drive\.google\.com\/(?:file\/d\/|open\?id=)|docs\.google\.com\/file\/d\/)([-0-9a-zA-Z_]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function CertificateModal({
  href,
  alt,
  trigger,
}: CertificateModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const driveId = getGoogleDriveId(href);
  const isPdf = href.toLowerCase().endsWith(".pdf");
  
  // Logic: Jika terdeteksi ID Drive, paksa pakai mode 'drive'
  const contentType = driveId ? "drive" : isPdf ? "pdf" : "image";

  const handleCopyLink = () => {
    const fullUrl = href.startsWith("http")
      ? href
      : `${window.location.origin}${href}`;

    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = async () => {
    if (driveId) {
      window.open(
        `https://drive.google.com/uc?export=download&id=${driveId}`,
        "_blank"
      );
      return;
    }

    if (isError) return;

    try {
      const response = await fetch(href);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const ext = isPdf ? "pdf" : "jpg";
      link.download = `certificate-${alt
        .replace(/\s+/g, "-")
        .toLowerCase()}.${ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download", error);
      window.open(href, "_blank");
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
        {trigger ? (
          trigger
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="mt-3 gap-1.5 text-[10px] h-7 font-medium"
          >
            <FileText className="h-3 w-3" />
            Certificate
          </Button>
        )}
      </DialogTrigger>

      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className={cn(
          "bg-black/95 backdrop-blur-xl p-0 overflow-hidden text-white [&>button]:hidden shadow-2xl transition-all duration-300 ease-in-out gap-0",
          "w-screen h-[100dvh] max-w-none m-0 rounded-none border-none",
          !isFullscreen &&
            "sm:max-w-6xl sm:h-[80vh] sm:rounded-xl sm:border sm:border-white/10 sm:my-auto"
        )}
      >
        {/* Header Actions */}
        <DialogHeader className="absolute top-0 left-0 w-full z-50 p-4 bg-gradient-to-b from-black/80 to-transparent flex flex-row justify-between items-start pointer-events-none">
          <DialogTitle className="text-white text-base sm:text-lg font-semibold text-shadow-sm pt-2 pl-2 line-clamp-1 pointer-events-auto max-w-[60%] text-left">
            {alt}
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
                      disabled={isError && !driveId}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipPortal>
                    <TooltipContent
                      side="bottom"
                      className="bg-black text-white border-white/20 text-xs z-[9999]"
                    >
                      <p>Download</p>
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
                      disabled={isError && !driveId}
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
                      <p>{copied ? "Copied!" : "Copy Link"}</p>
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
                      {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
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
                    <p>Close</p>
                  </TooltipContent>
                </TooltipPortal>
              </Tooltip>
            </TooltipProvider>
          </div>
        </DialogHeader>

        {/* KONTEN UTAMA */}
        <div className="w-full h-full flex items-center justify-center bg-black relative">
          {/* === CASE 1 & 2: PDF VIEWER (Drive & Local) === */}
          {(contentType === "drive" || contentType === "pdf") && (
            <div className="w-full h-full pt-16 bg-zinc-950 relative z-10">
              {/* Loading Overlay */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-zinc-950">
                  <Loader2 className="h-10 w-10 animate-spin text-white/50" />
                  <p className="text-xs text-white/50 animate-pulse mt-3 font-medium">
                    Loading document...
                  </p>
                </div>
              )}

              {/* PERBAIKAN: Jika driveId ada, otomatis pakai mode preview yang benar */}
              {driveId ? (
                <iframe
                  src={`https://drive.google.com/file/d/${driveId}/preview`}
                  className="w-full h-full border-none"
                  title={alt}
                  allow="autoplay"
                  onLoad={() => setIsLoading(false)}
                />
              ) : (
                <iframe
                  src={`${href}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-none"
                  title={alt}
                  onLoad={() => setIsLoading(false)}
                />
              )}
            </div>
          )}

          {/* === CASE 3: IMAGE VIEWER === */}
          {contentType === "image" && (
            <>
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
                      Certificate Not Found
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
                      src={href}
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
                      src={href}
                      alt={alt}
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
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}