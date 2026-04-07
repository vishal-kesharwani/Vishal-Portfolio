"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import MITLogo from "@/public/MIT-logo.png";
import bnnLogo from "@/public/bnn-college-logo.png";
import doaLogo from "@/public/doa-school-logo.jpg";
import Image from "next/image";

const educationItems = [
  {
    title: "B.Tech - Computer Engineering",
    institution: "MIT Academy of Engineering, Pune",
    period: "2022 - 2026",
    metric: "CGPA: 8.40/10",
    points: [
      "Specialization in Cloud Computing and AI/ML",
      "Red Hat Certified System Administrator (RHCSA)",
    ],
    logo: MITLogo,
  },
  {
    title: "Higher Secondary (12th)",
    institution: "B.N.N. College, Bhiwandi",
    period: "2022",
    metric: "Percentage: 71%",
    points: ["MSBSHSE Board", "Science Stream"],
    logo: bnnLogo,
  },
  {
    title: "Secondary School (10th)",
    institution: "Dr. Omprakash Agarwal English High School, Bhiwandi",
    period: "2020",
    metric: "Percentage: 85.20%",
    points: ["MSBSHSE Board", "State Topper in Mathematics"],
    logo: doaLogo,
  },
] as const;

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 w-full max-w-[58rem] scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading>My Education</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-gray-600 dark:text-white/70 sm:text-base">
        A clear academic path with engineering focus, strong fundamentals, and
        steady specialization in software systems.
      </p>

      <div className="grid gap-5">
        {educationItems.map((item, index) => (
          <motion.article
            key={item.title}
            className="overflow-hidden rounded-3xl border border-black/5 bg-white/80 shadow-[0_18px_70px_-38px_rgba(15,23,42,0.45)] backdrop-blur dark:border-white/10 dark:bg-white/5"
            initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-0 md:grid-cols-[220px_1fr]">
              <div className="relative flex min-h-[180px] items-center justify-center bg-gradient-to-br from-slate-950 to-slate-800 p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500" />
                <div className="relative h-32 w-32 overflow-hidden rounded-[1.75rem] bg-white/10 p-4 backdrop-blur">
                  <Image
                    src={item.logo}
                    alt={item.institution}
                    fill
                    sizes="128px"
                    className="object-contain p-4"
                  />
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-teal-500/15 bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-200">
                    {item.period}
                  </span>
                  <span className="rounded-full border border-black/5 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                    Education
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-base font-medium text-gray-700 dark:text-white/75">
                  {item.institution}
                </p>

                <div className="mt-5 inline-flex rounded-2xl border border-black/5 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
                  {item.metric}
                </div>

                <ul className="mt-5 grid gap-2 text-sm leading-6 text-gray-700 dark:text-white/75 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
