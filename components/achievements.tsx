"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Achievements");

  return (
    <motion.section
      id="achievements"
      ref={ref}
      className="mb-28 w-full max-w-[58rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading kicker="Proof of work">Achievements</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-muted sm:text-base">
        These are the outcomes I mention when I want to show consistency,
        execution, and the ability to work across backend, cloud, research,
        and competitive problem solving.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {experiencesData.map((item, index) => (
          <motion.article
            key={index}
            className="group flex flex-col items-center rounded-[1.75rem] border border-line bg-surface p-6 text-center transition hover:-translate-y-1 hover:border-accent/40"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-surface-2 text-2xl text-accent transition group-hover:border-accent/40 group-hover:bg-accent/10">
              {item.icon}
            </div>
            <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              {item.description}
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
              {item.date}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
