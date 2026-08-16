import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-6 text-ink">
      <div className="max-w-xl rounded-3xl border border-line bg-surface p-8 text-center shadow-xl">
        <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          404
        </p>
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-accent px-5 py-3 font-medium text-accent-ink transition hover:scale-105"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
