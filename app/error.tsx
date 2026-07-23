'use client';

import { useEffect } from 'react';
import { RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-red-50 text-red-500">
        <RefreshCw className="h-10 w-10" />
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
        Something went wrong
      </p>
      <h2 className="mt-4 font-serif text-4xl font-semibold text-ink-700 sm:text-5xl">
        We hit a snag
      </h2>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-400">
        We apologise for the inconvenience. Please try refreshing the page or head back home.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <button
          onClick={reset}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-500 px-6 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-colors hover:bg-brand-600"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-600"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
