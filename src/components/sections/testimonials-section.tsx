import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TESTIMONIALS } from "@/config/constants";

export function TestimonialsSection() {
  return (
    <section className="py-14 lg:py-20 bg-background-alt">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <p className="overline justify-center mb-4">Client feedback</p>
          <h2 className="heading-section">What our clients say</h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2.2vw,25px)]">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.id} direction="up">
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
