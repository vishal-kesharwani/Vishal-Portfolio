"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FiTerminal, FiServer, FiCornerDownLeft, FiZap } from "react-icons/fi";
import { SiAmazonaws, SiDocker, SiKubernetes } from "react-icons/si";

type TerminalLine = {
  type: "command" | "output" | "system";
  value: string;
};

type QuestStep = {
  id: string;
  label: string;
  hint: string;
  matchers: readonly string[];
};

const quickCommands = [
  "help",
  "ls",
  "docker build .",
  "kafka topics",
  "kubectl get pods",
  "argocd sync",
] as const;

const commandMap: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  ls                 - show files in the sandbox",
    "  pwd                - show current directory",
    "  whoami             - show user",
    "  docker build .     - build the container image",
    "  docker run app     - run the local container",
    "  kafka topics       - list event topics",
    "  kubectl get pods   - inspect the cluster",
    "  argocd sync        - reconcile Git to cluster",
    "  deploy             - simulate the CI/CD pipeline",
    "  aws s3 ls          - check cloud storage",
    "  clear              - clear the terminal",
  ],
  ls: ["application-service/  notification-service/  analytics-service/", "k8s/  terraform/  docker-compose.yml  Makefile"],
  pwd: ["/home/ubuntu/cloud-sandbox/jobtracker"],
  whoami: ["ubuntu"],
  "docker build .": [
    "[1/3] loading build context ................ done",
    "[2/3] ./gradlew bootJar ................... done",
    "[3/3] exporting layers .................... done",
    "Image tag: vishal/application-service:latest",
  ],
  "docker run app": [
    "Starting container...",
    "Spring Boot 3.x  |  profile: local",
    "Service healthy and listening on port 8080",
  ],
  "kafka topics": [
    "application.events      partitions: 3   replicas: 1",
    "notification.events     partitions: 3   replicas: 1",
    "analytics.events        partitions: 3   replicas: 1",
    "Note: services talk only through these topics.",
  ],
  "kubectl get pods": [
    "NAME                            READY   STATUS    RESTARTS",
    "application-service-7d8c9f6d8f   1/1     Running   0",
    "notification-service-5f9b7c4d2   1/1     Running   0",
    "analytics-service-6a4d8e1b9c     1/1     Running   0",
    "kafka-0                          1/1     Running   0",
    "postgres-0                       1/1     Running   0",
  ],
  "argocd sync": [
    "Comparing desired state (main) to live cluster...",
    "application: jobtracker",
    "Sync status: Synced   Health: Healthy",
    "Auto-sync is enabled: Git is the source of truth.",
  ],
  deploy: [
    "GitHub Actions: build + test passed",
    "Image pushed to registry",
    "ArgoCD: detected new revision, reconciling",
    "Kubernetes: rolling update complete",
    "Deployment status: success",
  ],
  "aws s3 ls": [
    "2026-06-01 12:00:00 portfolio-assets/",
    "2026-06-01 12:00:01 jobtracker-artifacts/",
  ],
  "git status": ["On branch main", "working tree clean"],
};

const labPhases = [
  {
    title: "Provision",
    summary: "Start from a clean AWS-style environment.",
    icon: SiAmazonaws,
  },
  {
    title: "Package",
    summary: "Docker makes the service repeatable.",
    icon: SiDocker,
  },
  {
    title: "Ship",
    summary: "Kubernetes and GitOps take it live.",
    icon: SiKubernetes,
  },
] as const;

const questSteps = [
  {
    id: "inspect",
    label: "Inspect the environment",
    hint: "Run ls or pwd to see the three services.",
    matchers: ["ls", "pwd", "whoami"],
  },
  {
    id: "build",
    label: "Build the container",
    hint: "Use docker build . to package a service.",
    matchers: ["docker build .", "docker run app"],
  },
  {
    id: "deploy",
    label: "Ship it to the cluster",
    hint: "Try kubectl get pods, argocd sync, or deploy.",
    matchers: ["deploy", "aws s3 ls", "kubectl get pods", "argocd sync", "kafka topics"],
  },
] as const satisfies readonly QuestStep[];

