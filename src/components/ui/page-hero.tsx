import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GoldDivider } from "@/components/ui/gold-divider";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  variant?: "dark" | "light" | "split";
  className?: string;
}

export function PageHero({
  label,
  title,
  titleAccent,
  description,
  image,
  imageAlt = "Hero image",
  showCTA = false,
  ctaText = "Book Consultation",
  ctaHref = "/contact",
  variant = "dark",
  className,
}: PageHeroProps) {
  if (variant === "split" && image) {
    return (
      <section className={cn("relative min-h-[55vh] flex items-end overflow-hidden", className)}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 pb-20 pt-40">
          {label && (
            <div className="mb-6 flex flex-col gap-3">
              <p className="overline text-white/60">{label}</p>
              <GoldDivider />
            </div>
          )}
          <h1 className="font-heading text-white font-bold leading-tight max-w-2xl"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            {title}
            {titleAccent && (
              <span className="block text-white/90 italic font-medium" style={{ fontFamily: "var(--font-accent)" }}>
                {titleAccent}
              </span>
            )}
          </h1>
          {description && (
            <p className="mt-6 text-white/70 font-body text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          )}
          {showCTA && (
            <div className="mt-10">
              <Link href={ctaHref}>
                <Button variant="secondary" size="lg">
                  {ctaText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative py-32 lg:py-44",
        variant === "dark"
          ? "bg-[#0A0A0A]"
          : "bg-background-alt border-b border-border",
        className
      )}
    >
      {variant === "dark" && image && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
      )}

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
        {label && (
          <div className="mb-8 flex flex-col gap-3">
            <p className={cn("overline", variant === "dark" ? "text-white/60" : "text-[#111111]")}>{label}</p>
            <GoldDivider />
          </div>
        )}
        <h1
          className={cn(
            "font-heading font-bold leading-tight max-w-3xl",
            variant === "dark" ? "text-white" : "text-primary"
          )}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          {title}
          {titleAccent && (
            <span
              className={cn("block", variant === "dark" ? "text-white/90" : "text-[#111111]")}
              style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
            >
              {titleAccent}
            </span>
          )}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed max-w-2xl font-body",
              variant === "dark" ? "text-white/60" : "text-text-muted"
            )}
          >
            {description}
          </p>
        )}
        {showCTA && (
          <div className="mt-10">
            <Link href={ctaHref}>
              <Button
                variant={variant === "dark" ? "secondary" : "primary"}
                size="lg"
              >
                {ctaText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
