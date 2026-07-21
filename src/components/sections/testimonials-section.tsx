import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { GoldDivider } from "@/components/ui/gold-divider";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TESTIMONIALS } from "@/config/constants";

export function TestimonialsSection() {
  return (
    <section className="relative py-14 lg:py-20 bg-background-alt overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header — centered */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex flex-col items-center gap-3 mb-6">
            <p className="overline">Client Testimonials</p>
            <GoldDivider align="center" />
          </div>
          <h2
            className="font-heading font-bold text-text leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What Our Clients{" "}
            <span className="text-violet-gradient">Say About Us</span>
          </h2>
        </AnimatedSection>

        {/* Testimonials grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <StaggerItem key={testimonial.id} direction="up">
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom testimonials — 2 more */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {TESTIMONIALS.slice(3, 5).map((testimonial) => (
            <StaggerItem key={testimonial.id} direction="up">
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
