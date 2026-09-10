"use client";

import React, { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import ResumePrint from "./resume-print";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-canvas/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[52px] max-w-content items-center justify-between px-6 lg:px-10">
        <Link
          href="#home"
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
          className="flex items-center gap-0.5"
        >
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
            VISHAL
          </span>
          <span className="text-accent">.</span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
            K
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const sectionMap: Record<string, string> = {
              "#home": "Home",
              "#work": "Work",
              "#lab": "Lab",
              "#systems": "Systems",
              "#log": "Log",
              "#about": "About",
            };
            const isActive = activeSection === sectionMap[link.hash];
            return (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(sectionMap[link.hash] as typeof activeSection);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "font-mono text-[10px] tracking-[0.1em] px-2.5 py-1.5 transition-colors duration-200 inline-flex items-center gap-1.5",
                    isActive ? "text-accent" : "text-faint hover:text-muted"
                  )}
                >
                  <span className="text-faint/60">{link.num}</span>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 border border-line text-faint hover:text-ink hover:border-faint transition-colors"
          >
            {theme === "dark" ? <FiSun className="text-[13px]" /> : <FiMoon className="text-[13px]" />}
          </button>
          <span className="hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-faint sm:flex">
            <span className="status-indicator" />
            OPEN TO WORK
          </span>
          <ResumePrint
            compact
            label="CV"
            className="font-mono text-[10px] tracking-wider text-faint hover:text-ink transition-colors px-2.5 py-1 border border-line"
          />
        </div>
      </nav>
    </header>
  );
}
