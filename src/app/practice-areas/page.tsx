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
  IconSparkles,
} from "@tabler/icons-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { PageHero } from "@/components/ui/page-hero";
import { GoldDivider } from "@/components/ui/gold-divider";
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

const CHIP_STYLES = [
  { chip: "bg-violet-100", icon: "text-violet-600", border: "hover:border-violet-300" },
  { chip: "bg-emerald-100", icon: "text-emerald-600", border: "hover:border-emerald-300" },
  { chip: "bg-amber-100", icon: "text-amber-600", border: "hover:border-amber-300" },
  { chip: "bg-sky-100", icon: "text-sky-600", border: "hover:border-sky-300" },
];

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
          <AnimatedSection direction="up" className="max-w-2xl mb-12">
            <div className="flex flex-col gap-3 mb-6">
              <span className="inline-flex w-fit items-center gap-2 bg-violet-100 text-primary text-xs font-body font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full">
                <IconSparkles size={14} />
                Priority Services
              </span>
              <GoldDivider />
            </div>
            <h2
              className="font-heading font-bold text-text leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Urgent Bank &amp; Recovery{" "}
              <span className="text-violet-gradient">Matters</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featured.map((area, index) => {
              const Icon = PRACTICE_ICONS[area.id] ?? IconScale;
              const c = CHIP_STYLES[index % CHIP_STYLES.length];
              return (
                <StaggerItem key={area.id} direction="up">
                  <Link href={`/practice-areas/${area.id}`} className="block h-full">
                    <div
                      className={`group h-full rounded-2xl border-2 border-border bg-background-alt p-8 flex flex-col shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500 ${c.border}`}
                    >
                      <span className={`w-14 h-14 rounded-xl ${c.chip} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-400`}>
                        <Icon size={28} className={c.icon} />
                      </span>
                      <h3 className="font-heading font-bold text-text text-xl mb-3 leading-snug">
                        {area.title}
                      </h3>
                      <p className="font-body text-sm text-text-muted leading-relaxed mb-6 flex-1">
                        {area.tagline || area.description}
                      </p>
                      <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary group-hover:text-primary-light transition-colors">
                        View Details
                        <IconArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
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
          <AnimatedSection direction="up" className="max-w-xl mb-12">
            <div className="flex flex-col gap-3 mb-6">
              <span className="inline-flex w-fit items-center gap-2 bg-white text-primary text-xs font-body font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full border border-border">
                All Practice Areas
              </span>
              <GoldDivider />
            </div>
            <h2
              className="font-heading font-bold text-text leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Full-Service Legal Counsel
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rest.map((area, index) => {
              const Icon = PRACTICE_ICONS[area.id] ?? IconScale;
              const c = CHIP_STYLES[index % CHIP_STYLES.length];
              return (
                <StaggerItem key={area.id} direction="up">
                  <Link href={`/practice-areas/${area.id}`} className="block h-full">
                    <div
                      className={`group h-full rounded-2xl border border-border bg-white p-7 flex flex-col shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-400 ${c.border}`}
                    >
                      <span className={`w-12 h-12 rounded-xl ${c.chip} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={22} className={c.icon} />
                      </span>
                      <h3 className="font-heading font-bold text-text text-base mb-2 leading-snug">
                        {area.title}
                      </h3>
                      <p className="font-body text-sm text-text-muted leading-relaxed mb-4 flex-1 line-clamp-3">
                        {area.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary group-hover:text-primary-light transition-colors">
                        View Details
                        <IconArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
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
