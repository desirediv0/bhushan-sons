import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  overline,
  title,
  description,
  alignment = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        alignment === "center" && "mx-auto text-center",
        alignment === "left" && "text-left",
        className
      )}
    >
      {overline && <p className="overline mb-3">{overline}</p>}
      <h2 className={cn("heading-section", titleClassName)}>{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-text-muted body-large",
            alignment === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "gold-line-center mt-6",
          alignment === "left" && "mx-0"
        )}
      />
    </div>
  );
}
