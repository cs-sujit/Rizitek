import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-6 py-28 md:px-10">
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">404</span>
      <h1 className="font-display text-4xl leading-tight sm:text-5xl">Page not found.</h1>
      <p className="max-w-md text-[15px] leading-relaxed text-ink/60">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="focus-ring inline-flex items-center gap-2 bg-ink px-6 py-4 text-[13px] font-bold uppercase tracking-wide text-cream transition hover:bg-navy"
      >
        Back to Home <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
