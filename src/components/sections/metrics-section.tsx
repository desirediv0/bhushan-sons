import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { ACHIEVEMENTS } from "@/config/constants";

export function MetricsSection() {
  return (
    <section className="relative py-12 lg:py-14  bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #111111 30%, #111111 70%, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #111111 30%, #111111 70%, transparent)" }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-16">
          <p className="overline text-white mb-3">Our Track Record</p>
          <h2
            className="font-heading font-bold text-primary leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Decades of
            <span
              className="text-white ml-3"
              style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500 }}
            >
              Measurable Excellence
            </span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {ACHIEVEMENTS.map((achievement) => {
            // Parse numeric value for counter
            const numericValue = parseInt(achievement.value.replace(/\D/g, ""));
            const suffix = achievement.value.replace(/[0-9]/g, "");

            return (
              <StaggerItem key={achievement.id} direction="up">
                <div className="group bg-white p-10 flex flex-col items-center text-center hover:bg-[#FAFAFA] transition-colors duration-300">
                  <p
                    className="font-heading font-bold text-primary leading-none mb-3"
                    style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                  >
                    <CounterAnimation
                      end={numericValue}
                      suffix={suffix}
                      duration={2500}
                    />
                  </p>
                  <p className="font-heading text-base font-semibold text-primary mb-2">
                    {achievement.label}
                  </p>
                  <div
                    className="h-px w-8 my-3 transition-all duration-500 group-hover:w-16"
                    style={{ background: "linear-gradient(90deg, transparent, #111111, transparent)" }}
                  />
                  <p className="font-body text-xs text-text-muted">
                    {achievement.description}
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
