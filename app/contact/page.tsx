import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import { Reveal } from "@/components/ui/Reveal";
import { Small } from "@/components/ui/Typography";
import { EMAIL, EMAIL_MAILTO, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get help now — call or email Next Generation Restoration, available 24 hours a day, 365 days a year across the NYC tri-state area.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro h1="Get Help Now">
        Available 24 hours a day, 365 days a year. Call us directly or reach
        out by email and we&apos;ll get back to you right away.
      </PageIntro>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-6">
              <a
                href={PHONE_TEL}
                className="flex flex-col rounded-xl border border-rule bg-bg p-6 transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-soft"
              >
                <Small className="font-semibold uppercase tracking-wide text-text-tertiary">
                  Call
                </Small>
                <span className="mt-2 font-display text-[32px] font-semibold text-accent md:text-[40px]">
                  {PHONE_DISPLAY}
                </span>
                <Small className="mt-1 text-text-secondary">
                  Fastest way to reach us — available 24/7/365.
                </Small>
              </a>

              <a
                href={EMAIL_MAILTO}
                className="flex flex-col rounded-xl border border-rule bg-bg p-6 transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-soft"
              >
                <Small className="font-semibold uppercase tracking-wide text-text-tertiary">
                  Email
                </Small>
                <span className="mt-2 font-display text-[22px] font-semibold text-text-primary md:text-[26px]">
                  {EMAIL}
                </span>
                <Small className="mt-1 text-text-secondary">
                  For non-urgent questions — if it&apos;s active damage, call instead.
                </Small>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <PlaceholderBlock label="[Map embed placeholder]" aspect="aspect-square md:aspect-[4/5]" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
