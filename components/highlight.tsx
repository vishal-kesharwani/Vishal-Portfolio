"use client";

import React from "react";

type HighlightProps = {
  children: React.ReactNode;
  /** "mark" paints a highlighter sweep under the words, "text" tints them only. */
  variant?: "mark" | "text";
};

/**
 * Emphasises the words that should land first when someone skims a paragraph.
 *
 * The sweep is drawn as the element's own background rather than a stacked
 * layer, so it can never be hidden behind a card background.
 */
export default function Highlight({
  children,
  variant = "mark",
}: HighlightProps) {
  if (variant === "text") {
    return (
      <span className="font-semibold text-slate-950 dark:text-white">
        {children}
      </span>
    );
  }

  return (
    <span
      className="inline bg-gradient-to-r from-amber-300/70 via-amber-200/60 to-teal-200/50 bg-no-repeat font-semibold text-slate-950 dark:from-amber-400/40 dark:via-amber-300/30 dark:to-teal-300/30 dark:text-white"
      style={{
        backgroundSize: "100% 0.42em",
        backgroundPosition: "0 82%",
      }}
    >
      {children}
    </span>
  );
}
