"use client";

import React from "react";
import { motion } from "framer-motion";
import { heroMetrics } from "@/lib/data";

export default function ProofStrip() {
  return (
    <section className="py-section-sm px-6 lg:px-10 border-t border-b border-line bg-surface/30">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-6"
        >
          {heroMetrics.map((m, i) => (
            <React.Fragment key={m.label}>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-ink">
                  {m.value}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
                  {m.label}
                </span>
              </div>
              {i < heroMetrics.length - 1 && (
                <div className="hidden sm:block w-px h-6 bg-line" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
