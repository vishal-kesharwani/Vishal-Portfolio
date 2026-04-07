"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { AnimatePresence, motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FiArrowRight, FiServer } from "react-icons/fi";
import { SiAmazonaws, SiDocker, SiGithubactions } from "react-icons/si";

const labSteps = [
  {
    title: "Spin up EC2",
    description: "I start with a clean AWS EC2 box and shape the runtime.",
    icon: SiAmazonaws,
    accent: "from-cyan-400 to-sky-500",
    code: "ssh ubuntu@ec2",
  },
  {
    title: "Dockerize",
    description: "I package the app in Docker so the environment stays repeatable.",
    icon: SiDocker,
    accent: "from-teal-400 to-emerald-500",
    code: "docker build .",
  },
  {
    title: "Deploy",
    description: "I connect CI/CD so the build can move into deployment cleanly.",
    icon: SiGithubactions,
    accent: "from-indigo-400 to-violet-500",
    code: "deploy pipeline",
  },
] as const;

export default function CloudLab() {
  const { ref } = useSectionInView("Cloud Lab", 0.35);
  const [activeStep, setActiveStep] = useState(0);

  // Rotate the highlighted pipeline stage so the sandbox feels alive.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((step) => (step + 1) % labSteps.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="cloud-lab"
      ref={ref}
      className="mb-28 w-full max-w-[58rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Cloud Lab</SectionHeading>
      <div className="rounded-[2.25rem] border border-slate-200/70 bg-slate-950 p-6 text-white shadow-[0_24px_90px_-45px_rgba(2,6,23,0.9)] sm:p-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
              <FiServer className="text-sm" />
              Environment sandbox
            </div>

            <h3 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              I treat cloud work like a small, controlled environment.
            </h3>

            <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              I start with a fresh server, package the app in Docker, and move
              it through a deployment flow that feels close to real DevOps
              practice.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  My goal
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  Keep the app predictable from local dev to production server.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Lab stack
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  AWS EC2, Docker, GitHub Actions, Linux.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-14 h-px bg-white/10" />

            <div className="grid gap-4 sm:grid-cols-3">
              {labSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;

                return (
                  <motion.article
                    key={step.title}
                    className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    animate={{
                      y: isActive ? -3 : 0,
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                  >
                    {isActive ? (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-teal-400/10 via-transparent to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    ) : null}

                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-lg`}
                    >
                      <Icon className="text-xl" />
                    </div>
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          isActive ? "bg-teal-300" : "bg-white/30"
                        }`}
                      />
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {isActive ? "Live step" : "Pipeline step"}
                      </p>
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {step.description}
                    </p>
                    <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 font-mono text-xs text-teal-200">
                      {step.code}
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={labSteps[activeStep].title}
                className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-r from-teal-400/15 via-cyan-400/10 to-indigo-500/15 p-4 text-sm text-slate-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-white/10 p-2">
                    <FiArrowRight className="text-teal-200" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {labSteps[activeStep].title}
                    </p>
                    <p className="mt-1 leading-6 text-slate-300">
                      {labSteps[activeStep].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
