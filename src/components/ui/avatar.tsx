"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const AvatarContext = React.createContext<{
  status: "loading" | "loaded" | "error";
  setStatus: (status: "loading" | "loaded" | "error") => void;
} | null>(null);

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [status, setStatus] = React.useState<"loading" | "loaded" | "error">("loading");
  return (
    <AvatarContext.Provider value={{ status, setStatus }}>
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className
        )}
        {...props}
      />
    </AvatarContext.Provider>
  );
})
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => {
  const context = React.useContext(AvatarContext);

  React.useEffect(() => {
    if (!props.src) {
      context?.setStatus("error");
    }
  }, [props.src]);

  return (
    <>
      {context?.status === "loading" && (
        <div className="absolute inset-0 premium-shimmer" />
      )}
      <AvatarPrimitive.Image
        ref={ref}
        className={cn(
          "aspect-square h-full w-full object-cover transition-opacity duration-300",
          context?.status === "loaded" ? "opacity-100" : "opacity-0",
          className
        )}
        onLoadingStatusChange={(status) => {
          if (status === "loaded") {
            context?.setStatus("loaded");
          } else if (status === "error") {
            context?.setStatus("error");
          }
        }}
        {...props}
      />
    </>
  );
})
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => {
  const context = React.useContext(AvatarContext);

  if (context?.status !== "error") {
    return null;
  }

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  );
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
