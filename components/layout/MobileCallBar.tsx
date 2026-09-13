"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

/**
 * Sticky mobile call bar (CLAUDE.md §6.4 / §7). Mobile only, slides in
 * after 200px of scroll so the hero's own CTA gets the first click.
 */
export function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-50 bg-bg-dark p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden"
      initial={{ y: "100%" }}
      animate={{ y: visible ? 0 : "100%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <a
        href={PHONE_TEL}
        className="flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 font-body text-[16px] font-semibold text-on-accent"
      >
        Call Now: {PHONE_DISPLAY}
      </a>
    </motion.div>
  );
}
