import { Button } from "@/components/ui/Button";
import { H2 } from "@/components/ui/Typography";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

/**
 * Closing CTA banner, night (CLAUDE.md §8 Home). Marked
 * data-call-redundant so the sticky mobile call bar hides here — this
 * band is already one large call affordance, a second stacked on top of
 * it would just be noise.
 */
export function ClosingCtaBanner() {
  return (
    <section data-call-redundant className="on-dark bg-night py-20 text-center md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <H2 className="text-text-on-night">You&apos;re Not Doing This Alone.</H2>
        <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.6] text-text-on-night-soft">
          Call us any hour of any day and we&apos;ll walk you through exactly
          what happens next.
        </p>
        <a
          href={PHONE_TEL}
          className="press-feedback mt-8 block font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1] tracking-[-0.02em] tabular-nums text-text-on-night"
        >
          {PHONE_DISPLAY}
        </a>
        <div className="mt-8 flex justify-center">
          <Button href={PHONE_TEL} variant="primary">
            Call Now: {PHONE_DISPLAY}
          </Button>
        </div>
      </div>
    </section>
  );
}
