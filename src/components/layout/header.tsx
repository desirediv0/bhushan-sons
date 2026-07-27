"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconMenu2, IconX, IconPhone, IconMail, IconMapPin, IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG } from "@/config/constants";
import { Container } from "@/components/ui/container";

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setIsMobileOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  return (
    <>
      {/* Top strip — contact line */}
      <div className="hidden md:block bg-primary-dark text-white/60">
        <Container size="xl">
          <div className="flex items-center justify-between h-9 text-[12.5px] font-body">
            <div className="flex items-center gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.phone}
              </a>
              <span className="text-white/25">|</span>
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.email}
              </a>
            </div>
            <div>
              {SITE_CONFIG.address.city} &middot; {SITE_CONFIG.address.state} &nbsp;&middot;&nbsp; Practising since {SITE_CONFIG.founded}
            </div>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 left-0 right-0 z-sticky bg-primary/[0.97] backdrop-blur-md border-b border-border-dark">
        <Container size="xl">
          <div className="flex items-center justify-between h-[76px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <span className="w-[42px] h-[42px] shrink-0 border border-secondary rounded-full flex items-center justify-center font-heading text-secondary-light text-[17px]">
                B&amp;S
              </span>
              <span className="flex flex-col">
                <strong className="font-heading font-medium text-white text-[19px] leading-[1.1] not-italic">
                  Bhushan &amp; Sons
                </strong>
                <span className="font-body block text-[9.5px] tracking-[0.24em] uppercase text-secondary-light mt-0.5">
                  Advocates &amp; Solicitors
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-[13px] font-body font-medium uppercase tracking-wider pb-1.5 border-b transition-colors duration-200",
                      isActive
                        ? "text-white border-secondary"
                        : "text-white/80 border-transparent hover:text-white hover:border-secondary"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-[14.5px] font-body font-semibold text-white"
              >
                <IconPhone size={15} className="text-secondary-light" />
                {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body font-semibold uppercase tracking-wider text-white text-[13px] bg-secondary hover:bg-secondary-hover px-6 py-3 rounded transition-all duration-200 hover:-translate-y-px"
              >
                Request a Consultation
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.15 }}
                  className="flex"
                >
                  {isMobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={prefersReducedMotion ? { duration: 0 } : { type: "tween", duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-overlay lg:hidden bg-primary px-6 py-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-10">
              <span className="flex items-center gap-3">
                <span className="w-9 h-9 shrink-0 border border-secondary rounded-full flex items-center justify-center font-heading text-secondary-light text-sm">
                  B&amp;S
                </span>
                <span className="flex flex-col">
                  <strong className="font-heading font-medium text-white text-base leading-tight not-italic">Bhushan &amp; Sons</strong>
                  <span className="font-body text-[9px] tracking-[0.24em] uppercase text-secondary-light mt-0.5">Advocates &amp; Solicitors</span>
                </span>
              </span>
              <button onClick={() => setIsMobileOpen(false)} className="p-1.5 text-white" aria-label="Close menu">
                <IconX size={26} />
              </button>
            </div>

            <nav className="flex flex-col">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.22, delay: prefersReducedMotion ? 0 : 0.04 + index * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="block font-heading text-[1.6rem] text-white py-3.5 border-b border-border-dark"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-sm text-white/80 font-body">
                <IconPhone size={15} className="text-secondary-light" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-sm text-white/80 font-body">
                <IconMail size={15} className="text-secondary-light" />
                {SITE_CONFIG.email}
              </a>
              <a href={`https://maps.google.com`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/80 font-body">
                <IconMapPin size={15} className="text-secondary-light" />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
              </a>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 font-body font-semibold uppercase tracking-wider text-white text-[13px] bg-secondary hover:bg-secondary-hover w-full py-3.5 rounded transition-colors"
              >
                Request a Consultation
                <IconArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
