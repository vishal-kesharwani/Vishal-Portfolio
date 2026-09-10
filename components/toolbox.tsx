"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { toolbox } from "@/lib/data";

export default function Toolbox() {
  const { ref } = useSectionInView("Toolbox", 0.2);

  return (
    <section ref={ref} id="toolbox" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            // TOOLBOX
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            What I use.
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {toolbox.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="p-4 border border-line bg-surface/50 hover:border-accent/20 transition-colors group"
            >
              <div className="font-display text-sm font-semibold text-ink mb-1 group-hover:text-accent transition-colors">
                {tool.name}
              </div>
              <div className="font-mono text-[10px] text-faint">
                {tool.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
