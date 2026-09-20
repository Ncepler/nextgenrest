import type { Service } from "@/lib/site-data";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";
import { H1, H2, Lead, Body } from "@/components/ui/Typography";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { InsuranceValueStrip } from "@/components/sections/InsuranceValueStrip";
import { JOBS } from "@/lib/jobs";

/**
 * Shared template for the 5 /services/* pages (CLAUDE.md §8) — per-service
 * copy comes in as data, layout and components are identical across all
 * five so they stay visually and structurally consistent.
 */
export function ServiceTemplate({ service }: { service: Service }) {
  const jobPair = JOBS.find((j) => j.serviceSlug === service.slug);

  return (
    <>
      {/* Extra top clearance (beyond the usual py-20/28) so H1 isn't
          covered by the fixed Header above it. */}
      <section className="bg-bg-dark pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <Reveal>
            <H1 className="max-w-2xl text-text-on-dark">{service.h1}</H1>
            <Lead className="mt-5 max-w-2xl text-text-on-dark-secondary">{service.intro}</Lead>
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

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <div className={jobPair ? "grid gap-12 md:grid-cols-2 md:items-start" : "mx-auto max-w-2xl"}>
          <Reveal>
            <H2>What&apos;s Included</H2>
            <ul className="mt-6 flex flex-col gap-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-2/15 text-accent-2"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <Body className="text-text-secondary">{item}</Body>
                </li>
              ))}
            </ul>
            {service.note && (
              <p className="mt-6 text-[14px] italic text-text-tertiary">{service.note}</p>
            )}
            <div className="mt-8">
              <InsuranceValueStrip />
            </div>
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
      </section>

      <section className="bg-bg-dark py-16 md:py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-6 text-center md:px-8">
          <p className="max-w-xl font-display text-[24px] font-semibold leading-[1.15] text-text-on-dark md:text-[32px]">
            Every Hour Matters With {service.name}
          </p>
          <Button href={PHONE_TEL} variant="primary">
            Call Now: {PHONE_DISPLAY}
          </Button>
        </div>
      </section>
    </>
  );
}
