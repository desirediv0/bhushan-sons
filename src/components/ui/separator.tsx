import { cn } from "@/lib/utils";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "gold" | "gradient";
  className?: string;
}

export function Separator({
  orientation = "horizontal",
  variant = "default",
  className,
}: SeparatorProps) {
  return (
    <div
      role="separator"
      className={cn(
        "shrink-0",
        orientation === "horizontal" && "h-px w-full",
        orientation === "vertical" && "w-px h-full",
        variant === "default" && "bg-border",
        variant === "gold" && "bg-secondary",
        variant === "gradient" &&
          "bg-gradient-to-r from-transparent via-border to-transparent",
        className
      )}
    />
  );
}
