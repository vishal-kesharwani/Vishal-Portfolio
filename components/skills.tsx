"use client";

import React, { useMemo, useState } from "react";
import { skillGroups } from "@/lib/data";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { FiSearch, FiStar, FiX } from "react-icons/fi";

export type Skill = {
  name: string;
  icon: string;
  core?: boolean;
  group: string;
  accent: string;
};

const accentRing: Record<string, string> = {
  amber: "border-amber-500/25 bg-amber-500/10 text-amber-600 dark:text-amber-300",
  teal: "border-teal-500/25 bg-teal-500/10 text-teal-600 dark:text-teal-300",
  violet:
    "border-violet-500/25 bg-violet-500/10 text-violet-600 dark:text-violet-300",
  sky: "border-sky-500/25 bg-sky-500/10 text-sky-600 dark:text-sky-300",
  rose: "border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-300",
  orange:
    "border-orange-500/25 bg-orange-500/10 text-orange-600 dark:text-orange-300",
  slate: "border-line bg-surface-2 text-muted",
};

export const allSkills: Skill[] = skillGroups.flatMap((group) =>
  group.items.map((item) => ({
    name: item.name,
    icon: item.icon,
    core: "core" in item ? Boolean(item.core) : false,
    group: group.title,
    accent: group.accent,
  })),
);

const coreSkills = allSkills.filter((skill) => skill.core);

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [coreOnly, setCoreOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return allSkills.filter((skill) => {
      if (activeGroup !== "All" && skill.group !== activeGroup) return false;
      if (coreOnly && !skill.core) return false;
      if (!q) return true;
      return (
        skill.name.toLowerCase().includes(q) ||
        skill.group.toLowerCase().includes(q)
      );
    });
  }, [activeGroup, coreOnly, query]);

  const filters = ["All", ...skillGroups.map((group) => group.title)];
  const isFiltered = activeGroup !== "All" || coreOnly || query.trim() !== "";

  const reset = () => {
    setActiveGroup("All");
    setQuery("");
    setCoreOnly(false);
  };

  return (
    <div className="w-full text-ink">
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-6 text-muted sm:text-base">
        Search it, filter it, or jump straight to the core stack. This is the
        toolkit I actually use for backend services, event-driven systems, and
        cloud delivery.
      </p>

      {/* core stack ticker */}
      <div className="marquee-mask mb-8 overflow-hidden">
        <div className="animate-marquee flex w-max gap-3">
          {[...coreSkills, ...coreSkills].map((skill, index) => (
            <span
              key={`${skill.name}-${index}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-muted"
            >
              <Icon icon={skill.icon} className="h-4 w-4" />
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="mb-6 rounded-[1.75rem] border border-line bg-surface p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Kafka, Spring, Kubernetes..."
              aria-label="Search skills"
              className="w-full rounded-full border border-line bg-surface-2 py-2.5 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-accent/50"
            />
          </label>

          <button
            type="button"
            onClick={() => setCoreOnly((value) => !value)}
            aria-pressed={coreOnly}
            className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
              coreOnly
                ? "border-accent/30 bg-accent/15 text-accent"
                : "border-line bg-surface-2 text-muted hover:-translate-y-0.5 hover:text-ink"
            }`}
          >
            <FiStar className={coreOnly ? "fill-current" : ""} /> Core stack
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeGroup === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveGroup(filter)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition sm:text-[13px] ${
                  isActive ? "text-accent-ink" : "text-muted hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skill-filter-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3 text-xs text-faint">
          <p className="font-mono">
            <motion.span
              key={filtered.length}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block font-semibold text-ink"
            >
              {filtered.length}
            </motion.span>{" "}
            / {allSkills.length} skills
            <span className="animate-caret ml-1 inline-block">_</span>
          </p>

          {isFiltered && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1 font-medium transition hover:bg-surface-2"
            >
              <FiX /> Reset
            </button>
          )}
        </div>
      </div>

      {/* skill grid */}
      <motion.ul
        layout
        className="relative flex flex-wrap justify-center gap-2.5 sm:justify-start"
      >
        {filtered.map((skill, index) => (
            <motion.li
              key={`${skill.group}-${skill.name}`}
              layout
              initial={{ opacity: 0, scale: 0.82, y: 12 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { delay: Math.min(index * 0.012, 0.3) },
              }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-full border border-line bg-surface px-3 py-2 text-sm font-medium text-ink"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-sheen" />
              <span className="relative flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                    accentRing[skill.accent] ?? accentRing.slate
                  }`}
                >
                  <Icon icon={skill.icon} className="h-4 w-4" />
                </span>
                {skill.name}
                {skill.core && (
                  <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-accent" />
                )}
              </span>
            </motion.li>
        ))}
      </motion.ul>

      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-center font-mono text-sm text-faint"
        >
          No skill matches &quot;{query}&quot; — try Kafka, Spring, or AWS.
        </motion.p>
      )}

      {/* group legend */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <button
            key={group.title}
            type="button"
            onClick={() => setActiveGroup(group.title)}
            className={`rounded-[1.35rem] border p-4 text-left transition hover:-translate-y-0.5 ${
              activeGroup === group.title
                ? "border-accent/30 bg-accent/10"
                : "border-line bg-surface"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-ink">{group.title}</p>
              <span className="font-mono text-[11px] text-faint">
                {group.items.length}
              </span>
            </div>
            <p className="mt-1.5 text-xs leading-5 text-muted">
              {group.blurb}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
