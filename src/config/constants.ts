import type {
  NavItem,
  Stat,
  PracticeArea,
  TeamMember,
  Testimonial,
  OfficeLocation,
  FAQItem,
  WhyChooseUsItem,
  Achievement,
  TimelineEvent,
} from "@/types";

export const SITE_CONFIG = {
  name: "Bhushan & Sons",
  tagline: "Advocates & Solicitors",
  description:
    "Bhushan & Sons is more than just a law firm; we are your dedicated legal allies, committed to safeguarding your interests and ensuring justice prevails.",
  url: "https://bhushanandsons.com",
  email: "contact@bhushanandsons.com",
  phone: "+91-9306185801",
  founded: "1989",
  address: {
    street: "Chamber No- 142, SBS Block, District Court",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122001",
    country: "India",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
];

export const FIRM_STATS: Stat[] = [
  { value: "20", label: "Years of Experience", suffix: "+" },
  { value: "2500", label: "Cases Handled", suffix: "+" },
  { value: "98", label: "Success Rate", suffix: "%" },
  { value: "5", label: "Expert Attorneys", suffix: "" },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "civil-law",
    title: "Civil Law",
    description:
      "Committed to Upholding Civil Rights: Advocating for Equality, Justice, and Freedom",
    icon: "scale",
    image: "/Civil%20Law.png",
    services: [
      "Civil Suits & Injunctions",
      "Property Disputes",
      "Contractual Disputes",
      "Consumer Protection",
    ],
  },
  {
    id: "criminal-law",
    title: "Criminal Law",
    description:
      "Committed to Vigorous Criminal Defense, Protecting Your Rights and Preserving Your Freedom.",
    icon: "shield",
    image: "/Criminal%20Law.jpg",
    services: [
      "Criminal Defense",
      "Bail Applications",
      "Appeals & Revisions",
    ],
  },
  {
    id: "family-law",
    title: "Family Law",
    description:
      "Dedicated to Providing Compassionate and Expert Legal Guidance for All Your Family Law Matters.",
    icon: "heart",
    image: "/Family%20Law.jpg",
    services: [
      "Divorce & Separation",
      "Child Custody & Support",
      "Alimony & Maintenance",
      "Domestic Violence",
    ],
  },
  {
    id: "corporate-law",
    title: "Corporate Law",
    description:
      "We specialize in providing comprehensive corporate legal services to businesses of all sizes.",
    icon: "building",
    image: "/Corporate%20Law.jpg",
    services: [
      "Corporate Governance",
      "Joint Ventures",
      "Structuring",
    ],
  },
  {
    id: "realestate-law",
    title: "Realestate Law",
    description:
      "Our team of lawyers is here to guide you through the complexities of property transactions & disputes.",
    icon: "home",
    image: "/Real%20Estate%20Law.jpg",
    services: [
      "Property Due Diligence",
      "Title Verification",
      "Property Disputes",
    ],
  },
  {
    id: "immigration-law",
    title: "Immigration Law",
    description:
      "Navigating the Complexities of Immigration Law with Dedication and Expertise.",
    icon: "passport",
    image: "/Immigration%20Law.jpg",
    services: [
      "Visa Applications",
      "Permanent Residency",
      "Immigration Appeals",
    ],
  },
  {
    id: "labour-laws",
    title: "Labour Laws",
    description:
      "At Bhushan and Sons, we are dedicated to helping organizations and individuals navigate the complexities of labour laws.",
    icon: "briefcase",
    image: "/Labour%20Law.jpg",
    services: [
      "Employment Contracts",
      "Industrial Relations",
      "POSH Compliance",
    ],
  },
  {
    id: "banking-finance",
    title: "Banking and Finance Law",
    description:
      "At Bhushan and Sons, the leading law firm for banking and finance in Gurugram, we provide expert legal support to banks, businesses, and individuals.",
    icon: "coin",
    image: "/Banking-Finance.jpg",
    services: [
      "Banking Advisory",
      "Finance Compliance",
      "Disputes",
    ],
  },
  {
    id: "ip-law",
    title: "Intellectual Property Law",
    description:
      "At Bhushan and Sons, we understand the critical importance of protecting intellectual property in today’s competitive business landscape.",
    icon: "bulb",
    image: "/Intellectual%20Property.jpg",
    services: [
      "Trademarks",
      "Copyrights",
      "Patents",
    ],
  },
  {
    id: "commercial-consumer-disputes",
    title: "Commercial and Consumer Disputes",
    description:
      "At Bhushan and Sons, we provide expert legal support to resolve commercial and consumer disputes efficiently.",
    icon: "scale",
    image: "/Commercial%20Disputes.jpg",
    services: [
      "Commercial Litigations",
      "Consumer Court Representation",
    ],
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution",
    description:
      "At Bhushan and Sons, we specialize in helping clients navigate disputes with practical and effective solutions.",
    icon: "gavel",
    image: "/Commercial%20Disputes.jpg",
    services: [
      "Arbitration",
      "Mediation",
      "Conciliation",
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sunil-kumar-yadav",
    name: "Adv. Sunil Kr. Yadav",
    designation: "Senior Legal Counsel",
    image: "/sunil-square.jpeg",
    specialization: ["Civil Litigation", "Criminal Defense", "Matrimonial Disputes", "Corporate Legal Counsel"],
    experience: "20+ Years",
    education: "Practitioner before Hon'ble Supreme Court of India, High Courts & Tribunals",
    bio: "With an exceptional legal career spanning over two decades, Adv. Sunil Kr. Yadav stands as a pillar of legal excellence within Bhushan & Sons. A distinguished practitioner before the Hon'ble Supreme Court of India, various High Courts, and specialized Tribunals, Adv. Yadav has established an impeccable reputation for his jurisprudential acumen and strategic advocacy. His comprehensive expertise encompasses diverse practice areas including civil litigation, criminal defense, matrimonial disputes, and corporate legal counsel. Adv. Yadav's client representations are characterized by meticulous preparation, ethical counsel, and unwavering commitment to protecting his clients' legal interests. His remarkable ability to navigate complex legal frameworks while maintaining the highest professional standards has resulted in numerous landmark judgments and favorable settlements. Dedicated to the principle that justice must be both accessible and effectively delivered, Adv. Yadav combines scholarly legal knowledge with practical wisdom to provide solutions that stand the test of both legal scrutiny and human compassion.",
    linkedIn: "#",
  },
  {
    id: "meenakshi",
    name: "Adv. Meenakshi",
    designation: "Associate Legal Counsel",
    image: "/Adv.%20Meenakshi.jpeg",
    specialization: ["Family Law", "Matrimonial Disputes"],
    experience: "8+ Years",
    education: "LLB",
    bio: "Adv. Meenakshi is an expert in handling sensitive family and matrimonial matters, providing compassionate yet strategic solutions.",
  },
  {
    id: "mukesh-saini",
    name: "Adv. Mukesh Saini",
    designation: "Associate Legal Counsel",
    image: "/Adv.%20Mukesh%20Saini.jpeg",
    specialization: ["Civil Law", "Property Disputes"],
    experience: "10+ Years",
    education: "LLB",
    bio: "Adv. Mukesh Saini specialized in real estate and property litigation disputes, serving corporate and individual clients.",
  },
  {
    id: "arnesh-yadav",
    name: "Adv. Arnesh Yadav",
    designation: "Associate Legal Counsel",
    image: "/Adv.%20ARNESH%20YADAV.jpeg",
    specialization: ["Criminal Law", "Defense"],
    experience: "7+ Years",
    education: "LLB",
    bio: "Adv. Arnesh Yadav handles criminal trials, bails, and defense actions across various session courts and Tribunals.",
  },
  {
    id: "vivek-kumar",
    name: "Adv. Vivek kumar",
    designation: "Associate Legal Counsel",
    image: "/Adv.%20Vivek%20kumar.jpeg",
    specialization: ["Corporate Law", "Commercial Disputes"],
    experience: "9+ Years",
    education: "LLB",
    bio: "Adv. Vivek Kumar advises businesses on corporate compliance, contract drafting, and business disputes resolution.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Bhushan & Sons guided me through my divorce and child custody case with utmost compassion and professionalism. They made a stressful process manageable.",
    author: "Ritu Sharma",
    designation: "Client",
    company: "Family Dispute",
  },
  {
    id: "2",
    quote:
      "Very professional and direct legal consultation. Got my property title cleared and resolved a builder dispute easily.",
    author: "Amit Verma",
    designation: "Client",
    company: "Property Law",
  },
  {
    id: "3",
    quote:
      "Adv. Sunil Kr. Yadav's courtroom advocacy is brilliant. He represented us in a corporate dispute and got us a highly favorable judgment.",
    author: "Sanjay Singhal",
    designation: "Director",
    company: "Singhal Ventures",
  },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: "gurugram-1",
    city: "Gurugram (SBS Block)",
    address: "Chamber No- 142, SBS Block, District Court, Gurugram",
    phone: "+91-9306185801",
    email: "contact@bhushanandsons.com",
    isHeadquarters: true,
  },
  {
    id: "dwarka",
    city: "New Delhi (Dwarka)",
    address: "Chamber No-427, Lawyers Chamber, Dwarka, New Delhi",
    phone: "+91-9306185801",
    email: "contact@bhushanandsons.com",
    isHeadquarters: false,
  },
  {
    id: "gurugram-2",
    city: "Gurugram (Sector-11)",
    address: "Unit No-8, Dharam Niwas, Sector-11, Gurugram",
    phone: "+91-9306185801",
    email: "contact@bhushanandsons.com",
    isHeadquarters: false,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Family Law?",
    answer:
      "Family law encompasses legal matters related to family relationships, including divorce, child custody, spousal support, adoption, and more. If you have questions or need legal assistance in any family law matter, don’t hesitate to contact our team.",
  },
  {
    id: "faq-2",
    question: "What is the difference between mediation and litigation in family law disputes?",
    answer:
      "Mediation is a collaborative process where a neutral third party helps spouses reach a mutually agreeable settlement out of court, while litigation involves presenting the dispute before a judge who makes the final, binding legal decisions.",
  },
  {
    id: "faq-3",
    question: "How do I start the process of drafting a will or estate plan?",
    answer:
      "To draft a will or estate plan, start by listing your assets and beneficiaries, designating an executor and guardians for minor children, and consulting a legal expert to draft and execute the documents in compliance with state laws.",
  },
  {
    id: "faq-4",
    question: "What is alimony or spousal support, and how is it determined?",
    answer:
      "Alimony is financial support paid by one spouse to the other post-separation/divorce. It is determined based on factors like duration of marriage, financial needs of each spouse, earning capacities, and standard of living during the marriage.",
  },
  {
    id: "faq-5",
    question: "What factors do courts consider in child custody decisions?",
    answer:
      "Courts prioritize the best interests of the child, considering factors such as the child's age, emotional bonds with parents, parental stability, history of caregiving, safety, and the child's preference if they are mature enough.",
  },
];

