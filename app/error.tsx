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
    <div className="flex min-h-[60vh] items-center justify-center px-6 text-ink">
      <div className="max-w-xl rounded-3xl border border-line bg-surface p-8 shadow-xl">
        <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Something went wrong
        </p>
        <h2 className="text-3xl font-bold">Portfolio temporarily hit an error.</h2>
        <p className="mt-4 text-muted">
          Please try refreshing the page. If the issue continues, I&apos;ll
          inspect the component causing it.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-accent px-5 py-3 font-medium text-accent-ink transition hover:scale-105"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
