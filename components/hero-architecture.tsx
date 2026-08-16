"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Mirrors the real Cloud-Native Job Application Tracker topology (see
 * lib/data.ts projectsData): client -> API gateway -> Kafka -> three
 * Spring Boot services -> EKS. Not a generic marketing diagram.
 */

const edges = [
  { id: "client-gateway", d: "M200,64 L200,100" },
  { id: "gateway-kafka", d: "M200,144 L200,180" },
  { id: "kafka-application", d: "M200,228 C200,250 75,250 75,270" },
  { id: "kafka-notification", d: "M200,228 L200,270" },
  { id: "kafka-analytics", d: "M200,228 C200,250 325,250 325,270" },
  { id: "application-eks", d: "M75,316 C75,340 200,340 200,360" },
  { id: "notification-eks", d: "M200,316 L200,360" },
  { id: "analytics-eks", d: "M325,316 C325,340 200,340 200,360" },
] as const;

const packetPaths = [
  "M200,64 L200,100 L200,144 L200,180 L200,228 C200,250 75,250 75,270 L75,316 C75,340 200,340 200,360",
  "M200,64 L200,100 L200,144 L200,180 L200,228 L200,270 L200,316 L200,360",
  "M200,64 L200,100 L200,144 L200,180 L200,228 C200,250 325,250 325,270 L325,316 C325,340 200,340 200,360",
] as const;

const statusRows = [
  { label: "API GATEWAY", detail: "Spring Boot" },
  { label: "KAFKA", detail: "3 topics" },
  { label: "EKS", detail: "Kubernetes" },
  { label: "POSTGRES", detail: "Primary store" },
] as const;

function Node({
  x,
  y,
  w,
  h,
  label,
  sub,
  accent,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill="var(--surface)"
        stroke={accent ? "var(--accent)" : "var(--border)"}
        strokeWidth={accent ? 1.25 : 1}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 - 3}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10.5"
        fontWeight={600}
        fill="var(--ink)"
      >
        {label}
      </text>
      <text
        x={x + w / 2}
        y={y + h / 2 + 12}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8.5"
        fill="var(--muted)"
      >
        {sub}
      </text>
    </g>
  );
}

export default function HeroArchitecture() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pulseEdge, setPulseEdge] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);

    if (query.matches) return;

    intervalRef.current = setInterval(() => {
      const edge = edges[Math.floor(Math.random() * edges.length)];
      setPulseEdge(edge.id);
      setTimeout(() => setPulseEdge(null), 700);
    }, 4800);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="rounded-[1.5rem] border border-line bg-surface/60 p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          job-tracker.architecture
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-pulse-ring absolute inset-0 rounded-full" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-current" />
          </span>
          Systems healthy
        </span>
      </div>

      <svg viewBox="0 0 400 400" className="w-full" role="img" aria-label="Architecture diagram: client through API gateway, Kafka, three microservices, to EKS">
        {edges.map((edge) => (
          <path
            key={edge.id}
            d={edge.d}
            fill="none"
            stroke={pulseEdge === edge.id ? "var(--accent)" : "var(--border)"}
            strokeWidth={pulseEdge === edge.id ? 1.75 : 1.25}
            className={reducedMotion ? undefined : "animate-data-flow"}
            style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
          />
        ))}

        {!reducedMotion &&
          packetPaths.map((d, index) => (
            <circle key={d} r="3" fill="var(--accent)">
              <animateMotion
                path={d}
                dur="3.2s"
                begin={`${index * 0.9}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

        <Node x={140} y={20} w={120} h={44} label="CLIENT" sub="browser" />
        <Node x={140} y={100} w={120} h={44} label="API GATEWAY" sub="Spring Boot" />
        <Node x={130} y={180} w={140} h={48} label="KAFKA" sub="3 topics" accent />
        <Node x={20} y={270} w={110} h={46} label="APPLICATION" sub="service" />
        <Node x={145} y={270} w={110} h={46} label="NOTIFICATION" sub="service" />
        <Node x={270} y={270} w={110} h={46} label="ANALYTICS" sub="service" />
        <Node x={140} y={360} w={120} h={40} label="EKS" sub="Kubernetes" accent />
      </svg>

      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-4">
        {statusRows.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-pulse-ring absolute inset-0 rounded-full text-accent" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
              {row.label}
            </span>
            <span className="ml-auto font-mono text-[9px] text-faint">
              {row.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
