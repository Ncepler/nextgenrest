import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Small } from "@/components/ui/Typography";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get help now — call Next Generation Restoration, available 24 hours a day, 365 days a year across the NYC tri-state area.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro h1="Get Help Now">
        Available 24 hours a day, 365 days a year. Call us directly and
        we&apos;ll walk you through what happens next.
      </PageIntro>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <Reveal>
          <a
            href={PHONE_TEL}
            className="mx-auto flex max-w-xl flex-col items-center rounded-xl border border-rule bg-bg p-10 text-center transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-soft md:p-14"
          >
            <Small className="font-semibold uppercase tracking-wide text-text-tertiary">
              Call
            </Small>
            <span className="mt-3 font-display text-[40px] font-semibold text-accent md:text-[56px]">
              {PHONE_DISPLAY}
            </span>
            <Small className="mt-2 text-text-secondary">
              Available 24 hours a day, 365 days a year.
            </Small>
          </a>
        </Reveal>
      </section>
    </>
  );
}
