import { Button } from "@/components/ui/Button";
import { H1, Body } from "@/components/ui/Typography";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

export default function NotFound() {
  return (
    <section className="on-dark flex min-h-[70svh] items-center bg-night">
      <div className="mx-auto max-w-[1280px] px-6 py-20 text-center md:px-8">
        <p className="font-body text-[15px] font-semibold tabular-nums text-text-on-night-soft">
          404
        </p>
        <H1 className="mt-3 text-text-on-night">This Page Doesn&apos;t Exist.</H1>
        <Body className="mx-auto mt-5 max-w-xl text-text-on-night-soft">
          If you got here from a bookmark or a search result, the page may
          have moved. Whatever brought you here, the fastest way to get
          help is still one call away.
        </Body>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={PHONE_TEL} variant="primary">
            Call Now: {PHONE_DISPLAY}
          </Button>
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
