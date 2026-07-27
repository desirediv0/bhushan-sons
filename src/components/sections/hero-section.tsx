"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconScale,
  IconShield,
  IconHeart,
  IconBuilding,
  IconArrowRight,
  IconAlertCircle,
  IconCashBanknote,
  IconBuildingBank,
  IconLockAccess,
} from "@tabler/icons-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { SITE_CONFIG, PRACTICE_AREAS } from "@/config/constants";

const PILLAR_ICONS: Record<string, React.ElementType> = {
  "loan-settlement-debt-resolution": IconCashBanknote,
  "sarfaesi-drt-matters": IconBuildingBank,
  "bank-freeze-cyber-crime": IconLockAccess,
  "civil-law": IconScale,
  "criminal-law": IconShield,
  "family-law": IconHeart,
  "corporate-law": IconBuilding,
};

const PILLAR_IDS = [
  "loan-settlement-debt-resolution",
  "sarfaesi-drt-matters",
  "bank-freeze-cyber-crime",
  "family-law",
  "criminal-law",
  "civil-law",
];

const FIRM_HIGHLIGHTS = [
  "Bar Council Registered Advocates",
  "District Courts & High Courts, Delhi NCR",
  `Practising Since ${SITE_CONFIG.founded}`,
  "Clear Fee Agreements",
  "Consultation by Prior Appointment",
];

export function HeroSection() {
  const pillars = PILLAR_IDS.map((id) => PRACTICE_AREAS.find((a) => a.id === id)).filter(
    (a): a is (typeof PRACTICE_AREAS)[number] => Boolean(a)
  );
  const marqueeItems = [...FIRM_HIGHLIGHTS, ...FIRM_HIGHLIGHTS];

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative bg-primary overflow-hidden pt-12 sm:pt-16 pb-[clamp(160px,19vw,225px)]">
        {/* Background image wash */}
        <div className="absolute inset-0">
          <Image
            src="/law.png"
            alt=""
            aria-hidden
            fill
            className="object-cover opacity-[0.12] grayscale"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(102deg, #16332B 36%, rgba(22,51,43,0.7) 100%)" }}
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.32fr_0.68fr] gap-10 lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <AnimatedSection direction="up" delay={0.05}>
                <span className="inline-flex items-center gap-2.5 border border-white/20 rounded-full py-1.5 pl-3 pr-[18px] text-[11.5px] tracking-[0.15em] uppercase text-white/80 font-body mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" style={{ boxShadow: "0 0 0 4px rgba(176,138,74,0.22)" }} />
                  Advocates &amp; Solicitors &nbsp;&middot;&nbsp; Practising since <b className="text-secondary-light font-semibold">{SITE_CONFIG.founded}</b>
                </span>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.12}>
                <h1 className="font-heading font-normal text-white leading-[1.03] tracking-tight text-[clamp(2.4rem,5.8vw,4.5rem)]">
                  Bhushan &amp; Sons
                </h1>
                <p className="font-body font-medium text-secondary-light text-[clamp(0.82rem,1.5vw,1.02rem)] leading-relaxed max-w-[34ch] mt-5">
                  Legal representation in Gurugram &amp; Delhi NCR for matrimonial, criminal, property, banking and corporate matters.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.18}>
                <p className="font-heading font-extralight text-white/85 text-[clamp(1.1rem,2.1vw,1.42rem)] leading-[1.55] max-w-[44ch] mt-6 mb-3">
                  We offer personalised legal strategies, urgent court support and clear fee agreements — before the District Courts and High Courts of Delhi NCR.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.24}>
                <p className="font-body text-xs font-semibold tracking-[0.28em] uppercase text-secondary-light mb-7">
                  Experienced &middot; Responsive &middot; Thorough
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3}>
                <div className="flex gap-3 flex-wrap mb-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-body font-semibold uppercase tracking-wider text-white text-[13.5px] bg-secondary hover:bg-secondary-hover px-7 py-4 rounded transition-all duration-200 hover:-translate-y-px"
                  >
                    Request a Consultation
                  </Link>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="inline-flex items-center gap-2 font-body font-semibold uppercase tracking-wider text-white text-[13.5px] border border-white/35 hover:bg-white hover:text-primary px-7 py-4 rounded transition-all duration-200"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.36}>
                <p className="flex items-center gap-2.5 text-[13.6px] text-white/80 font-body border-l-2 border-secondary pl-3.5 py-1.5">
                  <IconAlertCircle size={17} className="text-secondary-light shrink-0" />
                  <span>
                    <b className="text-white">Urgent legal matter?</b> Call directly — time-sensitive filings are taken up the same day wherever possible.
                  </span>
                </p>
              </AnimatedSection>
            </div>

            {/* Right — portrait */}
            <AnimatedSection direction="left" delay={0.2} className="relative justify-self-end w-full max-w-[310px] lg:max-w-none">
              <div className="relative">
                <div className="absolute inset-[14px_-14px_-14px_14px] border border-secondary -z-10" />
                <div className="relative aspect-[3/3.6] overflow-hidden">
                  <Image
                    src="/sunil-square.jpeg"
                    alt="Adv. Sunil Kr. Yadav, Senior Legal Counsel at Bhushan & Sons"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="bg-primary-dark border-l-2 border-secondary px-5 py-4">
                  <b className="block font-heading font-medium text-white text-[1.12rem]">Adv. Sunil Kr. Yadav</b>
                  <span className="text-[10.5px] tracking-[0.17em] uppercase text-secondary-light">Senior Legal Counsel &middot; 20+ Years</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== Pillars — quick-nav overlapping the hero ===== */}
      <div className="relative z-20 px-6 lg:px-8 -mt-[clamp(140px,15vw,180px)]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-white text-[11px] font-body font-semibold tracking-[0.2em] uppercase opacity-85 mb-4">
            Find your matter
          </p>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hairline-grid shadow-navy">
            {pillars.map((area) => {
              const Icon = PILLAR_ICONS[area.id] ?? IconScale;
              return (
                <StaggerItem key={area.id} direction="up">
                  <Link
                    href={`/practice-areas/${area.id}`}
                    className="group block h-full bg-white p-[clamp(21px,2.5vw,30px)] relative overflow-hidden transition-colors duration-300 hover:bg-[#FBFAF7]"
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                    <Icon size={30} className="text-secondary mb-4" strokeWidth={1.3} />
                    <h3 className="font-heading font-medium text-text text-[1.2rem] leading-tight mb-2">
                      {area.title}
                    </h3>
                    <p className="font-body text-[13.6px] text-text-muted mb-4 leading-relaxed">
                      {area.tagline || area.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-body text-[11.5px] font-semibold uppercase tracking-wider text-primary border-b border-secondary pb-0.5 group-hover:gap-3 transition-all">
                      View details
                      <IconArrowRight size={12} />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>

      {/* ===== Marquee ticker ===== */}
      <div className="overflow-hidden bg-primary-dark text-white/70 py-4 mt-[clamp(52px,7vw,84px)] border-y border-border-dark" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {marqueeItems.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center font-body text-xs font-medium tracking-[0.16em] uppercase whitespace-nowrap px-7"
            >
              {item}
              <span className="w-[5px] h-[5px] rounded-full bg-secondary ml-[30px]" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
