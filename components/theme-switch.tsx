"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="liquid-glass fixed bottom-5 right-5 z-[998] flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface/80 text-ink shadow-2xl transition-all hover:scale-[1.15] active:scale-105"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
