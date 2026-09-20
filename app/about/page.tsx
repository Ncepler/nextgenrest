import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { H3, Body, Small } from "@/components/ui/Typography";
import { pageMetadata } from "@/lib/seo";
import { TEAM } from "@/lib/team";
import { CREDENTIALS } from "@/lib/credentials";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Your steadfast partner through property damage — 24/7 fire, water, flood, mold, and asbestos restoration across the NYC tri-state area.",
  path: "/about",
});

const sections = [
  {
    h2: "A Client-First Approach",
    body: "What sets us apart is handling the entire job, not just the physical repair. We take on the complicated, often frustrating process of dealing with insurance companies directly, managing communication with insurers so the process moves faster and you get the coverage you actually deserve.",
  },
  {
    h2: "More Than a Service Provider",
    body: "Serving the NYC boroughs, Long Island, New Jersey, Westchester, and Connecticut, we consider ourselves part of these communities, not an outside company that shows up after something goes wrong and disappears once the check clears.",
  },
  {
    h2: "Available Around the Clock",
    body: "From the moment you call to the day your space is fully restored, we're with you at every step — working toward a fast, complete recovery that restores not just your property, but your peace of mind.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro h1="Your Steadfast Partner Through Property Damage">
        Disasters don&apos;t check the calendar before they strike, which is
        why we&apos;re available 24 hours a day, 365 days a year. We
        specialize in restoring homes and businesses after fire, smoke,
        water, flood, mold, and asbestos damage — working to return every
        property to its pre-damage condition or better, as quickly and
        thoroughly as possible.
      </PageIntro>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-14">
          {sections.map((s, i) => (
            <Reveal key={s.h2} delay={i * 0.06}>
              <H3>{s.h2}</H3>
              <Body className="mt-3 max-w-3xl text-text-secondary">{s.body}</Body>
            </Reveal>
          ))}
        </div>

        {TEAM.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {TEAM.map((member) => (
                <div key={member.name} className="text-center">
                  <p className="font-display text-[17px] font-semibold text-text-primary">
                    {member.name}
                  </p>
                  <Small className="text-text-secondary">{member.role}</Small>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {CREDENTIALS.length > 0 && (
          <Reveal delay={0.24}>
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-rule pt-8">
              {CREDENTIALS.map((c) => (
                <Small key={c.label} className="font-semibold text-text-secondary">
                  {c.label}
                  {c.issuer ? ` · ${c.issuer}` : ""}
                </Small>
              ))}
            </div>
          </Reveal>
        )}
      </section>
    </>
  );
}
