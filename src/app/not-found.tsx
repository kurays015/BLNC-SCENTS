import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber/60">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl text-amber">Not Found</h1>
      <p className="mt-4 max-w-md text-sm text-amber/70">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 border border-amber px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-amber transition-all hover:bg-amber hover:text-cream"
      >
        Return Home
      </Link>
    </div>
  );
}
