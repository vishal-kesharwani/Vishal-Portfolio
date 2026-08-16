"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FiAlertTriangle } from "react-icons/fi";

type Phase = "healthy" | "incident" | "recovering";

type Pod = {
  id: string;
  status: "HEALTHY" | "TERMINATED" | "RESTARTING";
};

const initialPods: Pod[] = [
  { id: "application-service-7d8f", status: "HEALTHY" },
  { id: "notification-service-92x1", status: "HEALTHY" },
  { id: "analytics-service-1c3a", status: "HEALTHY" },
  { id: "kafka-0", status: "HEALTHY" },
];

const baseline = { latency: 118, rps: 2481, errorRate: 0.12, cpu: 61, memory: 47, kafkaLag: 12 };
const incidentReadout = { latency: 940, rps: 1120, errorRate: 8.4, cpu: 92, memory: 81, kafkaLag: 64 };

const phaseDurations: Record<Phase, number> = {
  healthy: 6000,
  incident: 1600,
  recovering: 3200,
};

function Metric({ label, value, unit, warn }: { label: string; value: number; unit: string; warn?: boolean }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{label}</p>
      <AnimatePresence mode="wait">
        <motion.p
          key={Math.round(value)}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.25 }}
          className={`font-mono text-lg font-semibold sm:text-xl ${warn ? "text-danger" : "text-ink"}`}
        >
          {value}
          <span className="ml-0.5 text-xs text-muted">{unit}</span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function ProductionSimulation() {
  const { ref } = useSectionInView("Production", 0.3);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [phase, setPhase] = useState<Phase>("healthy");
  const [readout, setReadout] = useState(baseline);
  const [pods, setPods] = useState<Pod[]>(initialPods);
  const [countdown, setCountdown] = useState(3);
  const failedPodRef = useRef(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    if (query.matches) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let countdownId: ReturnType<typeof setInterval>;

    const run = (next: Phase) => {
      setPhase(next);

      if (next === "incident") {
        const targetIndex = Math.floor(Math.random() * initialPods.length);
        failedPodRef.current = targetIndex;
        setReadout(incidentReadout);
        setPods((current) =>
          current.map((pod, index) =>
            index === targetIndex ? { ...pod, status: "TERMINATED" } : pod,
          ),
        );
      }

      if (next === "recovering") {
        setCountdown(3);
        setPods((current) =>
          current.map((pod, index) =>
            index === failedPodRef.current ? { ...pod, status: "RESTARTING" } : pod,
          ),
        );
        countdownId = setInterval(() => {
          setCountdown((c) => Math.max(c - 1, 0));
        }, 1000);
      }

      if (next === "healthy") {
        setReadout(baseline);
        setPods((current) =>
          current.map((pod) => ({ ...pod, status: "HEALTHY" })),
        );
        clearInterval(countdownId);
      }

      const after: Record<Phase, Phase> = {
        healthy: "incident",
        incident: "recovering",
        recovering: "healthy",
      };
      timeoutId = setTimeout(() => run(after[next]), phaseDurations[next]);
    };

    timeoutId = setTimeout(() => run("incident"), phaseDurations.healthy);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(countdownId);
    };
  }, []);

  const statusColor = (status: Pod["status"]) =>
    status === "HEALTHY" ? "bg-accent" : status === "RESTARTING" ? "bg-warn" : "bg-danger";

  return (
    <motion.section
      id="production"
      ref={ref}
      className="mb-28 w-full max-w-[58rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading kicker="What happens when production breaks?">
        Production Monitor
      </SectionHeading>

      <div className="rounded-[1.75rem] border border-line bg-surface p-5 sm:p-7">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Simulated telemetry — illustrative, not a live feed
          </span>

          <AnimatePresence mode="wait">
            {phase === "healthy" && (
              <motion.span
                key="healthy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-ring absolute inset-0 rounded-full" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                All systems healthy
              </motion.span>
            )}
            {phase === "incident" && (
              <motion.span
                key="incident"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-danger/30 bg-danger/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-danger"
              >
                <FiAlertTriangle /> Pod failure detected
              </motion.span>
            )}
            {phase === "recovering" && (
              <motion.span
                key="recovering"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-warn/30 bg-warn/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-warn"
              >
                Restarting pod… {countdown > 0 ? countdown : "done"}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-2 gap-4 border-b border-line pb-5 sm:grid-cols-3 lg:grid-cols-6">
          <Metric label="API latency" value={readout.latency} unit="ms" warn={phase !== "healthy"} />
          <Metric label="Requests" value={readout.rps} unit="/s" />
          <Metric label="Error rate" value={readout.errorRate} unit="%" warn={phase !== "healthy"} />
          <Metric label="CPU" value={readout.cpu} unit="%" />
          <Metric label="Memory" value={readout.memory} unit="%" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Kafka lag</p>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-2">
              <motion.div
                className={`h-full rounded-full ${phase === "healthy" ? "bg-accent" : "bg-danger"}`}
                animate={{ width: `${readout.kafkaLag}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {pods.map((pod) => (
            <div
              key={pod.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface-2/60 px-3.5 py-2.5"
            >
              <span className="flex items-center gap-2 font-mono text-xs text-ink">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusColor(pod.status)}`} />
                pod/{pod.id}
              </span>
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.1em] ${
                  pod.status === "HEALTHY"
                    ? "text-accent"
                    : pod.status === "RESTARTING"
                      ? "text-warn"
                      : "text-danger"
                }`}
              >
                {pod.status}
              </span>
            </div>
          ))}
        </div>

        {reducedMotion && (
          <p className="mt-4 font-mono text-[10px] text-faint">
            Live-cycling paused (reduced motion preferred). All systems shown healthy.
          </p>
        )}
      </div>
    </motion.section>
  );
}
