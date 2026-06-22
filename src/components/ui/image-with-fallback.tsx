"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends HTMLAttributes<HTMLDivElement> {
  alt: string;
  fallback?: React.ReactNode;
  aspectRatio?: "square" | "video" | "portrait";
}

const ImageWithFallback = forwardRef<HTMLDivElement, ImageWithFallbackProps>(
  (
    {
      alt,
      fallback,
      aspectRatio = "square",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-background-alt",
          aspectRatio === "square" && "aspect-square",
          aspectRatio === "video" && "aspect-video",
          aspectRatio === "portrait" && "aspect-[3/4]",
          className
        )}
        {...props}
      >
        {fallback || (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-3xl text-white/40">
              {alt
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
          </div>
        )}
      </div>
    );
  }
);

ImageWithFallback.displayName = "ImageWithFallback";

export { ImageWithFallback };
