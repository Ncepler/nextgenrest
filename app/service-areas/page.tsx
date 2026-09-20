import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Body } from "@/components/ui/Typography";
import { SERVICE_AREAS } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas",
  description:
    "Serving the NYC boroughs, Long Island, Westchester, New Jersey, and Connecticut — 24/7 fire, water, flood, mold, and asbestos restoration.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageIntro h1="Serving the NYC Tri-State Area">
        We&apos;re not an outside company passing through — we live and work
        across the same communities we serve. Our team responds throughout
        the NYC boroughs, Long Island, Westchester, New Jersey, and
        Connecticut, day or night.
      </PageIntro>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <Reveal>
          <ul className="mx-auto flex max-w-2xl flex-col gap-8">
            {SERVICE_AREAS.map((area) => (
              <li key={area.id} id={area.id} className="scroll-mt-28 border-b border-rule pb-8 last:border-none">
                <h3 className="font-display text-[20px] font-semibold md:text-[22px]">
                  {area.name}
                </h3>
                <Body className="mt-2 text-text-secondary">{area.blurb}</Body>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
