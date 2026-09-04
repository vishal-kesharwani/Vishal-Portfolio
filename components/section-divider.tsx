"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="my-24 hidden flex-col items-center sm:flex">
      <motion.div
        className="h-16 w-px bg-gradient-to-b from-transparent via-line to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      />
      <motion.div
        className="my-2 h-1.5 w-1.5 rounded-full bg-accent"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8, type: "spring", stiffness: 300 }}
      />
      <motion.div
        className="h-16 w-px bg-gradient-to-b from-transparent via-line to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}
