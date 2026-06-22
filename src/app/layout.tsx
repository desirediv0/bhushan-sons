import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

// Use DIFFERENT variable names from what globals.css registers
// to avoid circular var() references in Tailwind v4 @theme
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",   // ← renamed (was --font-heading)
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",      // ← renamed (was --font-body)
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",  // ← renamed (was --font-accent)
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bhushan & Sons | Advocates & Solicitors",
    template: "%s | Bhushan & Sons",
  },
  description:
    "A premier full-service law firm delivering exceptional legal counsel with integrity, precision, and an unwavering commitment to excellence. Established 1989.",
  keywords: [
    "law firm India",
    "advocates solicitors",
    "legal counsel",
    "corporate law",
    "litigation",
    "intellectual property",
    "mergers acquisitions",
    "Bhushan and Sons",
  ],
  metadataBase: new URL("https://bhushanandsons.com"),
  openGraph: {
    title: "Bhushan & Sons | Advocates & Solicitors",
    description:
      "Strategic legal counsel, exceptional advocacy, and unwavering commitment to protecting your interests. Premier law firm since 1989.",
    type: "website",
    siteName: "Bhushan & Sons",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhushan & Sons | Advocates & Solicitors",
    description:
      "Strategic legal counsel, exceptional advocacy, and unwavering commitment to protecting your interests.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
