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
    title: "B.Tech - Computer Science & Engineering",
    institution: "MIT Academy of Engineering, Pune",
    period: "Nov 2022 - Jun 2026",
    metric: "CGPA: 8.63/10",
    points: [
      "Java, backend systems, and cloud delivery focus",
      "Consistent problem solving through DSA practice",
    ],
    logo: MITLogo,
  },
  {
    title: "Higher Secondary (12th)",
    institution: "B.N.N. College, Bhiwandi",
    period: "Aug 2021 - Mar 2022",
    metric: "Percentage: 71%",
    points: ["MSBSHSE Board", "Science Stream (PCMB)", "JEE Mains: 93.92%ile", "MHCET: 96.46%ile"],
    logo: bnnLogo,
  },
  {
    title: "Secondary School (10th)",
    institution: "Dr. Omprakash Agarwal English High School, Bhiwandi",
    period: "Apr 2019 - Mar 2020",
    metric: "Percentage: 85.20%",
    points: ["MSBSHSE Board", "State Topper in Mathematics"],
    logo: doaLogo,
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function Education() {
  const { ref } = useSectionInView("Education", 0.3);

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 w-full max-w-[58rem] scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionHeading kicker="Academic base">Education</SectionHeading>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-muted sm:text-base"
      >
        My academic base gives me the fundamentals I rely on while building
        backend systems, cloud workflows, and deployment-ready products.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-5"
      >
        {educationItems.map((item, index) => (
          <motion.article
            key={item.title}
            variants={cardVariants}
            whileHover={{
              x: 8,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="overflow-hidden rounded-3xl border border-line bg-surface transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(124,255,178,0.1)]"
          >
            <div className="grid gap-0 md:grid-cols-[220px_1fr]">
              <motion.div
                className="relative flex min-h-[180px] items-center justify-center bg-gradient-to-br from-neutral-950 to-neutral-800 p-6 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/40 to-transparent" />
                <motion.div
                  className="relative h-32 w-32 overflow-hidden rounded-[1.75rem] bg-white/10 p-4 backdrop-blur"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={item.logo}
                    alt={item.institution}
                    fill
                    sizes="128px"
                    className="object-contain p-4"
                  />
                </motion.div>
              </motion.div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent"
                  >
                    {item.period}
                  </motion.span>
                  <span className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs font-medium text-muted">
                    Education
                  </span>
                </div>

                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-2xl font-semibold tracking-tight text-ink"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="mt-2 text-base font-medium text-muted"
                >
                  {item.institution}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="mt-5 inline-flex rounded-2xl border border-line bg-surface-2 px-4 py-3 font-mono text-sm font-semibold text-ink"
                >
                  {item.metric}
                </motion.div>

                <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted sm:grid-cols-2">
                  {item.points.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.05 }}
                      className="flex gap-2"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
