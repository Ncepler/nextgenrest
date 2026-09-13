import { Button } from "@/components/ui/Button";
import { H1, Lead } from "@/components/ui/Typography";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

/**
 * Home hero (CLAUDE.md §7): full-bleed background — lead with the outcome
 * (a restored/renovated interior), never the disaster — with a bg-dark
 * scrim over the bottom 40% so headline/CTA stay legible. No real photo
 * yet, so the background is a flat gradient standing in for one; swap the
 * div below for a real <Image> once Noah supplies the photo, and re-check
 * contrast against it (CLAUDE.md §7 flags this explicitly).
 */
export function Hero() {
  return (
    <section
      role="img"
      aria-label="[HERO IMAGE — restored/renovated interior placeholder]"
      className="relative flex min-h-[85vh] items-end overflow-hidden bg-gradient-to-br from-[#0D1B2A] via-[#16324a] to-[#3a2416]"
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

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-40 md:px-8 md:pb-24 md:pt-56">
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
