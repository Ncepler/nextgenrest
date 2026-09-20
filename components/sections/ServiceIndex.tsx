"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { SERVICES } from "@/lib/site-data";
import { H2 } from "@/components/ui/Typography";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "Every service, one call away" — a large-type numbered index, the
 * night-to-paper seam on Home. Desktop pairs it with a preview panel that
 * crossfades to the hovered/focused row's detail (pointer:fine only —
 * touch gets plain links, no preview, since there's no hover to key off).
 * Keyboard focus swaps the preview instantly; pointer hover crossfades
 * over 180ms so the panel doesn't flicker between adjacent rows.
 */
export function ServiceIndex() {
  const [active, setActive] = useState(0);
  const [instant, setInstant] = useState(true);
  const activeService = SERVICES[active];

  return (
    <section className="bg-night py-20 on-dark md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <Reveal>
          <H2 className="text-text-on-night">Every Service, One Call Away</H2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <ol className="flex flex-col divide-y divide-line-dark border-y border-line-dark">
            {SERVICES.map((service, i) => {
              const isActive = i === active;
              return (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    onMouseEnter={() => {
                      setInstant(false);
                      setActive(i);
                    }}
                    onFocus={() => {
                      setInstant(true);
                      setActive(i);
                    }}
                    className={cn(
                      "flex items-baseline gap-5 py-5 transition-transform duration-200 ease-out lg:py-6",
                      isActive && "lg:translate-x-1.5",
                    )}
                  >
                    <span
                      className={cn(
                        "font-body text-[14px] font-semibold tabular-nums text-text-on-night-soft transition-colors duration-200 ease-out",
                        isActive && "lg:text-lamp",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-display text-[clamp(1.5rem,3vw+0.5rem,2.25rem)] font-bold leading-[1.1] tracking-[-0.01em] text-text-on-night transition-colors duration-200 ease-out",
                        isActive && "lg:text-lamp",
                      )}
                    >
                      {service.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>

          <div
            className={cn(
              "hidden rounded-2xl border border-line-dark bg-night-2 p-8 transition-opacity ease-out lg:block",
              instant ? "duration-0" : "duration-[180ms]",
            )}
          >
            <p className="font-body text-[17px] leading-[1.6] text-text-on-night-soft">
              {activeService.shortDescription}
            </p>
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-text-on-night-soft">
              What&apos;s included
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {activeService.included.map((item) => (
                <li key={item} className="text-[15px] leading-[1.6] text-text-on-night">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
