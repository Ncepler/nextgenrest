import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to the most common questions about fire, water, flood, mold, and asbestos restoration, insurance claims, and our NYC tri-state service area.",
  path: "/faq",
});

// Drafted from CLAUDE.md §2 facts only. One answer below is intentionally
// non-specific and flagged in the build report — see "average response
// time" — because no exact figure exists on file yet.
const faqs: AccordionItem[] = [
  {
    question: "Does insurance cover this kind of damage?",
    answer:
      "Coverage depends on your specific policy and the cause of the damage. What we can tell you is that we handle the insurance side directly — managing your claim and communicating with your adjuster — so you don't have to figure out coverage questions on your own while the damage is still active.",
  },
  {
    question: "How fast can someone get here?",
    answer:
      "We're on call 24 hours a day, 365 days a year, and we respond to every call as quickly as we can. [EXACT AVERAGE RESPONSE TIME not yet on file — call 516.491.1601 and we'll tell you what to expect for your situation.]",
  },
  {
    question: "Do you handle the insurance claim for me?",
    answer:
      "Yes. We manage direct insurance billing, claim management, and adjuster communication from start to finish, so you're not stuck handling paperwork on top of everything else.",
  },
  {
    question: "What's the difference between water damage and flood damage?",
    answer:
      "Water damage typically comes from something inside the property — a burst pipe, a leak, an appliance failure. Flood damage comes from an outside event affecting a wider area, often with contamination risk and a larger-scale response. The two are frequently treated differently by insurance policies, which is exactly why having us manage your claim and adjuster communication matters — we make sure your damage is assessed and classified accurately.",
  },
  {
    question: "Do you test for mold before and after remediation?",
    answer:
      "Yes. Our mold remediation process starts with inspection to find where mold is growing — including places you can't see — and ends with post-remediation verification to confirm it's been fully removed.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the NYC boroughs (Manhattan, Brooklyn, Queens, the Bronx, and Staten Island), Long Island (Nassau and Suffolk County), Westchester County, New Jersey (including Bergen County), and Connecticut (including Fairfield County).",
  },
  {
    question: "Is this a 24/7 line?",
    answer:
      "Yes — we're available 24 hours a day, every day of the year, including holidays.",
  },
  {
    question: "Can you also help renovate the space after restoration?",
    answer:
      "Yes. Once the damage is handled, our design and planning team can help you rebuild — from small updates to full remodels — so restoration can also be an upgrade if you want it to be.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageIntro h1="Frequently Asked Questions">
        Answers to what homeowners usually want to know before they call.
      </PageIntro>
      <section className="mx-auto max-w-[820px] px-6 py-20 md:px-8 md:py-28">
        <Accordion items={faqs} />
      </section>
    </>
  );
}
