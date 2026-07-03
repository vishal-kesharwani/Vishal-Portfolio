"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillGroups } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-[58rem] scroll-mt-28 text-center text-slate-900 dark:text-slate-100 sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
        I keep this stack focused on the tools I use most for backend work,
        cloud delivery, AI research, and shipping production-ready features.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <motion.section
            key={group.title}
            className="rounded-[1.75rem] border border-black/5 bg-white/85 p-5 text-left shadow-[0_12px_40px_-28px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-slate-900/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={groupIndex}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                {group.title}
              </h3>
              <span className="rounded-full border border-black/5 bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
                {group.items.length} items
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, index) => (
                <motion.span
                  key={`${group.title}-${skill.name}`}
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950/5 dark:bg-white/10">
                    <Icon icon={skill.icon as string} className="h-4 w-4" />
                  </span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </section>
  );
}
