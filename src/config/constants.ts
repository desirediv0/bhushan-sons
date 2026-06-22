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
    "A premier full-service law firm delivering exceptional legal counsel with integrity, precision, and an unwavering commitment to excellence.",
  url: "https://bhushanandsons.com",
  email: "contact@bhushanandsons.com",
  phone: "+91 11 4567 8900",
  founded: "1989",
  address: {
    street: "12th Floor, Tower A, Connaught Place",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
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
  { value: "35", label: "Years of Excellence", suffix: "+" },
  { value: "2500", label: "Cases Handled", suffix: "+" },
  { value: "98", label: "Client Satisfaction", suffix: "%" },
  { value: "50", label: "Expert Attorneys", suffix: "+" },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "civil-law",
    title: "Civil Law",
    description:
      "Comprehensive civil litigation services protecting your rights and interests in every dispute. Our civil law practice covers the full spectrum of civil proceedings with precision and strategic acumen.",
    icon: "gavel",
    image: "/Civil%20Law.png",
    services: [
      "Civil Suits & Injunctions",
      "Property Disputes",
      "Contractual Disputes",
      "Consumer Protection",
      "Tort Claims",
      "Succession & Inheritance",
    ],
    benefits: [
      "Strategic case assessment and risk analysis",
      "Evidence-based litigation approach",
      "Alternative dispute resolution expertise",
      "Nationwide court representation",
    ],
  },
  {
    id: "criminal-law",
    title: "Criminal Law",
    description:
      "Vigorous criminal defense and prosecution support with an unwavering commitment to justice. We navigate the complexities of criminal proceedings with experience and tenacity.",
    icon: "shield",
    image: "/Criminal%20Law.jpg",
    services: [
      "Criminal Defense",
      "Bail Applications",
      "White-Collar Crime",
      "Economic Offenses",
      "Anticipatory Bail",
      "Appeals & Revisions",
    ],
    benefits: [
      "24/7 emergency legal support",
      "Deep judicial relationships",
      "Proven track record in High Courts",
      "Strict confidentiality protocols",
    ],
  },
  {
    id: "family-law",
    title: "Family Law",
    description:
      "Compassionate and discreet family law counsel for life's most sensitive matters. We provide thoughtful guidance through divorce, custody, and succession with the dignity you deserve.",
    icon: "heart",
    image: "/Family%20Law.jpg",
    services: [
      "Divorce & Separation",
      "Child Custody",
      "Alimony & Maintenance",
      "Adoption",
      "Domestic Violence",
      "Matrimonial Property",
    ],
    benefits: [
      "Sensitive, client-first approach",
      "Mediation-first methodology",
      "International custody expertise",
      "Experienced women advocates",
    ],
  },
  {
    id: "corporate-law",
    title: "Corporate Law",
    description:
      "Strategic legal counsel for complex corporate transactions, governance, and regulatory compliance. We advise India's most prominent corporations with sophistication and insight.",
    icon: "building",
    image: "/Corporate%20Law.jpg",
    services: [
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Joint Ventures",
      "Private Equity",
      "Venture Capital",
      "Corporate Restructuring",
    ],
    benefits: [
      "Cross-border transaction expertise",
      "Regulatory compliance advisory",
      "Board-level governance counsel",
      "Deal structuring & negotiation",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate Law",
    description:
      "End-to-end legal solutions for real estate development, transactions, and regulatory compliance. From due diligence to dispute resolution, we protect your real estate interests.",
    icon: "home",
    image: "/Real%20Estate%20Law.jpg",
    services: [
      "Property Due Diligence",
      "Title Verification",
      "Lease & License Agreements",
      "REIT Advisory",
      "Construction Disputes",
      "Land Acquisition",
    ],
    benefits: [
      "Thorough title searches",
      "RERA compliance expertise",
      "Commercial & residential coverage",
      "Dispute-free transaction guarantee",
    ],
  },
  {
    id: "immigration-law",
    title: "Immigration Law",
    description:
      "Expert immigration counsel for individuals and corporations navigating complex visa, residency, and citizenship proceedings across jurisdictions.",
    icon: "passport",
    image: "/Immigration%20Law.jpg",
    services: [
      "Visa Applications",
      "Permanent Residency",
      "Citizenship Applications",
      "Work Permits",
      "Immigration Appeals",
      "Corporate Immigration",
    ],
    benefits: [
      "Global immigration network",
      "High approval track record",
      "End-to-end documentation support",
      "Express processing available",
    ],
  },
  {
    id: "labour-law",
    title: "Labour Law",
    description:
      "Comprehensive employment and labour law services for employers and employees. We navigate complex industrial relations, employment disputes, and regulatory compliance.",
    icon: "briefcase",
    image: "/Labour%20Law.jpg",
    services: [
      "Employment Contracts",
      "Industrial Disputes",
      "Labour Court Representation",
      "HR Policy Compliance",
      "Wrongful Termination",
      "POSH Compliance",
    ],
    benefits: [
      "Both employer & employee representation",
      "Labour tribunal expertise",
      "Policy drafting & review",
      "Prevention & resolution focus",
    ],
  },
  {
    id: "ip-law",
    title: "Intellectual Property",
    description:
      "Comprehensive IP strategy including protection, enforcement, and monetization of intellectual assets. We safeguard your innovations in India and internationally.",
    icon: "bulb",
    image: "/Intellectual%20Property.jpg",
    services: [
      "Patent Filing & Prosecution",
      "Trademark Registration",
      "Copyright Protection",
      "Trade Secret Strategy",
      "IP Litigation",
      "Technology Licensing",
    ],
    benefits: [
      "International IP portfolio management",
      "Rapid enforcement action",
      "IP valuation services",
      "Domain & brand protection",
    ],
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    description:
      "Sophisticated legal guidance for banking operations, financial transactions, and regulatory compliance in an evolving financial landscape.",
    icon: "coin",
    image: "/Banking-Finance.jpg",
    services: [
      "Project Finance",
      "Syndicated Loans",
      "Securities & Capital Markets",
      "Banking Regulations",
      "Debt Recovery",
      "Financial Compliance",
    ],
    benefits: [
      "RBI & SEBI regulatory expertise",
      "Cross-border finance transactions",
      "Structured finance advisory",
      "Insolvency & recovery counsel",
    ],
  },
  {
    id: "commercial-disputes",
    title: "Commercial Disputes",
    description:
      "Tenacious advocacy in high-stakes commercial litigation and arbitration. We resolve complex business disputes with strategic precision and unmatched courtroom expertise.",
    icon: "scale",
    image: "/Commercial%20Disputes.jpg",
    services: [
      "Commercial Litigation",
      "International Arbitration",
      "Mediation & Conciliation",
      "Regulatory Disputes",
      "Contract Enforcement",
      "Injunctive Relief",
    ],
    benefits: [
      "Supreme Court & High Court representation",
      "International arbitration panel membership",
      "Emergency relief expertise",
      "Multi-jurisdictional dispute capability",
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "rajesh-bhushan",
    name: "Rajesh Bhushan",
    designation: "Senior Partner & Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    specialization: ["Corporate Law", "Mergers & Acquisitions"],
    experience: "35+ Years",
    education: "LLB, Delhi University; LLM, Harvard Law School",
    bio: "With over three decades of legal excellence, Rajesh Bhushan has established himself as one of India's most respected corporate lawyers. His vision and leadership have shaped the firm's commitment to delivering world-class legal services. He has advised Fortune 500 companies, government bodies, and leading Indian conglomerates on their most complex legal matters.",
    linkedIn: "#",
  },
  {
    id: "priya-bhushan",
    name: "Priya Bhushan",
    designation: "Managing Partner",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    specialization: ["Dispute Resolution", "Arbitration"],
    experience: "28+ Years",
    education: "LLB, National Law School; LLM, Oxford University",
    bio: "Priya Bhushan brings unparalleled expertise in complex dispute resolution. Her strategic acumen and courtroom presence have secured landmark victories in high-profile cases across multiple jurisdictions. She is a Fellow of the Chartered Institute of Arbitrators and has been consistently ranked among India's top litigators.",
    linkedIn: "#",
  },
  {
    id: "arjun-mehta",
    name: "Arjun Mehta",
    designation: "Partner — Corporate",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    specialization: ["Private Equity", "Venture Capital"],
    experience: "20+ Years",
    education: "LLB, NALSAR; MBA, IIM Ahmedabad",
    bio: "Arjun Mehta advises leading private equity funds and venture capital firms on complex transactions. His dual expertise in law and business makes him invaluable for strategic deal structuring and cross-border M&A advisory.",
    linkedIn: "#",
  },
  {
    id: "kavita-sharma",
    name: "Kavita Sharma",
    designation: "Partner — IP & Technology",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    specialization: ["Intellectual Property", "Technology Law"],
    experience: "18+ Years",
    education: "LLB, GNLU; LLM, Stanford Law School",
    bio: "Kavita Sharma is a recognized authority in intellectual property and technology law. She has successfully represented multinational corporations in landmark IP disputes and technology transactions across India, the US, and Europe.",
    linkedIn: "#",
  },
  {
    id: "suresh-nair",
    name: "Suresh Nair",
    designation: "Partner — Real Estate",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    specialization: ["Real Estate", "Infrastructure"],
    experience: "22+ Years",
    education: "LLB, Kerala Law Academy; LLM, NUS Singapore",
    bio: "Suresh Nair heads the real estate and infrastructure practice with over two decades of experience in complex property transactions, REIT structuring, and infrastructure project advisory across India.",
    linkedIn: "#",
  },
  {
    id: "ananya-verma",
    name: "Ananya Verma",
    designation: "Senior Associate",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
    specialization: ["Family Law", "Labour Law"],
    experience: "10+ Years",
    education: "LLB, Symbiosis; LLM, University of London",
    bio: "Ananya Verma specializes in family law and employment disputes, bringing exceptional sensitivity and legal acumen to life's most personal legal challenges.",
    linkedIn: "#",
  },
  {
    id: "rohit-krishnan",
    name: "Rohit Krishnan",
    designation: "Senior Associate",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    specialization: ["Criminal Law", "Dispute Resolution"],
    experience: "12+ Years",
    education: "LLB, NUJS Kolkata",
    bio: "Rohit Krishnan is a seasoned criminal defense attorney with a reputation for meticulous case preparation and compelling courtroom advocacy across trial and appellate courts.",
    linkedIn: "#",
  },
  {
    id: "deepika-iyer",
    name: "Deepika Iyer",
    designation: "Associate",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=800&q=80",
    specialization: ["Banking & Finance", "Corporate Law"],
    experience: "6+ Years",
    education: "LLB, NLS Bangalore",
    bio: "Deepika Iyer focuses on banking regulations and corporate compliance, advising leading financial institutions and fintech companies on regulatory matters.",
    linkedIn: "#",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Bhushan & Sons provided exceptional legal counsel during our ₹2,400 crore acquisition. Their attention to detail and strategic thinking was instrumental in closing the deal successfully and on time.",
    author: "Vikram Singh",
    designation: "Chairman & CEO",
    company: "Apex Industries Ltd.",
  },
  {
    id: "2",
    quote:
      "The team's expertise in intellectual property law helped us protect our most valuable technology assets globally. Their proactive approach and deep knowledge are truly commendable.",
    author: "Meera Reddy",
    designation: "Chief Technology Officer",
    company: "TechVision Solutions",
  },
  {
    id: "3",
    quote:
      "In a complex international arbitration matter worth over $50 million, Bhushan & Sons demonstrated exceptional skill and dedication. Their advocacy was nothing short of brilliant.",
    author: "Arun Patel",
    designation: "Managing Director",
    company: "Global Trading Co.",
  },
  {
    id: "4",
    quote:
      "When we faced a hostile regulatory challenge, Bhushan & Sons responded with speed, precision and strategic insight. They are the gold standard for corporate legal counsel in India.",
    author: "Sunita Kapoor",
    designation: "Chief Legal Officer",
    company: "Meridian Capital Group",
  },
  {
    id: "5",
    quote:
      "Priya Bhushan's representation in our dispute was phenomenal. She combines extraordinary legal intellect with genuine client care — a rare combination you won't find elsewhere.",
    author: "Rajan Menon",
    designation: "Founder",
    company: "Prism Ventures",
  },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: "delhi-hq",
    city: "New Delhi",
    address: "12th Floor, Tower A, Connaught Place, New Delhi — 110001",
    phone: "+91 11 4567 8900",
    email: "delhi@bhushanandsons.com",
    isHeadquarters: true,
  },
  {
    id: "mumbai",
    city: "Mumbai",
    address: "8th Floor, Express Towers, Nariman Point, Mumbai — 400021",
    phone: "+91 22 6789 0123",
    email: "mumbai@bhushanandsons.com",
    isHeadquarters: false,
  },
  {
    id: "bangalore",
    city: "Bangalore",
    address: "15th Floor, Prestige Towers, Residency Road, Bangalore — 560025",
    phone: "+91 80 4321 0987",
    email: "bangalore@bhushanandsons.com",
    isHeadquarters: false,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of legal services does Bhushan & Sons offer?",
    answer:
      "We offer a comprehensive range of legal services including Civil Law, Criminal Law, Family Law, Corporate Law, Real Estate, Immigration, Labour Law, Intellectual Property, Banking & Finance, and Commercial Dispute Resolution. Our multidisciplinary team ensures all your legal needs are handled under one roof.",
  },
  {
    id: "faq-2",
    question: "How do I schedule a consultation with your firm?",
    answer:
      "You can schedule a consultation through our online booking form on the Contact page, by calling us directly at +91 11 4567 8900, or by emailing contact@bhushanandsons.com. We offer both in-person consultations at any of our three offices and virtual consultations for your convenience.",
  },
  {
    id: "faq-3",
    question: "What is your fee structure?",
    answer:
      "Our fees vary depending on the nature and complexity of the matter. We offer transparent, clearly structured fee arrangements including fixed fees for routine matters, hourly rates for complex advisory work, and contingency arrangements where appropriate. We always discuss fees clearly at the outset before any engagement.",
  },
  {
    id: "faq-4",
    question: "Does your firm handle international legal matters?",
    answer:
      "Yes. Bhushan & Sons has extensive experience in cross-border legal matters. We have strong relationships with leading law firms in over 30 countries and our senior partners hold advanced degrees from Harvard, Oxford, and Stanford. We regularly handle international arbitrations, cross-border M&A, and multinational IP matters.",
  },
  {
    id: "faq-5",
    question: "How long has Bhushan & Sons been in practice?",
    answer:
      "Bhushan & Sons was established in 1989 — making us one of Delhi's longest-standing and most trusted law firms. Over 35 years, we have built a reputation for uncompromising integrity, exceptional advocacy, and landmark results for our clients.",
  },
  {
    id: "faq-6",
    question: "How do you ensure client confidentiality?",
    answer:
      "Client confidentiality is an absolute principle at Bhushan & Sons. All our professionals are bound by strict attorney-client privilege and confidentiality obligations. We have robust data security protocols and our offices are designed to ensure complete privacy in all client interactions.",
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "expertise",
    title: "Elite Legal Expertise",
    description:
      "Our attorneys are graduates of India's and the world's premier law schools — Harvard, Oxford, Stanford, and NLS — bringing global-standard legal thinking to every matter.",
    icon: "award",
  },
  {
    id: "confidentiality",
    title: "Absolute Confidentiality",
    description:
      "We treat every client matter with the strictest attorney-client privilege. Your information is protected by both legal obligation and our unwavering professional ethics.",
    icon: "lock",
  },
  {
    id: "integrity",
    title: "Uncompromising Integrity",
    description:
      "Built on 35 years of honest, transparent legal counsel. We tell you what you need to hear, not what you want to hear — and that honesty is what delivers results.",
    icon: "shield-check",
  },
  {
    id: "strategy",
    title: "Strategic Representation",
    description:
      "We don't just file paperwork. Every matter is approached with deep strategic analysis, anticipating opposing positions and positioning you for the best possible outcome.",
    icon: "chess",
  },
  {
    id: "communication",
    title: "Transparent Communication",
    description:
      "You will always know the status of your matter. We maintain proactive, clear communication and never leave clients wondering about progress, next steps, or costs.",
    icon: "message",
  },
  {
    id: "results",
    title: "Results Driven",
    description:
      "Our track record speaks: 2,500+ cases handled, 98% client satisfaction, and landmark victories at the Supreme Court and High Courts. We measure success by your outcomes.",
    icon: "trophy",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    value: "35+",
    label: "Years of Excellence",
    description: "Trusted legal counsel since 1989",
  },
  {
    id: "a2",
    value: "2500+",
    label: "Cases Handled",
    description: "Across all practice areas",
  },
  {
    id: "a3",
    value: "98%",
    label: "Client Satisfaction",
    description: "Consistently rated by clients",
  },
  {
    id: "a4",
    value: "50+",
    label: "Legal Professionals",
    description: "Across three offices in India",
  },
];

