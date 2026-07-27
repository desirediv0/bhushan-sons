import Link from "next/link";
import {
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { SITE_CONFIG, NAV_ITEMS, OFFICE_LOCATIONS, PRACTICE_AREAS } from "@/config/constants";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/65">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr_1.4fr] gap-10 lg:gap-12 pt-16 lg:pt-20 pb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <span className="w-[42px] h-[42px] shrink-0 border border-secondary rounded-full flex items-center justify-center font-heading text-secondary-light text-[17px]">
                B&amp;S
              </span>
              <span className="flex flex-col">
                <strong className="font-heading font-medium text-white text-lg leading-none not-italic">
                  {SITE_CONFIG.name}
                </strong>
                <span className="text-[9.5px] font-body font-semibold tracking-[0.24em] uppercase text-secondary-light mt-1.5 block">
                  {SITE_CONFIG.tagline}
                </span>
              </span>
            </Link>
            <p className="font-body text-[14.2px] leading-relaxed max-w-xs mb-5">
              {SITE_CONFIG.description}
            </p>
            <div className="flex flex-col gap-2.5 mb-2">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2.5 text-white hover:text-secondary-light transition-colors font-body text-[14.2px]">
                <IconPhone size={15} className="text-secondary-light shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2.5 text-white hover:text-secondary-light transition-colors font-body text-[14.2px]">
                <IconMail size={15} className="text-secondary-light shrink-0" />
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-secondary-light mb-[18px]">
              Quick Links
            </h4>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="mb-2.5">
                  <Link href={item.href} className="text-[14.2px] font-body hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-secondary-light mb-[18px]">
              Practice Areas
            </h4>
            <ul>
              {PRACTICE_AREAS.slice(0, 6).map((area) => (
                <li key={area.id} className="mb-2.5">
                  <Link href={`/practice-areas/${area.id}`} className="text-[14.2px] font-body hover:text-white transition-colors">
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-secondary-light mb-[18px]">
              Our Offices
            </h4>
            {OFFICE_LOCATIONS.map((office) => (
              <div key={office.id} className="mb-[18px] pl-3.5 border-l border-border-dark">
                <b className="block text-white text-[13.3px] font-semibold font-body mb-1">
                  {office.city}
                </b>
                <span className="text-[13.2px] font-body leading-relaxed flex items-start gap-1.5">
                  {office.address}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border-dark py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] font-body">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <nav className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
