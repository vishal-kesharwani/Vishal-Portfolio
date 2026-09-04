"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading kicker="What I work with">Tech Radar</SectionHeading>
      <p className="mx-auto mb-8 max-w-xl text-center text-sm leading-6 text-muted sm:text-base">
        The {coreNodes.length} technologies I reach for most, and why. Hover
        or tap a node.
      </p>

      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="absolute inset-[8%] rounded-full border border-dashed border-line" />
        <div className="absolute inset-[26%] rounded-full border border-dashed border-line" />

        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-surface font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-accent shadow-[0_0_40px_-10px_var(--accent)]">
          Vishal
        </div>

        {coreNodes.map((skill, index) => {
          const angle = (index / coreNodes.length) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          const isActive = active === skill.name;

          return (
            <div
              key={skill.name}
              // Positioning and centering live on this plain wrapper. The
              // motion.button below animates scale/opacity, and Framer Motion
              // takes over the whole `transform` property via inline style
              // to do that - if the Tailwind -translate-1/2 centering classes
              // were on the same element, Framer would silently discard them,
              // anchoring every node by its top-left corner instead of its
              // center and throwing the whole ring off.
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <motion.button
                type="button"
                onMouseEnter={() => setActive(skill.name)}
                onFocus={() => setActive(skill.name)}
                onClick={() => setActive(isActive ? null : skill.name)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border bg-surface transition sm:h-12 sm:w-12 ${
                  isActive
                    ? "border-accent shadow-[0_0_0_3px_rgba(124,255,178,0.18)]"
                    : "border-line hover:border-accent/50"
                }`}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, type: "spring", stiffness: 300, damping: 22 }}
              >
                <Icon icon={skill.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-6 min-h-[4.5rem] max-w-md rounded-2xl border border-line bg-surface px-4 py-3 text-center">
        {activeSkill ? (
          <>
            <p className="text-sm font-semibold text-ink">{activeSkill.name}</p>
            <p className="mt-1 text-xs leading-5 text-muted">
              {descriptions[activeSkill.name] ?? activeSkill.group}
            </p>
          </>
        ) : (
          <p className="text-xs text-faint">
            Hover a node above to see how I actually use it.
          </p>
        )}
      </div>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent transition hover:opacity-80"
        >
          {expanded ? "Hide the full list" : `${allSkills.length} technologies explored`}
          <FiArrowDown className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.35 }}
          className="mt-8 overflow-hidden"
        >
          <Skills />
        </motion.div>
      )}
    </motion.section>
  );
}
