"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconBuilding, IconFileText, IconUsers, IconGavel } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/animations/animated-section";
import { SITE_CONFIG, FIRM_STATS } from "@/config/constants";
import { TextRotate } from "@/components/ui/text-rotate";

const SERVICES_DATA = [
  {
    title: "Corporate Law Services",
    desc: "Strategic legal counsel for complex corporate transactions, governance, and regulatory compliance.",
    href: "/practice-areas#corporate-law",
  },
  {
    title: "Commercial Disputes Resolution",
    desc: "Exceptional representation in commercial litigation, domestic & international arbitration, and mediation.",
    href: "/practice-areas#commercial-disputes",
  },
  {
    title: "Intellectual Property Protection",
    desc: "Comprehensive protection, management, and enforcement of trademarks, patents, and copyright assets.",
    href: "/practice-areas#ip-law",
  },
  {
    title: "Criminal Defense Advocacy",
    desc: "Vigorous criminal defense and prosecution support with an unwavering commitment to justice.",
    href: "/practice-areas#criminal-law",
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
              <span>Unraveling</span>
              <TextRotate
                texts={[
                  "Complexities",
                  "Disputes",
                  "Challenges",
                  "Transactions",
                ]}
                mainClassName="text-white px-3 sm:px-4 bg-black py-2 sm:py-3 rounded-md inline-block text-2xl sm:text-4xl lg:text-[3rem] leading-none"
                staggerFrom={"last"}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-visible pb-0"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
              <span
                className="text-primary italic font-semibold"
                style={{
                  fontFamily: "var(--font-accent)",
                }}
              >
                Together
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p
              className="font-body leading-[1.8] mb-8 text-sm sm:text-base text-[#666666] max-w-md lg:max-w-[320px]"
            >
              {SITE_CONFIG.description}
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="font-body font-medium text-white bg-[#111111] px-6 py-3 text-sm rounded-full inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              >
                Consult Now
              </Link>
              <Link
                href="/practice-areas"
                className="font-body font-medium flex items-center gap-2 text-sm text-[#111111] hover:underline transition-colors duration-200"
              >
                Explore Practice Areas
                <IconArrowRight size={14} />
              </Link>
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