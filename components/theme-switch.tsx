"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-1.5 text-faint hover:text-ink transition-colors"
    >
      {theme === "dark" ? (
        <FiSun className="text-[13px]" />
      ) : (
        <FiMoon className="text-[13px]" />
      )}
    </button>
  );
}
