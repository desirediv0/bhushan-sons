import { StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { FIRM_STATS } from "@/config/constants";

export function StatsSection() {
  return (
    <section className="bg-primary">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 hairline-grid-dark">
          {FIRM_STATS.map((stat) => (
            <StaggerItem key={stat.label} direction="up">
              <div className="bg-primary px-[clamp(14px,2vw,26px)] py-[clamp(24px,3vw,40px)] text-center h-full">
                <p
                  className="font-heading font-light leading-none text-secondary-light tracking-tight"
                  style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.4rem)", fontVariantNumeric: "tabular-nums" }}
                >
                  <CounterAnimation
                    end={parseInt(stat.value.replace(/\D/g, ""))}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </p>
                <p className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 mt-3.5">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
