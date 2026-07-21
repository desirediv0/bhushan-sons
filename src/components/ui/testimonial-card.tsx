import { IconQuote, IconStarFilled } from "@tabler/icons-react";
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
        "flex flex-col h-full p-8 rounded-2xl border transition-all duration-400 group hover:-translate-y-1",
        variant === "dark"
          ? "bg-white/[0.06] border-white/15 hover:border-white/30 hover:bg-white/[0.1]"
          : "bg-white border-border shadow-card hover:border-violet-300 hover:shadow-card-hover",
        className
      )}
    >
      {/* Quote Icon + stars */}
      <div className="mb-6 flex items-center justify-between">
        <span
          className={cn(
            "w-11 h-11 rounded-full flex items-center justify-center",
            variant === "dark" ? "bg-white/15" : "bg-violet-100"
          )}
        >
          <IconQuote
            size={22}
            className={variant === "dark" ? "text-white" : "text-primary"}
            style={{ transform: "scaleX(-1)" }}
          />
        </span>
        <span className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <IconStarFilled key={i} size={13} className="text-accent-light" />
          ))}
        </span>
      </div>

      {/* Quote */}
      <blockquote
        className={cn(
          "flex-1 font-body italic text-base leading-relaxed mb-6",
          variant === "dark" ? "text-white/85" : "text-text"
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Divider */}
      <div
        className="w-10 h-[3px] rounded-full mb-5 transition-all duration-400 group-hover:w-16"
        style={{ background: "linear-gradient(90deg, #7C3AED, #34D399)" }}
      />

      {/* Author */}
      <div>
        <p
          className={cn(
            "font-heading font-bold text-base",
            variant === "dark" ? "text-white" : "text-text"
          )}
        >
          {testimonial.author}
        </p>
        <p
          className={cn(
            "font-body text-sm mt-0.5",
            variant === "dark" ? "text-white/60" : "text-text-muted"
          )}
        >
          {testimonial.designation}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