export const FIRM_TIMELINE: TimelineEvent[] = [
  {
    year: "1989",
    title: "Foundation",
    description:
      "Rajesh Bhushan establishes the firm in New Delhi with a commitment to principled, client-first legal practice.",
  },
  {
    year: "1997",
    title: "Corporate Practice Launch",
    description:
      "Expansion into corporate law as India's economic liberalization creates demand for sophisticated transactional counsel.",
  },
  {
    year: "2003",
    title: "Mumbai Office Opens",
    description:
      "Strategic expansion to India's financial capital, establishing presence in Nariman Point for banking and capital markets work.",
  },
  {
    year: "2008",
    title: "International Practice",
    description:
      "Launch of cross-border advisory practice following significant mandates from multinational corporations entering India.",
  },
  {
    year: "2014",
    title: "IP Practice Established",
    description:
      "Kavita Sharma joins as Partner, establishing a world-class intellectual property practice that rapidly gains national recognition.",
  },
  {
    year: "2018",
    title: "Bangalore Office Opens",
    description:
      "Expansion into India's technology hub to serve the booming startup and technology sector with dedicated legal counsel.",
  },
  {
    year: "2024",
    title: "35 Years of Excellence",
    description:
      "Celebrating 35 years of trusted legal counsel, with 50+ professionals and over 2,500 matters handled across India and internationally.",
  },
];

export const PRACTICE_AREA_OPTIONS = PRACTICE_AREAS.map((area) => ({
  value: area.id,
  label: area.title,
}));
