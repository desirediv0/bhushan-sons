import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { AboutPreview } from "@/components/sections/about-preview";
import { PracticeAreasGrid } from "@/components/sections/practice-areas-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PartnerSpotlight } from "@/components/sections/partner-spotlight";
import { MetricsSection } from "@/components/sections/metrics-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Bhushan & Sons | Advocates & Solicitors — Premier Law Firm Since 1989",
  description:
    "Bhushan & Sons is India's premier full-service law firm. With 35+ years of excellence, 50+ attorneys across New Delhi, Mumbai & Bangalore, we deliver strategic legal counsel with integrity and precision.",
  keywords: [
    "law firm India",
    "advocates solicitors New Delhi",
    "corporate law India",
    "litigation lawyers",
    "intellectual property law",
    "mergers acquisitions India",
    "family law advocates",
    "criminal defense lawyers",
    "best law firm Delhi",
    "Bhushan and Sons",
  ],
  openGraph: {
    title: "Bhushan & Sons | Advocates & Solicitors",
    description:
      "Strategic legal counsel, exceptional advocacy, and unwavering commitment to your interests. Premier law firm since 1989.",
    type: "website",
    url: "https://bhushanandsons.com",
    siteName: "Bhushan & Sons",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhushan & Sons | Advocates & Solicitors",
    description:
      "Strategic legal counsel, exceptional advocacy, and unwavering commitment to your interests.",
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

      {/* S06: Partner Spotlight */}
      <PartnerSpotlight />

      {/* S07: Metrics */}
      <MetricsSection />

      {/* S08: Testimonials */}
      <TestimonialsSection />

      {/* S09: FAQ */}
      <FAQSection />

      {/* S10: CTA */}
      <CTASection />
    </>
  );
}
