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
    return <span className="font-semibold text-ink">{children}</span>;
  }

  return (
    <span
      className="inline bg-gradient-to-r from-accent/60 via-accent/35 to-transparent bg-no-repeat font-semibold text-ink"
      style={{
        backgroundSize: "100% 0.42em",
        backgroundPosition: "0 82%",
      }}
    >
      {children}
    </span>
  );
}
