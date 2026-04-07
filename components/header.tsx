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
        className="fixed top-0 left-1/2 h-[4.75rem] w-full rounded-none border border-white/60 bg-white/75 shadow-lg shadow-black/[0.06] backdrop-blur-xl sm:top-5 sm:h-[4rem] sm:w-[48rem] sm:rounded-full dark:border-white/10 dark:bg-gray-950/70"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-[0.15rem] left-1/2 flex h-12 -translate-x-1/2 items-center py-2 sm:top-[1.25rem] sm:h-[initial] sm:py-0">
        <div className="mr-3 hidden items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur sm:flex dark:border-white/10 dark:bg-white/5 dark:text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
          Vishal Kesharwani
        </div>

        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center rounded-full px-3 py-2.5 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white",
                  {
                    "text-gray-950 dark:text-white":
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
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100 shadow-sm dark:bg-white/10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
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
