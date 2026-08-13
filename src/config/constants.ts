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
  founded: "2003",
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
  { value: "High Courts & Tribunals", label: "Court Coverage" },
  { value: "2500", label: "Cases Handled", suffix: "+" },
  { value: "14", label: "Practice Areas", suffix: "+" },
  { value: "28", label: "Expert Attorneys", suffix: "+" },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "loan-settlement-debt-resolution",
    title: "Loan Settlement & Debt Resolution",
    description:
      "Structured, lawful settlement of bank and NBFC dues — reducing your liability, stopping recovery harassment, and closing loan accounts with documented finality.",
    icon: "cash",
    image: "/Banking-Finance.jpg",
    tagline: "Reduce what you owe. Stop the calls. Close the loan — lawfully.",
    ctaLabel: "Get Debt Relief",
    services: [
      "One-Time Settlement (OTS) Negotiation",
      "Recovery Harassment Defense",
      "NPA & Loan Restructuring",
      "Written Closure & No-Dues Certificate",
    ],
    benefits: [
      "Direct negotiation with banks & NBFCs on your behalf",
      "Protection from unlawful recovery agent conduct",
      "Settlement documented and legally enforceable",
    ],
    audience: [
      "Borrowers facing repeated recovery calls, visits or legal notices",
      "Anyone who defaulted due to a medical emergency, job loss or business setback",
      "Homeowners or businesses under pressure from mounting loan dues",
      "Families seeking a documented, final exit from a stressed loan",
    ],
    trustPoints: [
      "We negotiate directly with banks and NBFCs on your behalf",
      "Settlements are structured under RBI's recovery and fair-practice framework, not informal promises",
      "Every closure is backed by a written settlement and No-Dues Certificate",
    ],
    outcomes: [
      "Reduced overall loan liability",
      "An end to recovery calls and field visits",
      "Protection against coercive or unlawful recovery conduct",
      "Written settlement and account closure on record",
    ],
    statutes: [
      "RBI Recovery & Fair Practice Guidelines",
      "Banking Regulation Act, 1949",
      "SARFAESI Act, 2002 (where applicable)",
      "Indian Contract Act, 1872",
    ],
    documents: [
      "Loan sanction letter and account statements",
      "Recovery or default notices received",
      "Proof of income loss, medical emergency or business setback",
      "Any written or recorded communication from the bank or recovery agents",
    ],
    process: [
      { phase: "Assessment", description: "Review of your total outstanding liability and financial position." },
      { phase: "Document Review", description: "Legal review of loan agreements and recovery correspondence." },
      { phase: "Negotiation Strategy", description: "A settlement position is built around what you can lawfully pay." },
      { phase: "Settlement", description: "A formal One-Time Settlement is negotiated with the bank or NBFC." },
      { phase: "Closure", description: "Written settlement letter and No-Dues Certificate secured." },
    ],
    faqs: [
      {
        question: "Will settling my loan affect my credit score?",
        answer: "A settlement is usually reported differently from a regular closure and can affect your credit report. We explain the likely impact before you decide, and where possible negotiate terms that limit the effect.",
      },
      {
        question: "Can banks or recovery agents legally harass me?",
        answer: "No. RBI's fair practice guidelines restrict when and how recovery agents can contact you. We step in to stop conduct that crosses those limits.",
      },
      {
        question: "How much of my dues can realistically be reduced?",
        answer: "It depends on your loan type, overdue period and financial position. We assess your case before committing to a settlement target.",
      },
      {
        question: "Is a One-Time Settlement legally binding?",
        answer: "Yes — once documented and accepted by the bank, an OTS is enforceable and closes the account against future claims for the settled amount.",
      },
    ],
  },
  {
    id: "sarfaesi-drt-matters",
    title: "SARFAESI Act & DRT Matters",
    description:
      "Representation for borrowers facing SARFAESI possession notices, property auctions or Debt Recovery Tribunal proceedings — built around protecting your assets and enforcing your procedural rights.",
    icon: "bank",
    image: "/Real%20Estate%20Law.jpg",
    tagline: "Facing a SARFAESI notice or auction? Every step a bank takes must follow the law — we make sure it does.",
    ctaLabel: "Stop the Auction",
    services: [
      "SARFAESI Notice & Possession Defense",
      "DRT Securitisation Applications",
      "Auction Stay & Interim Relief",
      "DRAT Appellate Representation",
    ],
    benefits: [
      "Fast response to possession and auction threats",
      "Strong procedural review of every bank action",
      "Representation before DRT and appellate forums",
    ],
    audience: [
      "Borrowers who have received a SARFAESI demand or possession notice",
      "Property owners facing symbolic or physical possession action",
      "Anyone under threat of a bank-led auction or distress sale",
      "Businesses with secured loans under enforcement proceedings",
    ],
    trustPoints: [
      "Focused experience in SARFAESI enforcement and borrower defense",
      "Rapid response when a possession or auction date is imminent",
      "Careful procedural review — banks must follow strict statutory steps",
    ],
    outcomes: [
      "A stay on possession or auction proceedings, where legally available",
      "Protection of property and business assets during the dispute",
      "A procedural check on the bank's or NBFC's enforcement action",
      "A fair, lawful recovery process instead of a rushed one",
    ],
    statutes: [
      "SARFAESI Act, 2002",
      "Debt Recovery Tribunal (DRT) Rules",
      "DRAT Appellate Procedure",
      "Principles of Natural Justice",
    ],
    documents: [
      "SARFAESI demand or possession notice",
      "Loan and security / mortgage documents",
      "Property title and ownership records",
      "Correspondence with the bank or its recovery agents",
    ],
    process: [
      { phase: "Notice Review", description: "Line-by-line review of the SARFAESI notice for procedural validity." },
      { phase: "Gap Assessment", description: "Checking for statutory lapses in the bank's enforcement steps." },
      { phase: "DRT Filing", description: "A securitisation application is drafted and filed before the Tribunal." },
      { phase: "Interim Relief", description: "An urgent hearing is sought to pause possession or auction action." },
      { phase: "Representation", description: "Ongoing representation before DRT and, where needed, DRAT." },
    ],
    faqs: [
      {
        question: "Can a bank take possession of my property without a court order?",
        answer: "SARFAESI allows banks to take possession through a defined statutory process rather than a civil court decree — but that process carries strict procedural requirements that are frequently open to challenge.",
      },
      {
        question: "Can a DRT stop a scheduled auction?",
        answer: "Yes — in appropriate cases the Tribunal can grant a stay or interim relief while it examines whether the bank followed the required procedure.",
      },
      {
        question: "What is a securitisation application?",
        answer: "It's the formal application under Section 17 of the SARFAESI Act through which a borrower challenges a bank's possession or enforcement action before the DRT.",
      },
      {
        question: "How quickly do I need to act after receiving a notice?",
        answer: "SARFAESI timelines are short and strictly enforced, so the response window is limited — acting as soon as you receive a notice materially improves your options.",
      },
    ],
  },
  {
    id: "bank-freeze-cyber-crime",
    title: "Bank Account Freeze & Cyber Crime",
    description:
      "Legal support when a bank account is frozen over a cyber-crime complaint, suspicious-transaction flag or regulatory hold — aimed at a lawful, documented unfreezing and protection from unwarranted criminal exposure.",
    icon: "lock",
    image: "/law_firm_office.jpg",
    tagline: "An account freeze can stall your life or business overnight — we work to lift it lawfully and quickly.",
    ctaLabel: "Unfreeze My Account",
    services: [
      "Bank Account Unfreezing",
      "Cyber Cell & Investigating Authority Coordination",
      "Suspicious Transaction Response",
      "Criminal Exposure Risk Mitigation",
    ],
    benefits: [
      "Direct coordination with banks, cyber cells and investigating authorities",
      "Compliance-first strategy to justify legitimate transactions",
      "Focus on fast restoration of your financial operations",
    ],
    audience: [
      "Individuals whose bank accounts were frozen without prior notice",
      "Businesses facing blocked transactions due to a cyber complaint",
      "Anyone flagged by a regulatory or suspicious-activity alert",
      "Fraud victims whose own funds are now stuck in the dispute",
    ],
    trustPoints: [
      "We identify the exact statutory or investigative reason behind a freeze",
      "Direct representations are made to banks, cyber cells and regulators",
      "Every explanation we submit is backed by documentation, not assurances",
    ],
    outcomes: [
      "Unfreezing of the affected bank account",
      "Restoration of normal banking and business operations",
      "Protection from unwarranted criminal exposure",
      "A documented, compliance-based closure of the underlying issue",
    ],
    statutes: [
      "Information Technology Act, 2000",
      "Code of Criminal Procedure",
      "RBI Banking & Compliance Guidelines",
      "Prevention of Money Laundering Act",
    ],
    documents: [
      "Bank freeze or lien notification",
      "Recent transaction statements",
      "Cyber complaint or FIR copy, if any",
      "Proof of business or income source",
    ],
    process: [
      { phase: "Freeze Review", description: "Identifying the exact trigger — cyber complaint, regulatory flag or bank-initiated hold." },
      { phase: "Documentation", description: "Preparing transaction justifications and compliance evidence." },
      { phase: "Representation", description: "Formal submissions made to the bank and the relevant cyber cell." },
      { phase: "Follow-Up", description: "Continuous follow-up until the lien is released." },
      { phase: "Closure", description: "Confirmation of unfreezing and closure of the underlying complaint." },
    ],
    faqs: [
      {
        question: "Why do banks freeze accounts over cyber complaints?",
        answer: "Banks often place a precautionary lien when funds are linked, even indirectly, to a cyber-crime complaint filed elsewhere, while the matter is investigated.",
      },
      {
        question: "Do I need a court order to get my account unfrozen?",
        answer: "Not always — many freezes can be resolved through representations to the bank and investigating authority, though some do require judicial intervention.",
      },
      {
        question: "Will a frozen account affect my business operations?",
        answer: "It can immediately block payments, salaries and vendor transactions, which is why a fast, well-documented response matters.",
      },
      {
        question: "Am I automatically treated as a suspect if my account is frozen?",
        answer: "No — a freeze is a precautionary financial measure, not a finding of guilt, and it can often be resolved without any criminal proceeding against you.",
      },
    ],
  },
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
    education: "Practitioner before High Courts & Tribunals",
    bio: "With an exceptional legal career spanning over two decades, Adv. Sunil Kr. Yadav stands as a pillar of legal excellence within Bhushan & Sons. A distinguished practitioner before various High Courts and specialized Tribunals, Adv. Yadav has established an impeccable reputation for his jurisprudential acumen and strategic advocacy. His comprehensive expertise encompasses diverse practice areas including civil litigation, criminal defense, matrimonial disputes, and corporate legal counsel. Adv. Yadav's client representations are characterized by meticulous preparation, ethical counsel, and unwavering commitment to protecting his clients' legal interests. His remarkable ability to navigate complex legal frameworks while maintaining the highest professional standards has resulted in numerous landmark judgments and favorable settlements. Dedicated to the principle that justice must be both accessible and effectively delivered, Adv. Yadav combines scholarly legal knowledge with practical wisdom to provide solutions that stand the test of both legal scrutiny and human compassion.",
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
      "Our team consists of family law specialists, ensuring you get the most accurate advice and effective solutions for your case.",
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
    value: "28+",
    label: "Legal Experts",
    description: "Dedicated advocates defending your rights",
  },
  {
    id: "a2",
    value: "2500+",
    label: "Cases Solved",
    description: "Successful legal outcomes across all fields",
  },
  {
    id: "a3",
    value: "3",
    label: "Office Locations",
    description: "Serving clients across Delhi and Haryana",
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
    year: "2003",
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

