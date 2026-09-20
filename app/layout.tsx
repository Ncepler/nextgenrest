import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/schema";
import { COMPANY_NAME, SITE_URL } from "@/lib/site-data";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Fire, Water & Mold Restoration — NYC Tri-State`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "24/7 fire, water, flood, mold, and asbestos restoration for the NYC tri-state area. We handle your insurance claim directly. Call 516.491.1601.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-text-primary">
        <JsonLd data={localBusinessJsonLd()} />
        {/* Fixed to the viewport top so Header can sit transparent-over-hero
            (CLAUDE.md §7) instead of reserving flow space like a normal
            sticky header. One call CTA per viewport: this is the only call
            affordance on desktop; MobileCallBar is the only one on mobile. */}
        <div className="fixed inset-x-0 top-0 z-40">
          <Header />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
