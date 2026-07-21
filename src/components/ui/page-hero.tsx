import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GoldDivider } from "@/components/ui/gold-divider";
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
          {/* Navy overlay with subtle gold tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-indigo-900/50" />
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(52,211,153,0.20), transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(124,58,237,0.25), transparent 50%)" }}
          />
        </div>

        {/* Gold hairline bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] z-10 bg-gradient-to-r from-primary via-primary-light to-secondary" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 pb-20 pt-40">
          {label && (
            <div className="mb-6 flex flex-col gap-3 animate-fade-in-down">
              <p className="overline !text-white/80">{label}</p>
              <GoldDivider />
            </div>
          )}
          <h1 className="font-heading text-white font-bold leading-tight max-w-2xl animate-fade-in-up"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>

            {titleAccent && (
              <span className="block text-gold-gradient font-bold">
                {titleAccent}
              </span>
            )}
          </h1>
          {description && (
            <p className="mt-6 text-white/75 font-body text-lg leading-relaxed max-w-xl animate-fade-in-up">
              {description}
            </p>
          )}
          {showCTA && (
            <div className="mt-10 animate-fade-in-up">
              <Link href={ctaHref}>
                <Button variant="secondary" size="lg" className="rounded-full">
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
        "relative py-32 lg:py-44 overflow-hidden",
        variant === "dark"
          ? "bg-navy-texture"
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

      {variant === "dark" && (
        <div
          className="pointer-events-none absolute -top-24 right-0 w-[560px] h-[560px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #34D399, transparent 70%)" }}
        />
      )}

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
        {label && (
          <div className="mb-8 flex flex-col gap-3">
            <p className="overline">{label}</p>
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

          {titleAccent && (
            <span
              className={cn("block", variant === "dark" ? "text-gold-gradient" : "text-violet-gradient")}
              style={{}}
            >
              {titleAccent}
            </span>
          )}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed max-w-2xl font-body",
              variant === "dark" ? "text-white/70" : "text-text-muted"
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
                className="rounded-full"
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
