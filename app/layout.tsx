import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/schema";
import { COMPANY_NAME, SITE_URL } from "@/lib/site-data";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B1220",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Fire, Water & Mold Restoration — NYC Tri-State`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "24/7 fire, water, flood, mold, and asbestos restoration for the NYC tri-state area. We handle your insurance claim directly. Call 516.491.1601.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <JsonLd data={localBusinessJsonLd()} />
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-paper focus-visible:px-5 focus-visible:py-3 focus-visible:font-semibold focus-visible:text-ink"
        >
          Skip to content
        </a>
        {/* Fixed to the viewport top so Header can sit transparent-over-hero
            until its own IntersectionObserver reports the hero has scrolled
            out. One call CTA per viewport: the header pill is the only one
            on desktop; MobileCallBar is the only one on mobile. */}
        <div className="fixed inset-x-0 top-0 z-40">
          <Header />
        </div>
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
