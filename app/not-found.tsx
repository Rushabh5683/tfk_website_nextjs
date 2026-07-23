import Link from 'next/link';
import { Home, UtensilsCrossed, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-brand-50 text-brand-500">
        <UtensilsCrossed className="h-10 w-10" />
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
        404 — Page Not Found
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-ink-700 sm:text-5xl">
        Oops! This table doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-400">
        The page you&apos;re looking for may have moved or doesn&apos;t exist. Let&apos;s get
        you back to the good food.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-500 px-6 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-colors hover:bg-brand-600"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/menu"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-600"
        >
          <UtensilsCrossed className="h-4 w-4" />
          View Menu
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-600"
        >
          <Phone className="h-4 w-4" />
          Contact Us
        </Link>
      </div>
    </div>
  );
}
