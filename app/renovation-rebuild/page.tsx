import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { H2, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Renovation & Rebuild",
  description:
    "Turn restoration into renovation — design & planning and full remodeling from the team that already knows your property's history. Call 516.491.1601.",
  path: "/renovation-rebuild",
});

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Renovation",
      item: `${SITE_URL}/renovation-rebuild`,
    },
  ],
};

const sections = [
  {
    n: "01",
    h2: "Design & Planning",
    body: "We work with you from concept through completion, planning a renovation that fits both how you live and what the space allows.",
  },
  {
    n: "02",
    h2: "Renovation & Remodeling",
    body: "From small updates to full remodels, our renovation team picks up right where restoration leaves off — no need to bring in a separate contractor who doesn't know the property's history.",
  },
];

export default function RenovationRebuildPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageIntro h1="Turn Restoration Into a Renovation">
        Every restoration project is also a chance to rebuild better than
        before. Once the damage is handled, our design and planning team can
        help you reimagine the space — new layouts, updated finishes,
        functional upgrades — guided by your vision and built by people who
        already know every inch of the property.
      </PageIntro>

      {/* A two-up diptych split by a single vertical rule — large type,
          only two subsections, deliberately roomier than Insurance's
          three-column badge grid. */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 md:grid-cols-2 md:divide-x md:divide-line">
          {sections.map((s, i) => (
            <Reveal key={s.h2} delay={i * 0.1}>
              <div className={i === 1 ? "md:pl-14" : "md:pr-14"}>
                <span className="font-body text-[14px] font-semibold tabular-nums text-ink-soft">
                  {s.n}
                </span>
                <H2 className="mt-3">{s.h2}</H2>
                <Body className="mt-4 text-ink-soft">{s.body}</Body>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-call-redundant className="on-dark bg-night py-16 md:py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 text-center md:px-8">
          <Body className="max-w-xl text-text-on-night-soft">
            Talk to our team about turning your restoration into a
            renovation — Call {PHONE_DISPLAY}
          </Body>
          <Button href={PHONE_TEL} variant="primary">
            Call Now: {PHONE_DISPLAY}
          </Button>
        </div>
      </section>
    </>
  );
}