export const BLOGS_DATA = [
  {
    title: "How Builders Fool Their Buyers: A Reality Check",
    category: "Civil Law",
    date: "05-Jan-2012",
    desc: "Buying a home is a dream for many, but unscrupulous builders often exploit buyers through deceptive practices. Understanding these tactics can help prospective homeowners make informed decisions.",
    href: "/blog/builders-fool-buyers",
  },
  {
    title: "Rights in Matrimonial Disputes: A Legal Perspective",
    category: "Civil Law",
    date: "02-June-2016",
    desc: "Matrimonial disputes are emotionally and legally complex, requiring a clear understanding of the rights available to both spouses.",
    href: "/blog/matrimonial-rights",
  },
  {
    title: "Rights of a Child After Divorce",
    category: "Child Law",
    date: "25-July-2020",
    desc: "Divorce is a challenging phase for any family, but ensuring the well-being and rights of the child is paramount.",
    href: "/blog/child-rights-after-divorce",
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "expertise",
    title: "Expert Legal Guidance",
    description:
      "Our team consists of experienced family law specialists, ensuring you get the most accurate advice and effective solutions for your case.",
    icon: "award",
  },
  {
    id: "client-centered",
    title: "Client-Centered Approach",
    description:
      "We listen to your concerns, offer personalized services, and work tirelessly to achieve the best possible outcomes for your family.",
    icon: "message",
  },
  {
    id: "integrity",
    title: "Confidentiality and Integrity",
    description:
      "We understand the sensitive nature of family matters and maintain strict confidentiality and transparency throughout the legal process.",
    icon: "shield-check",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    value: "20+",
    label: "Legal Experts",
    description: "Experienced advocates defending your rights",
  },
  {
    id: "a2",
    value: "2500+",
    label: "Cases Solved",
    description: "Successful legal outcomes across all fields",
  },
  {
    id: "a3",
    value: "98%",
    label: "Client Satisfaction",
    description: "Highly rated legal services and consultation",
  },
  {
    id: "a4",
    value: "24/7",
    label: "Quick Support",
    description: "Dedicated assistance whenever you need it",
  },
];

export const FIRM_TIMELINE: TimelineEvent[] = [
  {
    year: "1989",
    title: "Foundation of Bhushan & Sons",
    description:
      "Establishing the parent firm with a core commitment to principled legal practice in New Delhi.",
  },
  {
    year: "2020",
    title: "Expansion of Bhushan & Sons",
    description:
      "Expanded our services to provide comprehensive legal support across multiple locations and specialized divisions.",
  },
];

export const PRACTICE_AREA_OPTIONS = PRACTICE_AREAS.map((area) => ({
  value: area.id,
  label: area.title,
}));

