import Image from "next/image";
import { AnimatedSection } from "@/components/animations/animated-section";
import { SITE_CONFIG } from "@/config/constants";

const FACTS = [
  {
    title: "Full-Service",
    body: "Civil, criminal, family, corporate, banking and real estate matters.",
  },
  {
    title: "Court-Facing",
    body: "A litigation practice first — matters are argued, not only advised upon.",
  },
  {
    title: "Delhi and Haryana Coverage",
    body: "Chambers in Gurugram and New Delhi, across the district courts.",
  },
  {
    title: "Client-First Process",
    body: "Engagement terms are confirmed before work begins.",
  },
];

export default function AboutUsSection() {
  return (
    <section id="about-section" className="bg-white py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <AnimatedSection direction="right" className="relative">
            <div className="relative aspect-[4/3.6] overflow-hidden">
              <Image
                src="/about.png"
                alt="Bhushan & Sons law firm chamber"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -right-3.5 -bottom-3.5 bg-primary text-white px-6 py-5 border-l-2 border-secondary max-w-[205px]">
              <b className="block font-heading font-light text-white text-[2rem] leading-none">
                {SITE_CONFIG.founded}
              </b>
              <span className="text-[11px] tracking-[0.16em] uppercase text-white/70 block mt-2">
                Serving Delhi and Haryana
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1}>
            <p className="overline mb-4">Discover our story</p>
            <h2 className="heading-section mb-5">About Bhushan &amp; Sons</h2>
            <p className="body-large mb-4">
              We are a full-service law firm in Gurugram, Delhi and Haryana, with a team of 28
              dedicated advocates practising across civil, criminal, family, corporate,
              banking and real estate matters. Our lawyers combine technical expertise
              with practical negotiation skills to achieve speedy, cost-effective results.
            </p>
            <p className="body-large">
              Established in {SITE_CONFIG.founded} and led by Adv. Sunil Kr. Yadav, the
              firm is full-service by design. A matter may arrive as a civil dispute, a
              criminal notice, a family petition, a bank&apos;s recovery notice or a
              corporate compliance question — each is taken up by an advocate who works
              in that field, and carried from the first notice through to hearing,
              judgment and enforcement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 hairline-grid mt-7">
              {FACTS.map((fact) => (
                <div key={fact.title} className="bg-white px-5 py-[19px]">
                  <b className="block font-heading font-medium text-text text-[1.03rem] mb-1">
                    {fact.title}
                  </b>
                  <span className="text-[13.5px] text-text-muted font-body">{fact.body}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
