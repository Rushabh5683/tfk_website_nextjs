'use client';

import * as React from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { testimonials } from '@/lib/data';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [inView]);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden bg-muted/40">
      <div className="absolute -left-32 top-1/3 -z-0 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 -z-0 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="container-mx container-px relative z-10">
        <SectionHeading
          eyebrow="LOVED BY OUR GUESTS"
          title="Why Guests Keep Coming Back"
          description="Thousands of guests have shared meals, celebrations, and unforgettable moments at The Farmer's Kitchen."
        />

        <div ref={ref} className="mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 premium-shadow sm:p-12">
            <Quote className="absolute -top-2 left-6 h-20 w-20 text-brand-100" />

            <div className="relative min-h-[260px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex items-center gap-1 ">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={cn(
                          'h-5 w-5',
                          s <= active.rating ? 'fill-brand-400 text-brand-400' : 'text-ink-200'
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-6 max-w-2lg font-serif text-lg leading-relaxed text-ink-600 sm:text-2lg">
                    &ldquo;{active.text}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4 ">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-500 font-serif text-lg font-semibold text-white">
                      {active.initials}
                    </span>
                    <div className="text-left">
                      <p className="font-semibold text-ink-700">{active.name}</p>
                      <p className="text-sm text-ink-400">{active.location} · {active.date}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    aria-label={`Show review ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      i === index ? 'w-8 bg-brand-500' : 'w-2 bg-ink-200 hover:bg-ink-300'
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(-1)}
                  aria-label="Previous review"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink-600 transition-colors hover:border-brand-500 hover:bg-brand-50 hover:text-brand-600"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  aria-label="Next review"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink-600 transition-colors hover:border-brand-500 hover:bg-brand-50 hover:text-brand-600"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-500">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold text-brand-600">{siteConfig.rating}+</span>
              <span>Google Rating</span>
            </div>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold text-ink-700">{siteConfig.reviewCount}+</span>
              <span>Happy Reviews</span>
            </div>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold text-ink-700">50K+</span>
              <span>Guests Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
