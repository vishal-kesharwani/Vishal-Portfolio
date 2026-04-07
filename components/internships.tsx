"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { CgWorkAlt } from "react-icons/cg";
import { internshipsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Internships() {
  const { ref } = useSectionInView("Internships", 0.4);

  return (
    <motion.section
      id="internships"
      ref={ref}
      className="mb-28 scroll-mt-28 w-full max-w-[58rem] sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Internships</SectionHeading>

      <div className="grid gap-6">
        {internshipsData.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="rounded-2xl border border-black/5 bg-gray-100 p-6 shadow-sm transition dark:border-white/10 dark:bg-white/10"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white dark:bg-white dark:text-gray-950">
                  <CgWorkAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.company}</h3>
                  <p className="text-base font-medium text-gray-700 dark:text-white/75">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="text-sm text-gray-600 dark:text-white/60 md:text-right">
                <p>{item.duration}</p>
                <p className="font-medium text-teal-600 dark:text-teal-300">
                  {item.status}
                </p>
              </div>
            </div>

            <ul className="mt-5 grid gap-3 pl-1 text-sm leading-relaxed text-gray-700 dark:text-white/75 sm:grid-cols-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
