import Link from "next/link";
import { IconArrowRight, IconCalendar } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/animations/animated-section";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-12 lg:py-14 bg-[#0A0A0A] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-secondary/30" />
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-px opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, #FFFFFF, transparent)" }}
        />

        {/* Corner decorations */}
        <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-white/50" />
        <div className="absolute top-10 right-10 w-16 h-16 border-t border-r border-white/50" />
        <div className="absolute bottom-10 left-10 w-16 h-16 border-b border-l border-white/50" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-white/50" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection direction="up">
          <p className="overline text-white/60 mb-6">Begin Your Journey</p>

          <h2
            className="font-heading font-bold text-white leading-tight mx-auto max-w-4xl mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Ready to Protect What
            <span
              className="block text-white/80"
              style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500 }}
            >
              Matters Most?
            </span>
          </h2>

          <p className="font-body text-white/60 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Schedule a confidential consultation with our expert legal allies.
            We will assess your situation and chart the clearest path forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="xl"
                className="group gap-3 px-10 bg-[#111111] border border-white text-white hover:bg-[#333333]"
              >
                <IconCalendar size={20} />
                Get Callback
                <IconArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
            <a href={`tel:+919306185801`}>
              <Button
                variant="ghost"
                size="xl"
                className="text-white/70 hover:text-white hover:bg-white/5 gap-3 px-10"
              >
                +91-9306185801
              </Button>
            </a>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}
