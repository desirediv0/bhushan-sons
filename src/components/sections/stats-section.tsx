import { StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { FIRM_STATS } from "@/config/constants";

const STAT_COLORS = [
  "text-violet-600",
  "text-emerald-600",
  "text-amber-500",
  "text-sky-600",
];

export function StatsSection() {
  return (
    <section className="bg-background-alt py-14 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {FIRM_STATS.map((stat, i) => (
            <StaggerItem key={stat.label} direction="up">
              <div className="group bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400 px-6 py-8 text-center">
                <p
                  className={`font-heading font-extrabold leading-none mb-3 tracking-tight ${STAT_COLORS[i % STAT_COLORS.length]}`}
                  style={{ fontSize: "clamp(2.25rem, 3.5vw, 3rem)" }}
                >
                  <CounterAnimation
                    end={parseInt(stat.value.replace(/\D/g, ""))}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </p>
                <p className="font-body text-xs sm:text-sm text-text-muted font-medium uppercase tracking-wider">
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
