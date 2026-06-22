"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "gold";
  size?: "sm" | "md";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "sm", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-body font-medium rounded-full transition-colors",
          size === "sm" && "px-2.5 py-0.5 text-xs",
          size === "md" && "px-3 py-1 text-sm",
          variant === "default" && "bg-primary/10 text-primary",
          variant === "secondary" && "bg-secondary/10 text-secondary",
          variant === "outline" && "border border-border text-text-muted",
          variant === "gold" &&
            "bg-secondary text-primary font-semibold",
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
