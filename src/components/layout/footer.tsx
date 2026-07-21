import Link from "next/link";
import Image from "next/image";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconArrowRight,
} from "@tabler/icons-react";
import { SITE_CONFIG, NAV_ITEMS, OFFICE_LOCATIONS, PRACTICE_AREAS } from "@/config/constants";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background-dark text-white overflow-hidden">
      {/* Gold hairline */}
      <div className="h-[2px] bg-gradient-to-r from-primary via-primary-light to-secondary" />

      {/* Soft gold glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[320px] rounded-full opacity-[0.15]"
        style={{ background: "radial-gradient(ellipse at center, #7C3AED, transparent 70%)" }}
      />

      {/* Main Footer */}
      <Container size="xl">
        <div className="relative py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <Image
                  src="/logo.jpeg"
                  alt="Bhushan & Sons Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-full ring-2 ring-primary-light/50 group-hover:ring-primary-light transition-all duration-300"
                />
                <div>
                  <span className="font-heading text-xl font-bold text-white block leading-none">
                    {SITE_CONFIG.name}
                  </span>
                  <span className="text-[10px] font-body font-semibold tracking-[0.2em] uppercase text-secondary-light mt-1 block">
                    {SITE_CONFIG.tagline}
                  </span>
                </div>
              </Link>
              <p className="text-white/60 font-body text-sm leading-relaxed max-w-sm mb-8">
                A premier full-service law firm delivering exceptional legal
                counsel with integrity, precision, and an unwavering commitment
                to excellence.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-secondary-light transition-colors font-body"
                >
                  <IconPhone size={16} className="text-secondary" />
                  {SITE_CONFIG.phone}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-secondary-light transition-colors font-body"
                >
                  <IconMail size={16} className="text-secondary" />
                  {SITE_CONFIG.email}
                </a>
                <div className="flex items-start gap-3 text-sm text-white/60 font-body">
                  <IconMapPin size={16} className="text-secondary mt-0.5 shrink-0" />
                  <span>
                    {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city} -{" "}
                    {SITE_CONFIG.address.pincode}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-secondary mb-6">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors font-body inline-flex items-center gap-1 group"
                    >
                      {item.label}
                      <IconArrowRight
                        size={12}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Areas */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-secondary mb-6">
                Practice Areas
              </h4>
              <ul className="flex flex-col gap-3">
                {PRACTICE_AREAS.slice(0, 5).map((area) => (
                  <li key={area.id}>
                    <Link
                      href={`/practice-areas/${area.id}`}
                      className="text-sm text-white/60 hover:text-white transition-colors font-body inline-flex items-center gap-1 group"
                    >
                      {area.title}
                      <IconArrowRight
                        size={12}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-secondary mb-6">
                Our Offices
              </h4>
              <div className="flex flex-col gap-4">
                {OFFICE_LOCATIONS.map((office) => (
                  <div
                    key={office.id}
                    className="group rounded-lg border border-white/10 hover:border-secondary/40 p-4 transition-colors duration-300"
                  >
                    <h5 className="text-sm font-semibold text-white mb-1 font-body">
                      {office.city}
                    </h5>
                    <p className="text-xs text-white/50 font-body leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom Footer */}
        <div className="relative py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 font-body">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/50 hover:text-secondary-light transition-colors font-body"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/50 hover:text-secondary-light transition-colors font-body"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="text-xs text-white/50 hover:text-secondary-light transition-colors font-body"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
