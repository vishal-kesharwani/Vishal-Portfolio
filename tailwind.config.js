/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "surface-3": "var(--surface-3)",
        line: "var(--border)",
        "line-accent": "var(--border-accent)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        secondary: "var(--secondary)",
        warn: "var(--warning)",
        danger: "var(--error)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-hero": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        "display-2xl": ["clamp(2.5rem, 5.5vw, 4.5rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.6rem, 3.5vw, 2.8rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.2rem, 2.5vw, 1.8rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 8rem)",
        "section-sm": "clamp(3rem, 6vw, 4.5rem)",
      },
      maxWidth: {
        content: "1280px",
        narrow: "640px",
      },
      borderRadius: {
        card: "6px",
      },
      borderWidth: {
        1: "1px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "orbital-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "orbital-slow": "orbital-slow 60s linear infinite",
      },
    },
  },
  plugins: [],
};
