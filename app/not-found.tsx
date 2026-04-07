import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-slate-900">
      <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
          404
        </p>
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 font-medium text-white transition hover:scale-105"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
