import type { Metadata } from "next";
import Link from "next/link";
import {
  IconArrowRight,
  IconScale,
  IconShield,
  IconHome,
  IconBuilding,
  IconKey,
  IconPlane,
  IconBriefcase,
  IconBulb,
  IconCoin,
  IconGavel,
  IconCashBanknote,
  IconBuildingBank,
  IconLockAccess,
} from "@tabler/icons-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { PRACTICE_AREAS } from "@/config/constants";

export const metadata: Metadata = {
  title: "Practice Areas | Bhushan & Sons — Advocates & Solicitors",
  description:
    "Explore our full range of legal services — from Loan Settlement, SARFAESI & DRT Matters, and Bank Account Freeze & Cyber Crime, to Civil, Criminal, Family, Corporate, Real Estate, Immigration, Labour, Banking, IP and Dispute Resolution.",
  openGraph: {
    title: "Practice Areas | Bhushan & Sons",
    description: "Expert legal counsel across every practice area we serve.",
  },
};

const PRACTICE_ICONS: Record<string, React.ElementType> = {
  "loan-settlement-debt-resolution": IconCashBanknote,
  "sarfaesi-drt-matters": IconBuildingBank,
  "bank-freeze-cyber-crime": IconLockAccess,
  "civil-law": IconScale,
  "criminal-law": IconShield,
  "family-law": IconHome,
  "corporate-law": IconBuilding,
  "realestate-law": IconKey,
  "immigration-law": IconPlane,
  "labour-laws": IconBriefcase,
  "banking-finance": IconCoin,
  "ip-law": IconBulb,
  "commercial-consumer-disputes": IconScale,
  "dispute-resolution": IconGavel,
};

export default function PracticeAreasPage() {
  const featured = PRACTICE_AREAS.slice(0, 3);
  const rest = PRACTICE_AREAS.slice(3);

  return (
    <>
      {/* Hero */}
      <PageHero
        label="Practice Areas"
        titleAccent="Practice Areas"
        description="From urgent bank and recovery matters to civil, criminal, family and corporate law — explore the full range of legal services we provide."
        image="/practice-areas.png"
        variant="split"
      />

      {/* Featured — the 3 priority services */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="max-w-2xl mb-10">
            <p className="overline mb-4">Priority services</p>
            <h2 className="heading-section">Urgent Bank &amp; Recovery Matters</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 hairline-grid">
            {featured.map((area) => {
              const Icon = PRACTICE_ICONS[area.id] ?? IconScale;
              return (
                <StaggerItem key={area.id} direction="up">
                  <Link
                    href={`/practice-areas/${area.id}`}
                    className="group block h-full bg-white p-[clamp(24px,2.8vw,34px)] relative transition-colors duration-300 hover:bg-[#FBFAF7]"
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                    <Icon size={30} className="text-secondary mb-5" strokeWidth={1.3} />
                    <h3 className="font-heading font-medium text-text text-[1.28rem] leading-snug mb-3">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
                      {area.tagline || area.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-body text-[11.5px] font-semibold uppercase tracking-wider text-primary border-b border-secondary pb-0.5">
                      View Details
                      <IconArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* All other practice areas */}
      <section className="py-14 lg:py-20 bg-background-alt">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="max-w-xl mb-10">
            <p className="overline mb-4">All practice areas</p>
            <h2 className="heading-section">Full-Service Legal Counsel</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 hairline-grid">
            {rest.map((area) => {
              const Icon = PRACTICE_ICONS[area.id] ?? IconScale;
              return (
                <StaggerItem key={area.id} direction="up">
                  <Link
                    href={`/practice-areas/${area.id}`}
                    className="group block h-full bg-white p-[clamp(22px,2.4vw,29px)] relative transition-colors duration-300 hover:bg-[#FBFAF7]"
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                    <Icon size={24} className="text-secondary mb-4" strokeWidth={1.3} />
                    <h3 className="font-heading font-medium text-text text-[1.05rem] leading-snug mb-2">
                      {area.title}
                    </h3>
                    <p className="font-body text-[13.5px] text-text-muted leading-relaxed line-clamp-3">
                      {area.description}
                    </p>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
