import Image from "next/image";
import heroImage from "@/public/images/hero.png";
import { Button } from "@/components/ui/Button";
import { H1, Lead } from "@/components/ui/Typography";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

/**
 * Home hero (CLAUDE.md §7): full-bleed background — lead with the outcome
 * (a restored/renovated interior), never the disaster — with a bg-dark
 * scrim over the bottom 40% so headline/CTA stay legible.
 *
 * Sized with plain `min-h` per breakpoint, not `aspect-video`: pairing
 * `aspect-ratio` with an explicit `min-h`/`max-h` looks reasonable but
 * isn't — whenever the min/max clamps the height away from what the
 * ratio would derive from the container's width, the browser derives
 * width from that clamped height instead of the other way around, so
 * the section stops being full-bleed (a bug, caught visually: it left a
 * flat white gap on the right at 1920px wide, and overflowed past the
 * viewport on mobile — same cause, opposite direction). `object-cover`
 * on the image below is what actually makes a 16:9 source photo read as
 * "the hero image" at any box shape, without needing the section itself
 * to be locked to that ratio.
 *
 * public/images/hero.png (1672×941, ~16:9) is the real photo. Checked with
 * the hero-imagery skill's check_hero.py against the raw file
 * (--text "#F2F3F5" --polarity light --text-rows 3-4, since copy sits in
 * the bottom two-fifths here): the bare photo alone comes back FAIL —
 * residual brightness from the window's lower edge lands at 3.28:1 in the
 * declared text zone, under the 4.5:1 floor the subhead paragraph needs,
 * and worse (2.80:1) once phone-crop concentrates on that same column.
 * The scrim below is deliberately stronger than a bare-minimum bottom-40%
 * fade to compensate — hand-verified back above ~5.7:1 across the text
 * zone once the scrim alpha is blended in (the check script only measures
 * the raw file, it can't see the CSS layer on top). Two MARGINAL findings
 * on the photo itself are accepted, not fixed: zero clipped highlights
 * (a generated-image tell) and thin contrast (~2.5:1) after simulated
 * outdoor glare — re-roll the photo if either becomes a real complaint.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[480px] items-end overflow-hidden bg-[#0D1B2A] md:min-h-[600px] lg:min-h-[680px]">
      <Image
        src={heroImage}
        alt="A freshly restored living room at dusk — refinished hardwood floors, warm lamplight, and the sunset skyline through tall windows"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* bg-dark scrim, strengthened through the lower half — see comment above */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(13,27,42,0.94) 0%, rgba(13,27,42,0.72) 30%, rgba(13,27,42,0.35) 50%, rgba(13,27,42,0) 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-8 md:px-8 md:pb-12">
        <H1 className="max-w-3xl text-text-on-dark">Disaster Doesn&apos;t Wait. Neither Do We.</H1>
        <Lead className="mt-5 max-w-2xl text-text-on-dark-secondary">
          Fire, water, flood, mold, and asbestos restoration for the NYC
          tri-state area — on call 24 hours a day, every day of the year.
        </Lead>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={PHONE_TEL} variant="primary">
            Call Now: {PHONE_DISPLAY}
          </Button>
          <Button href="/contact" variant="outline">
            Get Emergency Help
          </Button>
        </div>
      </div>
    </section>
  );
}
