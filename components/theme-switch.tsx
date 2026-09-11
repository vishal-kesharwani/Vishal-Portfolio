"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    toggleTheme({ x, y });
  };

  return (
    <button
      onClick={handleClick}
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
