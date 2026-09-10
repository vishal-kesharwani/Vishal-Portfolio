"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { thinkingProcess } from "@/lib/data";

export default function HowIThink() {
  const { ref } = useSectionInView("HowIThink", 0.2);

  return (
    <section ref={ref} id="thinking" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            // HOW I THINK
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            A simple process
            <br />
            that keeps me learning.
          </h2>
        </motion.div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[20px] left-0 right-0 h-px bg-line" />
          <div className="hidden lg:block absolute top-[20px] left-0 h-px bg-accent/40" style={{ width: "100%" }} />

          <div className="grid gap-8 lg:grid-cols-4">
            {thinkingProcess.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative"
              >
                {/* Node marker */}
                <div className="relative z-10 mb-6">
                  <div className="w-10 h-10 rounded-full border border-accent/30 bg-canvas flex items-center justify-center">
                    <span className="font-mono text-[10px] text-accent">
                      {item.step}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
