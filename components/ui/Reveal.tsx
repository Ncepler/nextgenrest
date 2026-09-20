"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { EASE_OUT } from "@/lib/motion";

/**
 * Scroll-reveal wrapper — fade up + opacity 0→1, triggered once at 20%
 * viewport visibility. Reused on every page; do not rebuild this per page.
 * Reduced motion keeps the opacity fade (state indication / preventing a
 * jarring appearance) and drops the position change, per the "gentler, not
 * zero" rule.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: reduceMotion ? "translateY(0px)" : "translateY(16px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}
