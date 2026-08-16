"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
  /** Short kicker above the title. Falls back to a neutral label. */
  kicker?: string;
};

export default function SectionHeading({
  children,
  kicker = "Portfolio section",
}: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-10 text-center sm:mb-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
        {kicker}
      </p>
      <h2 className="text-3xl font-semibold capitalize tracking-tight text-ink sm:text-4xl">
        {children}
      </h2>
      <motion.div
        className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-accent via-accent/40 to-transparent shadow-[0_10px_30px_-10px_var(--accent)]"
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      />
    </motion.div>
  );
}
