"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Service } from "@/lib/site-data";
import { PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";
import { H1, H2, Lead, Body, Small } from "@/components/ui/Typography";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { InsuranceValueStrip } from "@/components/sections/InsuranceValueStrip";
import { JOBS } from "@/lib/jobs";
import { EASE_OUT } from "@/lib/motion";

/**
 * A checklist tick that draws itself once as it enters view (state
 * indication / explanation of what's covered) — occasional-frequency, since
 * a visitor sees "What's Included" once per page visit, so it's within the
 * "no animation on anything 100+/day" budget. `pathLength` is Framer
 * Motion's built-in stroke-dasharray/-dashoffset draw: 0 is fully hidden,
 * 1 is fully drawn. Reduced motion skips the draw and shows a static check.
 */
function CheckTick({ index, reduceMotion }: { index: number; reduceMotion: boolean }) {
  if (reduceMotion) {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <motion.path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3, ease: EASE_OUT, delay: index * 0.04 }}
      />
    </svg>
  );
}

/**
 * Shared template for the 5 /services/* pages (CLAUDE.md §8) — per-service
 * copy comes in as data, layout and components are identical across all
 * five so they stay visually and structurally consistent. Six sections,
 * each a distinct layout skeleton so no two adjacent bands read the same:
 * night hero -> paper checklist(+slider) -> paper-deep insurance band ->
 * quiet cross-nav row -> night closing call band.
 */
export function ServiceTemplate({ service }: { service: Service }) {
  const reduceMotion = useReducedMotion() ?? false;
  const jobPair = JOBS.find((j) => j.serviceSlug === service.slug);
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* 1. Night hero band. Extra top clearance (beyond the usual
          py-20/28) so H1 isn't covered by the fixed Header above it. */}
      <section className="on-dark bg-night pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <Reveal>
            <H1 className="max-w-2xl text-text-on-night">{service.h1}</H1>
            <Lead className="mt-5 max-w-2xl text-text-on-night-soft">{service.intro}</Lead>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={PHONE_TEL} variant="primary">
                Call Now: {PHONE_DISPLAY}
              </Button>
              <Button href="/contact" variant="outline">
                Get Emergency Help
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 & 3. What's Included checklist on paper, with the before/after
          slider alongside it when a real job pair exists for this
          service. No job pair yet -> no reserved space, nothing renders. */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className={jobPair ? "grid gap-12 md:grid-cols-2 md:items-start" : "mx-auto max-w-2xl"}>
            <Reveal>
              <H2>What&apos;s Included</H2>
              <ul className="mt-6 flex flex-col gap-3">
                {service.included.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink"
                    >
                      <CheckTick index={i} reduceMotion={reduceMotion} />
                    </span>
                    <Body className="text-ink-soft">{item}</Body>
                  </li>
                ))}
              </ul>
              {service.note && <Small className="mt-6 block italic text-ink-soft">{service.note}</Small>}
            </Reveal>

            {jobPair && (
              <Reveal delay={0.1}>
                <p className="mb-6 font-display text-[22px] font-semibold leading-[1.15] md:text-[26px]">
                  See the Difference
                </p>
                <BeforeAfterSlider before={jobPair.before} after={jobPair.after} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* 4. Insurance pull-quote band — a hairline seam plus a centered,
          single-card layout distinguish it from the 2-column checklist
          above, featuring the shared trust callout larger and centered.
          No new color: ember and lamp stay off-limits here, exactly as
          InsuranceValueStrip already handles it. */}
      <section className="border-t border-line bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <Reveal>
            <InsuranceValueStrip className="mx-auto max-w-3xl" />
          </Reveal>
        </div>
      </section>

      {/* 5. Compact cross-navigation to the other 4 service pages — quiet
          and secondary, not the Home page's large numbered ServiceIndex.
          Plain flat links, no ember/lamp. */}
      <section className="bg-paper-deep py-14 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <Small className="font-semibold uppercase tracking-wide text-ink-soft">
            Other Services
          </Small>
          <nav aria-label="Other services" className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="font-body text-[15px] font-semibold text-ink underline-offset-4 hover:underline"
              >
                {s.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* 6. Closing call band. data-call-redundant hides the sticky mobile
          call bar while this band (already one large call affordance) is
          in view — see components/layout/MobileCallBar.tsx. */}
      <section data-call-redundant className="on-dark bg-night py-16 md:py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 text-center md:px-8">
          <H2 className="max-w-xl text-text-on-night">Every Hour Matters With {service.name}</H2>
          <Button href={PHONE_TEL} variant="primary">
            Call Now: {PHONE_DISPLAY}
          </Button>
        </div>
      </section>
    </>
  );
}
