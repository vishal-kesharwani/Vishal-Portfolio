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
            05 / EXPERIENCE
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            WHERE I LEARNED
            <br />
            TO BUILD.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiencesData.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {/* SteepGraph - Featured */}
              {i === 0 ? (
                <div className="grid gap-6 lg:grid-cols-[120px_1fr]">
                  <div className="font-mono text-4xl font-bold text-line self-start pt-6">
                    {exp.year}
                  </div>
                  <div className="p-6 border border-line bg-surface/50 hover:border-accent/15 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-ink">
                          {exp.company}
                        </h3>
                        <p className="text-[13px] text-muted">{exp.role}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[9px] text-faint block">
                          {exp.duration}
                        </span>
                        <span className="font-mono text-[9px] text-faint">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Before/After Visualization */}
                    <div className="mb-4 p-4 border border-accent/20 bg-accent/5">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-3">
                        OPTIMIZATION RESULT
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="font-mono text-[8px] uppercase tracking-wider text-faint mb-1">
                            BEFORE
                          </div>
                          <div className="text-[13px] text-muted">
                            Repeated DB lookups
                          </div>
                        </div>
                        <div>
                          <div className="font-mono text-[8px] uppercase tracking-wider text-faint mb-1">
                            AFTER
                          </div>
                          <div className="text-[13px] text-muted">
                            Debounced validation
                          </div>
                        </div>
                        <div>
                          <div className="font-mono text-[8px] uppercase tracking-wider text-accent mb-1">
                            RESULT
                          </div>
                          <div className="text-[14px] font-medium text-accent">
                            ~50% reduction
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {exp.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5 text-[9px]">→</span>
                          <span className="text-[13px] text-muted">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {exp.tech && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 border border-line font-mono text-[8px] uppercase tracking-wider text-faint bg-surface/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* SortUs - Compact */
                <div className="grid gap-6 lg:grid-cols-[120px_1fr]">
                  <div className="font-mono text-4xl font-bold text-line self-start pt-6">
                    {exp.year}
                  </div>
                  <div className="p-6 border border-line bg-surface/50 hover:border-accent/15 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-ink">
                          {exp.company}
                        </h3>
                        <p className="text-[13px] text-muted">{exp.role}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[9px] text-faint block">
                          {exp.duration}
                        </span>
                        <span className="font-mono text-[9px] text-faint">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Pipeline Visualization */}
                    <div className="mb-4 p-4 border border-line bg-canvas/50">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-3">
                        DEPLOYMENT PIPELINE
                      </div>
                      <div className="flex items-center gap-2 flex-wrap justify-center">
                        {["COMMIT", "BUILD", "TEST", "DEPLOY"].map((step, si) => (
                          <React.Fragment key={step}>
                            <span className="font-mono text-[9px] px-2.5 py-1 border border-line bg-surface text-ink">
                              {step}
                            </span>
                            {si < 3 && (
                              <span className="text-accent/40 text-[11px]">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
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
                      <p className="text-[14px] font-medium text-accent">
                        {exp.keyMetric}
                      </p>
                    </div>

                    {exp.tech && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 border border-line font-mono text-[8px] uppercase tracking-wider text-faint bg-surface/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
