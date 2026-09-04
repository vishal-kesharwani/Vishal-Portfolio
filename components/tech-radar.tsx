"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { FiArrowDown } from "react-icons/fi";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Skills, { allSkills } from "./skills";

const descriptions: Record<string, string> = {
  Java: "Primary backend language across every project on this site.",
  "Spring Boot": "REST APIs for Job Tracker, Knowledge Nexus, and SteepGraph.",
  "Spring Security": "Auth on Job Tracker's inter-service calls and Knowledge Nexus.",
  "REST APIs": "45+ endpoints shipped on Seva Mahila Udyog alone.",
  Flyway: "Schema evolution across the Job Tracker's three services.",
  Python: "CloudLens-AI backend and AWS resource automation with boto3.",
  "Apache Kafka": "The only way the Job Tracker's three services talk to each other.",
  "Event-driven design": "Zero direct service-to-service calls, by design.",
  AWS: "Certified Cloud Practitioner, 1000/1000. EKS runs the Job Tracker.",
  Terraform: "Provisions the Job Tracker's AWS EKS infrastructure.",
  Kubernetes: "Self-healing under pod failure, verified autoscaling under load.",
  ArgoCD: "GitOps delivery — Git is the source of truth for the cluster.",
  Docker: "Containerizes the full Knowledge Nexus stack via Compose.",
  Prometheus: "Metrics for the Job Tracker's production monitoring.",
  Grafana: "Dashboards on top of that Prometheus data.",
  PostgreSQL: "Primary datastore across the backend projects.",
  DSA: "80+ problems solved on LeetCode, in Java.",
  "System Design": "The thinking behind every architecture on this page.",
};

export default function TechRadar() {
  const { ref } = useSectionInView("Skills");
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const coreNodes = useMemo(() => {
    const seen = new Set<string>();
    return allSkills.filter((skill) => {
      if (!skill.core || seen.has(skill.name)) return false;
      seen.add(skill.name);
      return true;
    });
  }, []);

  const activeSkill = coreNodes.find((skill) => skill.name === active);
  const radius = 40;

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-[58rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionHeading kicker="What I work with">Tech Radar</SectionHeading>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-8 max-w-xl text-center text-sm leading-6 text-muted sm:text-base"
      >
        The {coreNodes.length} technologies I reach for most, and why. Hover
        or tap a node.
      </motion.p>

      <div className="relative mx-auto aspect-square w-full max-w-md">
        <motion.div
          className="absolute inset-[8%] rounded-full border border-dashed border-line"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="absolute inset-[26%] rounded-full border border-dashed border-line"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <div
          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            className="h-full w-full rounded-full border border-accent/30 bg-surface"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
            animate={{ boxShadow: ["0 0 20px -10px var(--accent)", "0 0 40px -10px var(--accent)", "0 0 20px -10px var(--accent)"] }}
            style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
          />
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-accent">
            Vishal
          </span>
        </div>

        {coreNodes.map((skill, index) => {
          const angle = (index / coreNodes.length) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          const isActive = active === skill.name;

          return (
            <div
              key={skill.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <motion.button
                type="button"
                onMouseEnter={() => setActive(skill.name)}
                onFocus={() => setActive(skill.name)}
                onClick={() => setActive(isActive ? null : skill.name)}
                className={`relative flex h-11 w-11 items-center justify-center rounded-full border bg-surface transition-all duration-200 sm:h-12 sm:w-12 ${
                  isActive
                    ? "border-accent shadow-[0_0_0_3px_rgba(124,255,178,0.15)]"
                    : "border-line hover:border-accent/40 hover:shadow-lg"
                }`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.7 + index * 0.04,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-accent"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                )}
                <Icon
                  icon={skill.icon}
                  className={`h-5 w-5 transition-colors duration-200 ${
                    isActive ? "text-accent" : "text-muted"
                  }`}
                  onError={() => {}}
                />
              </motion.button>
            </div>
          );
        })}
      </div>

      <motion.div
        className="mx-auto mt-6 min-h-[4.5rem] max-w-md rounded-2xl border border-line bg-surface px-4 py-3 text-center"
        layout
      >
        <AnimatePresence mode="wait">
          {activeSkill ? (
            <motion.div
              key={activeSkill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm font-semibold text-ink">{activeSkill.name}</p>
              <p className="mt-1 text-xs leading-5 text-muted">
                {descriptions[activeSkill.name] ?? activeSkill.group}
              </p>
            </motion.div>
          ) : (
            <motion.p
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-faint"
            >
              Hover a node above to see how I actually use it.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="mt-6 text-center">
        <motion.button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="magnetic-btn inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent"
        >
          {expanded ? "Hide the full list" : `${allSkills.length} technologies explored`}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FiArrowDown />
          </motion.span>
        </motion.button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-8 overflow-hidden"
          >
            <Skills />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
