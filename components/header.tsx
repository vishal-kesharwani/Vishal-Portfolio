"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 top-3 h-[4.65rem] w-[min(94vw,72rem)] -translate-x-1/2 rounded-[1.6rem] border border-white/60 bg-white/78 shadow-[0_18px_70px_-30px_rgba(15,23,42,0.3)] backdrop-blur-2xl sm:top-5 sm:h-[4.45rem] dark:border-white/10 dark:bg-gray-950/70"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.58rem] flex w-[min(92vw,71rem)] -translate-x-1/2 items-center gap-3 px-3 sm:top-[1.05rem] sm:px-4">
        <motion.div
          layout
          animate={{
            width: isCompact ? 84 : 212,
            paddingLeft: isCompact ? 12 : 16,
            paddingRight: isCompact ? 12 : 16,
          }}
          transition={{ type: "spring", stiffness: 360, damping: 34 }}
          className="hidden shrink-0 items-center gap-2 overflow-hidden rounded-full border border-black/5 bg-white/85 py-2 text-sm font-semibold text-gray-900 shadow-[0_10px_24px_-16px_rgba(15,23,42,0.35)] backdrop-blur sm:flex dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {isCompact ? (
                <motion.div
                  key="brand-compact"
                  className="absolute inset-0 flex items-center"
                  initial={{ opacity: 0, x: -10, scaleX: 0.55 }}
                  animate={{ opacity: 1, x: 0, scaleX: 1 }}
                  exit={{ opacity: 0, x: 8, scaleX: 1.05 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  style={{ transformOrigin: "left center" }}
                >
                  <span className="whitespace-nowrap text-[0.95rem] font-bold tracking-[0.28em] text-gray-950 dark:text-white">
                    VK
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="brand-full"
                  className="absolute inset-0 flex items-center"
                  initial={{ opacity: 0, x: -10, scaleX: 0.92 }}
                  animate={{ opacity: 1, x: 0, scaleX: 1 }}
                  exit={{ opacity: 0, x: 10, scaleX: 0.85 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  style={{ transformOrigin: "left center" }}
                >
                  <span className="whitespace-nowrap text-[0.95rem] font-semibold tracking-tight text-gray-950 dark:text-white">
                    Vishal Kesharwani
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <ul className="flex w-full items-center justify-start gap-1 overflow-x-auto rounded-full border border-black/5 bg-white/70 px-2 py-2 text-[0.92rem] font-medium text-gray-500 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300 sm:w-auto sm:flex-nowrap sm:gap-1.5">
          {links.map((link) => (
            <motion.li
              className="relative flex shrink-0 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "relative flex min-w-fit items-center justify-center rounded-full px-4 py-2.5 transition duration-200 hover:-translate-y-0.5 hover:text-gray-950 dark:hover:text-white",
                  {
                    "font-semibold text-gray-950 dark:text-white":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full border border-black/5 bg-gradient-to-b from-white to-gray-100 shadow-[0_10px_26px_-18px_rgba(15,23,42,0.35)] dark:border-white/10 dark:from-white/10 dark:to-white/5"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 440,
                      damping: 32,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
