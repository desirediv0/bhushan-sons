"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconHeart,
  IconArrowRight,
  IconCircleCheck,
  IconPhone,
  IconChevronDown,
  IconCashBanknote,
  IconBuildingBank,
  IconLockAccess,
} from "@tabler/icons-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { FIRM_STATS } from "@/config/constants";

const SERVICES_DATA = [
  {
    title: "Loan Settlement & Debt Resolution",
    desc: "Reduce what you owe, stop recovery harassment, and close bank or NBFC loans with a documented, lawful settlement.",
    href: "/practice-areas/loan-settlement-debt-resolution",
    icon: IconCashBanknote,
    color: "violet",
  },
  {
    title: "SARFAESI Act & DRT Matters",
    desc: "Representation against SARFAESI notices, possession action and bank-led auctions before the DRT and appellate forums.",
    href: "/practice-areas/sarfaesi-drt-matters",
    icon: IconBuildingBank,
    color: "emerald",
  },
  {
    title: "Bank Account Freeze & Cyber Crime",
    desc: "Legal help to lawfully unfreeze bank accounts held over cyber-crime complaints or suspicious-transaction flags.",
    href: "/practice-areas/bank-freeze-cyber-crime",
    icon: IconLockAccess,
    color: "amber",
  },
  {
    title: "Family Law Services",
    desc: "Dedicated to Providing Compassionate and Expert Legal Guidance for All Your Family Law Matters.",
    href: "/practice-areas/family-law",
    icon: IconHeart,
    color: "sky",
  },
];

const CARD_COLORS: Record<string, { chip: string; icon: string; hoverBorder: string }> = {
  violet:  { chip: "bg-violet-100",  icon: "text-violet-600",  hoverBorder: "hover:border-violet-300" },
  emerald: { chip: "bg-emerald-100", icon: "text-emerald-600", hoverBorder: "hover:border-emerald-300" },
  amber:   { chip: "bg-amber-100",   icon: "text-amber-600",   hoverBorder: "hover:border-amber-300" },
  sky:     { chip: "bg-sky-100",     icon: "text-sky-600",     hoverBorder: "hover:border-sky-300" },
};

const FIRM_HIGHLIGHTS = [
  "Bar Council Registered Advocates",
  "Confidential, Client-First Approach",
  "Delhi-NCR Legal Support",
  "Free Initial Consultation",
];

