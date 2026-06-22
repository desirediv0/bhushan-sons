import { AnimatedSection } from "@/components/animations/animated-section";
import { GoldDivider } from "@/components/ui/gold-divider";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { FAQ_ITEMS } from "@/config/constants";

export function FAQSection() {
  return (
    <section className="py-12 lg:py-14 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left: Header */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <div className="lg:sticky lg:top-36">
              <div className="flex flex-col gap-3 mb-6">
                <p className="overline text-secondary">Frequently Asked</p>
                <GoldDivider />
              </div>
              <h2
                className="font-heading font-bold text-primary leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Questions
                <span
                  className="block text-secondary"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500 }}
                >
                  &amp; Answers
                </span>
              </h2>
              <p className="font-body text-text-muted leading-relaxed">
                Have questions about our services or how to get started? Find
                answers to the most common questions below, or contact us
                directly for a personalized response.
              </p>

              <div className="mt-8 p-6 border border-border bg-[#FAFAFA]">
                <p className="font-body text-sm text-text-muted mb-2">
                  Still have questions?
                </p>
                <a
                  href="/contact"
                  className="font-body text-sm font-medium text-secondary hover:text-secondary-hover transition-colors inline-flex items-center gap-1 underline underline-offset-2"
                >
                  Contact us directly →
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Accordion */}
          <AnimatedSection direction="left" delay={0.1} className="lg:col-span-3">
            <FAQAccordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
