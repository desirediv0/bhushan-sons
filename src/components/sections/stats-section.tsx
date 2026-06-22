import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { FIRM_STATS } from "@/config/constants";

export function StatsSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10 divide-y lg:divide-y-0">
          {FIRM_STATS.map((stat, index) => (
            <StaggerItem key={stat.label} direction="up" className="px-8 py-10 lg:py-8 text-center lg:text-left">
              <p
                className="font-heading font-bold text-white leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
              >
                <CounterAnimation
                  end={parseInt(stat.value.replace(/\D/g, ""))}
                  suffix={stat.suffix}
                  duration={2200}
                />
              </p>
              <p className="font-body text-sm text-white/50 uppercase tracking-widest">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
