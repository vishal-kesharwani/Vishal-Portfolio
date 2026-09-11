"use client";

import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (origin: { x: number; y: number }) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [transition, setTransition] = useState<{
    active: boolean;
    origin: { x: number; y: number };
    color: string;
  }>({ active: false, origin: { x: 0, y: 0 }, color: "#080A09" });

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("light", stored === "light");
    }
  }, []);

  const toggleTheme = useCallback(
    (origin: { x: number; y: number }) => {
      const next = theme === "dark" ? "light" : "dark";
      const color = next === "dark" ? "#080A09" : "#F4F5F3";

      // Start animation
      setTransition({ active: true, origin, color });

      // Apply theme at midpoint of animation
      setTimeout(() => {
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("light", next === "light");
      }, 350);

      // Remove overlay after animation
      setTimeout(() => {
        setTransition((prev) => ({ ...prev, active: false }));
      }, 700);
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}

      {/* Radial transition overlay */}
      {transition.active && (
        <div
          className="fixed inset-0 z-[100] pointer-events-none"
          style={{
            clipPath: `circle(0% at ${transition.origin.x}px ${transition.origin.y}px)`,
            animation: "theme-radial-fill 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards",
            backgroundColor: transition.color,
          }}
        />
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
