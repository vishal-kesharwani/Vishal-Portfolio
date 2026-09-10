"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ResumePrint from "./resume-print";
import Image from "next/image";
import profilePhoto from "@/public/githubdp-removebg-preview.png";
import { statusMessages, stackLine, heroStats } from "@/lib/data";

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
      className="relative min-h-screen flex items-center px-6 lg:px-10 pt-20 pb-8"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-content w-full">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-6">
          {/* Left: text */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5"
            >
              <span className="font-mono text-[12px] text-accent">
                &gt;&gt; Hello, I&apos;m
              </span>
            </motion.div>

            <div className="mb-5">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display text-display-2xl font-bold leading-[0.88] tracking-tight"
              >
                <span className="block">VISHAL</span>
                <span className="block">KESHARWANI</span>
              </motion.h1>
            </div>

            <div className="mb-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="font-display text-display-md font-bold leading-[1.05] tracking-tight"
              >
                <div>I BUILD THINGS</div>
                <div>I WANT TO</div>
                <div>
                  <span className="text-accent">UNDERSTAND</span>.
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-lg text-[15px] leading-relaxed text-muted mb-5"
            >
              Backend systems. Distributed infrastructure. Cloud. AI experiments.
              I like taking technology apart, understanding what happens underneath,
              and turning that understanding into software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                Pune, India
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                Open to Backend / Systems / Cloud roles
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="flex flex-wrap items-center gap-2 mb-7"
            >
              {stackLine.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-[10px] tracking-wider text-faint">
                    {tech}
                  </span>
                  {i < stackLine.length - 1 && (
                    <span className="text-accent/30">·</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <motion.a
                href="#work"
                onClick={() => {
                  setActiveSection("Work");
                  setTimeOfLastClick(Date.now());
                }}
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-ink font-mono text-[11px] font-semibold uppercase tracking-wider hover:-translate-y-0.5 transition-transform"
              >
                EXPLORE MY WORK
                <FiArrowRight className="text-sm" />
              </motion.a>

              <a
                href="https://github.com/vishal-kesharwani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-line text-muted hover:text-ink hover:border-faint font-mono text-[11px] uppercase tracking-wider transition-colors"
              >
                <FaGithub />
                GITHUB
                <span className="text-[9px]">↗</span>
              </a>

              <ResumePrint
                compact
                label="RESUME"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-line text-muted hover:text-ink hover:border-faint font-mono text-[11px] uppercase tracking-wider transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="font-mono text-[10px] text-faint"
            >
              <span className="text-muted/60">//</span> still figuring things out, and that&apos;s the interesting part.
            </motion.div>
          </div>

          {/* Right: portrait + annotations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <HeroPortrait statusIndex={statusIndex} />
          </motion.div>
        </div>

        {/* Hero stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 pt-8 border-t border-line"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="p-3.5 border border-line bg-surface/50 hover:border-accent/20 transition-colors"
              >
                <div className="font-display text-xl font-bold text-ink mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-[8px] uppercase tracking-wider text-faint">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroPortrait({ statusIndex }: { statusIndex: number }) {
  return (
    <div className="relative w-full max-w-xs mx-auto lg:max-w-sm">
      {/* Main portrait */}
      <div className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-line mx-auto">
        <Image
          src={profilePhoto}
          alt="Vishal Kesharwani"
          fill
          className="object-cover object-top"
          priority
          sizes="400px"
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5" />
      </div>

      {/* Node labels - positioned around the circle inside the container */}
      <div className="hidden lg:block absolute inset-0">
        {["IDEA", "EXPERIMENT", "CODE", "BUILD", "SHIP", "UNDERSTAND"].map(
          (label, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const radius = 54;
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
                <div className="w-1.5 h-1.5 rounded-full border border-line bg-canvas mx-auto mb-0.5" />
                <span className="font-mono text-[7px] uppercase tracking-wider text-faint/50 whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            );
          }
        )}
      </div>

      {/* Annotations inside container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.5 }}
        className="mt-4 text-center"
      >
        <div className="font-mono text-[9px] text-faint/50 leading-relaxed">
          Some curiosity. Bigger systems.
        </div>
        <div className="font-mono text-[9px] text-faint/50 leading-relaxed mt-1">
          Ideas · Code · Systems · Impact
        </div>
      </motion.div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 border border-line bg-surface/90 backdrop-blur-sm"
      >
        <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-faint mb-0.5 text-center">
          SYSTEM STATUS
        </div>
        <motion.div
          key={statusIndex}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-[10px] font-medium text-accent text-center"
        >
          {statusMessages[statusIndex]}
        </motion.div>
      </motion.div>
    </div>
  );
}
