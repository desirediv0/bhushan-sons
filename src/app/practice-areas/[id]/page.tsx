import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  IconArrowRight,
  IconArrowLeft,
  IconCircleCheck,
  IconUsersGroup,
  IconShieldCheck,
  IconBooks,
  IconFileCheck,
  IconChecklist,
  IconCheck,
} from "@tabler/icons-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
import { GoldDivider } from "@/components/ui/gold-divider";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { CTASection } from "@/components/sections/cta-section";
import { PRACTICE_AREAS, FAQ_ITEMS } from "@/config/constants";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({ id: area.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const area = PRACTICE_AREAS.find((a) => a.id === id);
  if (!area) return {};

  return {
    title: `${area.title} | Bhushan & Sons — Advocates & Solicitors`,
    description: area.tagline || area.description,
    openGraph: {
      title: `${area.title} | Bhushan & Sons`,
      description: area.tagline || area.description,
    },
  };
}

const CHIP_CYCLE = [
  { chip: "bg-violet-100", icon: "text-violet-600" },
  { chip: "bg-emerald-100", icon: "text-emerald-600" },
  { chip: "bg-amber-100", icon: "text-amber-600" },
  { chip: "bg-sky-100", icon: "text-sky-600" },
];

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { id } = await params;
  const area = PRACTICE_AREAS.find((a) => a.id === id);

  if (!area) {
    notFound();
  }

  const otherAreas = PRACTICE_AREAS.filter((a) => a.id !== area.id).slice(0, 3);
  const faqItems = area.faqs?.length
    ? area.faqs.map((f, i) => ({ id: `${area.id}-faq-${i}`, ...f }))
    : FAQ_ITEMS.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <PageHero
        label="Practice Area"
        titleAccent={area.title}
        description={area.tagline || area.description}
        image={area.image}
        imageAlt={area.title}
        variant="split"
        showCTA
        ctaText={area.ctaLabel || "Consult an Expert"}
        ctaHref="/contact"
      />

      {/* Back link */}
      <div className="bg-white border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-4">
          <Link
            href="/practice-areas"
            className="group inline-flex items-center gap-2 font-body text-sm font-medium text-text-muted hover:text-primary transition-colors"
          >
            <IconArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Back to All Practice Areas
          </Link>
        </div>
      </div>

      {/* Overview + Key Services */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="flex flex-col gap-3 mb-6">
                <p className="overline">Overview</p>
                <GoldDivider />
              </div>
              <p className="font-body text-text-muted leading-relaxed text-base mb-8">
                {area.description}
              </p>

              {area.benefits && (
                <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6">
                  <p className="font-body text-xs font-bold uppercase tracking-widest text-primary mb-4">
                    Why Choose Us
                  </p>
                  <div className="space-y-3">
                    {area.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <IconCheck size={16} className="text-secondary mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-text">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1} className="lg:col-span-3">
              <div className="flex flex-col gap-3 mb-6">
                <p className="overline">Key Services</p>
                <GoldDivider />
              </div>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {area.services.map((service, i) => {
                  const c = CHIP_CYCLE[i % CHIP_CYCLE.length];
                  return (
                    <StaggerItem key={service} direction="up">
                      <div className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                        <span className={`w-9 h-9 rounded-lg ${c.chip} flex items-center justify-center shrink-0`}>
                          <IconCheck size={16} className={c.icon} />
                        </span>
                        <span className="font-body text-sm text-text font-medium leading-snug pt-1.5">
                          {service}
                        </span>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Is This For You? */}
      {area.audience && (
        <section className="py-14 lg:py-20 bg-background-alt">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex flex-col items-center gap-3 mb-6">
                <p className="overline">Is This For You?</p>
                <GoldDivider align="center" />
              </div>
              <h2
                className="font-heading font-bold text-text leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                This Service Is Designed For{" "}
                <span className="text-violet-gradient">People Like You</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {area.audience.map((point, i) => (
                <StaggerItem key={point} direction="up">
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-card">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-body text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="font-body text-sm text-text leading-relaxed pt-1">{point}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Why Clients Trust Us + Outcomes */}
      {(area.trustPoints || area.outcomes) && (
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {area.trustPoints && (
                <AnimatedSection direction="right">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center">
                      <IconUsersGroup size={22} className="text-violet-600" />
                    </span>
                    <h3 className="font-heading font-bold text-text text-xl">
                      Why Clients Trust Us
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {area.trustPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <IconShieldCheck size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-text-muted leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {area.outcomes && (
                <AnimatedSection direction="left" delay={0.1}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <IconCircleCheck size={22} className="text-emerald-600" />
                    </span>
                    <h3 className="font-heading font-bold text-text text-xl">
                      What Changes Once We Step In
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {area.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3">
                        <IconCheck size={18} className="text-secondary mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-text-muted leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Statutes + Documents */}
      {(area.statutes || area.documents) && (
        <section className="py-14 lg:py-20 bg-background-alt">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {area.statutes && (
                <AnimatedSection direction="right">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center">
                      <IconBooks size={22} className="text-sky-600" />
                    </span>
                    <h3 className="font-heading font-bold text-text text-xl">
                      Laws That Apply
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {area.statutes.map((statute) => (
                      <span
                        key={statute}
                        className="font-body text-sm text-text bg-white border border-border rounded-full px-4 py-2"
                      >
                        {statute}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {area.documents && (
                <AnimatedSection direction="left" delay={0.1}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center">
                      <IconFileCheck size={22} className="text-amber-600" />
                    </span>
                    <h3 className="font-heading font-bold text-text text-xl">
                      Documents We&apos;ll Need
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {area.documents.map((doc) => (
                      <div
                        key={doc}
                        className="flex items-center justify-between gap-3 rounded-xl border border-border bg-white px-4 py-3"
                      >
                        <span className="font-body text-sm text-text">{doc}</span>
                        <span className="font-body text-2xs font-bold uppercase tracking-wider text-secondary bg-emerald-50 px-2.5 py-1 rounded-full shrink-0">
                          Required
                        </span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {area.process && (
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex flex-col items-center gap-3 mb-6">
                <p className="overline">Our Process</p>
                <GoldDivider align="center" />
              </div>
              <h2
                className="font-heading font-bold text-text leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                How We Handle{" "}
                <span className="text-violet-gradient">Your Matter</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {area.process.map((step, i) => {
                const c = CHIP_CYCLE[i % CHIP_CYCLE.length];
                return (
                  <StaggerItem key={step.phase} direction="up">
                    <div className="relative h-full rounded-2xl border border-border bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400">
                      <span className={`inline-flex w-9 h-9 rounded-full ${c.chip} ${c.icon} items-center justify-center font-body font-bold text-sm mb-4`}>
                        {i + 1}
                      </span>
                      <h4 className="font-heading font-semibold text-text text-base mb-2">
                        {step.phase}
                      </h4>
                      <p className="font-body text-sm text-text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14 lg:py-20 bg-background-alt">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center">
                  <IconChecklist size={22} className="text-violet-600" />
                </span>
                <h3 className="font-heading font-bold text-text text-xl">Frequently Asked</h3>
              </div>
              <p className="font-body text-text-muted leading-relaxed">
                Common questions about {area.title.toLowerCase()}. Still unsure where you stand?
                Speak with an attorney directly.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group gap-3 rounded-full">
                    {area.ctaLabel || "Consult an Expert"}
                    <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1} className="lg:col-span-3">
              <div className="rounded-2xl bg-white border border-border px-6">
                <FAQAccordion items={faqItems} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Explore Other Practice Areas */}
      {otherAreas.length > 0 && (
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-10">
              <p className="overline mb-3">Explore More</p>
              <h3 className="font-heading font-bold text-text text-2xl">
                Other Practice Areas
              </h3>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherAreas.map((other) => (
                <StaggerItem key={other.id} direction="up">
                  <Link href={`/practice-areas/${other.id}`}>
                    <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400">
                      <h4 className="font-heading font-semibold text-text text-base mb-2 group-hover:text-primary transition-colors">
                        {other.title}
                      </h4>
                      <p className="font-body text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                        {other.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary">
                        Learn More
                        <IconArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
