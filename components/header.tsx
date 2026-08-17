"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, navGroups } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import MorphingBrand from "./morphing-brand";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 56);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="liquid-glass fixed left-1/2 top-3 h-[3.6rem] w-[min(94vw,52rem)] -translate-x-1/2 rounded-full border border-line bg-surface/70 shadow-[0_18px_70px_-30px_rgba(0,0,0,0.55)] sm:top-5"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-3 flex h-[3.6rem] w-[min(94vw,52rem)] -translate-x-1/2 items-center justify-between gap-2 px-2.5 sm:top-5 sm:gap-3">
        <Link
          href="#home"
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
          className="flex shrink-0 items-center gap-2 rounded-full px-2.5 py-2 text-sm font-semibold tracking-tight text-ink sm:px-3"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-pulse-ring absolute inset-0 rounded-full text-accent" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>
          <MorphingBrand isCompact={isCompact} />
        </Link>

        <ul className="flex min-w-0 flex-1 items-center justify-start gap-0.5 overflow-x-auto rounded-full border border-line bg-surface-2/60 px-1 py-1.5 text-[0.8rem] font-medium text-muted [scrollbar-width:none] sm:flex-none sm:justify-center sm:px-1.5 sm:text-[0.88rem] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => {
            const isActive = navGroups[link.name]?.includes(activeSection);

            return (
              <li key={link.hash} className="relative shrink-0">
                <Link
                  className={clsx(
                    "relative flex items-center justify-center whitespace-nowrap rounded-full px-2.5 py-2 transition duration-200 hover:text-ink sm:px-4",
                    { "font-semibold text-ink": isActive },
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(
                      (navGroups[link.name]?.[0] ?? "Home") as typeof activeSection,
                    );
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {isActive && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full border border-line bg-surface"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 440, damping: 32 }}
                    ></motion.span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border border-line bg-surface-2/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-pulse-ring absolute inset-0 rounded-full text-accent" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available
          </span>
        </div>
      </nav>
    </header>
  );
}
