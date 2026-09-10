"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ResumePrint from "./resume-print";
import Image from "next/image";
import profilePhoto from "@/public/githubdp-removebg-preview.png";

const systemFlow = ["IDEA", "EXPLORE", "BUILD", "BREAK", "SHIP"];

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-10 pt-20 pb-12"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-content w-full">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
          <div className="min-w-0 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                Systems Builder
              </span>
            </motion.div>

            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-display-hero font-bold"
              >
                <span className="block text-ink">VISHAL</span>
                <span className="block text-ink">KESHARWANI</span>
              </motion.h1>
            </div>

            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-display text-display-lg font-semibold leading-[1.1]"
              >
                <div className="text-ink">I BUILD THINGS</div>
                <div className="text-ink">I WANT TO</div>
                <div className="text-accent">UNDERSTAND.</div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="max-w-lg text-[14px] leading-[1.7] text-muted mb-8"
            >
              Backend systems. Distributed infrastructure. Cloud. AI exploration.
              I like taking technology apart, understanding what happens underneath,
              and turning that understanding into software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <motion.a
                href="#work"
                onClick={() => {
                  setActiveSection("Work");
                  setTimeOfLastClick(Date.now());
                }}
                whileHover={{ x: 3 }}
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-accent-ink font-mono text-[11px] font-semibold uppercase tracking-wider hover:shadow-[0_0_24px_-6px_var(--accent)] transition-all duration-300"
              >
                EXPLORE WORK
                <FiArrowRight className="text-sm group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <a
                href="https://github.com/vishal-kesharwani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-line text-muted hover:text-ink hover:border-faint font-mono text-[11px] uppercase tracking-wider transition-all duration-300"
              >
                <FiGithub className="text-[12px]" />
                GITHUB
                <span className="text-[8px]">↗</span>
              </a>

              <ResumePrint
                compact
                label="RESUME"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-line text-muted hover:text-ink hover:border-faint font-mono text-[11px] uppercase tracking-wider transition-all duration-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                <span>JAVA</span>
                <span className="text-line">·</span>
                <span>SPRING BOOT</span>
                <span className="text-line">·</span>
                <span>KAFKA</span>
                <span className="text-line">·</span>
                <span>KUBERNETES</span>
                <span className="text-line">·</span>
                <span>AWS</span>
                <span className="text-line">·</span>
                <span>PYTHON</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.12em] text-faint"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                PUNE, INDIA
              </span>
              <span className="text-line">|</span>
              <span>OPEN TO BACKEND · SYSTEMS · CLOUD</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <HeroPortrait />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-8 flex flex-col items-center"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint mb-2">
            SCROLL TO EXPLORE
          </span>
          <div className="w-px h-6 bg-line relative overflow-hidden">
            <div className="absolute inset-0 w-full bg-accent animate-scroll-line" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroPortrait() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[105%] aspect-square rounded-full border-2 border-accent/40 animate-orbital-slow" />
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full aspect-square overflow-hidden rounded-full border-2 border-accent mx-auto"
        style={{
          boxShadow: "0 0 60px -10px rgba(184, 255, 61, 0.15), 0 0 120px -20px rgba(184, 255, 61, 0.08)",
        }}
      >
        <Image
          src={profilePhoto}
          alt="Vishal Kesharwani"
          fill
          className="object-cover object-top"
          priority
          sizes="400px"
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.05]" />
      </motion.div>

      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {systemFlow.map((label, i) => {
          const angle = (i * 72 - 90) * (Math.PI / 180);
          const radius = 58;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full border border-muted/40 bg-canvas mx-auto mb-1" />
              <span className="font-mono text-[8px] uppercase tracking-wider text-muted/60 whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 0.5 }}
        className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 px-4 py-3 bg-surface/60 backdrop-blur-sm border border-line max-w-[180px]"
      >
        <div className="font-mono text-[9px] text-muted leading-relaxed space-y-0.5">
          <div>Some curiosity.</div>
          <div>Bigger systems.</div>
          <div className="pt-1 border-t border-line mt-1">
            <span className="text-accent">Ideas</span> → <span className="text-accent">Code</span> → <span className="text-accent">Impact</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
