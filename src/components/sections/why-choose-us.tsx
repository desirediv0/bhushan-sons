import {
  IconAward,
  IconLock,
  IconShieldCheck,
  IconChess,
  IconMessage,
  IconTrophy,
} from "@tabler/icons-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { GoldDivider } from "@/components/ui/gold-divider";
import { WHY_CHOOSE_US } from "@/config/constants";

const CHIP_STYLES = [
  { chip: "bg-violet-100", icon: "text-violet-600" },
  { chip: "bg-emerald-100", icon: "text-emerald-600" },
  { chip: "bg-amber-100", icon: "text-amber-600" },
];

const ICON_MAP: Record<string, React.ElementType> = {
  award: IconAward,
  lock: IconLock,
  "shield-check": IconShieldCheck,
  chess: IconChess,
  message: IconMessage,
  trophy: IconTrophy,
};

export function WhyChooseUs() {
  return (
    <section className="py-12 lg:py-14 bg-white relative overflow-hidden">

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex flex-col items-center gap-3 mb-6">
            <p className="overline">Our Commitment</p>
            <GoldDivider align="center" />
          </div>
          <h2
            className="font-heading font-bold text-text leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Why Choose{" "}
            <span className="text-violet-gradient">
              Bhushan &amp; Sons
            </span>
          </h2>
        </AnimatedSection>

        {/* 3-column grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || IconAward;
            return (
              <StaggerItem key={item.id} direction="up">
                <div className="group flex flex-col h-full rounded-2xl border border-border bg-white p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${CHIP_STYLES[index % CHIP_STYLES.length].chip}`}>
                      <Icon
                        size={28}
                        className={CHIP_STYLES[index % CHIP_STYLES.length].icon}
                      />
                    </div>
                    <span
                      className="font-body text-5xl font-light text-border group-hover:text-violet-300 transition-colors duration-500"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Gold divider */}
                  <div
                    className="h-[3px] w-8 rounded-full mb-6 transition-all duration-500 group-hover:w-20"
                    style={{
                      background: "linear-gradient(90deg, #7C3AED, #34D399)",
                    }}
                  />

                  <h3 className="font-heading font-semibold text-xl text-text mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
