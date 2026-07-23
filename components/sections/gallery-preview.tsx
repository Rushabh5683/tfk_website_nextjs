'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/section-heading';
import { galleryImages } from '@/lib/data';
import { cn } from '@/lib/utils';

const categories = ['All', 'Food', 'Ambience', 'Restaurant',] as const;

export function GalleryPreview() {
  const [active, setActive] = React.useState<(typeof categories)[number]>('All');
  const [lightbox, setLightbox] = React.useState<string | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const filtered = React.useMemo(() => {
    if (active === 'All') return galleryImages.slice(0, 8);
    return galleryImages.filter((g) => g.category === active).slice(0, 8);
  }, [active]);

  return (
    <section id="gallery" className="section-pad relative overflow-hidden bg-background">
      <div className="container-mx container-px">
        <SectionHeading
          eyebrow="FLAVORS & MEMORIES"
          title="Discover The Farmer's Kitchen Experience"
          description="Every image captures the flavors, hospitality, and memories shared at The Farmer's Kitchen."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all',
                  active === c
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                    : 'border border-border bg-card text-ink-500 hover:border-brand-300 hover:text-brand-600'
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div ref={ref} className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setLightbox(img.src)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border"
                style={{ breakInside: 'avoid' }}
              >
                <div className="relative w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={75}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-700/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur">
                    <ZoomIn className="h-5 w-5" />
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-xs font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block uppercase tracking-[0.2em] text-brand-300">{img.category}</span>
                  <span className="mt-1 block text-sm">{img.alt}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" className="h-12 rounded-full border-ink-700 px-6 text-ink-700 hover:bg-ink-700 hover:text-white">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-700/90 p-6 backdrop-blur"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              aria-label="Close lightbox"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
