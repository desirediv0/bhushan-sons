export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface ProcessPhase {
  phase: string;
  description: string;
}

export interface PracticeAreaFAQ {
  question: string;
  answer: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  services: string[];
  benefits?: string[];
  /** Short punchy line used in the detail-page hero, under the title */
  tagline?: string;
  /** Primary CTA label for the detail-page hero (falls back to a generic label) */
  ctaLabel?: string;
  /** Who this service is for — rendered as a numbered "Is This For You?" list */
  audience?: string[];
  /** Why clients trust the firm for this specific matter */
  trustPoints?: string[];
  /** What changes / outcomes once the firm takes over the matter */
  outcomes?: string[];
  /** Statutes / regulations relevant to this practice area */
  statutes?: string[];
  /** Documents needed to begin the case */
  documents?: string[];
  /** Phased case-handling process */
  process?: ProcessPhase[];
  /** Service-specific FAQs (falls back to general FAQ_ITEMS when absent) */
  faqs?: PracticeAreaFAQ[];
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  specialization: string[];
  experience: string;
  education: string;
  bio: string;
  linkedIn?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  company: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  isHeadquarters?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Achievement {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
