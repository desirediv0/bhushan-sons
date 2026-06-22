import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
import { GoldDivider } from "@/components/ui/gold-divider";
import { CTASection } from "@/components/sections/cta-section";
import { FIRM_TIMELINE, FIRM_STATS } from "@/config/constants";

export const metadata: Metadata = {
  title: "About Us | Bhushan & Sons — Advocates & Solicitors",
  description:
    "Established in 1989, Bhushan & Sons has been India's trusted law firm for over 35 years. Learn about our story, mission, values, and the leadership shaping India's legal landscape.",
  openGraph: {
    title: "About Bhushan & Sons | Advocates & Solicitors Since 1989",
    description:
      "35+ years of legal excellence. Learn the story behind one of India's most trusted law firms.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Our Story"
        title="A Legacy Built on"
        titleAccent="Principled Advocacy"
        description="For over 35 years, Bhushan & Sons has stood as one of India's most trusted legal institutions — built on integrity, sustained by excellence, and driven by an unwavering commitment to our clients."
        image="/about.png"
        variant="split"
      />

      {/* Section 01: Firm Story */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <AnimatedSection direction="right">
              <div className="flex flex-col gap-3 mb-8">
                <p className="overline text-secondary">Our Foundation</p>
                <GoldDivider />
              </div>
              <h2
                className="font-heading font-bold text-primary leading-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Founded on Principle,
                <span
                  className="block text-secondary"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500 }}
                >
                  Defined by Results
                </span>
              </h2>
              <div className="space-y-5 font-body text-text-muted leading-relaxed">
                <p>
                  Bhushan & Sons was established in New Delhi in 1989 by Rajesh Bhushan,
                  a first-generation lawyer with a singular vision: to create a law firm
                  that would combine world-class legal expertise with absolute integrity
                  and genuine client service.
                </p>
                <p>
                  From its early days as a boutique litigation practice, the firm grew
                  steadily — expanding into corporate advisory, intellectual property,
                  real estate, and international arbitration as India&apos;s economy opened
                  and legal needs evolved.
                </p>
                <p>
                  Today, with offices in New Delhi, Mumbai, and Bangalore, and a team
                  of over 50 legal professionals drawn from India&apos;s finest institutions
                  and global law schools, Bhushan & Sons remains the trusted counsel
                  of choice for India&apos;s leading corporations, high-net-worth individuals,
                  and international institutions.
                </p>
              </div>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection direction="left" delay={0.15} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80"
                  alt="Bhushan & Sons law library"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 left-12 top-6 border border-secondary/15 -z-10" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 02: Mission / Vision / Values */}
      <section className="py-12 lg:py-14  bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-20">
            <div className="flex flex-col items-center gap-3 mb-6">
              <p className="overline text-secondary">Our Principles</p>
              <GoldDivider align="center" />
            </div>
            <h2
              className="font-heading font-bold text-primary leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              What We Stand For
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid lg:grid-cols-3 gap-0.5 bg-border">
            {[
              {
                label: "Mission",
                title: "To Deliver Justice Through Excellence",
                body:
                  "Our mission is to provide every client — individual or institution — with the same level of strategic, rigorous, and dedicated legal counsel. We measure our success not by the complexity of matters we handle, but by the trust we earn and the results we deliver.",
              },
              {
                label: "Vision",
                title: "India's Most Trusted Legal Partner",
                body:
                  "We aspire to be the preeminent full-service law firm in India: a firm known not just for legal acumen, but for the depth of relationships built over generations of service. We aim to be the first call any client makes when the stakes are highest.",
              },
              {
                label: "Values",
                title: "Integrity, Excellence, Commitment",
                body:
                  "Everything we do is grounded in three core values. Integrity: we are honest even when it is difficult. Excellence: we bring our deepest expertise to every matter. Commitment: we stand fully behind our clients from first brief to final resolution.",
              },
            ].map((item) => (
              <StaggerItem key={item.label} direction="up">
                <div className="group bg-white p-10 h-full hover:bg-[#0A0A0A] transition-all duration-500">
                  <p className="overline text-secondary mb-4 group-hover:text-secondary">
                    {item.label}
                  </p>
                  <h3 className="font-heading font-semibold text-xl text-primary group-hover:text-white transition-colors duration-500 mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <div
                    className="h-px w-8 mb-6 transition-all duration-500 group-hover:w-16 bg-[#111111] group-hover:bg-white"
                  />
                  <p className="font-body text-sm text-text-muted group-hover:text-white/60 transition-colors duration-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 03: Leadership Message — Alternating */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <AnimatedSection direction="right" className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80"
                  alt="Rajesh Bhushan — Founding Partner"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-secondary/30" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-secondary/30" />
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="left" delay={0.15}>
              <div className="flex flex-col gap-3 mb-8">
                <p className="overline text-secondary">Founder&apos;s Message</p>
                <GoldDivider />
              </div>
              <h2
                className="font-heading font-bold text-primary leading-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                A Letter from the
                <span
                  className="block text-secondary"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500 }}
                >
                  Founding Partner
                </span>
              </h2>

              <div className="relative pl-6 border-l-2 border-secondary/30 mb-8">
                <p
                  className="font-accent italic text-xl text-text leading-relaxed"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  &ldquo;When I founded this firm in 1989, I made a simple promise:
                  every client would receive not just legal services, but genuine
                  partnership. That promise remains the bedrock of everything we do.&rdquo;
                </p>
              </div>

              <div className="space-y-4 font-body text-text-muted leading-relaxed mb-8">
                <p>
                  Over three decades later, I am proud to lead a firm that has stayed
                  true to that founding promise while growing into a full-service
                  institution capable of handling the most complex legal challenges of
                  our time.
                </p>
                <p>
                  The legal landscape has changed enormously since 1989 — globalization,
                  technology, regulatory complexity — but the fundamental requirement of
                  clients has not: they need lawyers they can trust absolutely, who bring
                  both expertise and dedication to every matter.
                </p>
              </div>

              <p className="font-heading font-semibold text-primary">Rajesh Bhushan</p>
              <p className="font-body text-sm text-secondary">Founding Partner</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 04: Timeline */}
      <section className="py-12 lg:py-14 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="mb-20">
            <div className="flex flex-col gap-3 mb-6">
              <p className="overline text-white/60">35 Years of Growth</p>
              <GoldDivider />
            </div>
            <h2
              className="font-heading font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Our Journey
              <span
                className="block text-white/80"
                style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500 }}
              >
                Through the Years
              </span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

            <StaggerContainer className="flex flex-col gap-12">
              {FIRM_TIMELINE.map((event) => (
                <StaggerItem key={event.year} direction="right">
                  <div className="flex gap-8 lg:gap-16 items-start">
                    {/* Year */}
                    <div className="shrink-0 w-24 text-right hidden lg:block">
                      <span
                        className="font-heading font-bold text-white/90 text-2xl"
                        style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
                      >
                        {event.year}
                      </span>
                    </div>

                    {/* Dot */}
                    <div className="relative shrink-0 hidden lg:flex items-center justify-center mt-1">
                      <div className="w-3 h-3 rounded-full bg-white ring-4 ring-[#0A0A0A]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <span className="font-heading font-bold text-white/90 text-xl lg:hidden mb-1 block">
                        {event.year}
                      </span>
                      <h3 className="font-heading font-semibold text-white text-xl mb-2">
                        {event.title}
                      </h3>
                      <p className="font-body text-white/60 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 05: Stats */}
      <section className="py-28 bg-white">
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
