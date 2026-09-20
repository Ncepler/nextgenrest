import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Body } from "@/components/ui/Typography";
import { JsonLd } from "@/components/JsonLd";
import { SERVICE_AREAS, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas",
  description:
    "Serving the NYC boroughs, Long Island, Westchester, New Jersey, and Connecticut — 24/7 fire, water, flood, mold, and asbestos restoration. Call 516.491.1601.",
  path: "/service-areas",
});

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Service Areas",
      item: `${SITE_URL}/service-areas`,
    },
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageIntro h1="Serving the NYC Tri-State Area">
        We&apos;re not an outside company passing through — we live and work
        across the same communities we serve. Our team responds throughout
        the NYC boroughs, Long Island, Westchester, New Jersey, and
        Connecticut, day or night.
      </PageIntro>

      {/* A card grid, one per region — no map (deliberate). Anchor ids on
          each card must stay exactly as the footer's region links expect:
          nyc-boroughs, long-island, westchester, new-jersey, connecticut. */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area, i) => (
            <Reveal key={area.id} delay={i * 0.05}>
              <div
                id={area.id}
                className="flex h-full scroll-mt-28 flex-col rounded-xl border border-line bg-paper p-7"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper-deep text-ink"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <h2 className="mt-4 font-display text-[20px] font-bold leading-[1.15] tracking-[-0.01em] text-ink md:text-[22px]">
                  {area.name}
                </h2>
                <Body className="mt-2 text-ink-soft">{area.blurb}</Body>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
