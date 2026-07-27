import Link from "next/link";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { PRACTICE_AREAS } from "@/config/constants";

export function PracticeAreasGrid() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 lg:mb-12">
          <AnimatedSection direction="up" className="max-w-xl">
            <p className="overline mb-4">What we do</p>
            <h2 className="heading-section">All Practice Areas</h2>
            <p className="body-large mt-3">
              Fourteen areas of active practice across the criminal, matrimonial, civil,
              property, corporate and financial sides.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 font-body text-[13px] font-semibold uppercase tracking-wider text-primary border-b border-secondary pb-1"
            >
              View All Practice Areas
            </Link>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hairline-grid">
          {PRACTICE_AREAS.map((area, index) => (
            <StaggerItem key={area.id} direction="up">
              <Link
                href={`/practice-areas/${area.id}`}
                className="group block h-full bg-white p-[clamp(22px,2.4vw,29px)] relative transition-colors duration-300 hover:bg-[#FBFAF7]"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                <span className="block font-body text-[10px] font-semibold tracking-[0.16em] uppercase text-secondary mb-2.5">
                  Practice Area &middot; {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading font-medium text-text text-[1.15rem] leading-snug mb-2">
                  {area.title}
                </h3>
                <p className="font-body text-[13.9px] text-text-muted leading-relaxed">
                  {area.description.length > 100 ? `${area.description.slice(0, 100)}…` : area.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
