import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconQuote } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/animations/animated-section";
import { GoldDivider } from "@/components/ui/gold-divider";
import { Button } from "@/components/ui/button";
import { TEAM_MEMBERS } from "@/config/constants";

export function PartnerSpotlight() {
  const partner = TEAM_MEMBERS[0]; // Adv. Sunil Kr. Yadav

  return (
    <section className="relative py-14 lg:py-20 bg-background-alt overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Left */}
          <AnimatedSection direction="right">
            <div className="flex flex-col gap-3 mb-8">
              <p className="overline">Expert Leadership</p>
              <GoldDivider />
            </div>

            <h2
              className="font-heading font-bold text-text leading-tight mb-6 tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Senior Legal Counsel
              <span className="block text-violet-gradient mt-1" style={{ fontSize: "0.72em" }}>
                20+ Years of Legal Excellence
              </span>
            </h2>

            <h3 className="font-heading text-2xl font-bold text-text mb-6">
              {partner.name}
            </h3>

            {/* Quote */}
            <div className="relative rounded-2xl bg-violet-50 border border-violet-100 p-6 mb-8">
              <IconQuote
                size={22}
                className="text-primary mb-2"
                style={{ transform: "scaleX(-1)" }}
              />
              <p className="font-body italic text-violet-900 text-lg leading-relaxed">
                &ldquo;Justice must be both accessible and effectively delivered, combining scholarly legal knowledge with practical wisdom.&rdquo;
              </p>
            </div>

            <p className="font-body text-text-muted leading-relaxed mb-10 text-sm">
              {partner.bio}
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Experience", value: partner.experience },
                { label: "Education", value: "High Courts & Tribunals" },
                { label: "Specialization", value: "Civil, Criminal, Family" },
                { label: "Bar Enrollment", value: "Bar Council of Delhi" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-white p-4 shadow-card hover:border-violet-300 transition-all duration-300"
                >
                  <p className="font-body text-xs text-primary font-semibold uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-text font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/team">
              <Button
                variant="primary"
                size="lg"
                className="group gap-3 rounded-full"
              >
                Meet Our Expert Team
                <IconArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </AnimatedSection>

          {/* Portrait Right */}
          <AnimatedSection direction="left" delay={0.15} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-navy">
              <Image
                src="/sunil-square.jpeg"
                alt={`${partner.name} — ${partner.designation}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Soft violet offset frame */}
            <div className="absolute -bottom-5 -right-5 left-10 top-10 rounded-3xl bg-gradient-to-br from-violet-200/60 to-emerald-100/60 -z-10" />

            {/* Name overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-white shadow-lg">
                <p className="font-heading font-bold text-text text-lg">
                  {partner.name}
                </p>
                <p className="font-body text-xs text-primary font-semibold mt-1 uppercase tracking-widest">
                  {partner.designation}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
