import type { Metadata } from "next";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconArrowRight,
} from "@tabler/icons-react";
import { AnimatedSection } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { OFFICE_LOCATIONS, FAQ_ITEMS } from "@/config/constants";

export const metadata: Metadata = {
  title: "Contact Us | Bhushan & Sons — Advocates & Solicitors",
  description:
    "Get in touch with Bhushan & Sons. Schedule a consultation at our offices in Gurugram and New Delhi.",
  openGraph: {
    title: "Contact Bhushan & Sons | Book a Legal Consultation",
    description: "Offices in Gurugram &amp; New Delhi. Book a confidential consultation today.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Contact"
        titleAccent="Contact"
        description="For career opportunities and other requirements"
        image="/contact-us.png"
        variant="split"
      />

      {/* Main Contact Section — Split Layout */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Left: Contact Info */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <p className="overline mb-4">Get in touch</p>
              <h2 className="heading-section mb-6">Contact Information</h2>

              {/* Contact Details */}
              <div className="flex flex-col gap-5 mb-10">
                <div className="flex items-start gap-4">
                  <IconPhone size={17} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-[11px] text-text-muted uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a href="tel:+919306185801" className="font-body font-semibold text-text hover:text-primary transition-colors">
                      +91 93061 85801
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <IconMail size={17} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-[11px] text-text-muted uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a href="mailto:contact@bhushanandsons.com" className="font-body font-semibold text-text hover:text-primary transition-colors">
                      contact@bhushanandsons.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <p className="font-body text-[11px] font-semibold uppercase tracking-widest text-primary mb-4">
                  Our Offices
                </p>
                <div className="space-y-px bg-border">
                  {OFFICE_LOCATIONS.map((office) => (
                    <div key={office.id} className="flex items-start gap-3 bg-white p-4">
                      <IconMapPin size={15} className="text-secondary mt-1 shrink-0" />
                      <div>
                        <p className="font-body font-semibold text-text text-sm mb-1">
                          {office.city}
                        </p>
                        <p className="font-body text-xs text-text-muted leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection direction="left" delay={0.1} className="lg:col-span-3">
              <div className="border border-border p-8 lg:p-12 bg-white">
                <h3 className="font-heading font-medium text-text text-[1.45rem] mb-1.5">
                  Request a Callback
                </h3>
                <p className="font-body text-text-muted text-[13.8px] mb-6">
                  Complete the form details and a senior attorney will call you back.
                </p>

                <ConsultationForm variant="light" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section (Styled Placeholder) */}
      <section className="h-80 lg:h-96 bg-background-alt relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #16332B 40px, #16332B 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #16332B 40px, #16332B 41px)`,
            }}
          />

          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-primary flex items-center justify-center mb-4 mx-auto">
              <IconMapPin size={22} className="text-white" />
            </div>
            <p className="font-heading font-medium text-text text-lg mb-1">
              SBS Block, District Court, Gurugram
            </p>
            <p className="font-body text-sm text-text-muted mb-4">
              Chamber No- 142
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary border-b border-secondary pb-0.5"
            >
              Open in Google Maps
              <IconArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
            <p className="overline justify-center mb-4">FAQ</p>
            <h2 className="heading-section">Frequently Asked Questions</h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1} className="max-w-3xl mx-auto">
            <FAQAccordion items={FAQ_ITEMS.slice(0, 4)} />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
