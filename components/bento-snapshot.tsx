"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

/**
 * A bento grid in the style of github.com/hubeiqiao/apple-bento-grid:
 * mixed card sizes on one grid, tight radius, restrained shadow. The
 * layout mechanics are borrowed; the palette stays the site's own
 * amber/teal rather than Apple's blue/black so it doesn't clash.
 *
 * The stat tiles that used to live here moved up to the site-wide KPI bar
 * right under the hero, so this card is now just the resume CTA, the core
 * stack, and two badges — no duplicated numbers.
 */

const areas = `
  "hero hero badge1"
  "hero hero badge2"
  "cat  cat  cat"
`;

const coreStack = ["Java", "Spring Boot", "Kafka", "Kubernetes", "Terraform"];

export default function BentoSnapshot() {
  return (
    <motion.div
      className="grid gap-1.5 rounded-[20px]"
      style={{
        gridTemplateAreas: areas,
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, minmax(64px, auto))",
      }}
      initial="rest"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        rest: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {/* hero */}
      <motion.div
        style={{ gridArea: "hero" }}
        variants={{ rest: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
        className="relative flex flex-col justify-between overflow-hidden rounded-[18px] bg-slate-950 p-5 text-white shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
      >
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-amber-400 via-teal-300 to-slate-500" />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200">
            Resume snapshot
          </p>
          <h4 className="mt-2 text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
            A compact view of the work I want to keep doing.
          </h4>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="/Vishal_Kesharwani_Resume.pdf"
            download="Vishal_Kesharwani_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            Resume <FiDownload />
          </a>
          <a
            href="https://www.credly.com/badges/f3558204-39b1-43f0-8caa-813873989955/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
          >
            Credly <FiArrowRight />
          </a>
        </div>
      </motion.div>

      {/* category */}
      <motion.div
        style={{ gridArea: "cat" }}
        variants={{ rest: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
        className="flex flex-col justify-center gap-2 rounded-[16px] border border-black/5 bg-white p-4 shadow-[0_1px_8px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-900"
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
          Core stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {coreStack.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* badges */}
      <motion.a
        href="https://www.credly.com/badges/f3558204-39b1-43f0-8caa-813873989955/public_url"
        target="_blank"
        rel="noopener noreferrer"
        style={{ gridArea: "badge1" }}
        variants={{ rest: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
        className="flex flex-col justify-center rounded-[16px] border border-emerald-500/15 bg-emerald-500/10 p-4 transition hover:-translate-y-0.5"
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
          AWS Certified
        </p>
        <p className="mt-1 text-sm font-bold text-emerald-800 dark:text-emerald-200">
          Cloud Practitioner
        </p>
      </motion.a>
      <motion.div
        style={{ gridArea: "badge2" }}
        variants={{ rest: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
        className="flex flex-col justify-center rounded-[16px] border border-sky-500/15 bg-sky-500/10 p-4"
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
          SIH 2024
        </p>
        <p className="mt-1 text-sm font-bold text-sky-800 dark:text-sky-200">
          Grand Finalist
        </p>
      </motion.div>
    </motion.div>
  );
}
