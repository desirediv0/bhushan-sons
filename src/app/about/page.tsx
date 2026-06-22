import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
import { GoldDivider } from "@/components/ui/gold-divider";
import { CTASection } from "@/components/sections/cta-section";
import { FIRM_STATS } from "@/config/constants";

export const metadata: Metadata = {
  title: "About Us | Bhushan & Sons — Advocates & Solicitors",
  description:
    "Learn about our journey and legal leadership at Bhushan & Sons. Guided by Adv. Sunil Kr. Yadav and a client-centered vision.",
  openGraph: {
    title: "About Bhushan & Sons | Advocates & Solicitors",
    description:
      "Learn about our journey and legal leadership at Bhushan & Sons.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="About Us"
        titleAccent="About Us"
        description="Learn about our journey, our values, and the expert leadership shaping supportive family legal practice."
        image="/about.png"
        variant="split"
      />

      {/* Section 01: Adv. Sunil Kr. Yadav profile */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image placeholder */}
            <AnimatedSection direction="right" className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/sunil-square.jpeg"
                  alt="Adv. Sunil Kr. Yadav"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 left-12 top-6 border border-secondary/15 -z-10" />
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="left" delay={0.15}>
              <div className="flex flex-col gap-3 mb-8">
                <p className="overline text-white">Leadership</p>
                <GoldDivider />
              </div>
              <h2
                className="font-heading font-bold text-primary leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Adv. Sunil Kr. Yadav
              </h2>
              <p className="font-body text-white text-sm uppercase tracking-widest mb-6">
                Senior Legal Counsel
              </p>
              <div className="font-body text-text-muted leading-relaxed space-y-4">
                <p>
                  With an exceptional legal career spanning over two decades, Adv. Sunil Kr. Yadav stands as a pillar of legal excellence within Bhushan & Sons. A distinguished practitioner before the Hon&apos;ble Supreme Court of India, various High Courts, and specialized Tribunals, Adv. Yadav has established an impeccable reputation for his jurisprudential acumen and strategic advocacy.
                </p>
                <p>
                  His comprehensive expertise encompasses diverse practice areas including civil litigation, criminal defense, matrimonial disputes, and corporate legal counsel. Adv. Yadav&apos;s client representations are characterized by meticulous preparation, ethical counsel, and unwavering commitment to protecting his clients&apos; legal interests.
                </p>
                <p>
                  His remarkable ability to navigate complex legal frameworks while maintaining the highest professional standards has resulted in numerous landmark judgments and favorable settlements. Dedicated to the principle that justice must be both accessible and effectively delivered, Adv. Yadav combines scholarly legal knowledge with practical wisdom to provide solutions that stand the test of both legal scrutiny and human compassion.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 02: Journey / Pillars */}
      <section className="py-12 lg:py-14 bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-20">
            <div className="flex flex-col items-center gap-3 mb-6">
              <p className="overline text-white">Our Path</p>
              <GoldDivider align="center" />
            </div>
            <h2
              className="font-heading font-bold text-primary leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Learn About Our Journey
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Founded with a Vision of Justice",
                body: "Our journey began with a simple yet powerful vision: to make family law accessible, fair, and supportive for everyone. We are committed to helping families navigate complex legal matters with ease and confidence.",
              },
              {
                title: "Years of Expertise in Family Law",
                body: "With decades of combined experience, our team has handled thousands of family law cases, from divorce and child custody to inheritance and domestic violence issues. We have the knowledge to guide you through any legal challenge.",
              },
              {
                title: "Client-Centered Approach",
                body: "At the heart of our journey is a dedication to our clients. We listen carefully, understand your needs, and offer tailored legal solutions that align with your family’s unique circumstances.",
              },
              {
                title: "Solid Law Practice",
                body: "At our law firm, we pride ourselves on having a solid and reputable legal practice. Our team of lawyers brings a wealth of knowledge and experience to every case we handle.",
              },
            ].map((item, index) => (
              <StaggerItem key={index} direction="up">
                <div className="bg-white p-8 h-full border border-border flex flex-col hover:shadow-md transition-shadow">
                  <span className="font-heading text-black text-2xl font-bold mb-4 block">0{index + 1}</span>
                  <h3 className="font-heading font-semibold text-lg text-primary mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 03: Stats */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {FIRM_STATS.map((stat) => (
              <StaggerItem key={stat.label} direction="up">
                <div className="bg-white p-10 text-center">
                  <p
                    className="font-heading font-bold text-primary leading-none mb-2"
                    style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                  >
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="font-body text-xs text-text-muted uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
