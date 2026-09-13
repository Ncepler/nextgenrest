"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Draggable before/after comparison (CLAUDE.md §6.4/§7) — one component,
 * used on every /services/* page. Drag, tap-and-hold, or arrow keys move
 * the divider; this is a real interaction, not a static side-by-side pair.
 * `beforeLabel`/`afterLabel` stand in for real job photos until Noah
 * supplies them (CLAUDE.md §8, "[Before/After slider placeholder]").
 */
export function BeforeAfterSlider({
  beforeLabel = "[Before/After slider placeholder — real job photos] — Before",
  afterLabel = "[Before/After slider placeholder — real job photos] — After",
}: {
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, raw)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPercent((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPercent((p) => Math.min(100, p + 5));
    if (e.key === "Home") setPercent(0);
    if (e.key === "End") setPercent(100);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl border border-rule shadow-soft md:aspect-[16/10]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After layer — full size, sits underneath */}
      <Panel label={afterLabel} tone="after" className="absolute inset-0" />

      {/* Before layer — full size too, clipped via clip-path so it never
          resizes/distorts as the divider moves */}
      <Panel
        label={beforeLabel}
        tone="before"
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      />

      {/* Divider + handle */}
      <div className="absolute inset-y-0 z-10 w-0.5 bg-bg" style={{ left: `${percent}%` }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(percent)}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-bg text-text-primary shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M8 7l-5 5 5 5M16 7l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <span className="absolute left-3 top-3 z-10 rounded-full bg-bg-dark/70 px-2.5 py-1 text-[12px] font-semibold text-text-on-dark">
        Before
      </span>
      <span className="absolute right-3 top-3 z-10 rounded-full bg-bg-dark/70 px-2.5 py-1 text-[12px] font-semibold text-text-on-dark">
        After
      </span>
    </div>
  );
}

function Panel({
  label,
  tone,
  className,
  style,
}: {
  label: string;
  tone: "before" | "after";
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      style={style}
      className={cn(
        "flex items-center justify-center p-6 text-center",
        tone === "before"
          ? "bg-gradient-to-br from-[#3a2416] to-[#5a3a1e]"
          : "bg-gradient-to-br from-[#0e3a4a] to-[#0E6E8C]",
        className,
      )}
    >
      <span className="max-w-[220px] text-[13px] font-medium text-white/85">{label}</span>
    </div>
  );
}
