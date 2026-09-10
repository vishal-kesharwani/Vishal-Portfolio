"use client";

import React, { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ResumePrint from "./resume-print";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionMap: Record<string, string> = {
    "#work": "Work",
    "#systems": "Systems",
    "#lab": "Lab",
    "#journal": "Log",
    "#about": "About",
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-canvas/80 backdrop-blur-xl border-b border-line"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-14 max-w-content items-center justify-between px-6 lg:px-10">
          <Link
            href="#home"
            onClick={() => {
              setActiveSection("Home");
              setTimeOfLastClick(Date.now());
            }}
            className="flex items-baseline gap-0"
          >
            <span className="font-display text-[14px] font-semibold tracking-tight text-ink">
              VISHAL
            </span>
            <span className="text-accent text-[14px]">.</span>
            <span className="font-display text-[14px] font-semibold tracking-tight text-ink">
              K
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
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
                      "relative font-mono text-[10px] tracking-[0.08em] px-3 py-1.5 transition-colors duration-200",
                      isActive ? "text-ink" : "text-faint hover:text-muted"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-accent" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5">
            <ThemeSwitch />

            <span className="hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-faint sm:flex">
              <span className="status-indicator" />
              OPEN TO WORK
            </span>

            <ResumePrint
              compact
              label="CV"
              className="font-mono text-[9px] tracking-[0.1em] text-faint hover:text-ink transition-colors px-2 py-1 border border-line hover:border-faint"
            />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 text-faint hover:text-ink transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? (
                  <path d="M4 4L12 12M12 4L4 12" />
                ) : (
                  <path d="M2 5H14M2 8H14M2 11H14" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-canvas/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === sectionMap[link.hash];
              return (
                <Link
                  key={link.hash}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(sectionMap[link.hash] as typeof activeSection);
                    setTimeOfLastClick(Date.now());
                    setMobileOpen(false);
                  }}
                  className={clsx(
                    "font-mono text-sm tracking-wider transition-colors",
                    isActive ? "text-accent" : "text-faint hover:text-ink"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
