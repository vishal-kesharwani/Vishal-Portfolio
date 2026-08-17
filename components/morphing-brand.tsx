"use client";

import React from "react";
import { motion } from "framer-motion";

const firstName = "Vishal";
const lastName = "Kesharwani";

/**
 * Renders "Vishal Kesharwani" letter by letter. On scroll, every letter
 * except the two initials collapses away (width + opacity to 0, staggered
 * from the tail of each word inward), so the full name visually shrinks
 * down into "VK" rather than one text block swapping for another.
 */
function CollapsingWord({
  word,
  isCompact,
}: {
  word: string;
  isCompact: boolean;
}) {
  const letters = word.split("");

  return (
    <span className="inline-flex">
      {letters.map((char, index) => {
        if (index === 0) {
          return (
            <span key={index} className="inline-block">
              {char}
            </span>
          );
        }

        // Letters nearer the end of the word collapse first, so the word
        // reads as shrinking backward into its initial.
        const delay = ((letters.length - index) / letters.length) * 0.18;

        return (
          <motion.span
            key={index}
            className="inline-block overflow-hidden"
            animate={{
              maxWidth: isCompact ? 0 : "1.4em",
              opacity: isCompact ? 0 : 1,
            }}
            transition={{ duration: 0.32, ease: "easeInOut", delay }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}

export default function MorphingBrand({ isCompact }: { isCompact: boolean }) {
  return (
    <span className="inline-flex whitespace-nowrap" aria-label="Vishal Kesharwani">
      <CollapsingWord word={firstName} isCompact={isCompact} />
      <motion.span
        className="inline-block overflow-hidden"
        animate={{ maxWidth: isCompact ? 0 : "0.5em", opacity: isCompact ? 0 : 1 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
      >
        {" "}
      </motion.span>
      <CollapsingWord word={lastName} isCompact={isCompact} />
    </span>
  );
}
