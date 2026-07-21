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
import { GoldDivider } from "@/components/ui/gold-divider";
import { PRACTICE_AREAS } from "@/config/constants";

const CHIP_STYLES = [
  { chip: "bg-violet-100", icon: "text-violet-600", border: "hover:border-violet-300" },
  { chip: "bg-emerald-100", icon: "text-emerald-600", border: "hover:border-emerald-300" },
  { chip: "bg-amber-100", icon: "text-amber-600", border: "hover:border-amber-300" },
  { chip: "bg-sky-100", icon: "text-sky-600", border: "hover:border-sky-300" },
];

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

export function PracticeAreasGrid() {
  const displayAreas = PRACTICE_AREAS;

  return (
    <section className="py-14 lg:py-20 bg-background-alt relative overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <AnimatedSection direction="up" className="max-w-xl">
            <div className="flex flex-col gap-4 mb-6">
              <span className="inline-flex w-fit items-center gap-2 bg-violet-100 text-primary text-xs font-body font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full">
                What We Do
              </span>
              <GoldDivider />
            </div>
            <h2
              className="font-heading font-bold text-text leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Our Practice Areas
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <Link
              href="/practice-areas"
              className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-primary-light transition-colors"
            >
              <span className="relative">
                View All Practice Areas
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </span>
              <IconArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1 text-primary"
              />
            </Link>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayAreas.map((area, index) => (
            <StaggerItem key={area.id} direction="up">
              <Link href={`/practice-areas/${area.id}`}>
                <div className={`group relative bg-white rounded-2xl border border-border p-8 h-full flex flex-col shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500 cursor-pointer overflow-hidden ${CHIP_STYLES[index % CHIP_STYLES.length].border}`}>
                  {/* Gold sweep at top on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary-light to-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                  {/* Number + icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-body text-2xl font-light text-border group-hover:text-violet-300 transition-colors duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {(() => {
                      const IconComponent = PRACTICE_ICONS[area.id] ?? IconScale;
                      return (
                        <span className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${CHIP_STYLES[index % CHIP_STYLES.length].chip}`}>
                          <IconComponent
                            size={26}
                            className={`group-hover:scale-110 transition-all duration-500 ${CHIP_STYLES[index % CHIP_STYLES.length].icon}`}
                          />
                        </span>
                      );
                    })()}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-lg text-text group-hover:text-primary transition-colors duration-500 leading-snug mb-4 flex-1">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-text-muted transition-colors duration-500 leading-relaxed mb-6">
                    {area.description.substring(0, 100)}…
                  </p>

                  {/* Line + arrow */}
                  <div className="flex items-center justify-between">
                    <div className="h-[3px] w-8 rounded-full transition-all duration-500 group-hover:w-16" style={{ background: "linear-gradient(90deg, #7C3AED, #34D399)" }} />
                    <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <IconArrowRight
                        size={15}
                        className="text-text-light group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
