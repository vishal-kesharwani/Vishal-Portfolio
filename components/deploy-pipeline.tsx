"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGitCommit,
  FiPackage,
  FiCheckCircle,
  FiUploadCloud,
  FiActivity,
} from "react-icons/fi";

const stages = [
  { label: "commit", icon: FiGitCommit },
  { label: "build", icon: FiPackage },
  { label: "test", icon: FiCheckCircle },
  { label: "deploy", icon: FiUploadCloud },
  { label: "live", icon: FiActivity },
] as const;

export default function DeployPipeline() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setActive(stages.length - 1);
      return;
    }

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % stages.length);
    }, 1400);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
          Delivery pipeline
        </p>
        <span className="font-mono text-[10px] text-teal-300">
          {stages[active].label}
        </span>
      </div>

      <div className="relative flex items-center justify-between">
        <svg
          className="pointer-events-none absolute inset-x-4 top-1/2 -z-0 h-px w-[calc(100%-2rem)] -translate-y-1/2 overflow-visible"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="rgba(148,163,184,0.35)"
            strokeWidth="2"
          />
          <line
            className="animate-data-flow"
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="rgba(45,212,191,0.9)"
            strokeWidth="2"
          />
        </svg>

        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isActive = index === active;
          const isDone = index < active;

          return (
            <div
              key={stage.label}
              className="relative z-10 flex flex-col items-center gap-1.5"
            >
              <motion.span
                animate={{
                  scale: isActive ? 1.14 : 1,
                  backgroundColor: isActive
                    ? "rgba(45,212,191,0.22)"
                    : isDone
                      ? "rgba(45,212,191,0.1)"
                      : "rgba(255,255,255,0.06)",
                }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                  isActive || isDone
                    ? "border-teal-300/40 text-teal-200"
                    : "border-white/10 text-slate-400"
                }`}
              >
                <Icon className="text-sm" />
              </motion.span>
              <span
                className={`font-mono text-[9px] ${
                  isActive ? "text-teal-200" : "text-slate-500"
                }`}
              >
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
