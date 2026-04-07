"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 top-3 h-[4.9rem] w-[min(94vw,72rem)] -translate-x-1/2 rounded-[1.6rem] border border-white/60 bg-white/75 shadow-[0_18px_70px_-30px_rgba(15,23,42,0.3)] backdrop-blur-2xl sm:top-5 sm:h-[4.7rem] dark:border-white/10 dark:bg-gray-950/70"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.55rem] flex w-[min(92vw,71rem)] -translate-x-1/2 items-center justify-between gap-3 px-3 sm:top-[1.05rem] sm:px-4">
        <div className="hidden items-center gap-2 rounded-full border border-black/5 bg-white/85 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur sm:flex dark:border-white/10 dark:bg-white/5 dark:text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
          Vishal Kesharwani
        </div>

        <ul className="flex w-full items-center justify-start gap-1 overflow-x-auto rounded-full border border-black/5 bg-white/65 px-2 py-2 text-[0.92rem] font-medium text-gray-500 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300 sm:w-auto sm:flex-nowrap sm:gap-1.5">
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
                    className="absolute inset-0 -z-10 rounded-full border border-black/5 bg-gradient-to-b from-white to-gray-100 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.35)] dark:border-white/10 dark:from-white/10 dark:to-white/5"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
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
