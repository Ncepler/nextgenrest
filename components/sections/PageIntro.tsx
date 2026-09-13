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
    <section className="bg-bg-dark py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <Reveal>
          <H1 className="max-w-2xl text-text-on-dark">{h1}</H1>
          <Lead className="mt-5 max-w-2xl text-text-on-dark-secondary">{children}</Lead>
        </Reveal>
      </div>
    </section>
  );
}
