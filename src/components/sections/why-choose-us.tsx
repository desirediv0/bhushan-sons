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
    <section className="py-12 lg:py-14 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex flex-col items-center gap-3 mb-6">
            <p className="overline text-white">Our Commitment</p>
            <GoldDivider align="center" />
          </div>
          <h2
            className="font-heading font-bold text-primary leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Why Choose{" "}
            <span
              className="text-black"
              style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500 }}
            >
              Bhushan & Sons
            </span>
          </h2>
        </AnimatedSection>

        {/* 3-column grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || IconAward;
            return (
              <StaggerItem key={item.id} direction="up">
                <div className="group flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-[#111111] group-hover:bg-[#111111] transition-all duration-400">
                      <Icon
                        size={28}
                        className="text-[#111111] group-hover:text-white transition-colors duration-400"
                      />
                    </div>
                    <span
                      className="font-body text-5xl font-light text-border group-hover:text-white/20 transition-colors duration-400"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Gold divider */}
                  <div
                    className="h-px w-8 mb-6 transition-all duration-500 group-hover:w-20"
                    style={{
                      background: "linear-gradient(90deg, #111111, transparent)",
                    }}
                  />

                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">
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
