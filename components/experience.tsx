"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section ref={ref} id="experience" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            // EXPERIENCE
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            Where I learned
            <br />
            to build.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[120px_1fr]">
          {experiencesData.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="contents"
            >
              {/* Year */}
              <div className="font-mono text-4xl font-bold text-line self-start pt-6">
                {exp.year}
              </div>

              {/* Content */}
              <div className="p-6 border border-line bg-surface/50 hover:border-accent/15 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {exp.company}
                    </h3>
                    <p className="text-[13px] text-muted">{exp.role}</p>
                  </div>
                  <span className="font-mono text-[9px] text-faint shrink-0">
                    {exp.duration}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {exp.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 text-[9px]">→</span>
                      <span className="text-[13px] text-muted">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-line">
                  <div className="font-mono text-[8px] uppercase tracking-wider text-faint mb-1">
                    KEY RESULT
                  </div>
                  <p className="text-[13px] font-medium text-accent">
                    {exp.keyMetric}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
