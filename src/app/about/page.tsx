import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
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

const JOURNEY = [
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
    body: "At the heart of our journey is a dedication to our clients. We listen carefully, understand your needs, and offer tailored legal solutions that align with your family's unique circumstances.",
  },
  {
    title: "Solid Law Practice",
    body: "At our law firm, we pride ourselves on having a solid and reputable legal practice. Our team of lawyers brings a wealth of knowledge and experience to every case we handle.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="About Us"
        titleAccent="About Us"
        description="Learn about our journey, our values, and the expert leadership shaping our legal practice."
        image="/about.png"
        variant="split"
      />

      {/* Section 01: Adv. Sunil Kr. Yadav profile */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="right" className="relative">
              <div className="absolute inset-[-14px_-14px_14px_14px] border border-secondary -z-0" />
              <div className="relative z-10 aspect-[3/4] overflow-hidden">
                <Image src="/sunil-square.jpeg" alt="Adv. Sunil Kr. Yadav" fill className="object-cover object-top" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.15}>
              <p className="overline mb-4">Leadership</p>
              <h2 className="heading-section mb-2">Adv. Sunil Kr. Yadav</h2>
              <p className="font-body text-secondary font-semibold text-[11px] uppercase tracking-[0.18em] mb-6">
                Senior Legal Counsel
              </p>
              <div className="body-large max-w-none space-y-4">
                <p>
                  With an exceptional legal career spanning over two decades, Adv. Sunil Kr. Yadav stands as a pillar of legal excellence within Bhushan &amp; Sons. A distinguished practitioner before various High Courts and specialized Tribunals, Adv. Yadav has established an impeccable reputation for his jurisprudential acumen and strategic advocacy.
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

      {/* Section 02: Journey */}
      <section className="py-14 lg:py-20 bg-background-alt">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
            <p className="overline justify-center mb-4">Our path</p>
            <h2 className="heading-section">Learn About Our Journey</h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 hairline-grid">
            {JOURNEY.map((item, index) => (
              <StaggerItem key={item.title} direction="up">
                <div className="bg-white p-[clamp(22px,2.4vw,29px)] h-full">
                  <span className="font-heading font-extralight text-secondary text-[2.3rem] leading-none block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading font-medium text-text text-[1.1rem] mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-[13.9px] text-text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 03: Stats */}
      <section className="bg-primary">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 hairline-grid-dark">
            {FIRM_STATS.map((stat) => (
              <StaggerItem key={stat.label} direction="up">
                <div className="bg-primary p-[clamp(24px,3vw,40px)] text-center h-full">
                  <p
                    className="font-heading font-light text-secondary-light leading-none mb-3"
                    style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
                  >
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="font-body text-[11px] text-white/60 uppercase tracking-[0.18em]">
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
