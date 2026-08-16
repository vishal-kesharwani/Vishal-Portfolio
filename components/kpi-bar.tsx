"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeHighlights } from "@/lib/data";
import StatValue from "./stat-value";

export default function KpiBar() {
  return (
    <section className="w-full border-y border-line bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6">
        {resumeHighlights.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="bg-canvas px-5 py-6"
          >
            <p className="font-mono text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
              <StatValue value={item.value} />
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
