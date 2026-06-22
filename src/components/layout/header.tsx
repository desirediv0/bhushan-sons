"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconMenu2, IconX, IconPhone } from "@tabler/icons-react";
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
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-sticky transition-all duration-300",
          "bg-white border-b border-border shadow-sm"
        )}
      >
        <Container size="xl">
          <div className={cn("flex items-center justify-between transition-all duration-300", isScrolled ? "h-16" : "h-[64px]")}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <Image
                src="/logo.jpeg"
                alt="Bhushan & Sons Logo"
                width={50}
                height={50}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-primary block text-xs sm:text-[15px] leading-tight sm:leading-[1.1]">
                  Bhushan &amp; Sons
                </span>
                <span className="font-body block text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#6B6B6B]">
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
                      "relative px-4 py-2 text-sm font-body font-medium transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40",
                      isActive ? "text-black" : "text-[#444] hover:text-black"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-secondary"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-sm font-body text-[#6B6B6B] hover:text-primary transition-colors duration-200"
              >
                <IconPhone size={14} />
                {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 font-body font-medium text-white text-sm transition-all duration-200 hover:opacity-90"
                style={{
                  background: "#0F0F0F",
                  padding: "9px 20px",
                  borderRadius: "100px",
                  letterSpacing: "0.03em",
                }}
              >
                <IconPhone size={13} />
                Call us
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
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
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.jpeg"
                      alt="Bhushan & Sons Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain rounded"
                    />
                    <div>
                      <p className="font-heading font-bold text-primary" style={{ fontSize: 14, lineHeight: 1.1 }}>Bhushan &amp; Sons</p>
                      <p className="font-body" style={{ fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B6B6B" }}>Advocates &amp; Solicitors</p>
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
                              "block px-4 py-3 text-base font-body font-medium transition-colors",
                              isActive ? "text-white" : "text-[#444] hover:text-white"
                            )}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                <div className="px-6 py-6 border-t border-border">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 mb-4 text-sm text-text-muted font-body">
                    <IconPhone size={15} />
                    {SITE_CONFIG.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center font-body font-medium text-white w-full py-3 transition-opacity hover:opacity-90"
                    style={{ background: "#0F0F0F", borderRadius: "100px", fontSize: 13 }}
                  >
                    Book Consultation
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