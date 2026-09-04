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

const wordVariants = {
  hidden: { opacity: 0, y: 30, skewY: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  }),
};

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/vishal-kesharwani", label: "GitHub" },
  { icon: BsLinkedin, href: "https://www.linkedin.com/in/vishal-kesharwani-76708025b", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/vishal-kesharwani", label: "LeetCode" },
];

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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted"
          >
            Backend Engineer who thinks in systems
          </motion.p>

          <h1 className="font-extrabold leading-[0.9] tracking-tight text-ink">
            <motion.span
              custom={0}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="block text-[2.8rem] sm:text-6xl lg:text-7xl"
            >
              VISHAL
            </motion.span>
            <motion.span
              custom={1}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="block text-[2.2rem] sm:text-5xl lg:text-6xl"
            >
              KESHARWANI
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-5 h-[2px] w-24 origin-left bg-gradient-to-r from-accent to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-5 max-w-xl font-mono text-sm text-muted sm:text-base"
          >
            {stackLine.map((tech, i) => (
              <React.Fragment key={tech}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="inline-block"
                >
                  {tech}
                </motion.span>
                {i < stackLine.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.85 + i * 0.1 }}
                    className="mx-2 inline-block text-accent"
                  >
                    ·
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
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
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#projects"
              onClick={() => {
                setActiveSection("Projects");
                setTimeOfLastClick(Date.now());
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink"
            >
              Explore Systems <FiArrowRight />
            </motion.a>
            <ResumePrint
              compact
              label="Resume"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="mt-6 flex flex-wrap gap-2.5 text-sm"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.1 }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:text-ink"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon /> {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="mx-auto w-full max-w-md lg:max-w-none"
          style={{ perspective: "1200px" }}
        >
          <div className="animate-float">
            <HeroArchitecture />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
