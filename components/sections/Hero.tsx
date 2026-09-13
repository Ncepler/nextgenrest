import { Button } from "@/components/ui/Button";
import { H1, Lead } from "@/components/ui/Typography";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

/**
 * Home hero (CLAUDE.md §7): full-bleed background — lead with the outcome
 * (a restored/renovated interior), never the disaster — with a bg-dark
 * scrim over the bottom 40% so headline/CTA stay legible.
 *
 * The box is sized `aspect-video` (16:9) on md+ so the section's actual
 * shape matches the 16:9 photo it's built for — the image reads as "the
 * hero image," not a tall gradient with a photo cropped into it. A
 * `min-h` floor keeps mobile tall enough that the text stack never gets
 * clipped by `overflow-hidden` even where 16:9 alone would be too short.
 *
 * No real photo yet, so the background is a flat gradient standing in for
 * one. Once Noah supplies hero.jpg (16:9, generated per the hero-imagery
 * skill — restored interior, NOT a damage photo), swap the gradient `div`
 * below for:
 *   <Image src="/images/hero.jpg" alt="[describe the actual restored
 *     interior shown]" fill priority sizes="100vw" className="object-cover" />
 * placed as the first child of this section (behind the scrim), then
 * re-run `check_hero.py hero.jpg --text "#F2F3F5" --polarity light
 * --text-rows 3-4` (text sits in the bottom two-fifths — CLAUDE.md §7's
 * scrim band) before shipping, per CLAUDE.md §7's explicit contrast flag.
 */
export function Hero() {
  return (
    <section
      role="img"
      aria-label="[HERO IMAGE — restored/renovated interior placeholder]"
      className="relative flex aspect-video min-h-[440px] max-h-[90vh] items-end overflow-hidden bg-gradient-to-br from-[#0D1B2A] via-[#16324a] to-[#3a2416] md:min-h-[560px]"
    >
      <span className="absolute right-4 top-4 z-10 rounded-full bg-bg-dark/70 px-3 py-1 text-[12px] font-semibold text-text-on-dark-secondary md:right-6 md:top-6">
        Placeholder photo — see build report
      </span>

      {/* bg-dark scrim, bottom 40%, for legible text over the (future) photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.55) 40%, rgba(13,27,42,0.05) 70%)",
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
