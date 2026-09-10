"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { educationData } from "@/lib/data";
import Image from "next/image";
import mitImg from "@/public/MIT-logo.png";
import doaImg from "@/public/doa-school-logo.jpg";
import bnnImg from "@/public/bnn-college-logo.png";

const educationImages: Record<string, typeof mitImg> = {
  mit: mitImg,
  doa: doaImg,
  bnn: bnnImg,
};

export default function Education() {
  const { ref } = useSectionInView("Education", 0.2);

  return (
    <section ref={ref} id="education" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            EDUCATION
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            WHERE I LEARNED
            <br />
            THE FOUNDATIONS.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {educationData.map((edu, i) => {
            const img = educationImages[edu.imageKey];
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-line bg-surface/50 hover:border-accent/15 transition-colors overflow-hidden group"
              >
                {img && (
                  <div className="relative h-40 bg-surface-2 overflow-hidden">
                    <Image
                      src={img}
                      alt={edu.institution}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="font-mono text-[9px] text-faint mb-2">
                    {edu.duration}
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-[13px] text-muted mb-3">{edu.degree}</p>
                  
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-faint">
                      {edu.degree.includes("B.Tech") ? "CGPA" : "PERCENTAGE"}
                    </span>
                    <span className="font-display text-lg font-bold text-accent">
                      {edu.cgpa}
                    </span>
                  </div>

                  {edu.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-line">
                      {edu.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5 text-[9px]">→</span>
                          <span className="text-[11px] text-muted">{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
