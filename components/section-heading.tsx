import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-teal-600 dark:text-teal-300">
        Sandbox Section
      </p>
      <h2 className="text-3xl font-semibold capitalize tracking-tight text-gray-950 dark:text-white sm:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500" />
    </div>
  );
}
