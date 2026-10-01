"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import heroImage from "@/public/images/hero.png";
import heroPosterImage from "@/public/videos/nextgen-hero-poster.jpg";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { H1, Lead } from "@/components/ui/Typography";
import { OnCallClock } from "@/components/layout/OnCallClock";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import { EASE_OUT } from "@/lib/motion";

const HEADLINE_LINES = ["Disaster Doesn't Wait.", "Neither Do We."];
const HERO_ALT =
  "A freshly restored living room at dusk — refinished hardwood floors, warm lamplight, and the sunset skyline through tall windows";

type Variant = "mobile" | "poster" | "video";

/**
 * Home hero (CLAUDE.md §7 / prompt §3). <768px and prefers-reduced-motion
 * each get a static image (hero.png / the hero video's own poster frame);
 * >=768px with motion allowed gets a scroll-scrubbed video instead, pinned
 * behind the same copy block. The copy's entrance still plays once on
 * mount, never re-triggered by scroll — only the background differs.
 *
 * `id="hero"` has to stay on the one `<section>` below for the life of
 * the component: Header's IntersectionObserver (components/layout/Header)
 * looks it up once by id on mount and never re-queries, so swapping which
 * top-level element carries that id when `variant` changes would silently
 * strand the observer on a removed node. Only the inner content switches.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();
  const [variant, setVariant] = useState<Variant>("mobile");
  const wrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const update = () => {
      if (!desktopQuery.matches) setVariant("mobile");
      else setVariant(reduceMotion ? "poster" : "video");
    };
    update();
    desktopQuery.addEventListener("change", update);
    return () => desktopQuery.removeEventListener("change", update);
  }, [reduceMotion]);

  return (
    <section
      id="hero"
      ref={wrapperRef}
      className={cn(
        "relative overflow-hidden bg-night",
        variant === "video" ? "h-[400svh]" : "flex min-h-[100svh] items-end",
      )}
    >
      {variant === "video" ? (
        <VideoStage wrapperRef={wrapperRef} />
      ) : (
        <StillStage reduceMotion={!!reduceMotion} poster={variant === "poster"} />
      )}
    </section>
  );
}

function Scrim() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(115deg, rgba(11,18,32,0.95) 0%, rgba(11,18,32,0.82) 30%, rgba(11,18,32,0.45) 55%, rgba(11,18,32,0.05) 78%, transparent 92%)",
      }}
    />
  );
}

/** The copy block shared by every variant — unchanged from the pre-video hero. */
function HeroCopy({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 md:px-8 md:pb-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: EASE_OUT }}>
        <OnCallClock className="mb-6" />
      </motion.div>

      <H1 className="max-w-3xl text-text-on-night">
        {HEADLINE_LINES.map((line, i) => (
          <motion.span
            key={line}
            className="block"
            initial={{ opacity: 0, transform: reduceMotion ? "translateY(0px)" : "translateY(12px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.15 + i * 0.06 }}
          >
            {line}
          </motion.span>
        ))}
      </H1>

      <motion.div
        initial={{ opacity: 0, transform: reduceMotion ? "translateY(0px)" : "translateY(12px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.3 }}
      >
        <Lead className="mt-5 max-w-2xl text-text-on-night-soft">
          Fire, water, flood, mold, and asbestos restoration for the NYC
          tri-state area — on call 24 hours a day, every day of the year.
        </Lead>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={PHONE_TEL} variant="primary" className="min-h-[56px] px-7 text-[17px]">
            Call Now: {PHONE_DISPLAY}
          </Button>
          <Button href="/contact" variant="outline" className="min-h-[56px] px-7 text-[17px]">
            Get Emergency Help
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Mobile (<768px, hero.png) and reduced-motion-desktop (the video's own
 * poster frame) both render this: a static photo with the same mount
 * entrance as before. reduceMotion zeroes the zoom/translate transforms
 * (motion law) but the opacity fades still play, same as pre-video hero.
 *
 * public/images/hero.png (1672x941, ~16:9) — checked with the
 * hero-imagery skill's check_hero.py against the raw file
 * (--text "#F2F3F5" --polarity light --text-rows 3-4, since copy sits
 * bottom-left here). The bare photo alone fails (~3.3:1 in the text
 * zone); the scrim below is tuned stronger than a bottom-40% fade to
 * compensate, hand-verified back above ~5.5:1 across the text zone once
 * blended in — the check script can't see the CSS layer on top. Never
 * animate opacity on this element (LCP rule) — only the wrapper's
 * transform moves.
 */
function StillStage({ reduceMotion, poster }: { reduceMotion: boolean; poster: boolean }) {
  return (
    <>
      <motion.div
        className="absolute inset-0"
        initial={{ transform: reduceMotion ? "scale(1)" : "scale(1.04)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ duration: 1, ease: EASE_OUT }}
      >
        <Image src={poster ? heroPosterImage : heroImage} alt={HERO_ALT} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <Scrim />
      <HeroCopy reduceMotion={reduceMotion} />
    </>
  );
}

/**
 * Desktop, motion allowed: a sticky 100svh stage pinned inside the
 * section's 400svh height, playing the hero video back by scroll position
 * instead of time. video.currentTime is only ever set from the rAF loop
 * below (lerped toward the latest scroll-derived target each frame) —
 * never from the scroll event directly — so fast or jittery scrolling
 * scrubs smoothly instead of jump-cutting. Scroll 0–0.9 maps to the full
 * clip; 0.9–1 holds the last frame so the end of the scrub doesn't look
 * cut off.
 */
function VideoStage({ wrapperRef }: { wrapperRef: RefObject<HTMLElement | null> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentRef = useRef(0);
  const targetRef = useRef(0);
  const durationRef = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    if (!wrapper || !video) return;

    const onLoadedMetadata = () => {
      durationRef.current = video.duration || 0;
      // iOS only decodes a frame, and allows later imperative seeks, after a play/pause.
      video.play().then(() => video.pause()).catch(() => {});
    };
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    const computeTarget = () => {
      const rect = wrapper.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = scrollable > 0 ? -rect.top / scrollable : 0;
      targetRef.current = Math.min(Math.max(raw, 0), 1);
    };
    computeTarget();
    window.addEventListener("scroll", computeTarget, { passive: true });
    window.addEventListener("resize", computeTarget);

    let rafId: number;
    const tick = () => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.12;
      if (Math.abs(targetRef.current - currentRef.current) < 0.0005) {
        currentRef.current = targetRef.current;
      }
      const duration = durationRef.current;
      if (duration > 0) {
        const videoProgress = Math.min(currentRef.current / 0.9, 1);
        const time = videoProgress * duration;
        if (Math.abs(video.currentTime - time) > 0.01) {
          video.currentTime = time;
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      window.removeEventListener("scroll", computeTarget);
      window.removeEventListener("resize", computeTarget);
      cancelAnimationFrame(rafId);
    };
  }, [wrapperRef]);

  return (
    <div className="sticky top-0 flex h-[100svh] items-end overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
        poster="/videos/nextgen-hero-poster.jpg"
      >
        <source src="/videos/nextgen-hero.mp4" type="video/mp4" />
      </video>
      <Scrim />
      <HeroCopy reduceMotion={false} />
    </div>
  );
}
