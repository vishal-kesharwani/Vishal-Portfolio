"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import clsx from "clsx";

type PodStatus = "running" | "terminated" | "recovering";
type SystemState = {
  podA: PodStatus;
  podB: PodStatus;
  podC: PodStatus;
  kafka: "healthy" | "degraded" | "processing";
  traffic: "normal" | "rerouting" | "burst";
  message: string;
  eventLog: string[];
};

const initialState: SystemState = {
  podA: "running",
  podB: "running",
  podC: "running",
  kafka: "healthy",
  traffic: "normal",
  message: "",
  eventLog: [],
};

export default function BreakTheSystem() {
  const { ref } = useSectionInView("Break", 0.2);
  const [state, setState] = useState<SystemState>(initialState);
  const [isSimulating, setIsSimulating] = useState(false);

  const addEvent = (msg: string) => {
    setState((s) => ({
      ...s,
      message: msg,
      eventLog: [...s.eventLog.slice(-4), `[${new Date().toLocaleTimeString()}] ${msg}`],
    }));
  };

  const resetSystem = useCallback(() => {
    setState(initialState);
    setIsSimulating(false);
  }, []);

  const killPod = useCallback(() => {
    setIsSimulating(true);
    setState((s) => ({ ...s, podA: "terminated", traffic: "rerouting" }));
    addEvent("TRAFFIC REROUTING...");

    setTimeout(() => {
      setState((s) => ({ ...s, kafka: "processing" }));
      addEvent("KAFKA PROCESSING BACKLOG...");
    }, 1500);

    setTimeout(() => {
      setState((s) => ({ ...s, podA: "recovering" }));
      addEvent("POD RECOVERY INITIATED...");
    }, 3000);

    setTimeout(() => {
      setState((s) => ({
        ...s,
        podA: "running",
        kafka: "healthy",
        traffic: "normal",
        eventLog: [...s.eventLog.slice(-4), `[${new Date().toLocaleTimeString()}] SYSTEM RECOVERED`],
      }));
      setIsSimulating(false);
    }, 4500);
  }, []);

  const dropMessage = useCallback(() => {
    setIsSimulating(true);
    setState((s) => ({ ...s, kafka: "degraded" }));
    addEvent("MESSAGE LOST - OFFSET COMMIT FAILED");

    setTimeout(() => addEvent("IDEMPOTENT CONSUMER DETECTED DUPLICATE"), 2000);

    setTimeout(() => {
      setState((s) => ({ ...s, kafka: "healthy" }));
      addEvent("OFFSET REBALANCED - MESSAGE PROCESSED");
      setIsSimulating(false);
    }, 4000);
  }, []);

  const addLatency = useCallback(() => {
    setIsSimulating(true);
    setState((s) => ({ ...s, traffic: "burst" }));
    addEvent("LATENCY INJECTED: 2000ms");

    setTimeout(() => {
      setState((s) => ({ ...s, podB: "terminated" }));
      addEvent("POD B TERMINATED - TIMEOUT");
    }, 2500);

    setTimeout(() => {
      setState((s) => ({ ...s, podB: "recovering" }));
      addEvent("HEALTH CHECK FAILED - RESTARTING");
    }, 4000);

    setTimeout(() => {
      setState((s) => ({ ...s, podB: "running", traffic: "normal" }));
      addEvent("LATENCY REMOVED - SYSTEM STABLE");
      setIsSimulating(false);
    }, 5500);
  }, []);

  const burstTraffic = useCallback(() => {
    setIsSimulating(true);
    setState((s) => ({ ...s, traffic: "burst", kafka: "processing" }));
    addEvent("BURST: 1000 req/s");

    setTimeout(() => addEvent("CONSUMER LAG: 15,000 MESSAGES"), 1500);

    setTimeout(() => {
      setState((s) => ({ ...s, podC: "terminated" }));
      addEvent("POD C CRASHED - OOMKILLED");
    }, 3000);

    setTimeout(() => {
      setState((s) => ({ ...s, podC: "recovering" }));
      addEvent("HPA SCALING: 3→5 PODS");
    }, 4500);

    setTimeout(() => {
      setState((s) => ({
        ...s,
        podC: "running",
        kafka: "healthy",
        traffic: "normal",
        eventLog: [...s.eventLog.slice(-4), `[${new Date().toLocaleTimeString()}] SCALING COMPLETE - LAG CLEARED`],
      }));
      setIsSimulating(false);
    }, 6000);
  }, []);

  const breakDependency = useCallback(() => {
    setIsSimulating(true);
    setState((s) => ({ ...s, kafka: "degraded" }));
    addEvent("DEPENDENCY FAILURE: DATABASE UNREACHABLE");

    setTimeout(() => {
      setState((s) => ({ ...s, podA: "terminated", podB: "terminated" }));
      addEvent("CIRCUIT BREAKER OPEN");
    }, 2000);

    setTimeout(() => addEvent("FALLBACK: CACHED RESPONSES SERVED"), 3500);

    setTimeout(() => {
      setState((s) => ({ ...s, podA: "recovering", podB: "recovering" }));
      addEvent("DATABASE RECOVERING...");
    }, 5000);

    setTimeout(() => {
      setState((s) => ({
        ...s,
        podA: "running",
        podB: "running",
        kafka: "healthy",
        eventLog: [...s.eventLog.slice(-4), `[${new Date().toLocaleTimeString()}] CIRCUIT BREAKER CLOSED - SYSTEM RESTORED`],
      }));
      setIsSimulating(false);
    }, 7000);
  }, []);

  const getPodColor = (status: PodStatus) => {
    switch (status) {
      case "running": return "border-accent/30 bg-accent/5";
      case "terminated": return "border-danger/50 bg-danger/10";
      case "recovering": return "border-amber-400/50 bg-amber-400/10";
    }
  };

  const getPodDot = (status: PodStatus) => {
    switch (status) {
      case "running": return "bg-accent";
      case "terminated": return "bg-danger";
      case "recovering": return "bg-amber-400";
    }
  };

  return (
    <section ref={ref} id="break" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            // BREAK THE SYSTEM
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink mb-3">
            Because failure teaches.
          </h2>
          <p className="text-muted max-w-lg text-[15px]">
            Interactive simulation of a distributed system. Kill a pod, drop a message, add latency — and see what happens.
          </p>
        </motion.div>

        <div className="mb-6 p-3 border border-amber-400/20 bg-amber-400/5">
          <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400">
            ⚠ SIMULATED SYSTEM — NOT REAL PRODUCTION INFRASTRUCTURE
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
          {/* System visualization */}
          <div className="p-5 border border-line bg-surface/50">
            <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-5">
              SYSTEM STATE
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                {(["podA", "podB", "podC"] as const).map((pod) => (
                  <motion.div
                    key={pod}
                    animate={{
                      scale: state[pod] === "terminated" ? 0.95 : 1,
                      opacity: state[pod] === "terminated" ? 0.7 : 1,
                    }}
                    className={clsx(
                      "flex-1 p-3 border transition-colors duration-300",
                      getPodColor(state[pod])
                    )}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className={clsx("w-1.5 h-1.5 rounded-full", getPodDot(state[pod]))} />
                      <span className="font-mono text-[9px] text-ink">
                        {pod.replace("pod", "SERVICE-")}
                      </span>
                    </div>
                    <div className="font-mono text-[8px] uppercase tracking-wider text-faint">
                      {state[pod]}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="h-4 border-l border-dashed border-line" />
              </div>

              <motion.div
                animate={{
                  borderColor:
                    state.kafka === "healthy"
                      ? "rgba(150,180,160,0.18)"
                      : "rgba(245,166,35,0.4)",
                }}
                className="p-3 border border-line bg-surface/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={clsx(
                        "w-1.5 h-1.5 rounded-full",
                        state.kafka === "healthy" ? "bg-accent" : "bg-amber-400"
                      )}
                    />
                    <span className="font-mono text-[9px] text-ink">KAFKA</span>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-faint">
                    {state.kafka}
                  </span>
                </div>
              </motion.div>

              <div className="flex items-center justify-between p-2.5 border border-line bg-surface/30">
                <span className="font-mono text-[9px] text-faint">TRAFFIC</span>
                <span
                  className={clsx(
                    "font-mono text-[9px] uppercase tracking-wider",
                    state.traffic === "normal" ? "text-accent" : "text-amber-400"
                  )}
                >
                  {state.traffic}
                </span>
              </div>
            </div>

            {/* Event log */}
            <div className="mt-4 space-y-1">
              {state.eventLog.map((event, i) => (
                <div key={i} className="font-mono text-[9px] text-faint">
                  {event}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-2">
            <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-3">
              ACTIONS
            </div>

            {[
              { label: "KILL POD", color: "text-danger", action: killPod },
              { label: "DROP MESSAGE", color: "text-amber-400", action: dropMessage },
              { label: "ADD LATENCY", color: "text-amber-400", action: addLatency },
              { label: "BURST TRAFFIC", color: "text-amber-400", action: burstTraffic },
              { label: "BREAK DEPENDENCY", color: "text-danger", action: breakDependency },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={btn.action}
                disabled={isSimulating}
                className="w-full p-2.5 border border-line bg-surface hover:bg-surface/80 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-left"
              >
                <span className={clsx("font-mono text-[10px]", btn.color)}>
                  {btn.label}
                </span>
              </button>
            ))}

            <button
              onClick={resetSystem}
              className="w-full p-2.5 border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-colors text-left mt-2"
            >
              <span className="font-mono text-[10px] text-accent">RESET SYSTEM</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
