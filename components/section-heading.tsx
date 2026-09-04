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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.34em" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-3 font-mono text-[11px] font-semibold uppercase text-accent"
      >
        {kicker}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        className="text-3xl font-semibold capitalize tracking-tight text-ink sm:text-4xl"
      >
        {children}
      </motion.h2>
      <motion.div
        className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-accent via-accent/40 to-transparent"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "6rem", opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ boxShadow: "0 10px 30px -10px var(--accent)" }}
      />
    </motion.div>
  );
}
