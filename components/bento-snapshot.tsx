"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

/**
 * A bento grid in the style of github.com/hubeiqiao/apple-bento-grid:
 * mixed card sizes on one grid, tight radius, restrained shadow. The
 * layout mechanics are borrowed; the palette is the site's own graphite/
 * mint token system rather than Apple's blue/black.
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
        className="relative flex flex-col justify-between overflow-hidden rounded-[18px] border border-line bg-surface-2 p-5 text-ink"
      >
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent via-accent/40 to-transparent" />
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
            Resume snapshot
          </p>
          <h4 className="mt-2 text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
            A compact view of the work I want to keep doing.
          </h4>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://www.credly.com/badges/f3558204-39b1-43f0-8caa-813873989955/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-canvas transition hover:-translate-y-0.5"
          >
            Credly Badge <FiArrowRight />
          </a>
        </div>
      </motion.div>

      {/* category */}
      <motion.div
        style={{ gridArea: "cat" }}
        variants={{ rest: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
        className="flex flex-col justify-center gap-2 rounded-[16px] border border-line bg-surface p-4"
      >
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-faint">
          Core stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {coreStack.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] font-medium text-muted"
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
        className="flex flex-col justify-center rounded-[16px] border border-accent/20 bg-accent/10 p-4 transition hover:-translate-y-0.5"
      >
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-accent">
          AWS Certified
        </p>
        <p className="mt-1 text-sm font-bold text-ink">Cloud Practitioner</p>
      </motion.a>
      <motion.div
        style={{ gridArea: "badge2" }}
        variants={{ rest: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
        className="flex flex-col justify-center rounded-[16px] border border-line bg-surface-2 p-4"
      >
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
          SIH 2024
        </p>
        <p className="mt-1 text-sm font-bold text-ink">Grand Finalist</p>
      </motion.div>
    </motion.div>
  );
}
