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
      className="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-sm leading-6 text-gray-600 dark:text-white/70 sm:text-base">
        I work with backend systems, frontend delivery, cloud tooling, and
        DevOps basics so I can move an idea from code to deployment with
        confidence.
      </p>
      <ul className="grid grid-cols-2 gap-3 text-lg text-gray-800 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-black/5 bg-white/80 px-4 py-5 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.05 }}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {/* Fixed-size icon wrapper keeps every skill tile visually aligned. */}
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-slate-950/5 text-slate-950 dark:bg-white/10 dark:text-white">
              <Icon
                icon={skill.icon as string}
                className="h-10 w-10 shrink-0"
              />
            </div>
            <span className="mt-3 text-sm font-medium leading-tight">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
