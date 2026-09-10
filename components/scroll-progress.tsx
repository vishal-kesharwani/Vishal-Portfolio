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
  const scaleX = useTransform(smooth, (value) =>
    Math.min(Math.max(value, 0), 1)
  );

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[999] h-[2px] origin-left bg-accent"
    />
  );
}
