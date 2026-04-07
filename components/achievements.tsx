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
      <SectionHeading>My Achievements</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-gray-600 dark:text-white/70 sm:text-base">
        My achievements reflect the way I like to work: solving real problems,
        shipping under pressure, and staying curious about cloud and backend
        systems.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {experiencesData.map((item, index) => (
          <motion.article
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-6 shadow-[0_18px_70px_-38px_rgba(15,23,42,0.45)] backdrop-blur dark:border-white/10 dark:bg-white/5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500" />
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-600 dark:text-teal-300">
                    {item.date}
                  </p>
                  <span className="rounded-full border border-black/5 bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                    Achievement
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-gray-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
