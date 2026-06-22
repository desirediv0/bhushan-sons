import { IconQuote } from "@tabler/icons-react";
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
    <div
      className={cn(
        "flex flex-col h-full p-8 lg:p-10 border transition-all duration-500 group",
        variant === "dark"
          ? "bg-white/5 border-white/10 hover:border-secondary/30"
          : "bg-white border-border hover:border-secondary/30 hover:shadow-lg",
        className
      )}
    >
      {/* Quote Icon */}
      <div className="mb-8">
        <IconQuote
          size={32}
          className="text-secondary opacity-60"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>

      {/* Quote */}
      <blockquote
        className={cn(
          "flex-1 font-accent italic text-xl leading-relaxed mb-8",
          variant === "dark" ? "text-white/80" : "text-text",
          "font-medium"
        )}
        style={{ fontFamily: "var(--font-accent)" }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Divider */}
      <div
        className="w-10 h-px mb-6 transition-all duration-500 group-hover:w-16"
        style={{ background: "linear-gradient(90deg, #111111, transparent)" }}
      />

      {/* Author */}
      <div>
        <p
          className={cn(
            "font-heading font-semibold text-base",
            variant === "dark" ? "text-white" : "text-primary"
          )}
        >
          {testimonial.author}
        </p>
        <p
          className={cn(
            "font-body text-sm mt-1",
            variant === "dark" ? "text-white/50" : "text-text-muted"
          )}
        >
          {testimonial.designation}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
