"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiPrinter, FiX, FiCheck } from "react-icons/fi";

const RESUME_HREF = "/Vishal_Kesharwani_Resume.pdf";
const RESUME_FILENAME = "Vishal_Kesharwani_Resume.pdf";
const PRINT_DURATION_MS = 1900;

const printLines = [58, 82, 40, 68, 30] as const;

function triggerDownload() {
  const anchor = document.createElement("a");
  anchor.href = RESUME_HREF;
  anchor.download = RESUME_FILENAME;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

type ResumePrintProps = {
  className?: string;
  label?: string;
  /** Single small trigger, no separate "Save PDF" link — for tight spaces like the header. */
  compact?: boolean;
};

export default function ResumePrint({
  className,
  label = "Print Resume",
  compact = false,
}: ResumePrintProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<"printing" | "done">("printing");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const openAndPrint = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      triggerDownload();
      return;
    }

    setStage("printing");
    setIsOpen(true);

    timeoutRef.current = setTimeout(() => {
      triggerDownload();
      setStage("done");
    }, PRINT_DURATION_MS);
  };

  const close = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      {compact ? (
        <button
          type="button"
          onClick={openAndPrint}
          className={
            className ??
            "shrink-0 rounded-full bg-ink px-3.5 py-2 text-[0.85rem] font-semibold text-canvas transition hover:-translate-y-0.5 sm:px-4 sm:text-sm"
          }
        >
          {label}
        </button>
      ) : (
        <div className={`flex flex-wrap items-center gap-2 ${className ?? ""}`}>
          <button
            type="button"
            onClick={openAndPrint}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition hover:-translate-y-0.5"
          >
            {label} <FiPrinter />
          </button>
          <a
            href={RESUME_HREF}
            download={RESUME_FILENAME}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Save PDF <FiDownload />
          </a>
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-line bg-surface p-5 shadow-2xl"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 340, damping: 30 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 text-faint transition hover:text-ink"
              >
                <FiX />
              </button>

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {stage === "printing" ? "printer.spool" : "printer.done"}
              </p>
              <h4 className="mt-1.5 text-base font-semibold text-ink">
                {stage === "printing"
                  ? "Printing Vishal_Kesharwani_Resume.pdf…"
                  : "Saved to downloads"}
              </h4>

              {/* printer body */}
              <div className="relative mt-5 h-4 rounded-t-md bg-surface-2">
                <div className="absolute inset-x-4 top-1.5 h-1 rounded-full bg-canvas" />
              </div>

              {/* paper tray */}
              <div className="relative h-40 overflow-hidden rounded-b-md border border-t-0 border-line bg-canvas/60">
                <motion.div
                  className="absolute inset-x-3 top-2 rounded-sm bg-surface p-3 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.5)]"
                  initial={{ y: "-100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: PRINT_DURATION_MS / 1000,
                    ease: "easeOut",
                  }}
                >
                  <div className="space-y-2">
                    {printLines.map((width, index) => (
                      <motion.div
                        key={index}
                        className="h-1.5 rounded-full bg-line"
                        style={{ width: `${width}%` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay:
                            (PRINT_DURATION_MS / 1000) *
                            ((index + 1) / (printLines.length + 1)),
                          duration: 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {stage === "printing" && (
                  <motion.div
                    className="absolute inset-x-0 h-6 bg-gradient-to-b from-accent/25 to-transparent"
                    initial={{ top: "-10%" }}
                    animate={{ top: "100%" }}
                    transition={{
                      duration: PRINT_DURATION_MS / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
                  {stage === "printing" ? (
                    <>
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-pulse-ring absolute inset-0 rounded-full text-accent" />
                        <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                      spooling…
                    </>
                  ) : (
                    <>
                      <FiCheck className="text-accent" /> done
                    </>
                  )}
                </span>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold text-ink transition hover:bg-surface-2"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
