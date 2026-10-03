"use client";

import React, { useEffect, useRef, useState } from "react";

const INTRO_KEY = "vk-intro-seen";
const LOAD_DURATION = 2800;
const HOLD_DURATION = 450;
const EXIT_DURATION = 950;

type Phase = "run" | "hold" | "exit" | "done";

const IDENTITIES: { label: string; from: number; to: number }[] = [
  { label: "VISHAL KESARWANI", from: 0, to: 15 },
  { label: "TECH ENTHUSIAST ⚡", from: 15, to: 30 },
  { label: "MONEY & BUSINESS 💰", from: 30, to: 45 },
  { label: "RESEARCH ANALYST 🔬", from: 45, to: 60 },
  { label: "BUILDER 🚀", from: 60, to: 72 },
  { label: "CREATOR 🎥", from: 72, to: 84 },
  { label: "FITNESS ENTHUSIAST 🏋️", from: 84, to: 94 },
  { label: "CRICKET 🏏", from: 94, to: 100 },
];

const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

function identityIndexFor(progress: number, fallback: number) {
  if (progress >= 100) return IDENTITIES.length - 1;
  for (let i = 0; i < IDENTITIES.length; i += 1) {
    if (progress >= IDENTITIES[i].from && progress < IDENTITIES[i].to) {
      return i;
    }
  }
  return fallback;
}

export default function PortfolioLoader() {
  const [phase, setPhase] = useState<Phase>("run");
  const [activeIndex, setActiveIndex] = useState(-1);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(-1);

  useEffect(() => {
    let seen = false;
    let reduced = false;

    try {
      seen = sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {
      seen = false;
    }

    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      reduced = false;
    }

    if (seen || reduced) {
      document.documentElement.classList.remove("vk-intro");
      return;
    }

    document.documentElement.classList.add("vk-intro");

    let raf = 0;
    let holdTimer = 0;
    let doneTimer = 0;
    const start = performance.now();

    const finish = () => {
      setPhase("hold");
      holdTimer = window.setTimeout(() => {
        try {
          sessionStorage.setItem(INTRO_KEY, "1");
        } catch {
          /* storage unavailable */
        }
        document.documentElement.classList.remove("vk-intro");
        setPhase("exit");
        doneTimer = window.setTimeout(() => setPhase("done"), EXIT_DURATION);
      }, HOLD_DURATION);
    };

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / LOAD_DURATION);
      const progress = easeInOutSine(t) * 100;

      if (counterRef.current) {
        counterRef.current.textContent = String(Math.round(progress));
      }
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress / 100})`;
      }

      const nextIndex = identityIndexFor(progress, activeRef.current);
      if (nextIndex !== activeRef.current) {
        activeRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        if (counterRef.current) counterRef.current.textContent = "100";
        if (barRef.current) barRef.current.style.transform = "scaleX(1)";
        finish();
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(holdTimer);
      window.clearTimeout(doneTimer);
      document.documentElement.classList.remove("vk-intro");
    };
  }, []);

  if (phase === "done") return null;

  const exiting = phase === "exit";
  const shownIndex = activeIndex < 0 ? 1 : activeIndex + 1;

  return (
    <div
      id="vk-loader"
      aria-hidden="true"
      className={`fixed inset-0 z-[2000] overflow-hidden bg-canvas ${
        exiting ? "vk-loader-exit" : ""
      }`}
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 vk-noise" />

      <div
        className={`relative z-10 flex h-full flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10 ${
          exiting ? "vk-loader-content-exit" : ""
        }`}
      >
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] sm:text-[10px]">
          <span className="inline-flex items-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Vishal Kesharwani
          </span>
          <span className="tabular-nums text-faint">
            <span className="text-accent">
              {String(shownIndex).padStart(2, "0")}
            </span>{" "}
            / 08
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 sm:gap-5">
          <div className="flex items-baseline justify-center font-display font-bold leading-[0.85] tracking-[-0.04em]">
            <span
              ref={counterRef}
              className="tabular-nums text-ink text-[clamp(4.5rem,18vw,12rem)]"
            >
              0
            </span>
            <span className="ml-1 text-accent text-[clamp(1.5rem,4.5vw,3.5rem)] sm:ml-2">
              %
            </span>
          </div>
          <div className="font-mono text-[9px] uppercase tracking-[0.35em] text-faint sm:text-[10px]">
            Loading Experience
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pb-5 sm:gap-4">
          <div className="h-px w-10 bg-accent" />
          <div className="relative h-[clamp(2.75rem,9vw,4.5rem)] w-full overflow-hidden">
            {IDENTITIES.map((item, i) => (
              <div
                key={item.label}
                data-state={
                  i < activeIndex
                    ? "exited"
                    : i === activeIndex
                    ? "active"
                    : "waiting"
                }
                className="vk-identity"
              >
                <span className="whitespace-nowrap font-display font-bold uppercase text-display-md text-ink sm:text-display-lg">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-line">
        <div ref={barRef} className="vk-progress-fill h-full w-full" />
      </div>
    </div>
  );
}
