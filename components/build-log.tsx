"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { buildLogEntries } from "@/lib/data";
import clsx from "clsx";

const tags = ["ALL", "BUILD", "AI", "SYSTEMS", "CLOUD", "KUBERNETES", "FAILURE"];

const tagColors: Record<string, string> = {
  AI: "text-secondary",
  SYSTEMS: "text-accent",
  CLOUD: "text-secondary",
  KUBERNETES: "text-secondary",
  BUILD: "text-amber-400",
  FAILURE: "text-danger",
};

export default function BuildLog() {
  const { ref } = useSectionInView("Log", 0.2);
  const [activeTag, setActiveTag] = useState("ALL");

  const filteredEntries =
    activeTag === "ALL"
      ? buildLogEntries
      : buildLogEntries.filter((entry) => entry.tag === activeTag);

  return (
    <section ref={ref} id="log" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            // JOURNAL
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink mb-3">
            What I actually
            <br />
            shipped, broke,
            <br />
            learned and changed.
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={clsx(
                "px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider border transition-colors duration-200",
                activeTag === tag
                  ? "border-accent/30 bg-accent/10 text-accent"
                  : "border-line bg-surface/50 text-faint hover:text-muted"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-line" />

          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {filteredEntries.map((entry, i) => (
                <motion.div
                  key={entry.date + entry.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="relative pl-8"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-[10px] h-[10px] rounded-full border border-line bg-canvas" />

                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <div className="font-mono text-[9px] text-faint w-24 shrink-0">
                      {entry.date}
                    </div>
                    <div className={clsx(
                      "font-mono text-[9px] uppercase tracking-wider w-20 shrink-0",
                      tagColors[entry.tag] || "text-faint"
                    )}>
                      {entry.tag}
                    </div>
                    <div className="flex-1">
                      <div className="text-[13px] text-ink mb-1">{entry.title}</div>
                      <div className="text-[12px] text-muted leading-relaxed">{entry.note}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
