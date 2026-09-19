import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { company } from "@/data/company";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Update this to the live production domain once it is configured.
const siteUrl = "https://www.trulyasiaglobaltrade.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Asian Sourcing & Wholesale Supply`,
    template: `%s | ${company.name}`,
  },
  description:
    "Truly Asia Global Trade is an import and wholesale trading company based in Peshawar, Pakistan, sourcing quality products from across Asia — including Indonesian broomsticks, turmeric, coffee beans, and raw cacao — for local wholesalers and businesses.",
  keywords: [
    "Truly Asia Global Trade",
    "Asian sourcing",
    "import company in Pakistan",
    "wholesale supplier",
    "Peshawar trading company",
    "imported broomsticks",
    "Indonesian broomsticks",
    "wholesale products Pakistan",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Connecting Asian Supply with Local Markets`,
    description:
      "Import and wholesale trading company based in Peshawar, Pakistan, sourcing quality products from across Asia for local markets.",
    images: [
      {
        url: "/images/hero/og-image.jpg",
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Connecting Asian Supply with Local Markets`,
    description:
      "Import and wholesale trading company based in Peshawar, Pakistan, sourcing quality products from across Asia for local markets.",
    images: ["/images/hero/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-port-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
