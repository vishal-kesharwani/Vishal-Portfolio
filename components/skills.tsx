"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
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
      className="mb-28 w-full max-w-[58rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-sm leading-6 text-gray-600 dark:text-white/70 sm:text-base">
        I keep this stack focused on the tools I use most for backend work,
        cloud deployment, and shipping production-ready features.
      </p>
      <ul className="grid grid-cols-2 gap-3 text-lg text-gray-800 sm:grid-cols-3 lg:grid-cols-4">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/75 px-4 py-4 text-left shadow-[0_12px_40px_-28px_rgba(15,23,42,0.4)] backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/70 dark:text-white/85"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.02 }}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-slate-950/5 text-slate-950 dark:bg-white/10 dark:text-white">
              <Icon
                icon={skill.icon as string}
                className="h-6 w-6 shrink-0"
              />
            </div>
            <span className="text-sm font-medium leading-tight">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
