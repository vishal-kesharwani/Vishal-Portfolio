"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { focusPoints, resumeHighlights } from "@/lib/data";
import StatValue from "./stat-value";
import Highlight from "./highlight";

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
      <SectionHeading kicker="Who I am">About</SectionHeading>

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

          <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            I like building software that is <Highlight>structured</Highlight>,{" "}
            <Highlight>secure</Highlight>, and easy to hand over to the next
            developer.
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            My resume centers on{" "}
            <Highlight variant="text">Java backend engineering</Highlight>:
            Spring Boot, Spring Security, PostgreSQL, and{" "}
            <Highlight variant="text">event-driven services on Kafka</Highlight>,
            shipped to <Highlight variant="text">Kubernetes</Highlight> through
            Docker, ArgoCD, and Terraform. I care about the boring but important
            details: clean service boundaries, debounced workflows, documented
            APIs, real observability, and deployments that can be repeated
            without surprises.
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

            <dl className="mt-5 grid grid-cols-2 gap-3">
              {resumeHighlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 bg-gradient-to-r from-white via-white to-amber-200 bg-clip-text text-2xl font-semibold text-transparent sm:text-[1.75rem]">
                    <StatValue value={item.value} />
                  </dd>
                  <dd className="mt-1.5 text-xs leading-5 text-slate-400">
                    {item.detail}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resume"
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
                Java backend systems, secure APIs, event-driven microservices,
                and cloud-native delivery on AWS and Kubernetes.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-black/5 bg-white/85 p-5 backdrop-blur dark:border-white/10 dark:bg-slate-900/75">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Looking for
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
                Backend engineering roles in distributed systems and
                cloud-native platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
