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
  const { ref } = useSectionInView("Education", 0.3);

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
      <SectionHeading kicker="Academic base">Education</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-muted sm:text-base">
        My academic base gives me the fundamentals I rely on while building
        backend systems, cloud workflows, and deployment-ready products.
      </p>

      <div className="grid gap-5">
        {educationItems.map((item, index) => (
          <motion.article
            key={item.title}
            className="overflow-hidden rounded-3xl border border-line bg-surface"
            initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-0 md:grid-cols-[220px_1fr]">
              <div className="relative flex min-h-[180px] items-center justify-center bg-gradient-to-br from-neutral-950 to-neutral-800 p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/40 to-transparent" />
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
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {item.period}
                  </span>
                  <span className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs font-medium text-muted">
                    Education
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-base font-medium text-muted">
                  {item.institution}
                </p>

                <div className="mt-5 inline-flex rounded-2xl border border-line bg-surface-2 px-4 py-3 font-mono text-sm font-semibold text-ink">
                  {item.metric}
                </div>

                <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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
