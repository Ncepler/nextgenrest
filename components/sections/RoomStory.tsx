"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroImage from "@/public/images/hero.png";
import { cn } from "@/lib/cn";

type Beat = {
  eyebrow: string;
  heading: string;
  body: string;
  featured?: string;
};

const BEATS: Beat[] = [
  {
    eyebrow: "01",
    heading: "What We Do",
    body: "Property damage doesn't schedule itself around your calendar, so we don't either. Next Generation Restoration responds around the clock to fire, smoke, water, flood, mold, and asbestos emergencies across the New York metro area, working to bring every home and business we touch back to the condition it was in before disaster struck — or better.",
  },
  {
    eyebrow: "02",
    heading: "The Difference Is How We Handle the Whole Job",
    featured: "We deal with your insurance company so you don't have to.",
    body: "Restoration is only half the work. The other half is the insurance company, and that's where most homeowners get stuck. We take that burden off your plate — managing claims, handling adjuster communication, and pushing for every dollar of coverage you're owed — so you can focus on your family, not paperwork.",
  },
  {
    eyebrow: "03",
    heading: "Recovery Can Also Be a Fresh Start",
    body: "Once the damage is handled, you're left with a choice: put everything back exactly as it was, or use the moment to make it better. Our design and renovation team can turn a restoration project into a real upgrade — refreshed layouts, updated finishes, a space that works better than it did before the damage ever happened.",
  },
];

// overlay opacity per beat: near-black monochrome -> half color -> full color
const OVERLAY_OPACITY = [0.92, 0.55, 0];
const GLOW_OPACITY = [0, 0.3, 1];

/**
 * "The room comes back" — the site's one signature scroll device. The same
 * hero photo stays sticky in view while an overlay's opacity/color maps to
 * three beats of the site's existing copy, so the room itself visually
 * "restores" as the visitor reads. Purpose: explanation (rare tier, so the
 * longer 700-900ms crossfade is within budget). Beats are driven by
 * IntersectionObserver sentinels, not continuous scroll math — native
 * scroll only, no scroll-jacking. Only opacity animates (composited);
 * nothing here moves the image itself.
 */
export function RoomStory() {
  const [active, setActive] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sentinels = sentinelRefs.current.filter((el): el is HTMLDivElement => !!el);
    if (sentinels.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-beat-index"));
            setActive(index);
          }
        }
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" },
    );
    sentinels.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative on-dark bg-night lg:h-[300vh]" aria-label="How we bring a property back">
      <div className="sticky top-0 h-[40svh] w-full overflow-hidden lg:h-svh">
        <Image
          src={heroImage}
          alt=""
          aria-hidden="true"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-night transition-opacity duration-700 ease-in-out motion-reduce:duration-200"
          style={{ opacity: OVERLAY_OPACITY[active], mixBlendMode: "color" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:duration-200"
          style={{
            opacity: GLOW_OPACITY[active],
            background:
              "radial-gradient(60% 60% at 70% 60%, rgba(242,195,107,0.35), transparent 70%)",
          }}
        />
        {/* A constant, un-animated scrim behind the text column only — the
            mood overlay above crossfades to fully transparent at beat 3
            ("full color"), so this is what keeps the text legible against
            whatever the photo underneath happens to be at that spot,
            independent of which beat is active. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden lg:block"
          style={{
            background: "linear-gradient(100deg, rgba(11,18,32,0.6) 0%, rgba(11,18,32,0.3) 35%, transparent 60%)",
          }}
        />

        {/* Desktop: text overlaid directly on the sticky image. */}
        <div className="pointer-events-none absolute inset-0 hidden items-center lg:flex">
          <div className="mx-auto w-full max-w-[1280px] px-8">
            {BEATS.map((beat, i) => (
              <div
                key={beat.heading}
                className={cn(
                  "max-w-2xl transition-opacity duration-700 ease-in-out motion-reduce:duration-200",
                  i === active ? "opacity-100" : "pointer-events-none absolute opacity-0",
                )}
              >
                <span className="font-body text-[13px] font-semibold tabular-nums text-text-on-night-soft">
                  {beat.eyebrow} / 03
                </span>
                <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw+1rem,2.75rem)] font-bold leading-[1.05] tracking-[-0.02em] text-text-on-night">
                  {beat.heading}
                </h2>
                {beat.featured && (
                  <p className="mt-5 font-display text-[clamp(1.5rem,2.4vw+1rem,2.25rem)] font-bold leading-[1.15] text-lamp">
                    {beat.featured}
                  </p>
                )}
                <p className="mt-5 max-w-[54ch] text-[17px] leading-[1.6] text-text-on-night-soft">
                  {beat.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: invisible sentinels the observer watches, one per beat. */}
      <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
        {BEATS.map((beat, i) => (
          <div
            key={beat.heading}
            ref={(el) => {
              sentinelRefs.current[i] = el;
            }}
            data-beat-index={i}
            className="h-svh"
          />
        ))}
      </div>

      {/* Mobile: the same copy in plain stacked flow beneath the short
          sticky panel, on an opaque night-2 background — no overlay text,
          no crossfade needed since nothing competes for the same space. */}
      <div className="bg-night-2 lg:hidden">
        {BEATS.map((beat) => (
          <div key={beat.heading} className="px-6 py-14">
            <span className="font-body text-[13px] font-semibold text-text-on-night-soft">
              {beat.eyebrow} / 03
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,7vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-text-on-night">
              {beat.heading}
            </h2>
            {beat.featured && (
              <p className="mt-5 font-display text-[1.5rem] font-bold leading-[1.15] text-lamp">
                {beat.featured}
              </p>
            )}
            <p className="mt-5 text-[16px] leading-[1.6] text-text-on-night-soft">{beat.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
