import Link from "next/link";
import { AnimatedSection } from "@/components/animations/animated-section";
import { SITE_CONFIG } from "@/config/constants";

export function CTASection() {
  return (
    <section className="bg-emerald-band py-[clamp(56px,6.8vw,96px)] text-center">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection direction="up">
          <p className="overline justify-center mb-5">Get in touch</p>

          <h2 className="heading-section !text-white max-w-[20ch] mx-auto mb-4">
            Speak to an advocate about your matter
          </h2>

          <p className="font-body text-white/70 max-w-[58ch] mx-auto mb-8 leading-relaxed">
            Mention your case type for faster assistance. Consultation is by
            prior appointment at the chamber nearest you.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-body font-semibold uppercase tracking-wider text-white text-[13.5px] bg-secondary hover:bg-secondary-hover px-7 py-4 rounded transition-all duration-200 hover:-translate-y-px"
            >
              Request a Consultation
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 font-body font-semibold uppercase tracking-wider text-white text-[13.5px] border border-white/35 hover:bg-white hover:text-primary px-7 py-4 rounded transition-all duration-200"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
