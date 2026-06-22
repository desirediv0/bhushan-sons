"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconBuilding, IconFileText, IconUsers, IconGavel } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/animations/animated-section";
import { FIRM_STATS } from "@/config/constants";

const SERVICES_DATA = [
  {
    title: "Civil Law Services",
    desc: "Committed to Upholding Civil Rights: Advocating for Equality, Justice, and Freedom.",
    href: "/practice-areas#civil-law",
  },
  {
    title: "Criminal Law Services",
    desc: "Committed to Vigorous Criminal Defense, Protecting Your Rights and Preserving Your Freedom.",
    href: "/practice-areas#criminal-law",
  },
  {
    title: "Family Law Services",
    desc: "Dedicated to Providing Compassionate and Expert Legal Guidance for All Your Family Law Matters.",
    href: "/practice-areas#family-law",
  },
  {
    title: "Corporate Law Services",
    desc: "We specialize in providing comprehensive corporate legal services to businesses of all sizes.",
    href: "/practice-areas#corporate-law",
  },
];

const TRUSTED = ["Tata Group", "Reliance", "HDFC Bank", "Mahindra"];

export function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Use stats from central constants
  const statsToShow = [
    { num: `${FIRM_STATS[1].value}${FIRM_STATS[1].suffix}`, label: FIRM_STATS[1].label },
    { num: `${FIRM_STATS[2].value}${FIRM_STATS[2].suffix}`, label: FIRM_STATS[2].label },
  ];

  return (
    <section
      className="relative overflow-hidden min-h-[calc(100vh-64px)] bg-white flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-[1fr_auto]"
    >
      {/* Sleek black top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-[#111111]" />

      {/* CENTER — Image: visible on mobile, positioned nicely on desktop */}
      <div
        className="relative lg:absolute bottom-0 lg:top-0 pointer-events-none w-full lg:w-[42%] h-[320px] sm:h-[420px] lg:h-full lg:left-1/2 lg:-translate-x-1/2 order-2 lg:order-none"
      >
        <Image
          src="/law.png"
          alt="Bhushan & Sons Law Firm"
          fill
          className="object-cover object-top"
          priority
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
        />
      </div>

      {/* LEFT COLUMN */}
      <div
        className="relative z-10 flex flex-col justify-between p-6 sm:p-10 lg:p-[72px_0_48px_56px] lg:col-start-1 lg:row-start-1 order-1"
      >
        <div>
          <AnimatedSection direction="up" delay={0.1}>
            <h1
              className="font-heading font-bold leading-[1.3] mb-5 text-[#111111] text-3xl sm:text-5xl lg:text-[4rem] flex flex-col items-start gap-1.5"
            >
              <span>Bhushan & Sons</span>
              <span
                className="text-primary italic font-semibold text-2xl sm:text-3xl lg:text-[2.25rem]"
                style={{
                  fontFamily: "var(--font-accent)",
                }}
              >
                Advocates & Solicitors
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p
              className="font-body leading-[1.8] mb-8 text-sm sm:text-base text-[#666666] max-w-md lg:max-w-[320px]"
            >
              Bringing Expertise, Compassion, and Results to Your Family&apos;s Legal Needs.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <div className="flex flex-col gap-4 items-start">
              <Link
                href="/contact"
                className="font-body font-medium text-white bg-[#111111] px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider rounded-md inline-flex items-center gap-2 transition-all duration-200 hover:bg-[#333333]"
              >
                GET FREE CONSULTATION
              </Link>
              <span className="font-body text-xs text-[#888888] italic">
                Get Free 15 Minutes Legal Consultation
              </span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* TRUST LOGOS — bottom left */}
      <div
        className="relative z-10 flex items-center gap-6 sm:gap-8 flex-wrap p-6 sm:p-10 lg:p-[0_0_40px_56px] lg:col-start-1 lg:row-start-2 order-4 lg:order-none"
      >
        {TRUSTED.map((name) => (
          <span key={name} className="font-body text-xs sm:text-sm text-gray-400 font-medium">
            {name}
          </span>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <AnimatedSection
        direction="left"
        delay={0.15}
        className="relative z-10 flex flex-col justify-between p-6 sm:p-10 lg:p-[56px_48px_48px_32px] lg:col-start-3 lg:row-span-2 order-3"
      >
        {/* Icon pills & Services list */}
        <div>
          <div className="flex gap-2.5 mb-6 sm:mb-8">
            {[IconBuilding, IconFileText, IconUsers, IconGavel].map((Icon, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="flex items-center justify-center transition-colors duration-250 cursor-pointer w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 focus:outline-none"
                style={{
                  background: i === activeIdx ? "#111111" : "#fff",
                  color: i === activeIdx ? "#fff" : "#111111",
                }}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>

          <div className="flex flex-col">
            {SERVICES_DATA.map((svc, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={svc.title}
                  onClick={() => setActiveIdx(i)}
                  className="block py-3.5 cursor-pointer border-b border-border select-none"
                  style={{
                    borderTop: i === 0 ? "0.5px solid #ddd" : "none",
                  }}
                >
                  {isActive ? (
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-medium text-sm">↗</span>
                          <span className="font-body font-semibold text-primary text-xs sm:text-sm">
                            {svc.title}
                          </span>
                        </div>
                        <Link
                          href={svc.href}
                          className="text-xs font-semibold text-[#111111] hover:underline"
                        >
                          View Details
                        </Link>
                      </div>
                      <p className="font-body text-2xs sm:text-xs text-[#666666] leading-relaxed pl-5">
                        {svc.desc}
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 group">
                      <span className="text-gray-400 text-xs sm:text-sm group-hover:text-primary transition-colors">→</span>
                      <span className="font-body text-xs sm:text-sm text-[#666666] group-hover:text-primary transition-colors duration-200">
                        {svc.title}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8 sm:gap-10 mt-8 sm:mt-10">
          {statsToShow.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-body text-2xs uppercase text-gray-500 tracking-wider">
                {s.label}
              </span>
              <span className="font-heading font-bold text-primary text-3xl sm:text-4xl leading-none">
                {s.num}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}