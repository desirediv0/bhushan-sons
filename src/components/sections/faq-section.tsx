import { AnimatedSection } from "@/components/animations/animated-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { FAQ_ITEMS } from "@/config/constants";

export function FAQSection() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <p className="overline justify-center mb-4">Frequently asked</p>
          <h2 className="heading-section mb-4">Questions &amp; Answers</h2>
          <p className="body-large mx-auto">
            Common questions about our services. For anything specific to your
            matter, please arrange a consultation.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.1} className="max-w-[920px] mx-auto">
          <FAQAccordion items={FAQ_ITEMS} />
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="font-body text-sm font-semibold text-primary border-b border-secondary pb-0.5"
            >
              Still have questions? Contact us directly →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
