"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { currentlyExploring } from "@/lib/data";
import clsx from "clsx";

const statusColors = {
  DEEP: "text-accent",
  EXPLORING: "text-amber-400",
  BUILDING: "text-secondary",
  CURIOUS: "text-faint",
};

export default function CurrentlyExploring() {
  const { ref } = useSectionInView("Currently", 0.2);

  return (
    <section ref={ref} id="currently" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: header */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
                // CURRENTLY EXPLORING
              </span>
              <h2 className="font-display text-display-lg font-bold text-ink mb-4">
                Questions that keep
                <br />
                me building.
              </h2>
              <p className="text-muted max-w-md text-[15px] leading-relaxed">
                Here are a few areas I&apos;m actively exploring, not just using.
              </p>
            </motion.div>
          </div>

          {/* Right: cards */}
          <div className="space-y-4">
            {currentlyExploring.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group p-5 border border-line bg-surface/50 hover:border-accent/20 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-faint">{item.id}</span>
                    <span
                      className={clsx(
                        "font-mono text-[9px] uppercase tracking-wider",
                        statusColors[item.status]
                      )}
                    >
                      ● {item.status}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-base font-semibold text-ink mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 border border-line font-mono text-[8px] uppercase tracking-wider text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
