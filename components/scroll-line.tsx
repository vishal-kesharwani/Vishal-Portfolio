"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

const chapters = [
  { id: "home", label: "ARRIVAL", num: "01" },
  { id: "work", label: "WORK", num: "02" },
  { id: "systems", label: "SYSTEMS", num: "03" },
  { id: "failure", label: "FAILURE", num: "04" },
  { id: "experience", label: "LEARN", num: "05" },
  { id: "education", label: "EDUCATION", num: "06" },
  { id: "lab", label: "EXPLORE", num: "07" },
  { id: "buildlog", label: "JOURNAL", num: "08" },
  { id: "signal", label: "PROOF", num: "09" },
  { id: "about", label: "ABOUT", num: "10" },
  { id: "contact", label: "NEXT", num: "11" },
];

export default function ScrollLine() {
  const { scrollYProgress } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.02 && !visible) setVisible(true);
      if (latest < 0.01 && visible) setVisible(false);

      const index = chapters.findIndex(
        (_ch, i) =>
          latest >= (i === 0 ? -0.01 : 0) &&
          (i === chapters.length - 1 || latest < (i + 1) / chapters.length)
      );
      if (index !== -1) setActiveIndex(index);
    });
  }, [scrollYProgress, visible]);

  const current = chapters[activeIndex];
  const next = chapters[Math.min(activeIndex + 1, chapters.length - 1)];
  const isLast = activeIndex === chapters.length - 1;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 right-6 lg:right-10 z-50 hidden md:flex flex-col items-end gap-1"
        >
          <div className="flex items-baseline gap-2">
            <motion.span
              key={current.num}
              initial={{ opacity: 0, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-[10px] text-accent"
            >
              {current.num}
            </motion.span>
            <motion.span
              key={current.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-[10px] uppercase tracking-wider text-ink"
            >
              {current.label}
            </motion.span>
          </div>

          {!isLast && (
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[10px] text-line">
                {next.num}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                {next.label}
              </span>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
