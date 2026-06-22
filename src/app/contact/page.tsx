import type { Metadata } from "next";
import Link from "next/link";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconArrowRight,
} from "@tabler/icons-react";
import { AnimatedSection } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
import { GoldDivider } from "@/components/ui/gold-divider";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { OFFICE_LOCATIONS, FAQ_ITEMS, SITE_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  title: "Contact Us | Bhushan & Sons — Advocates & Solicitors",
  description:
    "Get in touch with Bhushan & Sons. Schedule a consultation at our offices in New Delhi, Mumbai, or Bangalore. Available Monday to Saturday, 9 AM to 7 PM.",
  openGraph: {
    title: "Contact Bhushan & Sons | Book a Legal Consultation",
    description:
      "Offices in New Delhi, Mumbai & Bangalore. Book a confidential consultation today.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Contact Us"
        title="Let's Discuss"
        titleAccent="Your Legal Needs"
        description="Every matter begins with a conversation. Reach out to schedule a confidential consultation with one of our senior attorneys."
        image="/contact-us.png"
        variant="split"
      />

      {/* Main Contact Section — Split Layout */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Left: Contact Info */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="flex flex-col gap-3 mb-8">
                <p className="overline text-secondary">Get in Touch</p>
                <GoldDivider />
              </div>

              <h2
                className="font-heading font-bold text-primary leading-tight mb-6"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Contact
                <span
                  className="block text-secondary"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500 }}
                >
                  Information
                </span>
              </h2>

              <p className="font-body text-text-muted leading-relaxed mb-10">
                We are available to assist you Monday through Saturday, from
                9:00 AM to 7:00 PM. Emergency consultations are available by
                appointment.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0 mt-0.5">
                    <IconPhone size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="font-body font-medium text-primary hover:text-secondary transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0 mt-0.5">
                    <IconMail size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-body font-medium text-primary hover:text-secondary transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0 mt-0.5">
                    <IconMapPin size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">
                      Head Office
                    </p>
                    <p className="font-body font-medium text-primary">
                      {SITE_CONFIG.address.street}
                    </p>
                    <p className="font-body text-text-muted text-sm">
                      {SITE_CONFIG.address.city} — {SITE_CONFIG.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0 mt-0.5">
                    <IconClock size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">
                      Office Hours
                    </p>
                    <p className="font-body font-medium text-primary">
                      Mon – Sat: 9:00 AM – 7:00 PM
                    </p>
                    <p className="font-body text-text-muted text-sm">
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                  Our Offices
                </p>
                <div className="flex flex-col gap-4">
                  {OFFICE_LOCATIONS.map((office) => (
                    <div
                      key={office.id}
                      className="flex items-start gap-3 p-4 border border-border hover:border-secondary/20 transition-colors"
                    >
                      <div className="shrink-0">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-body font-semibold text-primary text-sm">
                            {office.city}
                          </p>
                          {office.isHeadquarters && (
                            <span className="font-body text-xs text-secondary border border-secondary/20 px-1.5 py-0.5">
                              HQ
                            </span>
                          )}
                        </div>
                        <p className="font-body text-xs text-text-muted leading-relaxed">
                          {office.address}
                        </p>
                        <a
                          href={`tel:${office.phone}`}
                          className="font-body text-xs text-text-muted hover:text-secondary transition-colors mt-1 block"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection direction="left" delay={0.1} className="lg:col-span-3">
              <div className="border border-border p-8 lg:p-12">
                <h3 className="font-heading font-semibold text-primary text-2xl mb-2">
                  Book a Consultation
                </h3>
                <p className="font-body text-text-muted text-sm mb-8">
                  Complete the form below and a senior attorney will be in touch
                  within one business day.
                </p>

                <ConsultationForm variant="light" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section (Styled Placeholder) */}
      <section className="h-80 lg:h-96 bg-[#F0EDE8] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #111111 40px, #111111 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #111111 40px, #111111 41px)`,
            }}
          />

          <div className="relative z-10 text-center">
            <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center mb-4 mx-auto">
              <IconMapPin size={22} className="text-secondary" />
            </div>
            <p className="font-heading font-semibold text-primary text-lg mb-1">
              Connaught Place, New Delhi
            </p>
            <p className="font-body text-sm text-text-muted mb-4">
              12th Floor, Tower A — 110001
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-secondary hover:text-secondary-hover transition-colors underline underline-offset-2"
            >
              Open in Google Maps
              <IconArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex flex-col items-center gap-3 mb-6">
              <p className="overline text-secondary">FAQ</p>
              <GoldDivider align="center" />
            </div>
            <h2
              className="font-heading font-bold text-primary leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1} className="max-w-3xl mx-auto">
            <FAQAccordion items={FAQ_ITEMS.slice(0, 4)} />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
