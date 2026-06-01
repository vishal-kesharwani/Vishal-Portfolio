"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";

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
        <div className="rounded-[2rem] border border-black/5 bg-white/85 p-6 shadow-[0_20px_80px_-35px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-slate-900/75 sm:p-8">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-teal-500/15 bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-200">
              Backend-first
            </span>
            <span className="rounded-full border border-black/5 bg-gray-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Tech enthusiast
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            I enjoy building systems that feel clean, reliable, and easy to
            deploy.
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            I&apos;m a final-year Computer Engineering student at MIT Academy of
            Engineering. Most of my time goes into Java, Spring Boot, Node.js,
            PostgreSQL, AWS, and the practical side of shipping software from a
            laptop to a cloud server.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-[0_24px_90px_-45px_rgba(2,6,23,0.9)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
              Resume snapshot
            </p>
            <h4 className="mt-3 text-2xl font-semibold tracking-tight">
              A compact summary of what I do best.
            </h4>

            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                <span>Backend Developer focused on Java, Spring Boot, PostgreSQL, and AWS.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                <span>Active internship experience in backend development and cloud engineering.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                <span>AWS Certified Cloud Practitioner with a 1000/1000 score.</span>
              </li>
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

          <div className="rounded-[1.6rem] border border-black/5 bg-white/85 p-5 backdrop-blur dark:border-white/10 dark:bg-slate-900/75">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              At a glance
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-black/5 bg-gray-100 px-3 py-1 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                Backend / Cloud internships
              </span>
              <span className="rounded-full border border-black/5 bg-gray-100 px-3 py-1 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                Docker + EC2 + CI/CD
              </span>
              <span className="rounded-full border border-black/5 bg-gray-100 px-3 py-1 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                Deploying from laptop to cloud
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
