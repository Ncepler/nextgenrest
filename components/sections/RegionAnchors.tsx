import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/site-data";
import { H2, Body } from "@/components/ui/Typography";
import { Reveal } from "@/components/ui/Reveal";

/** "Local, and genuinely local" — the night-to-paper seam resolves here. */
export function RegionAnchors() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <H2>Local, and Genuinely Local</H2>
            <Body className="mx-auto mt-5 text-ink-soft">
              We work across the NYC boroughs, Long Island, Westchester, New
              Jersey, and Connecticut — not as an outside contractor passing
              through, but as a team that lives in the same communities we
              serve. When disaster hits close to home, you want a company
              that treats it that way too.
            </Body>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {SERVICE_AREAS.map((area) => (
              <li key={area.id}>
                <Link
                  href={`/service-areas#${area.id}`}
                  className="inline-block font-display text-[clamp(1.25rem,2vw+0.5rem,1.75rem)] font-bold tracking-[-0.01em] text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors duration-150 ease-out hover:decoration-ink"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
