import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-8xl font-bold tracking-tighter">404</h1>
      <h2 className="text-2xl font-semibold tracking-tight mt-2">Page Not Found</h2>
      <p className="text-muted-foreground text-lg max-w-[500px] mt-4 mb-8">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "default" }),
          "px-8"
        )}
      >
        Back to Home
      </Link>
    </div>
  );
}