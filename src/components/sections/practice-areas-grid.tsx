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
} from "@tabler/icons-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { GoldDivider } from "@/components/ui/gold-divider";
import { PRACTICE_AREAS } from "@/config/constants";

const PRACTICE_ICONS: Record<string, React.ElementType> = {
  "civil-law": IconScale,
  "criminal-law": IconShield,
  "family-law": IconHome,
  "corporate-law": IconBuilding,
  "real-estate": IconKey,
  "immigration-law": IconPlane,
  "labour-law": IconBriefcase,
  "ip-law": IconBulb,
  "banking-finance": IconCoin,
  "commercial-disputes": IconGavel,
};

export function PracticeAreasGrid() {
  const displayAreas = PRACTICE_AREAS.slice(0, 8);

  return (
    <section className="py-12 lg:py-14 bg-[#FAFAFA]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <AnimatedSection direction="up" className="max-w-xl">
            <div className="flex flex-col gap-4 mb-6">
              <span className="inline-flex w-fit items-center bg-primary text-white text-xs font-body font-medium uppercase tracking-[0.2em] px-4 py-2">
                What We Do
              </span>
              <GoldDivider />
            </div>
            <h2
              className="font-heading font-bold text-primary leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Our Practice Areas
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <Link
              href="/practice-areas"
              className="group inline-flex items-center gap-2 font-body text-sm font-medium text-text-muted hover:text-secondary transition-colors"
            >
              <span className="relative">
                View All Practice Areas
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
              </span>
              <IconArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {displayAreas.map((area, index) => (
            <StaggerItem key={area.id} direction="up">
              <Link href={`/practice-areas#${area.id}`}>
                <div className="group bg-white p-8 h-full flex flex-col hover:bg-[#0A0A0A] transition-all duration-500 cursor-pointer">
                  {/* Number + icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-body text-xs text-border group-hover:text-white/20 transition-colors duration-500"
                      style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {(() => {
                      const IconComponent = PRACTICE_ICONS[area.id] ?? IconScale;
                      return (
                        <IconComponent
                          size={32}
                          className="text-[#111111] group-hover:text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />
                      );
                    })()}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-lg text-primary group-hover:text-white transition-colors duration-500 leading-snug mb-4 flex-1">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-text-muted group-hover:text-white/60 transition-colors duration-500 leading-relaxed mb-6">
                    {area.description.substring(0, 100)}…
                  </p>

                  {/* Line + arrow */}
                  <div className="flex items-center justify-between">
                    <div
                      className="h-px w-8 transition-all duration-500 group-hover:w-16 bg-[#111111] group-hover:bg-white"
                    />
                    <IconArrowRight
                      size={16}
                      className="text-border group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
                    />
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