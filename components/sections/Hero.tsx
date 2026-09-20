"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import heroImage from "@/public/images/hero.png";
import { Button } from "@/components/ui/Button";
import { H1, Lead } from "@/components/ui/Typography";
import { OnCallClock } from "@/components/layout/OnCallClock";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import { EASE_OUT } from "@/lib/motion";

const HEADLINE_LINES = ["Disaster Doesn't Wait.", "Neither Do We."];

/**
 * Home hero (CLAUDE.md §7 / prompt §3). Full-bleed, min-height 100svh so
 * nothing is cut off on a phone with browser chrome visible. The scrim is
 * deliberately stronger than a bare-minimum fade — see the hero-imagery
 * check this photo was validated against below. Entrance plays once, on
 * mount, not on scroll: this is the first thing anyone sees.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-night"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ transform: reduceMotion ? "scale(1)" : "scale(1.04)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ duration: 1, ease: EASE_OUT }}
      >
        {/*
         * public/images/hero.png (1672x941, ~16:9) — checked with the
         * hero-imagery skill's check_hero.py against the raw file
         * (--text "#F2F3F5" --polarity light --text-rows 3-4, since copy
         * sits bottom-left here). The bare photo alone fails (~3.3:1 in
         * the text zone); the scrim below is tuned stronger than a
         * bottom-40% fade to compensate, hand-verified back above ~5.5:1
         * across the text zone once blended in — the check script can't
         * see the CSS layer on top. Never animate opacity on this
         * element (LCP rule) — only the wrapper's transform moves.
         */}
        <Image
          src={heroImage}
          alt="A freshly restored living room at dusk — refinished hardwood floors, warm lamplight, and the sunset skyline through tall windows"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(11,18,32,0.95) 0%, rgba(11,18,32,0.82) 30%, rgba(11,18,32,0.45) 55%, rgba(11,18,32,0.05) 78%, transparent 92%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 md:px-8 md:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
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
    </section>
  );
}
