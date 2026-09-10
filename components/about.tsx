"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <section ref={ref} id="about" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            // ABOUT
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink mb-6">
            About me.
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-4 text-[15px] text-muted leading-relaxed"
          >
            <p>
              I&apos;m a computer engineer who likes understanding how technology works underneath the abstraction.
            </p>
            <p>
              I started by building software, went deeper into backend systems, infrastructure and distributed systems, and now I&apos;m exploring AI and developer tooling.
            </p>
            <p>
              I learn by building, breaking and investigating.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-5">
              PROCESS
            </div>
            <div className="space-y-3">
              {[
                "find something interesting",
                "understand it",
                "build it",
                "break it",
                "improve it",
              ].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-accent text-[11px]">→</span>
                  <span className="text-[13px] text-ink">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
