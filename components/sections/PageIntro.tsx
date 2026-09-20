import { ReactNode } from "react";
import { H1, Lead } from "@/components/ui/Typography";
import { Reveal } from "@/components/ui/Reveal";

/** Shared dark intro band used at the top of every interior page. */
export function PageIntro({
  h1,
  children,
}: {
  h1: string;
  children: ReactNode;
}) {
  return (
    // Extra top clearance (beyond the usual py-20/28) so H1 isn't covered
    // by the fixed Header floating above it.
    <section className="on-dark bg-night pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <Reveal>
          <H1 className="max-w-2xl text-text-on-night">{h1}</H1>
          <Lead className="mt-5 max-w-2xl text-text-on-night-soft">{children}</Lead>
        </Reveal>
      </div>
    </section>
  );
}
