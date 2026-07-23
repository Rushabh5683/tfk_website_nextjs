export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      aria-label="Loading page..."
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated brand spinner */}
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-brand-100" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-brand-500" />
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-ink-400">
          Loading…
        </p>
      </div>
    </div>
  );
}
