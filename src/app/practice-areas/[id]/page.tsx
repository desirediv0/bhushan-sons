import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  IconArrowRight,
  IconArrowLeft,
  IconCheck,
} from "@tabler/icons-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
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
        ctaText={area.ctaLabel || "Request a Consultation"}
        ctaHref="/contact"
      />

      {/* Back link */}
      <div className="bg-white border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-4">
          <Link
            href="/practice-areas"
            className="group inline-flex items-center gap-2 font-body text-[13px] font-medium text-text-muted hover:text-primary transition-colors"
          >
            <IconArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Back to All Practice Areas
          </Link>
        </div>
      </div>

      {/* Overview + Key Services */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <AnimatedSection direction="right" className="lg:col-span-2">
              <p className="overline mb-4">Overview</p>
              <p className="body-large mb-6">{area.description}</p>

              {area.benefits && (
                <div className="border-l-2 border-secondary bg-background-alt p-6">
                  <p className="font-body text-[11px] font-bold uppercase tracking-widest text-primary mb-4">
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
              <p className="overline mb-4">Key Services</p>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 hairline-grid">
                {area.services.map((service) => (
                  <StaggerItem key={service} direction="up">
                    <div className="flex items-start gap-3 bg-white p-4 h-full">
                      <IconCheck size={16} className="text-secondary mt-1 shrink-0" />
                      <span className="font-body text-sm text-text font-medium leading-snug">
                        {service}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
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
              <p className="overline justify-center mb-4">Is this for you?</p>
              <h2 className="heading-section">This Service Is Designed For You If You Are</h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 hairline-grid max-w-4xl mx-auto">
              {area.audience.map((point, i) => (
                <StaggerItem key={point} direction="up">
                  <div className="flex items-start gap-4 bg-white p-5 h-full">
                    <span className="font-heading font-light text-secondary text-2xl leading-none shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-sm text-text leading-relaxed pt-0.5">{point}</span>
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
                  <p className="overline mb-4">Why clients trust us</p>
                  <div className="space-y-4">
                    {area.trustPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3 border-b border-border pb-4">
                        <IconCheck size={16} className="text-secondary mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-text-muted leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {area.outcomes && (
                <AnimatedSection direction="left" delay={0.1}>
                  <p className="overline mb-4">What changes once we step in</p>
                  <div className="space-y-4">
                    {area.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3 border-b border-border pb-4">
                        <IconCheck size={16} className="text-secondary mt-0.5 shrink-0" />
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
                  <p className="overline mb-4">Laws that apply</p>
                  <div className="flex flex-wrap gap-2.5">
                    {area.statutes.map((statute) => (
                      <span
                        key={statute}
                        className="font-body text-[13.5px] text-text bg-white border border-border px-4 py-2"
                      >
                        {statute}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {area.documents && (
                <AnimatedSection direction="left" delay={0.1}>
                  <p className="overline mb-4">Documents we&apos;ll need</p>
                  <div className="space-y-px bg-border">
                    {area.documents.map((doc) => (
                      <div
                        key={doc}
                        className="flex items-center justify-between gap-3 bg-white px-4 py-3"
                      >
                        <span className="font-body text-sm text-text">{doc}</span>
                        <span className="font-body text-[10px] font-bold uppercase tracking-wider text-secondary shrink-0">
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
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
              <p className="overline justify-center mb-4">Our process</p>
              <h2 className="heading-section">How We Handle Your Matter</h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 hairline-grid">
              {area.process.map((step, i) => (
                <StaggerItem key={step.phase} direction="up">
                  <div className="bg-white p-[clamp(23px,2.7vw,33px)] h-full">
                    <span className="font-heading font-extralight text-secondary text-[2.3rem] leading-none block mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-heading font-medium text-text text-[1.14rem] mb-2">
                      {step.phase}
                    </h4>
                    <p className="font-body text-[14.1px] text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14 lg:py-20 bg-background-alt">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            <AnimatedSection direction="right" className="lg:col-span-2">
              <p className="overline mb-4">Frequently asked</p>
              <p className="body-large mb-8">
                Common questions about {area.title.toLowerCase()}. Still unsure where you stand?
                Speak with an attorney directly.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group gap-3">
                  {area.ctaLabel || "Request a Consultation"}
                  <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1} className="lg:col-span-3">
              <div className="bg-white border border-border px-6">
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
              <p className="overline mb-4">Explore more</p>
              <h3 className="font-heading font-medium text-text text-2xl">
                Other Practice Areas
              </h3>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 hairline-grid">
              {otherAreas.map((other) => (
                <StaggerItem key={other.id} direction="up">
                  <Link
                    href={`/practice-areas/${other.id}`}
                    className="group block h-full bg-white p-6 relative transition-colors duration-300 hover:bg-[#FBFAF7]"
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                    <h4 className="font-heading font-medium text-text text-base mb-2">
                      {other.title}
                    </h4>
                    <p className="font-body text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                      {other.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-body text-[11.5px] font-semibold uppercase tracking-wider text-primary border-b border-secondary pb-0.5">
                      Learn More
                      <IconArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </span>
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
