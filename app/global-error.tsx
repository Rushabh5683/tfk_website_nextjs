'use client';

import { useEffect } from 'react';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

// global-error.tsx replaces the root layout on critical errors.
// It must include <html> and <body> tags.
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: '2rem',
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: '#fff',
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111' }}>
          Critical error — The Farmer&apos;s Kitchen
        </h2>
        <p style={{ marginTop: '1rem', color: '#666', maxWidth: '400px' }}>
          We&apos;re experiencing a technical issue. Please refresh the page or try again later.
        </p>
        <button
          onClick={reset}
          style={{
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            borderRadius: '9999px',
            backgroundColor: '#FF7A00',
            color: '#fff',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.875rem',
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
