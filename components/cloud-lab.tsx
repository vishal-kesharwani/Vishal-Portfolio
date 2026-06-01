"use client";

import React, { useMemo, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FiArrowRight, FiTerminal, FiServer, FiPlay } from "react-icons/fi";
import { SiAmazonaws, SiDocker, SiGithubactions } from "react-icons/si";

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
  "docker run app",
  "deploy",
  "aws s3 ls",
] as const;

const commandMap: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  ls            - show files in the sandbox",
    "  pwd           - show current directory",
    "  whoami        - show user",
    "  docker build .- build the container image",
    "  docker run app- run the local container",
    "  deploy        - simulate CI/CD deployment",
    "  aws s3 ls     - check cloud storage",
    "  kubectl get pods - inspect runtime",
    "  clear         - clear the terminal",
  ],
  ls: ["app.jar  Dockerfile  package.json  src/  deploy.sh"],
  pwd: ["/home/ubuntu/cloud-sandbox"],
  whoami: ["ubuntu"],
  "docker build .": [
    "[1/2] loading build context ... done",
    "[2/2] building app image ... done",
    "Image tag: vishal/app:latest",
  ],
  "docker run app": [
    "Starting container...",
    "App available at http://localhost:3000",
    "Logs: service healthy and listening on port 3000",
  ],
  deploy: [
    "GitHub Actions: build passed",
    "EC2: instance ready",
    "Docker: container started",
    "Deployment status: success",
  ],
  "aws s3 ls": [
    "2026-06-01 12:00:00 portfolio-assets/",
    "2026-06-01 12:00:01 report-images/",
  ],
  "kubectl get pods": ["portfolio-api-7d8c9f6d8f-r5m2k   Running"],
  "git status": ["On branch main", "working tree clean"],
  "sudo systemctl status app": [
    "app.service - Portfolio backend",
    "Loaded: loaded",
    "Active: active (running)",
  ],
};

const labPhases = [
  {
    title: "Provision",
    summary: "Start with a clean EC2-style environment.",
    icon: SiAmazonaws,
  },
  {
    title: "Package",
    summary: "Use Docker to make the app repeatable.",
    icon: SiDocker,
  },
  {
    title: "Ship",
    summary: "Push through CI/CD and go live.",
    icon: SiGithubactions,
  },
] as const;

const questSteps = [
  {
    id: "inspect",
    label: "Inspect the environment",
    hint: "Run ls or pwd to understand the sandbox.",
    matchers: ["ls", "pwd", "whoami"],
  },
  {
    id: "build",
    label: "Build the container",
    hint: "Use docker build . to package the app.",
    matchers: ["docker build ."],
  },
  {
    id: "deploy",
    label: "Deploy the service",
    hint: "Run deploy, aws s3 ls, or kubectl get pods.",
    matchers: ["deploy", "aws s3 ls", "kubectl get pods", "sudo systemctl status app"],
  },
] as const satisfies readonly QuestStep[];

export default function CloudLab() {
  const { ref } = useSectionInView("Cloud Lab", 0.35);
  const [input, setInput] = useState("help");
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "system", value: "Cloud sandbox ready. Type help to see commands." },
  ]);
  const [activePhase, setActivePhase] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const prompt = useMemo(() => "vishal@cloud-sandbox:~$", []);

  const appendLine = (type: TerminalLine["type"], value: string) => {
    setLines((current) => [...current, { type, value }]);
  };

  const syncPhase = (cmd: string) => {
    if (cmd.includes("docker run") || cmd.includes("build")) {
      setActivePhase(1);
    }
    if (cmd.includes("deploy") || cmd.includes("aws") || cmd.includes("kubectl")) {
      setActivePhase(2);
    }
    if (cmd === "ls" || cmd === "pwd" || cmd === "whoami") {
      setActivePhase(0);
    }

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
      appendLine("output", "Tip: try help, ls, docker build ., deploy");
    }

    setInput("");
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

      <div className="rounded-[2.25rem] border border-white/10 bg-slate-950 p-6 text-white shadow-[0_24px_90px_-45px_rgba(2,6,23,0.9)] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
              <FiServer className="text-sm" />
              Playable sandbox
            </div>

            <h3 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              I like cloud work to feel like a small terminal game.
            </h3>

            <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              You can type commands, watch the output, and mentally walk through
              the path from local code to EC2, Docker, and deployment.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  How to use
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  Type a command in the terminal and see what happens next.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Goal
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  Make deployment feel logical, hands-on, and easy to follow.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Try these commands
              </p>
              <div className="flex flex-wrap gap-2">
                {quickCommands.map((command) => (
                  <button
                    key={command}
                    type="button"
                    onClick={() => runCommand(command)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-teal-300/30 hover:bg-teal-300/10 hover:text-white"
                  >
                    {command}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Mini quest
                </p>
                <span className="text-xs text-slate-400">
                  {completedSteps.length}/{questSteps.length} complete
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 transition-all duration-300"
                  style={{
                    width: `${(completedSteps.length / questSteps.length) * 100}%`,
                  }}
                />
              </div>
              <div className="mt-4 space-y-3">
                {questSteps.map((step) => {
                  const isDone = completedSteps.includes(step.id);
                  return (
                    <div
                      key={step.id}
                      className={`rounded-2xl border p-3 ${
                        isDone
                          ? "border-teal-300/30 bg-teal-300/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                            isDone ? "bg-teal-300" : "bg-white/30"
                          }`}
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {step.label}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-slate-300">
                            {step.hint}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {labPhases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = index === activePhase;

                return (
                  <motion.div
                    key={phase.title}
                    className={`rounded-[1.5rem] border p-4 transition ${
                      isActive
                        ? "border-teal-300/30 bg-teal-300/10"
                        : "border-white/10 bg-white/5"
                    }`}
                    animate={{ y: isActive ? -2 : 0 }}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${
                          isActive ? "bg-teal-400/20" : "bg-white/10"
                        }`}
                      >
                        <Icon className="text-xl" />
                      </div>
                      <span
                        className={`text-[11px] uppercase tracking-[0.22em] ${
                          isActive ? "text-teal-200" : "text-slate-400"
                        }`}
                      >
                        {isActive ? "active" : "step"}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      {phase.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {phase.summary}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="rounded-[1.9rem] border border-white/10 bg-slate-900/80 shadow-[0_24px_90px_-45px_rgba(0,0,0,0.65)]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <FiTerminal className="text-teal-300" />
                  <span className="text-sm font-semibold text-white">
                    Interactive terminal
                  </span>
                </div>
                <span className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-teal-200">
                  sandbox ready
                </span>
              </div>

              <div className="max-h-[22rem] overflow-y-auto px-4 py-4 font-mono text-sm leading-6">
                {lines.map((line, index) => (
                  <div
                    key={`${line.type}-${index}`}
                    className={`whitespace-pre-wrap ${
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
                <form
                  className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-3 py-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    runCommand(input);
                  }}
                >
                  <span className="text-teal-300">{prompt}</span>
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="type help, docker build ., deploy..."
                    className="flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1 rounded-full bg-teal-400 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-teal-300"
                  >
                    Run <FiPlay />
                  </button>
                </form>
              </div>

              <div className="border-t border-white/10 px-4 py-3 text-xs text-slate-400">
                Tip: try <span className="text-teal-200">help</span> first,
                then <span className="text-teal-200">docker build .</span> and
                <span className="text-teal-200"> deploy</span>.
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
