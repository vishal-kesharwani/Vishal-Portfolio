"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { focusPoints, resumeHighlights } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 w-full max-w-[58rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading>About</SectionHeading>

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/88 p-6 shadow-[0_20px_80px_-35px_rgba(15,23,42,0.28)] backdrop-blur dark:border-white/10 dark:bg-slate-900/72 sm:p-8">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-amber-500/15 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-200">
              Backend-first
            </span>
            <span className="rounded-full border border-black/5 bg-gray-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Product-minded
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            I like building software that is structured, secure, and easy to
            hand over to the next developer.
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            My resume centers on Java backend engineering, Spring Boot, Spring
            Security, PostgreSQL, AWS, Docker, and the engineering habits that
            make shipping feel dependable. I care about the boring but
            important details: clean service boundaries, debounced workflows,
            documented APIs, and cloud deployments that can be repeated.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {focusPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.35rem] border border-black/5 bg-stone-50 px-4 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-black/5 bg-slate-950 p-6 text-white shadow-[0_24px_90px_-45px_rgba(2,6,23,0.9)] dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
              Resume snapshot
            </p>
            <h4 className="mt-3 text-2xl font-semibold tracking-tight">
              A compact view of the work I want to keep doing.
            </h4>

            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
              {resumeHighlights.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                  <span>
                    <span className="font-semibold text-white">{item.label}:</span>{" "}
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/Vishal_Kesharwani_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Download Resume <FiDownload />
              </a>
              <a
                href="https://www.credly.com/badges/f3558204-39b1-43f0-8caa-813873989955/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Credly Badge <FiArrowRight />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.6rem] border border-black/5 bg-white/85 p-5 backdrop-blur dark:border-white/10 dark:bg-slate-900/75">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Current focus
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
                Java backend systems, secure APIs, ETL optimization, and cloud
                delivery on AWS.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-black/5 bg-white/85 p-5 backdrop-blur dark:border-white/10 dark:bg-slate-900/75">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Looking for
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
                Backend or platform engineering roles where strong fundamentals
                and shipping discipline matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
