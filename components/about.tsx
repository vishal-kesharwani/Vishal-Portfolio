"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { focusPoints } from "@/lib/data";
import Highlight from "./highlight";
import BentoSnapshot from "./bento-snapshot";

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
              Infra-minded
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
            Docker, ArgoCD, and{" "}
            <Highlight variant="text">Terraform</Highlight>, with AWS resource
            management automated in Python and boto3. I care about the boring
            but important details: clean service boundaries, debounced
            workflows, documented APIs, real observability, and deployments
            that can be repeated without surprises.
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
          <BentoSnapshot />

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
                Backend / DevOps engineering roles in distributed systems and
                cloud-native platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
