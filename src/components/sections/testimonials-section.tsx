import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { GoldDivider } from "@/components/ui/gold-divider";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TESTIMONIALS } from "@/config/constants";

export function TestimonialsSection() {
  return (
    <section className="py-12 lg:py-14 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up" className="max-w-2xl mb-20">
          <div className="flex flex-col gap-3 mb-6">
            <p className="overline text-white">Client Testimonials</p>
            <GoldDivider />
          </div>
          <h2
            className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            What Our Clients
            <span
              className="block text-white"
              style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500 }}
            >
              Say About Us
            </span>
          </h2>
        </AnimatedSection>

        {/* Testimonials grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <StaggerItem key={testimonial.id} direction="up">
              <TestimonialCard testimonial={testimonial} variant="dark" className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom testimonials — 2 more */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-0.5">
          {TESTIMONIALS.slice(3, 5).map((testimonial) => (
            <StaggerItem key={testimonial.id} direction="up">
              <TestimonialCard testimonial={testimonial} variant="dark" className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
