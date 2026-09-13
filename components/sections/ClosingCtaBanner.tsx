import { Button } from "@/components/ui/Button";
import { H2 } from "@/components/ui/Typography";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

/** Closing CTA banner, bg-dark (CLAUDE.md §8 Home). */
export function ClosingCtaBanner() {
  return (
    <section className="bg-bg-dark py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 text-center md:px-8">
        <H2 className="text-text-on-dark">You&apos;re Not Doing This Alone.</H2>
        <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.6] text-text-on-dark-secondary">
          Call us any hour of any day and we&apos;ll walk you through exactly
          what happens next.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={PHONE_TEL} variant="primary">
            Call Now: {PHONE_DISPLAY}
          </Button>
        </div>
      </div>
    </section>
  );
}
