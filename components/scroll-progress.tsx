"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });
  // A fast jump (an anchor-link scroll) can make the spring overshoot past 1
  // or below 0, which would flip or stretch the bar. Clamp it.
  const scaleX = useTransform(smooth, (value) =>
    Math.min(Math.max(value, 0), 1),
  );

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[999] h-[3px] origin-left bg-gradient-to-r from-amber-400 via-teal-400 to-cyan-400"
    />
  );
}
