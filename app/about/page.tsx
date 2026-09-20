import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { H1, H2, Lead, Body, Small } from "@/components/ui/Typography";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-data";
import { TEAM } from "@/lib/team";
import { CREDENTIALS } from "@/lib/credentials";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Your steadfast partner through property damage — 24/7 fire, water, flood, mold, and asbestos restoration across the NYC tri-state area. Call 516.491.1601.",
  path: "/about",
});

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

/**
 * The one interior page that skips PageIntro's night band entirely — the
 * four copy blocks (intro + 3 subsections) run as large-type editorial rows
 * directly on paper, each alternating width/alignment so the page doesn't
 * read as four identical stacked cards. Top padding below stands in for
 * PageIntro's own fixed-header clearance since there's no night band here.
 */
export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="mx-auto max-w-[1280px] px-6 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <Reveal>
          <H1 className="max-w-3xl">Your Steadfast Partner Through Property Damage</H1>
        </Reveal>

        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl text-ink-soft">
            Disasters don&apos;t check the calendar before they strike,
            which is why we&apos;re available 24 hours a day, 365 days a
            year. We specialize in restoring homes and businesses after
            fire, smoke, water, flood, mold, and asbestos damage — working
            to return every property to its pre-damage condition or better,
            as quickly and thoroughly as possible.
          </Lead>
        </Reveal>

        {/* Row 2: narrow, right-aligned, offset from the intro above. */}
        <Reveal delay={0.1}>
          <div className="mt-16 ml-auto max-w-xl border-t border-line pt-12 text-right md:mt-20">
            <H2>A Client-First Approach</H2>
            <Body className="mt-4 ml-auto text-ink-soft">
              What sets us apart is handling the entire job, not just the
              physical repair. We take on the complicated, often
              frustrating process of dealing with insurance companies
              directly, managing communication with insurers so the process
              moves faster and you get the coverage you actually deserve.
            </Body>
          </div>
        </Reveal>

        {/* Row 3: wide, left-aligned. */}
        <Reveal delay={0.12}>
          <div className="mt-16 max-w-3xl border-t border-line pt-12 md:mt-20">
            <H2>More Than a Service Provider</H2>
            <Body className="mt-4 text-ink-soft">
              Serving the NYC boroughs, Long Island, New Jersey, Westchester,
              and Connecticut, we consider ourselves part of these
              communities, not an outside company that shows up after
              something goes wrong and disappears once the check clears.
            </Body>
          </div>
        </Reveal>

        {/* Row 4: centered, closing statement. */}
        <Reveal delay={0.14}>
          <div className="mx-auto mt-16 max-w-2xl border-t border-line pt-12 text-center md:mt-20">
            <H2>Available Around the Clock</H2>
            <Body className="mx-auto mt-4 text-ink-soft">
              From the moment you call to the day your space is fully
              restored, we&apos;re with you at every step — working toward a
              fast, complete recovery that restores not just your property,
              but your peace of mind.
            </Body>
          </div>
        </Reveal>

        {/* TEAM and CREDENTIALS are currently empty arrays — both render
            nothing, per the no-placeholder rule. */}
        {TEAM.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-20 grid gap-6 border-t border-line pt-12 sm:grid-cols-2 md:grid-cols-3">
              {TEAM.map((member) => (
                <div key={member.name} className="text-center">
                  <p className="font-display text-[17px] font-semibold text-ink">
                    {member.name}
                  </p>
                  <Small className="text-ink-soft">{member.role}</Small>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {CREDENTIALS.length > 0 && (
          <Reveal delay={0.24}>
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
              {CREDENTIALS.map((c) => (
                <Small key={c.label} className="font-semibold text-ink-soft">
                  {c.label}
                  {c.issuer ? ` · ${c.issuer}` : ""}
                </Small>
              ))}
            </div>
          </Reveal>
        )}
      </section>
    </>
  );
}
