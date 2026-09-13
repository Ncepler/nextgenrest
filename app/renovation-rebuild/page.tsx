import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { H3, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Renovation & Rebuild",
  description:
    "Turn restoration into renovation — design & planning and full remodeling from the team that already knows your property's history. Call 516.491.1601.",
  path: "/renovation-rebuild",
});

const sections = [
  {
    h2: "Design & Planning",
    body: "We work with you from concept through completion, planning a renovation that fits both how you live and what the space allows.",
  },
  {
    h2: "Renovation & Remodeling",
    body: "From small updates to full remodels, our renovation team picks up right where restoration leaves off — no need to bring in a separate contractor who doesn't know the property's history.",
  },
];

export default function RenovationRebuildPage() {
  return (
    <>
      <PageIntro h1="Turn Restoration Into a Renovation">
        Every restoration project is also a chance to rebuild better than
        before. Once the damage is handled, our design and planning team can
        help you reimagine the space — new layouts, updated finishes,
        functional upgrades — guided by your vision and built by people who
        already know every inch of the property.
      </PageIntro>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
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
