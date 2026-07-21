"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconMenu2, IconX, IconPhone, IconMail, IconMapPin, IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG } from "@/config/constants";
import { Container } from "@/components/ui/container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      {/* Navy top bar — contact strip */}
      <div className="hidden md:block bg-background-dark text-white/70">
        <Container size="xl">
          <div className="flex items-center justify-between h-9 text-xs font-body">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-1.5 hover:text-secondary-light transition-colors"
              >
                <IconPhone size={13} className="text-secondary" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-1.5 hover:text-secondary-light transition-colors"
              >
                <IconMail size={13} className="text-secondary" />
                {SITE_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <IconMapPin size={13} className="text-secondary" />
              <span>
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} &middot; Since {SITE_CONFIG.founded}
              </span>
            </div>
          </div>
        </Container>
      </div>

      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-sticky transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-border shadow-md"
            : "bg-white border-border/60"
        )}
      >
        {/* Gold hairline on top of nav */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary-light to-secondary opacity-80" />

        <Container size="xl">
          <div className={cn("flex items-center justify-between transition-all duration-300", isScrolled ? "h-16" : "h-[76px]")}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <div className="relative">
                <Image
                  src="/logo.jpeg"
                  alt="Bhushan & Sons Logo"
                  width={50}
                  height={50}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full ring-2 ring-primary/25 group-hover:ring-primary transition-all duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-text block text-sm sm:text-[17px] leading-tight sm:leading-[1.1] group-hover:text-primary transition-colors">
                  Bhushan &amp; Sons
                </span>
                <span className="font-body block text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary font-semibold">
                  Advocates &amp; Solicitors
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-body font-semibold rounded-full transition-colors duration-200 group",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      isActive ? "text-primary" : "text-text-muted hover:text-primary hover:bg-violet-50"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-violet-100"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-sm font-body text-text-muted hover:text-primary transition-colors duration-200"
              >
                <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <IconPhone size={14} className="text-secondary" />
                </span>
                {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                className="group flex items-center gap-2 font-body font-semibold text-white text-sm bg-primary hover:bg-primary-light px-5 py-2.5 rounded-full tracking-wide shadow-sm hover:shadow-navy transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Consultation
                <IconArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-text hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
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
                  {isMobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-overlay lg:hidden"
          >
            <div className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-5 border-b border-border bg-background-alt">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.jpeg"
                      alt="Bhushan & Sons Logo"
                      width={32}
                      height={32}
                      className="w-9 h-9 object-contain rounded-full ring-2 ring-primary/25"
                    />
                    <div>
                      <p className="font-heading font-bold text-text" style={{ fontSize: 14, lineHeight: 1.1 }}>Bhushan &amp; Sons</p>
                      <p className="font-body font-semibold text-primary" style={{ fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase" }}>Advocates &amp; Solicitors</p>
                    </div>
                  </div>
                  <button onClick={() => setIsMobileOpen(false)} className="p-2 text-text-muted hover:text-primary transition-colors" aria-label="Close menu">
                    <IconX size={18} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-6 py-6">
                  <div className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: prefersReducedMotion ? 0 : 0.22, delay: prefersReducedMotion ? 0 : 0.04 + index * 0.04 }}
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center justify-between px-4 py-3 text-base font-body font-medium rounded-lg transition-colors",
                              isActive
                                ? "text-primary bg-violet-50 border-l-2 border-primary"
                                : "text-text-muted hover:text-primary hover:bg-background-alt"
                            )}
                          >
                            {item.label}
                            {isActive && <IconArrowRight size={16} className="text-primary" />}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                <div className="px-6 py-6 border-t border-border bg-background-alt">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 mb-4 text-sm text-text-muted font-body">
                    <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <IconPhone size={14} className="text-secondary" />
                    </span>
                    {SITE_CONFIG.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 font-body font-semibold text-white w-full py-3 rounded-full bg-primary hover:bg-primary-light shadow-sm transition-colors"
                    style={{ fontSize: 13 }}
                  >
                    Book Consultation
                    <IconArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
