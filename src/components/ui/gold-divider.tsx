import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  align?: "left" | "center" | "right";
  width?: "sm" | "md" | "lg";
}

export function GoldDivider({
  className,
  align = "left",
  width = "md",
}: GoldDividerProps) {
  const widths = {
    sm: "w-10",
    md: "w-16",
    lg: "w-24",
  };

  const alignments = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  return (
    <div
      className={cn(
        "h-[3px] rounded-full",
        widths[width],
        alignments[align],
        className
      )}
      style={{
        background: "linear-gradient(90deg, #7C3AED, #34D399)",
      }}
    />
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionLabel({
  children,
  className,
  align = "left",
}: SectionLabelProps) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center", className)}>
      <p className="overline">{children}</p>
      <GoldDivider align={align === "center" ? "center" : "left"} />
    </div>
  );
}
