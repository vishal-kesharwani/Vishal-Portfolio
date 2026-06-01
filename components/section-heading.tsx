import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center sm:mb-12">
      <h2 className="text-3xl font-semibold capitalize tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 shadow-[0_10px_30px_-10px_rgba(45,212,191,0.6)]" />
    </div>
  );
}
