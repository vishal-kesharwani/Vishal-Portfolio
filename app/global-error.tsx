"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-slate-900">
        <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
            Global error
          </p>
          <h2 className="text-3xl font-bold">The app hit a rendering issue.</h2>
          <p className="mt-4 text-slate-600">{error.message}</p>
          <pre className="mt-4 max-h-48 overflow-auto rounded-2xl bg-slate-100 p-4 text-left text-xs text-slate-700">
            {error.stack}
          </pre>
          <button
            onClick={() => reset()}
            className="mt-6 rounded-full bg-slate-950 px-5 py-3 font-medium text-white transition hover:scale-105"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
