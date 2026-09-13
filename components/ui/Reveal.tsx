"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Scroll-reveal wrapper — fade up 16px + opacity 0→1 over 500ms, ease-out,
 * triggered once at 20% viewport visibility (CLAUDE.md §6.4). Reused on
 * every page; do not rebuild this per page.
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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
