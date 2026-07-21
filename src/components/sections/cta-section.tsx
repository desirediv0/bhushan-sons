import Link from "next/link";
import { IconArrowRight, IconCalendar, IconPhone } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/animations/animated-section";

export function CTASection() {
  return (
    <section className="relative py-16 lg:py-20 bg-emerald-band overflow-hidden">
      {/* Soft orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-30 animate-drift"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection direction="up">
          <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-white/80 mb-6">
            Begin Your Journey
          </p>

          <h2
            className="font-heading font-extrabold text-white leading-tight mx-auto max-w-3xl mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            Ready to Protect What{" "}
            <span className="text-emerald-100">Matters Most?</span>
          </h2>

          <p className="font-body text-white/85 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Schedule a confidential consultation with our expert legal allies.
            We will assess your situation and chart the clearest path forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 font-body font-semibold text-emerald-700 bg-white hover:bg-emerald-50 px-9 py-4 text-sm rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <IconCalendar size={18} />
              Get Callback
              <IconArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="tel:+919306185801"
              className="inline-flex items-center justify-center gap-3 font-body font-medium text-white bg-white/10 hover:bg-white/20 border border-white/30 px-9 py-4 text-sm rounded-full transition-all duration-300"
            >
              <IconPhone size={18} />
              +91-9306185801
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
