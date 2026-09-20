import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { InsuranceValueStrip } from "@/components/sections/InsuranceValueStrip";
import { Reveal } from "@/components/ui/Reveal";
import { Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insurance Claims Help",
  description:
    "Direct insurance billing, claim management, and adjustment services — we deal with your insurance company so you don't have to. Call 516.491.1601.",
  path: "/insurance-claims",
});

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Insurance Claims",
      item: `${SITE_URL}/insurance-claims`,
    },
  ],
};

const sections = [
  {
    h2: "Direct Insurance Billing",
    body: "We bill your insurance company directly, handling the paperwork so you don't have to front the cost or manage the process yourself.",
  },
  {
    h2: "Insurance Claim Management",
    body: "From filing to final payout, we manage your claim from end to end, working to make sure nothing gets missed or shortchanged.",
  },
  {
    h2: "Insurance Adjustment Services",
    body: "Our team works directly with adjusters to make sure the damage is assessed accurately — and that your claim reflects its true, full value.",
  },
];

export default function InsuranceClaimsPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageIntro h1="We Handle Your Insurance Company So You Don't Have To">
        Dealing with an insurance claim on top of property damage is its own
        kind of stressful. We take that off your hands — managing the
        paperwork, the billing, and the back-and-forth with adjusters — so
        the process moves faster and you get the full coverage you&apos;re
        entitled to.
      </PageIntro>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <Reveal>
          <InsuranceValueStrip className="mb-16" />
        </Reveal>

        {/* Three numbered columns — the badge treatment is this page's own
            visual signature, distinct from the diptych on Renovation and
            the icon cards on Service Areas. */}
        <div className="grid gap-10 border-t border-line pt-14 md:grid-cols-3 md:gap-12">
          {sections.map((s, i) => (
            <Reveal key={s.h2} delay={i * 0.08}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper-deep font-body text-[13px] font-semibold tabular-nums text-ink-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 font-display text-[22px] font-bold leading-[1.1] tracking-[-0.01em] text-ink md:text-[26px]">
                {s.h2}
              </h2>
              <Body className="mt-3 text-ink-soft">{s.body}</Body>
            </Reveal>
          ))}
        </div>
      </section>

      {/* data-call-redundant: this band is already one large call CTA, so
          the sticky mobile call bar hides while it's in view. */}
      <section data-call-redundant className="on-dark bg-night py-16 md:py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 text-center md:px-8">
          <Body className="max-w-xl text-text-on-night-soft">
            Already dealing with an insurance headache? Call {PHONE_DISPLAY}{" "}
            and let us take it from here.
          </Body>
          <Button href={PHONE_TEL} variant="primary">
            Call Now: {PHONE_DISPLAY}
          </Button>
        </div>
      </section>
    </>
  );
}