export default function CloudLab() {
  const { ref } = useSectionInView("Cloud Lab", 0.35);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "system", value: "Cloud sandbox ready. Type help to see commands." },
  ]);
  const [activePhase, setActivePhase] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const prompt = useMemo(() => "vishal@cloud-sandbox:~$", []);
  const progress = (completedSteps.length / questSteps.length) * 100;

  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [lines]);

  const appendLine = (type: TerminalLine["type"], value: string) => {
    setLines((current) => [...current, { type, value }]);
  };

  const syncPhase = (cmd: string) => {
    if (cmd.includes("docker")) setActivePhase(1);
    if (
      cmd.includes("deploy") ||
      cmd.includes("aws") ||
      cmd.includes("kubectl") ||
      cmd.includes("argocd") ||
      cmd.includes("kafka")
    ) {
      setActivePhase(2);
    }
    if (cmd === "ls" || cmd === "pwd" || cmd === "whoami") setActivePhase(0);

    setCompletedSteps((current) => {
      const next = new Set(current);
      questSteps.forEach((step) => {
        if (step.matchers.some((matcher) => cmd === matcher || cmd.includes(matcher))) {
          next.add(step.id);
        }
      });
      return Array.from(next);
    });
  };

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setHistory((current) => [...current, cmd]);
    setHistoryIndex(-1);

    if (cmd === "clear") {
      setLines([
        { type: "system", value: "Terminal cleared. Ready for the next step." },
      ]);
      setInput("");
      setActivePhase(0);
      setCompletedSteps([]);
      return;
    }

    appendLine("command", `${prompt} ${cmd}`);
    const output = commandMap[cmd];

    if (output) {
      output.forEach((line) => appendLine("output", line));
      syncPhase(cmd);
    } else {
      appendLine("output", `Command not found: ${cmd}`);
      appendLine("output", "Tip: try help, ls, docker build ., kubectl get pods");
    }

    setInput("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const match = Object.keys(commandMap).find((key) =>
        key.startsWith(input.trim().toLowerCase()),
      );
      if (match && input.trim()) setInput(match);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) return;
      const nextIndex =
        historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  };

  return (
    <motion.section
      id="cloud-lab"
      ref={ref}
      className="mb-28 w-full max-w-[58rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Cloud Lab</SectionHeading>

      <div className="relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-white/88 p-4 shadow-[0_24px_90px_-40px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-slate-900/72 dark:shadow-[0_24px_90px_-40px_rgba(0,0,0,0.7)] sm:rounded-[2rem] sm:p-6 lg:p-8">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent dark:via-teal-300/60" />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="min-w-0 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-700 dark:border-teal-300/20 dark:bg-teal-300/10 dark:text-teal-200 sm:text-[11px]">
              <span className="relative flex h-2 w-2 text-amber-500 dark:text-teal-300">
                <span className="animate-pulse-ring absolute inset-0 rounded-full" />
                <span className="relative h-2 w-2 rounded-full bg-current" />
              </span>
              Playable sandbox
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl lg:text-4xl">
              I like cloud work to feel like a small terminal game.
            </h3>

            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
              Type a command, watch the output, and walk the path from local
              code to Docker, Kubernetes, and a GitOps deployment.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  label: "How to use",
                  value: "Type a command and see what happens next.",
                },
                {
                  label: "Goal",
                  value: "Make deployment feel logical and hands-on.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/5 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 sm:text-[11px]">
                Try these commands
              </p>
              <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
                {quickCommands.map((command) => (
                  <button
                    key={command}
                    type="button"
                    onClick={() => runCommand(command)}
                    className="shrink-0 rounded-full border border-black/5 bg-white px-3 py-1.5 font-mono text-[11px] font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-amber-500/30 hover:bg-amber-500/10 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-teal-300/30 dark:hover:bg-teal-300/10 dark:hover:text-white sm:text-xs"
                  >
                    {command}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-black/5 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 sm:text-[11px]">
                  Mini quest
                </p>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {completedSteps.length}/{questSteps.length}
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 via-teal-400 to-cyan-500"
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 160, damping: 24 }}
                />
              </div>

              <div className="mt-4 space-y-2.5">
                {questSteps.map((step) => {
                  const isDone = completedSteps.includes(step.id);

                  return (
                    <motion.div
                      key={step.id}
                      animate={{ scale: isDone ? 1 : 0.995 }}
                      className={`rounded-2xl border p-3 transition ${
                        isDone
                          ? "border-teal-500/30 bg-teal-500/10"
                          : "border-black/5 bg-white/70 dark:border-white/10 dark:bg-white/5"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                            isDone
                              ? "bg-teal-500 dark:bg-teal-300"
                              : "bg-slate-300 dark:bg-white/30"
                          }`}
                        />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">
                            {step.label}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                            {step.hint}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="min-w-0 space-y-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {labPhases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = index === activePhase;

                return (
                  <motion.div
                    key={phase.title}
                    className={`rounded-2xl border p-3 transition sm:rounded-[1.25rem] sm:p-4 ${
                      isActive
                        ? "border-teal-500/30 bg-teal-500/10"
                        : "border-black/5 bg-white/80 dark:border-white/10 dark:bg-white/5"
                    }`}
                    animate={{ y: isActive ? -3 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <div
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-xl sm:h-10 sm:w-10 sm:rounded-2xl ${
                        isActive
                          ? "bg-teal-500/20 text-teal-700 dark:text-teal-200"
                          : "bg-black/5 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                      }`}
                    >
                      <Icon className="text-base sm:text-xl" />
                    </div>
                    <h4 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white sm:mt-3 sm:text-base">
                      {phase.title}
                    </h4>
                    <p className="mt-1 hidden text-sm leading-6 text-slate-600 dark:text-slate-300 sm:block">
                      {phase.summary}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div
              className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 shadow-[0_24px_90px_-45px_rgba(0,0,0,0.8)] sm:rounded-[1.75rem]"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="hidden items-center gap-1.5 sm:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </span>
                  <FiTerminal className="shrink-0 text-teal-300 sm:hidden" />
                  <span className="truncate font-mono text-xs text-white/80 sm:ml-2 sm:text-sm">
                    cloud-sandbox
                  </span>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-teal-300/20 bg-teal-300/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-teal-200 sm:text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" /> ready
                </span>
              </div>

              <div
                ref={scrollRef}
                className="h-[15rem] overflow-y-auto overflow-x-auto px-3 py-3 font-mono text-[11px] leading-5 sm:h-[19rem] sm:px-4 sm:py-4 sm:text-sm sm:leading-6"
              >
                {lines.map((line, index) => (
                  <div
                    key={`${line.type}-${index}`}
                    className={`whitespace-pre-wrap break-words ${
                      line.type === "command"
                        ? "text-teal-200"
                        : line.type === "output"
                          ? "text-slate-200"
                          : "text-slate-400"
                    }`}
                  >
                    {line.value}
                  </div>
                ))}
              </div>

              <form
                className="flex items-center gap-2 border-t border-white/10 bg-black/40 px-3 py-2.5 sm:px-4 sm:py-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  runCommand(input);
                }}
              >
                <span className="hidden shrink-0 font-mono text-sm text-teal-300 lg:inline">
                  {prompt}
                </span>
                <span className="shrink-0 font-mono text-sm text-teal-300 lg:hidden">
                  $
                </span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="help, docker build ., kubectl get pods"
                  aria-label="Sandbox command input"
                  className="min-w-0 flex-1 bg-transparent font-mono text-[13px] text-slate-100 outline-none placeholder:text-slate-500 sm:text-sm"
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                />
                <button
                  type="submit"
                  aria-label="Run command"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-teal-400 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-teal-300"
                >
                  Run <FiCornerDownLeft />
                </button>
              </form>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/10 px-3 py-2.5 text-[10px] text-slate-400 sm:px-4 sm:text-xs">
                <span className="inline-flex items-center gap-1">
                  <FiZap className="text-teal-300" /> Tab completes
                </span>
                <span className="inline-flex items-center gap-1">
                  <FiServer className="text-teal-300" /> Arrow keys recall history
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
