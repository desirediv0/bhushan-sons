import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconCheck, IconArrowRight } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
import { GoldDivider } from "@/components/ui/gold-divider";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { PRACTICE_AREAS } from "@/config/constants";

export const metadata: Metadata = {
  title: "Services | Bhushan & Sons — Advocates & Solicitors",
  description:
    "Comprehensive legal services across Civil, Criminal, Family, Corporate, Real Estate, Immigration, Labour, Banking, IP, Commercial, and Dispute Resolution.",
  openGraph: {
    title: "Our Services | Bhushan & Sons",
    description:
      "Expert legal counsel across 11 practice areas.",
  },
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Services"
        title="Home"
        titleAccent="Service"
        description="Our Services"
        image="/practice-areas.png"
        variant="split"
      />

      {/* Practice Areas — Alternating Sections */}
      {PRACTICE_AREAS.map((area, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={area.id}
            id={area.id}
            className={`py-12 lg:py-14 ${isEven ? "bg-white" : "bg-[#FAFAFA]"} overflow-hidden`}
          >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center`}
              >
                {/* Image — alternates sides */}
                <AnimatedSection
                  direction={isEven ? "right" : "left"}
                  className={`relative ${isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={
                        area.image ||
                        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
                      }
                      alt={area.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Index number */}
                  <div
                    className={`absolute -top-6 ${isEven ? "-left-4" : "-right-4"} font-heading font-bold text-border select-none pointer-events-none`}
                    style={{
                      fontSize: "7rem",
                      lineHeight: 1,
                      fontFamily: "var(--font-accent)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection
                  direction={isEven ? "left" : "right"}
                  delay={0.15}
                  className={isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"}
                >
                  <div className="flex flex-col gap-3 mb-8">
                    <p className="overline text-white">Practice Area</p>
                    <GoldDivider />
                  </div>

                  <h2
                    className="font-heading font-bold text-primary leading-tight mb-6"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                  >
                    {area.title}
                  </h2>

                  <p className="font-body text-text-muted leading-relaxed text-lg mb-10">
                    {area.description}
                  </p>

                  {/* Services */}
                  <div className="mb-10">
                    <p className="font-body text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                      Key Services
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {area.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-3 py-2 border-b border-border"
                        >
                          <div className="w-4 h-4 shrink-0 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          </div>
                          <span className="font-body text-sm text-text-muted">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  {area.benefits && (
                    <div className="bg-[#0A0A0A] p-6 mb-8">
                      <p className="font-body text-xs font-semibold uppercase tracking-widest text-white mb-4">
                        Why Choose Us
                      </p>
                      <div className="space-y-2">
                        {area.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-3">
                            <IconCheck
                              size={14}
                              className="text-white mt-1 shrink-0"
                            />
                            <span className="font-body text-sm text-white/70">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className="group bg-primary hover:bg-secondary text-white gap-3"
                    >
                      Consult an Expert
                      <IconArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <CTASection />
    </>
  );
}
