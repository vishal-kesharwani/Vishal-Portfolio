import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center sm:mb-12">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-amber-700 dark:text-amber-200">
        Portfolio section
      </p>
      <h2 className="text-3xl font-semibold capitalize tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 via-teal-400 to-slate-900 shadow-[0_10px_30px_-10px_rgba(217,119,6,0.35)] dark:from-amber-300 dark:via-teal-300 dark:to-white" />
    </div>
  );
}
