import type { Metadata } from "next";
import { H1, H2, Body } from "@/components/ui/Typography";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Restoration Services",
  description:
    "Fire, water, flood, mold, and asbestos restoration services for the NYC tri-state area — plus insurance claim management and post-restoration renovation. Call 516.491.1601.",
  path: "/services",
});

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
};

/**
 * Services hub — kept on `paper`, centered, no PageIntro night band. That's
 * deliberate: every other interior page in this build opens on a night
 * band, so this one staying light (matching the original hub spec of
 * "H1 + intro + grid") is what makes it read as its own page rather than a
 * copy of the others.
 */
export default function ServicesHub() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="mx-auto max-w-[1280px] px-6 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <H1>Every Kind of Damage, One Team You Can Call</H1>
            <Body className="mx-auto mt-5 text-ink-soft">
              From a single burst pipe to a full structure fire, we handle
              the full range of property damage restoration — and
              everything that comes after it, including your insurance
              claim and, if you want it, a rebuild that leaves your space
              better than before.
            </Body>
          </div>
        </Reveal>

        {/* sr-only: ServiceCard renders its title as an <h3>, so this
            keeps the page's heading order (h1 → h2 → h3) intact without
            adding a visible label the copy spec didn't ask for. */}
        <H2 className="sr-only">Our Services</H2>

        <div className="mt-14">
          <ServiceGrid />
        </div>
      </section>
    </>
  );
}
