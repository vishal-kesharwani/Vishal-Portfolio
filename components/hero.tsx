"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiArrowDown } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ResumePrint from "./resume-print";
import Image from "next/image";
import profilePhoto from "@/public/githubdp-removebg-preview.png";
import { statusMessages } from "@/lib/data";

const techStack = [
  "Java", "Spring Boot", "Kafka", "Kubernetes", "AWS",
  "PostgreSQL", "Redis", "Docker", "Terraform", "Python", "React",
];

const metrics = [
  { value: "02+", label: "Internships" },
  { value: "15+", label: "Production APIs" },
  { value: "03", label: "Major Projects" },
  { value: "80+", label: "LeetCode" },
];

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-10 pt-20 pb-12"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-content w-full">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
          {/* LEFT — Information */}
          <div className="min-w-0 order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="font-mono text-[11px] tracking-wider text-accent">
                &gt;&gt; HELLO, I&apos;M VISHAL
              </span>
            </motion.div>

            {/* Name */}
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-display-hero font-bold"
              >
                <span className="block text-ink">VISHAL</span>
                <span className="block text-accent">KESHARWANI</span>
              </motion.h1>
            </div>

            {/* Tagline */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-display text-display-lg font-semibold leading-[1.1]"
              >
                <div className="text-ink">I BUILD THINGS</div>
                <div className="text-ink">I WANT TO</div>
                <div className="text-accent">UNDERSTAND</div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="max-w-lg text-[14px] leading-[1.7] text-muted mb-8"
            >
              Backend systems. Distributed infrastructure. Cloud. AI experiments.
              I like taking technology apart, understanding what happens underneath,
              and turning that understanding into software.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-3 mb-10"
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
                EXPLORE MY WORK
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

            {/* Tech Stack Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mb-10"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-faint mb-3">
                TECH I WORK WITH
              </div>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-line text-[11px] font-mono text-muted hover:text-ink hover:border-faint transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
                <span className="px-3 py-1 border border-line-accent text-[11px] font-mono text-accent">
                  + MORE
                </span>
              </div>
            </motion.div>

            {/* Metrics Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="flex flex-wrap items-center gap-0"
            >
              {metrics.map((m, i) => (
                <React.Fragment key={m.label}>
                  <div className="px-5 py-2">
                    <div className="font-display text-2xl font-bold text-ink leading-none mb-1">
                      {m.value}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                      {m.label}
                    </div>
                  </div>
                  {i < metrics.length - 1 && (
                    <div className="w-px h-8 bg-line" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Visual Identity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <HeroPortrait statusIndex={statusIndex} />
          </motion.div>
        </div>

        {/* Bottom status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              PUNE, INDIA
            </span>
            <span className="text-line">|</span>
            <span>OPEN TO BACKEND / SYSTEMS / CLOUD ROLES</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
            <span>SYS.STATUS // ONLINE</span>
            <span className="text-line">|</span>
            <span>VERSION // 2026</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
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

function HeroPortrait({ statusIndex }: { statusIndex: number }) {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[105%] aspect-square rounded-full border border-line/40 animate-orbital-slow" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[115%] aspect-square rounded-full border border-line/20" style={{ animationDuration: "90s", animationDirection: "reverse" }} />
      </div>

      {/* Main portrait */}
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full aspect-square rounded-full overflow-hidden border border-line mx-auto"
        style={{
          boxShadow: "0 0 60px -15px rgba(184, 255, 61, 0.08), inset 0 0 40px -20px rgba(0,0,0,0.5)",
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
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.03]" />

        {/* Status badge — overlay on portrait bottom */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-surface/80 backdrop-blur-md border border-line"
        >
          <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-faint mb-0.5 text-center">
            SYSTEM STATUS
          </div>
          <motion.div
            key={statusIndex}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[11px] font-medium text-accent text-center"
          >
            {statusMessages[statusIndex]}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Node labels — positioned around the circle */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {["IDEA", "EXPERIMENT", "CODE", "BUILD", "SHIP", "UNDERSTAND"].map(
          (label, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const radius = 57;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.08, duration: 0.4 }}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full border border-muted/60 bg-canvas mx-auto mb-1" />
                <span className="font-mono text-[8px] uppercase tracking-wider text-muted/70 whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            );
          }
        )}
      </div>

      {/* Floating info card */}
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
