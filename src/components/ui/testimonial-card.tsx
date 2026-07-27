import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  variant?: "default" | "dark";
}

export function TestimonialCard({
  testimonial,
  className,
  variant = "default",
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex flex-col h-full p-[clamp(24px,2.8vw,33px)] border",
        variant === "dark"
          ? "bg-white/[0.05] border-white/15"
          : "bg-white border-border",
        className
      )}
    >
      <div
        className="font-heading leading-[0.7] text-secondary opacity-32 mb-3.5"
        style={{ fontSize: "3.2rem", opacity: 0.32 }}
      >
        &ldquo;
      </div>
      <blockquote
        className={cn(
          "font-heading font-light text-[1.06rem] leading-[1.62] mb-5 flex-1",
          variant === "dark" ? "text-white/90" : "text-text"
        )}
      >
        {testimonial.quote}
      </blockquote>
      <figcaption
        className={cn(
          "pt-4 border-t",
          variant === "dark" ? "border-white/15" : "border-border"
        )}
      >
        <b className={cn("block font-heading font-medium text-[1.01rem] not-italic", variant === "dark" ? "text-white" : "text-text")}>
          {testimonial.author}
        </b>
        <span className={cn("font-body text-[11.5px] tracking-[0.11em] uppercase", variant === "dark" ? "text-white/55" : "text-text-muted")}>
          {testimonial.designation}, {testimonial.company}
        </span>
      </figcaption>
    </figure>
  );
}