export function HeroSection() {
  const statPills = [
    `${FIRM_STATS[1].value}${FIRM_STATS[1].suffix} ${FIRM_STATS[1].label}`,
    `${FIRM_STATS[2].value}${FIRM_STATS[2].suffix} ${FIRM_STATS[2].label}`,
  ];

  // marquee needs the list repeated for a seamless loop
  const marqueeItems = [...FIRM_HIGHLIGHTS, ...FIRM_HIGHLIGHTS, ...FIRM_HIGHLIGHTS];

  return (
    <>
      {/* ===== Deep indigo hero band — alive with drifting light ===== */}
      <section className="relative overflow-hidden bg-navy-texture">
        {/* Living background — drifting blurred orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-24 -left-24 w-[440px] h-[440px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%)" }}
            animate={{ x: [0, 40, -20, 0], y: [0, 24, -16, 0], scale: [1, 1.08, 0.96, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-32 -right-24 w-[520px] h-[520px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(16,185,129,0.28), transparent 70%)" }}
            animate={{ x: [0, -36, 24, 0], y: [0, -20, 14, 0], scale: [1, 0.94, 1.06, 1] }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full blur-3xl opacity-60"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.18), transparent 70%)" }}
            animate={{ x: [0, 30, -30, 0], y: [0, -26, 12, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />

          {/* Tiny floating sparks */}
          {[
            { left: "12%", top: "28%", d: 0 },
            { left: "22%", top: "64%", d: 1.2 },
            { left: "78%", top: "22%", d: 0.6 },
            { left: "88%", top: "58%", d: 1.8 },
            { left: "60%", top: "80%", d: 2.4 },
          ].map((p, i) => (
            <motion.span
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-emerald-300/70"
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -14, 0], opacity: [0.25, 0.9, 0.25] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: p.d }}
            />
          ))}
        </div>

        {/* Lady Justice — floating depth element on the right */}
        <motion.div
          className="hidden lg:block absolute right-[4%] bottom-0 w-[340px] xl:w-[400px] h-[88%] pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/law.png"
            alt=""
            aria-hidden
            fill
            className="object-contain object-bottom opacity-[0.32]"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
            }}
            priority
          />
        </motion.div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-16 text-center">
          {/* Trust badge */}
          <AnimatedSection direction="down" delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-light animate-pulse" />
              <span className="font-body text-xs font-semibold tracking-wide text-white">
                Trusted Since 1989
              </span>
            </span>
          </AnimatedSection>

          {/* Stat pills — gently floating */}
          <AnimatedSection direction="down" delay={0.12}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {statPills.map((pill, i) => (
                <motion.span
                  key={pill}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 font-body text-xs text-white/90"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
                >
                  <IconCircleCheck size={14} className="text-secondary-light" />
                  {pill}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection direction="up" delay={0.18}>
            <h1 className="font-heading font-extrabold leading-[1.08] text-white text-4xl sm:text-6xl lg:text-[4.25rem] mb-3 tracking-tight">
              Bhushan &amp; Sons
            </h1>
            <p className="font-heading font-bold text-gold-gradient text-2xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6 tracking-tight">
              Advocates &amp; Solicitors
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.26}>
            <p className="font-body text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto mb-10">
              Bringing Expertise, Compassion, and Results to Your Family&apos;s Legal Needs.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection direction="up" delay={0.34}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Link
                href="/contact"
                className="group font-body font-semibold text-white bg-secondary hover:bg-secondary-hover px-8 py-4 text-sm rounded-full inline-flex items-center gap-2 shadow-gold transition-all duration-300 hover:-translate-y-0.5"
              >
                GET FREE CONSULTATION
                <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+919306185801"
                className="font-body font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 px-8 py-4 text-sm rounded-full inline-flex items-center gap-2 transition-all duration-300"
              >
                <IconPhone size={16} className="text-secondary-light" />
                +91-9306185801
              </a>
            </div>
            <p className="font-body text-xs text-white/60 italic mb-10">
              Get Free 15 Minutes Legal Consultation
            </p>
          </AnimatedSection>

          {/* Scroll cue */}
          <AnimatedSection direction="none" delay={0.6}>
            <div className="flex justify-center">
              <motion.span
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white/70"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <IconChevronDown size={18} />
              </motion.span>
            </div>
          </AnimatedSection>
        </div>

        {/* Firm highlights — infinite marquee ticker */}
        <div className="relative z-10 border-t border-white/10 bg-white/[0.03] backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex w-max animate-marquee gap-14 px-7">
            {marqueeItems.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="flex items-center gap-3 font-body text-sm text-white/50 font-medium whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-secondary/70" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Services cards — white, spacious, colorful chips ===== */}
      <section className="bg-white py-14 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((svc) => {
              const c = CARD_COLORS[svc.color];
              return (
                <StaggerItem key={svc.title} direction="up">
                  <Link href={svc.href} className="block h-full">
                    <div
                      className={`group h-full rounded-2xl border border-border bg-white p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-400 ${c.hoverBorder}`}
                    >
                      <span
                        className={`w-12 h-12 rounded-xl ${c.chip} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                      >
                        <svc.icon size={24} className={c.icon} />
                      </span>
                      <h3 className="font-heading font-bold text-text text-base mb-2 leading-snug">
                        {svc.title}
                      </h3>
                      <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
                        {svc.desc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary group-hover:text-primary-light transition-colors">
                        View Details
                        <IconArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
