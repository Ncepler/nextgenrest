import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { InsuranceValueStrip } from "@/components/sections/InsuranceValueStrip";
import { Reveal } from "@/components/ui/Reveal";
import { H3, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insurance Claims Help",
  description:
    "Direct insurance billing, claim management, and adjustment services — we deal with your insurance company so you don't have to. Call 516.491.1601.",
  path: "/insurance-claims",
});

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
      <PageIntro h1="We Handle Your Insurance Company So You Don't Have To">
        Dealing with an insurance claim on top of property damage is its own
        kind of stressful. We take that off your hands — managing the
        paperwork, the billing, and the back-and-forth with adjusters — so
        the process moves faster and you get the full coverage you&apos;re
        entitled to.
      </PageIntro>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <Reveal>
          <InsuranceValueStrip className="mb-14" />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal key={s.h2} delay={i * 0.08}>
              <H3>{s.h2}</H3>
              <Body className="mt-3 text-text-secondary">{s.body}</Body>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bg-dark py-16 md:py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 text-center md:px-8">
          <Body className="max-w-xl text-text-on-dark">
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
