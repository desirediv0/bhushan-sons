import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
import { TeamCard } from "@/components/ui/team-card";
import { CTASection } from "@/components/sections/cta-section";
import { TEAM_MEMBERS } from "@/config/constants";

export const metadata: Metadata = {
  title: "Our Team | Bhushan & Sons — Advocates & Solicitors",
  description:
    "Meet our expert legal team led by Adv. Sunil Kr. Yadav, offering specialized legal support in civil litigation, matrimonial disputes, and criminal defense.",
  openGraph: {
    title: "Our Team | Bhushan & Sons",
    description:
      "Meet our expert legal team led by Adv. Sunil Kr. Yadav.",
  },
};

export default function TeamPage() {
  const managingPartner = TEAM_MEMBERS[0];
  const seniorTeam = TEAM_MEMBERS.slice(1);

  return (
    <>
      {/* Hero */}
      <PageHero
        label="Team"
        titleAccent="Team"
        description="Meet Our Expert Team"
        image="/our-team.png"
        variant="split"
      />

      {/* Managing Partner Feature */}
      <section className="py-14 lg:py-20 bg-primary overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.76fr_1.24fr] gap-10 lg:gap-16 items-start">
            {/* Portrait */}
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute inset-[-14px_-14px_14px_14px] border border-secondary -z-0" />
                <div className="relative z-10 aspect-[3/3.7] overflow-hidden">
                  <Image src={managingPartner.image} alt={managingPartner.name} fill className="object-cover object-top" />
                </div>
              </div>
              <div className="relative z-20 bg-primary-dark border-l-2 border-secondary px-5 py-4 flex items-center justify-between gap-3.5">
                <span>
                  <b className="block font-heading font-medium text-white text-[1.15rem]">{managingPartner.name}</b>
                  <em className="not-italic text-[10.5px] tracking-[0.17em] uppercase text-secondary-light">{managingPartner.designation}</em>
                </span>
                {managingPartner.linkedIn && (
                  <Link href={managingPartner.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-secondary-light shrink-0">
                    <IconBrandLinkedin size={18} />
                  </Link>
                )}
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="left" delay={0.1}>
              <p className="overline mb-4">Founding Partner</p>
              <blockquote className="font-heading font-extralight italic text-white text-[clamp(1.28rem,2.5vw,1.85rem)] leading-[1.42] border-l-2 border-secondary pl-[clamp(18px,2.4vw,30px)] mb-7">
                &ldquo;Excellence is not an act but a habit. At Bhushan &amp; Sons, we have made excellence the habit of a lifetime.&rdquo;
              </blockquote>

              <p className="font-body text-white/75 text-[15.4px] leading-[1.82] max-w-[70ch] mb-4">
                {managingPartner.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 hairline-grid-dark my-8">
                {[
                  { label: "Education", value: managingPartner.education },
                  { label: "Specialization", value: managingPartner.specialization.join(", ") },
                  { label: "Admitted", value: "Bar Council of Delhi" },
                ].map((d) => (
                  <div key={d.label} className="bg-primary p-5">
                    <span className="block text-[10.5px] font-semibold tracking-[0.18em] uppercase text-secondary-light mb-2 font-body">
                      {d.label}
                    </span>
                    <b className="font-heading font-normal text-white text-[1.02rem] leading-tight block">{d.value}</b>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expert Team Grid */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
            <p className="overline justify-center mb-4">Advocates</p>
            <h2 className="heading-section">Meet Our Expert Team</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2.2vw,26px)]">
            {seniorTeam.map((member) => (
              <StaggerItem key={member.id} direction="up">
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
