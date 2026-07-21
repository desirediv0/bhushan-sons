import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { AboutPreview } from "@/components/sections/about-preview";
import { PracticeAreasGrid } from "@/components/sections/practice-areas-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PartnerSpotlight } from "@/components/sections/partner-spotlight";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { TEAM_MEMBERS } from "@/config/constants";
import { StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { TeamCard } from "@/components/ui/team-card";

export const metadata: Metadata = {
  title: "Bhushan & Sons | Advocates & Solicitors",
  description:
    "Bhushan & Sons is more than just a law firm; we are your dedicated legal allies, committed to safeguarding your interests and ensuring justice prevails.",
  keywords: [
    "Bhushan and Sons",
    "Bhushan & Sons",
    "law advocates",
    "advocates and solicitors",
    "Delhi Gurugram law firm",
    "defense law firm India",
  ],
  openGraph: {
    title: "Bhushan & Sons | Advocates & Solicitors",
    description:
      "Bringing Expertise, Compassion, and Results to Your Legal Needs.",
    type: "website",
    url: "https://bhushanandsons.com",
    siteName: "Bhushan & Sons",
  },
};

export default function HomePage() {
  return (
    <>
      {/* S01: Hero */}
      <HeroSection />



      {/* S02: Trust Stats */}
      <StatsSection />

      {/* S03: About Preview */}
      <AboutPreview />

      {/* S04: Practice Areas */}
      <PracticeAreasGrid />

      {/* S05: Why Choose Us */}
      <WhyChooseUs />

      {/* S06: Partner Spotlight (Adv. Sunil Kr. Yadav) */}
      <PartnerSpotlight />

      {/* Expert Team Section */}
      <section className="py-12 lg:py-14 bg-background-alt">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="overline">Meet Our Expert Team</span>
            <h2 className="font-heading font-bold text-text text-3xl sm:text-4xl mt-2">Our Dedicated Attorneys</h2>
            <div
              className="w-16 h-[3px] rounded-full mx-auto mt-4"
              style={{ background: "linear-gradient(90deg, #7C3AED, #34D399)" }}
            />
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.slice(1).map((member) => (
              <StaggerItem key={member.id} direction="up">
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* S07: Blogs Section */}
      {/* <section className="py-12 lg:py-14 bg-white border-t border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="overline">Our Blogs</span>
              <h2 className="font-heading font-bold text-text text-3xl sm:text-4xl mt-2">Latest Insights & Legal News</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS_DATA.map((blog) => (
              <article key={blog.title} className="flex flex-col border border-border p-6 hover:shadow-md transition-shadow">
                <span className="font-body text-xs text-secondary font-medium tracking-wide uppercase">{blog.category} | {blog.date}</span>
                <h3 className="font-heading font-bold text-lg text-primary mt-2 mb-3 leading-snug">{blog.title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed mb-4 flex-1">{blog.desc}</p>
                <div className="w-8 h-px bg-secondary" />
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* S08: Testimonials */}
      <TestimonialsSection />

      {/* S09: FAQ */}
      <FAQSection />

      {/* S10: CTA */}
      <CTASection />
    </>
  );
}
