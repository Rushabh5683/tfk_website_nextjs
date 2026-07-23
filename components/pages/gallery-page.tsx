'use client';

import * as React from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { galleryImages } from '@/lib/data';
import { cn } from '@/lib/utils';

const categories = [ 'Food', 'Ambience', 'Restaurant', 'Before & After'] as const;

export function GalleryPage() {
  const [active, setActive] = React.useState<(typeof categories)[number]>('Food');
  const [lightbox, setLightbox] = React.useState<number | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const filtered = React.useMemo(() => {
  return galleryImages.filter((g) => g.category === active);
}, [active]);

  const closeLightbox = () => setLightbox(null);
  const next = () => setLightbox((p) => (p === null ? null : (p + 1) % filtered.length));
  const prev = () => setLightbox((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length));

  React.useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Visual Feast"
        description="Step inside The Farmer's Kitchen through our lens — from beautifully plated signature dishes to the warm ambience of our dining room and the joy of customer celebrations."
        image="/images/New Dinning Area 3.webp"
        breadcrumb="Gallery"
      />

      <section className="section-pad bg-background">
        <div className="container-mx container-px">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  'rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all',
                  active === c
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                    : 'border border-border bg-card text-ink-500 hover:border-brand-300 hover:text-brand-600'
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div
            ref={ref}
            className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.button
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-border"
                  style={{ breakInside: 'avoid' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-700/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur">
                      <ZoomIn className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 translate-y-2 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-brand-300">
                      {img.category}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-white">{img.alt}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-700/95 p-6 backdrop-blur"
          >
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              aria-label="Close"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 sm:left-8"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 sm:right-8"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.figure
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[85vh] max-w-[90vw] flex-col items-center"
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                className="max-h-[75vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center text-sm text-white/70">
                <span className="text-brand-300">{filtered[lightbox].category}</span>
                <span className="mx-2">·</span>
                {filtered[lightbox].alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
