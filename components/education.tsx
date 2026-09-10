"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { educationData } from "@/lib/data";
import Image from "next/image";
import mitLogo from "@/public/MIT-logo.png";
import bnnLogo from "@/public/bnn-college-logo.png";
import doaLogo from "@/public/doa-school-logo.jpg";

const institutionLogos: Record<string, typeof mitLogo> = {
  "MIT Academy of Engineering, Pune": mitLogo,
  "DOA School": bnnLogo,
  "BNN College": doaLogo,
};

export default function Education() {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <section ref={ref} id="education" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            // EDUCATION
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            Where I learned
            <br />
            the foundations.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {educationData.map((edu, i) => {
            const logo = institutionLogos[edu.institution];
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="grid gap-6 lg:grid-cols-[200px_1fr] p-6 border border-line bg-surface/50 hover:border-accent/15 transition-colors"
              >
                {/* Left: logo + duration */}
                <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
                  {logo && (
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-line bg-surface shrink-0">
                      <Image
                        src={logo}
                        alt={edu.institution}
                        fill
                        className="object-contain p-1.5"
                        sizes="64px"
                      />
                    </div>
                  )}
                  <div className="font-mono text-[10px] text-faint">
                    {edu.duration}
                  </div>
                </div>

                {/* Right: content */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-[13px] text-muted mb-3">
                    {edu.institution}
                  </p>

                  {edu.cgpa && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent/20 bg-accent/5 mb-3">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-faint">
                        CGPA
                      </span>
                      <span className="font-display text-lg font-bold text-accent">
                        {edu.cgpa}
                      </span>
                    </div>
                  )}

                  {edu.highlights.length > 0 && (
                    <div className="space-y-1.5 mt-3">
                      {edu.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5 text-[9px]">→</span>
                          <span className="text-[12px] text-muted">{h}</span>
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
