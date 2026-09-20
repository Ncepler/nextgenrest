"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

function nyTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

/**
 * The functional signature: proves the "any hour" claim with a real clock
 * rather than asserting it. Data the visitor is reading, so it never
 * animates (motion law §4) — only the status dot exists, and it's static,
 * not pulsing, per the ground rules' restriction on where ember may
 * appear. Populated after mount so SSR and the first client render match
 * (the server has no reliable "now"); the server/first-paint text is the
 * plain claim already made elsewhere on the site, not a placeholder.
 */
export function OnCallClock({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(nyTime(new Date()));
    const id = window.setInterval(() => setTime(nyTime(new Date())), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={cn("inline-flex items-center gap-2 text-[13px] font-medium text-text-on-night-soft", className)}>
      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-ember" />
      {time ? (
        <span className="tabular-nums">On call now · {time} in New York</span>
      ) : (
        <span>On call 24/7</span>
      )}
    </span>
  );
}
