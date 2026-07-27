import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;

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

  titleAccent,
  description,
  image,
  imageAlt = "Hero image",
  showCTA = false,
  ctaText = "Request a Consultation",
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
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(102deg, #16332B 30%, rgba(22,51,43,0.55) 100%)" }}
          />
        </div>

        {/* Brass hairline bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] z-10 bg-secondary" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 pt-36">
          {label && (
            <p className="overline !text-white/70 mb-5 animate-fade-in-down">{label}</p>
          )}
          <h1
            className="font-heading font-normal text-white leading-[1.05] max-w-2xl animate-fade-in-up"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            {titleAccent}
          </h1>
          {description && (
            <p className="mt-5 text-white/70 font-body text-[15.5px] leading-relaxed max-w-xl animate-fade-in-up">
              {description}
            </p>
          )}
          {showCTA && (
            <div className="mt-8 animate-fade-in-up">
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
        "relative py-28 lg:py-36 overflow-hidden",
        variant === "dark"
          ? "bg-primary"
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
            className="object-cover opacity-[0.12] grayscale"
            priority
          />
        </div>
      )}

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
        {label && (
          <p className={cn("overline mb-5", variant === "dark" && "!text-secondary-light")}>{label}</p>
        )}
        <h1
          className={cn(
            "font-heading font-normal leading-[1.05] max-w-3xl",
            variant === "dark" ? "text-white" : "text-primary"
          )}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
        >
          {titleAccent}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-5 text-[15.5px] leading-relaxed max-w-2xl font-body",
              variant === "dark" ? "text-white/70" : "text-text-muted"
            )}
          >
            {description}
          </p>
        )}
        {showCTA && (
          <div className="mt-8">
            <Link href={ctaHref}>
              <Button
                variant="secondary"
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
