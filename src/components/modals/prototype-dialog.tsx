"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Props {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function PrototypeDialog({ href, label, icon }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="focus:outline-none">
          <Badge className="px-2 py-1 text-[10px] opacity-90 hover:opacity-100 transition flex gap-2 cursor-pointer">
            {icon}
            {label}
          </Badge>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[90vw] sm:h-[90vh] max-w-[95vw] h-[80vh] p-0 flex flex-col gap-0 bg-background overflow-hidden">
        <DialogHeader className="px-4 py-3 border-b flex-shrink-0 h-14 flex justify-center">
          <DialogTitle className="flex items-center gap-2 text-sm md:text-base font-medium">
            {icon}
            {label} Preview
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 w-full relative bg-muted/10">
          <iframe
            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
              href
            )}`}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
