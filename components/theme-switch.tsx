"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="fixed bottom-5 right-5 z-[998] flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-lg text-ink shadow-2xl backdrop-blur-md transition-all hover:scale-[1.15] active:scale-105"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
