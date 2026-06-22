import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconBrandLinkedin, IconQuote } from "@tabler/icons-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
import { GoldDivider } from "@/components/ui/gold-divider";
import { TeamCard } from "@/components/ui/team-card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { TEAM_MEMBERS } from "@/config/constants";

export const metadata: Metadata = {
  title: "Our Team | Bhushan & Sons — Advocates & Solicitors",
  description:
    "Meet the legal professionals at Bhushan & Sons. Our team of 50+ attorneys brings expertise from Harvard, Oxford, Stanford, NLS and other premier institutions to every client matter.",
  openGraph: {
    title: "Our Team | Bhushan & Sons — Advocates & Solicitors",
    description:
      "50+ expert attorneys with credentials from the world's finest law schools. Meet the team.",
  },
};

export default function TeamPage() {
  const managingPartner = TEAM_MEMBERS[0];
  const seniorTeam = TEAM_MEMBERS.slice(1, 5);
  const associateTeam = TEAM_MEMBERS.slice(5);

  return (
    <>
      {/* Hero */}
      <PageHero
        label="The People"
        title="Meet Our Legal"
        titleAccent="Professionals"
        description="Our strength lies in our people — attorneys who combine world-class credentials with genuine commitment to every client. Each brings exceptional expertise, rigorous preparation, and unwavering dedication."
        image="/our-team.png"
        variant="split"
      />

      {/* Managing Partner Feature */}
      <section className="py-12 lg:py-14 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Portrait */}
            <AnimatedSection direction="right" className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={managingPartner.image}
                  alt={managingPartner.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-secondary/30" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-secondary/30" />
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="left" delay={0.15}>
              <div className="flex flex-col gap-3 mb-8">
                <p className="overline text-white">Founding Partner</p>
                <GoldDivider />
              </div>

              <h2
                className="font-heading font-bold text-white leading-tight mb-2"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                {managingPartner.name}
              </h2>
              <p className="font-body text-white text-sm uppercase tracking-widest mb-8">
                {managingPartner.designation}
              </p>

              {/* Quote */}
              <div className="relative pl-5 border-l border-secondary mb-8">
                <IconQuote
                  size={20}
                  className="text-white/40 mb-2"
                  style={{ transform: "scaleX(-1)" }}
                />
                <p
                  className="font-accent italic text-white/70 text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  &ldquo;Excellence is not an act but a habit. At Bhushan & Sons,
                  we have made excellence the habit of a lifetime.&rdquo;
                </p>
              </div>

              <p className="font-body text-white/60 leading-relaxed mb-8">
                {managingPartner.bio}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: "Experience", value: managingPartner.experience },
                  { label: "Education", value: "Harvard LLM" },
                  { label: "Specialization", value: managingPartner.specialization.join(", ") },
                  { label: "Admitted", value: "Bar Council of Delhi, 1990" },
                ].map((d) => (
                  <div key={d.label} className="border border-white/10 p-4">
                    <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">
                      {d.label}
                    </p>
                    <p className="font-body text-sm text-white">{d.value}</p>
                  </div>
                ))}
              </div>

              {managingPartner.linkedIn && (
                <Link
                  href={managingPartner.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  <IconBrandLinkedin size={18} />
                  LinkedIn Profile
                </Link>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Senior Team */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="mb-16">
            <div className="flex flex-col gap-3 mb-6">
              <p className="overline text-white">Senior Leadership</p>
              <GoldDivider />
            </div>
            <h2
              className="font-heading font-bold text-primary leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Partners & Senior Counsel
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seniorTeam.map((member) => (
              <StaggerItem key={member.id} direction="up">
                <TeamCard member={member} variant="portrait" className="h-full" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Associates */}
      {associateTeam.length > 0 && (
        <section className="py-12 lg:py-14  bg-[#FAFAFA]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-16">
              <div className="flex flex-col gap-3 mb-6">
                <p className="overline text-white">Our Associates</p>
                <GoldDivider />
              </div>
              <h2
                className="font-heading font-bold text-primary leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Senior Associates
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border">
              {associateTeam.map((member) => (
                <StaggerItem key={member.id} direction="up">
                  <TeamCard member={member} variant="horizontal" className="h-full" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Join the Team */}
      <section className="py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="flex flex-col gap-3 mb-6">
                <p className="overline text-white">Careers</p>
                <GoldDivider />
              </div>
              <h2
                className="font-heading font-bold text-primary leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Join Our
                <span
                  className="block text-white"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500 }}
                >
                  Legal Team
                </span>
              </h2>
              <p className="font-body text-text-muted leading-relaxed mb-8">
                We are always looking for exceptional legal talent. If you share our
                commitment to excellence, integrity, and client service, we would
                love to hear from you.
              </p>
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="group bg-primary hover:bg-secondary text-white gap-3"
                >
                  Send Your CV
                  <IconArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "35+", label: "Years of History" },
                  { stat: "50+", label: "Legal Professionals" },
                  { stat: "3", label: "Office Locations" },
                  { stat: "Top 10", label: "Law Firm in India" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-border p-8 text-center hover:border-secondary/30 transition-colors"
                  >
                    <p className="font-heading text-3xl font-bold text-primary mb-2">
                      {item.stat}
                    </p>
                    <p className="font-body text-xs text-text-muted uppercase tracking-widest">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
