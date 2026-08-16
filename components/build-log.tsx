"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

/**
 * Sourced from this repo's real git log (see `git log --pretty=format:'%ad|%s'
 * --date=format:'%b %Y'`), curated and paraphrased, not invented. The point
 * is that this is literally true, not a marketing device.
 */
const entries = [
  {
    month: "Aug 2026",
    items: [
      "Portfolio V2 — dark rebrand, hero architecture graph, production simulation, tech radar",
      "Backend / DevOps pivot — new resume, two new projects, bento grid, glass nav",
    ],
  },
  {
    month: "Jul 2026",
    items: [
      "Fixed the resume download — two GitHub Pages workflows were racing each other on deploy",
      "Added the Job Application Tracker project, a searchable skills grid, and the Cloud Lab terminal",
    ],
  },
  {
    month: "Jun 2026",
    items: ["Built the interactive portfolio dashboard and the Cloud Lab terminal sandbox"],
  },
] as const;

export default function BuildLog() {
  const { ref } = useSectionInView("Build Log");

  return (
    <motion.section
      id="build-log"
      ref={ref}
      className="mb-28 w-full max-w-[58rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading kicker="Straight from git log">Build Log</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-muted sm:text-base">
        This portfolio isn&apos;t static — here&apos;s what actually shipped,
        pulled from this repository&apos;s own commit history.
      </p>

      <div className="rounded-[1.75rem] border border-line bg-surface p-6 sm:p-8">
        <div className="space-y-6">
          {entries.map((group) => (
            <div key={group.month} className="flex gap-5 sm:gap-8">
              <p className="w-20 shrink-0 pt-0.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {group.month}
              </p>
              <ul className="min-w-0 flex-1 space-y-2 border-l border-line pl-5 sm:pl-6">
                {group.items.map((item) => (
                  <li key={item} className="relative text-sm leading-6 text-muted">
                    <span className="absolute -left-[1.65rem] top-2 h-1.5 w-1.5 rounded-full bg-accent sm:-left-[1.9rem]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
