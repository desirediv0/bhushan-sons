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

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  services: string[];
  benefits?: string[];
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
