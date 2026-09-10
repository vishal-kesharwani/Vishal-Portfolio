"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { systemsTabs } from "@/lib/data";
import clsx from "clsx";

export default function Systems() {
  const { ref } = useSectionInView("Systems", 0.2);
  const [activeTab, setActiveTab] = useState<string>(systemsTabs[0].id);

  const activeData = systemsTabs.find((t) => t.id === activeTab);

  return (
    <section ref={ref} id="systems" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            // SYSTEMS
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            How the things I build fit together.
          </h2>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {systemsTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider border transition-colors duration-200",
                activeTab === tab.id
                  ? "border-accent/30 bg-accent/10 text-accent"
                  : "border-line bg-surface/50 text-faint hover:text-muted"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <AnimatePresence mode="wait">
          {activeData && (
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="p-6 border border-line bg-surface/50">
                {/* Blueprint flow */}
                <div className="mb-6">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-4">
                    ARCHITECTURE
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {activeData.components.map((comp, i) => (
                      <React.Fragment key={comp}>
                        <div className="px-3 py-2 border border-line bg-canvas/50 hover:border-accent/30 transition-colors">
                          <span className="font-mono text-[10px] text-ink uppercase tracking-wider">
                            {comp}
                          </span>
                        </div>
                        {i < activeData.components.length - 1 && (
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="w-px h-3 bg-accent/30" />
                            <span className="text-accent/50 text-[8px]">↓</span>
                            <div className="w-px h-3 bg-accent/30" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Decision annotation */}
                <div className="pt-4 border-t border-line">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-3">
                    WHY THIS DECISION?
                  </div>
                  <div className="p-3 border border-accent/15 bg-accent/5">
                    <p className="text-[13px] text-ink leading-relaxed">
                      {activeData.decision}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
