import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { InsuranceValueStrip } from "@/components/sections/InsuranceValueStrip";
import { ClosingCtaBanner } from "@/components/sections/ClosingCtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { H2, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Fire, Water, Flood, Mold & Asbestos Restoration — NYC Tri-State",
  description:
    "24/7 fire, water, flood, mold, and asbestos restoration across the NYC tri-state area. We manage your insurance claim directly. Call 516.491.1601.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <H2>What We Do</H2>
            <Body className="mt-5 text-text-secondary">
              Property damage doesn&apos;t schedule itself around your
              calendar, so we don&apos;t either. Next Generation Restoration
              responds around the clock to fire, smoke, water, flood, mold,
              and asbestos emergencies across the New York metro area,
              working to bring every home and business we touch back to the
              condition it was in before disaster struck — or better.
            </Body>
          </div>
        </Reveal>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:grid-cols-2 md:items-center md:px-8">
          <Reveal>
            <H2>The Difference Is How We Handle the Whole Job</H2>
            <Body className="mt-5 text-text-secondary">
              Restoration is only half the work. The other half is the
              insurance company, and that&apos;s where most homeowners get
              stuck. We take that burden off your plate — managing claims,
              handling adjuster communication, and pushing for every dollar
              of coverage you&apos;re owed — so you can focus on your
              family, not paperwork.
            </Body>
          </Reveal>
          <Reveal delay={0.1}>
            <InsuranceValueStrip className="bg-bg" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <H2>Recovery Can Also Be a Fresh Start</H2>
            <Body className="mt-5 text-text-secondary">
              Once the damage is handled, you&apos;re left with a choice: put
              everything back exactly as it was, or use the moment to make it
              better. Our design and renovation team can turn a restoration
              project into a real upgrade — refreshed layouts, updated
              finishes, a space that works better than it did before the
              damage ever happened.
            </Body>
          </div>
        </Reveal>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <Reveal>
            <H2 className="text-center">Every Service, One Call Away</H2>
          </Reveal>
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <H2>Local, and Genuinely Local</H2>
            <Body className="mt-5 text-text-secondary">
              We work across the NYC boroughs, Long Island, Westchester, New
              Jersey, and Connecticut — not as an outside contractor passing
              through, but as a team that lives in the same communities we
              serve. When disaster hits close to home, you want a company
              that treats it that way too.
            </Body>
            <div className="mt-6 flex justify-center">
              <Button href="/service-areas" variant="outline-dark">
                See Our Service Areas
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <ClosingCtaBanner />
    </>
  );
}
