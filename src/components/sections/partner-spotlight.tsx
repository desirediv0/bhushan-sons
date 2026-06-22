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
    <section className="py-12 lg:py-14 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Left */}
          <AnimatedSection direction="right">
            <div className="flex flex-col gap-3 mb-8">
              <p className="overline text-white">Expert Leadership</p>
              <GoldDivider />
            </div>

            <h2
              className="font-heading font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Senior Legal Counsel
              <span
                className="block text-white mt-1"
                style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 500, fontSize: "0.85em" }}
              >
                Supreme Court Practitioner
              </span>
            </h2>

            <h3 className="font-heading text-2xl font-semibold text-white mb-6">
              {partner.name}
            </h3>

            {/* Quote */}
            <div className="relative pl-6 border-l border-secondary mb-8">
              <IconQuote
                size={24}
                className="text-white/40 absolute -top-2 -left-1"
                style={{ transform: "scaleX(-1)" }}
              />
              <p
                className="font-accent italic text-white/70 text-xl leading-relaxed"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                &ldquo;Justice must be both accessible and effectively delivered, combining scholarly legal knowledge with practical wisdom.&rdquo;
              </p>
            </div>

            <p className="font-body text-white/60 leading-relaxed mb-10 text-sm">
              {partner.bio}
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Experience", value: partner.experience },
                { label: "Education", value: "Supreme Court & High Court" },
                { label: "Specialization", value: "Civil, Criminal, Family" },
                { label: "Bar Enrollment", value: "Bar Council of Delhi" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-white/10 p-4 hover:border-secondary/30 transition-colors duration-300"
                >
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-white font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/team">
              <Button
                variant="outline"
                size="lg"
                className="group gap-3 border-white/25 text-white hover:bg-white hover:text-black transition-colors"
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
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/sunil-square.jpeg"
                alt={`${partner.name} — ${partner.designation}`}
                fill
                className="object-cover"
              />
            </div>

            {/* White corner accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-white/20" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-white/20" />

            {/* Name overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#0A0A0A]/80 backdrop-blur-sm p-4 border border-white/10">
                <p className="font-heading font-semibold text-white text-lg">
                  {partner.name}
                </p>
                <p className="font-body text-xs text-white/80 mt-1 uppercase tracking-widest">
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
