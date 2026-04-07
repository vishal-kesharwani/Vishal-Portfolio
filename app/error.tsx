"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 text-slate-900">
      <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-white/5 dark:text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-600 dark:text-teal-300">
          Something went wrong
        </p>
        <h2 className="text-3xl font-bold">Portfolio temporarily hit an error.</h2>
        <p className="mt-4 text-slate-600 dark:text-white/70">
          Please try refreshing the page. If the issue continues, I&apos;ll
          inspect the component causing it.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-slate-950 px-5 py-3 font-medium text-white transition hover:scale-105 dark:bg-white dark:text-slate-950"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
