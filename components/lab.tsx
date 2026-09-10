"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { labExperiments } from "@/lib/data";
import clsx from "clsx";

const statusColors = {
  EXPLORING: "text-amber-400",
  TESTED: "text-accent",
  "IN PROGRESS": "text-secondary",
};

export default function Lab() {
  const { ref } = useSectionInView("Lab", 0.2);
  const [expandedId, setExpandedId] = useState<string | null>(labExperiments[0].id);

  return (
    <section ref={ref} id="lab" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            06 / LAB
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink mb-4">
            QUESTIONS BEFORE PROJECTS.
          </h2>
          <p className="text-muted max-w-lg text-[15px]">
            Not everything I build starts as a project. Sometimes it starts as a question.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            {labExperiments.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === exp.id ? null : exp.id)
                  }
                  className={clsx(
                    "w-full text-left p-4 border transition-colors duration-200",
                    expandedId === exp.id
                      ? "border-accent/30 bg-surface"
                      : "border-line bg-surface/50 hover:bg-surface"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[9px] text-faint">{exp.id}</span>
                        <span
                          className={clsx(
                            "font-mono text-[8px] uppercase tracking-wider",
                            statusColors[exp.status]
                          )}
                        >
                          ● {exp.status}
                        </span>
                      </div>
                      <h3 className="text-[13px] text-ink leading-relaxed">
                        {exp.question}
                      </h3>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          <div>
            <AnimatePresence mode="wait">
              {expandedId && (
                <motion.div
                  key={expandedId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 border border-accent/20 bg-surface/80 sticky top-24"
                >
                  {(() => {
                    const exp = labExperiments.find((e) => e.id === expandedId);
                    if (!exp) return null;
                    return (
                      <div className="space-y-5">
                        <div>
                          <div className="font-mono text-[9px] uppercase tracking-wider text-accent mb-2">
                            QUESTION
                          </div>
                          <p className="text-[14px] text-ink leading-relaxed">
                            {exp.question}
                          </p>
                        </div>
                        <div>
                          <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-2">
                            WHAT I EXPECTED
                          </div>
                          <p className="text-[13px] text-muted leading-relaxed">
                            {exp.expected}
                          </p>
                        </div>
                        <div>
                          <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-2">
                            WHAT I TESTED
                          </div>
                          <p className="text-[13px] text-muted leading-relaxed">
                            {exp.tried}
                          </p>
                        </div>
                        <div>
                          <div className="font-mono text-[9px] uppercase tracking-wider text-secondary mb-2">
                            WHAT HAPPENED
                          </div>
                          <p className="text-[13px] text-muted leading-relaxed">
                            {exp.happened}
                          </p>
                        </div>
                        <div>
                          <div className="font-mono text-[9px] uppercase tracking-wider text-accent mb-2">
                            WHAT I LEARNED
                          </div>
                          <p className="text-[13px] text-muted leading-relaxed">
                            {exp.learned}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-line">
                          <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-2">
                            NEXT
                          </div>
                          <p className="text-[13px] text-muted leading-relaxed">
                            {exp.next}
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
