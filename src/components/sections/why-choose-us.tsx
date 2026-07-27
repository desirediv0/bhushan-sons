import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { WHY_CHOOSE_US } from "@/config/constants";

export function WhyChooseUs() {
  return (
    <section className="py-14 lg:py-20 bg-primary">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <AnimatedSection direction="up" className="max-w-[770px] mb-10 lg:mb-12">
          <p className="overline mb-4">Our commitment</p>
          <h2 className="heading-section !text-white">Why clients instruct us</h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hairline-grid-dark">
          {WHY_CHOOSE_US.map((item, index) => (
            <StaggerItem key={item.id} direction="up">
              <div className="bg-primary p-[clamp(26px,3.1vw,40px)] h-full">
                <span className="block font-heading font-extralight text-secondary text-[2.4rem] leading-none mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading font-medium text-white text-[1.25rem] mb-2.5">
                  {item.title}
                </h3>
                <p className="font-body text-white/70 text-[14.5px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
