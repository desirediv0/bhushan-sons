import type { Metadata } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCall } from "@/components/ui/floating-call";
import { DisclaimerModal } from "@/components/ui/disclaimer-modal";
import "./globals.css";

// Editorial serif display face — variable name kept as --font-playfair
// so the rest of the codebase (font-heading utility etc.) needs no changes.
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
        className={`${newsreader.variable} ${instrumentSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
        <FloatingCall />
        <DisclaimerModal />
      </body>
    </html>
  );
}
