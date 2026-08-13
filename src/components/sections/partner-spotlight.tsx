import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animations/animated-section";
import { TEAM_MEMBERS } from "@/config/constants";

export function PartnerSpotlight() {
  const partner = TEAM_MEMBERS[0]; // Adv. Sunil Kr. Yadav

  return (
    <section className="py-14 lg:py-20 bg-primary overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[830px] mb-10 lg:mb-14">
          <p className="overline mb-4">Expert leadership</p>
          <h2 className="heading-section !text-white">
            Senior Legal Counsel
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.76fr_1.24fr] gap-10 lg:gap-16 items-start">
          {/* Portrait — left, sticky */}
          <AnimatedSection direction="right" className="lg:sticky lg:top-[104px]">
            <div className="relative">
              <div className="absolute inset-[-14px_-14px_14px_14px] border border-secondary -z-0" />
              <div className="relative z-10 aspect-[3/3.7] overflow-hidden">
                <Image
                  src="/sunil-square.jpeg"
                  alt={`${partner.name} — ${partner.designation}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="relative z-20 bg-primary-dark border-l-2 border-secondary px-5 py-4 flex items-center justify-between gap-3.5">
              <span>
                <b className="block font-heading font-medium text-white text-[1.15rem]">{partner.name}</b>
                <em className="not-italic text-[10.5px] tracking-[0.17em] uppercase text-secondary-light">{partner.designation}</em>
              </span>
            </div>
          </AnimatedSection>

          {/* Body — right */}
          <AnimatedSection direction="left" delay={0.1}>
            <blockquote className="font-heading font-extralight italic text-white text-[clamp(1.28rem,2.5vw,1.85rem)] leading-[1.42] border-l-2 border-secondary pl-[clamp(18px,2.4vw,30px)] mb-7">
              &ldquo;Justice must be both accessible and effectively delivered, combining scholarly legal knowledge with practical wisdom.&rdquo;
            </blockquote>

            <p className="font-body text-white/75 text-[15.4px] leading-[1.82] max-w-[70ch] mb-4">
              {partner.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 hairline-grid-dark my-8">
              {[
                { label: "Practice", value: "High Courts & Tribunals" },
                { label: "Focus", value: "Civil, Criminal, Family" },
                { label: "Bar Enrolment", value: "Bar Council of Delhi" },
              ].map((item) => (
                <div key={item.label} className="bg-primary p-5">
                  <span className="block text-[10.5px] font-semibold tracking-[0.18em] uppercase text-secondary-light mb-2 font-body">
                    {item.label}
                  </span>
                  <b className="font-heading font-normal text-white text-[1.1rem] leading-tight">{item.value}</b>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body font-semibold uppercase tracking-wider text-white text-[13.5px] bg-secondary hover:bg-secondary-hover px-7 py-4 rounded transition-all duration-200 hover:-translate-y-px"
              >
                Request a Consultation
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 font-body font-semibold uppercase tracking-wider text-white text-[13.5px] border border-white/35 hover:bg-white hover:text-primary px-7 py-4 rounded transition-all duration-200"
              >
                Meet the Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
