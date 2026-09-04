"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center dark"
          style={{ backgroundColor: "#08090b" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.div
                className="h-16 w-16 rounded-full border-2 border-[#7cffb2]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="h-3 w-3 rounded-full bg-[#7cffb2]" />
              </motion.div>
            </motion.div>

            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#7cffb2] to-transparent" />
            </motion.div>

            <motion.p
              className="font-mono text-xs uppercase tracking-[0.3em] text-[#8b949e]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Loading systems
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
