"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import HeroArchitecture from "./hero-architecture";
import ResumePrint from "./resume-print";

const stackLine = ["Java", "Spring Boot", "Kafka", "Kubernetes", "AWS", "Terraform"];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="w-full px-4 pb-14 pt-28 sm:px-6 sm:pt-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted"
          >
            Backend Engineer who thinks in systems
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[3.4rem] font-extrabold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl"
          >
            VISHAL
            <br />
            KESHARWANI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-xl font-mono text-sm text-muted sm:text-base"
          >
            {stackLine.join(" · ")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base"
          >
            I build event-driven services on Kafka, ship them to Kubernetes,
            and provision the infrastructure underneath with Terraform. The
            diagram on the right is the real shape of my Job Application
            Tracker project — not a stock graphic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={() => {
                setActiveSection("Projects");
                setTimeOfLastClick(Date.now());
              }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition hover:-translate-y-0.5"
            >
              Explore Systems <FiArrowRight />
            </a>
            <ResumePrint
              compact
              label="Resume"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="mt-6 flex flex-wrap gap-2.5 text-sm"
          >
            <a
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted transition hover:text-ink"
              href="https://github.com/vishal-kesharwani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted transition hover:text-ink"
              href="https://www.linkedin.com/in/vishal-kesharwani-76708025b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin /> LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted transition hover:text-ink"
              href="https://leetcode.com/u/vishal-kesharwani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode /> LeetCode
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <HeroArchitecture />
        </motion.div>
      </div>
    </section>
  );
}
