'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Star, Flame, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/section-heading';
import { dishes } from '@/lib/data';

const signatureDishes = dishes.filter((d) => d.signature).slice(0, 6);

export function SignatureDishes() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="signature" className="section-pad relative overflow-hidden bg-muted/40">
      <div className="absolute inset-0 -z-0 opacity-50">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-300 to-transparent" />
      </div>
      <div className="container-mx container-px relative z-10">
        <SectionHeading
          eyebrow="MOST LOVED DISHES"
          title="Discover Our Signature Flavors"
          description="A curated selection of our most-loved creations — each plate a celebration of regional Indian flavours and our chef's craft."
        />

        <div
          ref={ref}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {signatureDishes.map((dish, i) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card premium-shadow card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-700/85 via-ink-700/20 to-transparent" />

                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {dish.veg && (
                    <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-green-600 bg-white/90 text-green-600">
                      <Leaf className="h-3.5 w-3.5" />
                    </span>
                  )}
                  {dish.spicy && (
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-white/30 bg-ink-700/60 text-brand-300 backdrop-blur">
                      <Flame className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  ₹{dish.price}
                </div>

                <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {dish.tags?.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Star className="h-3.5 w-3.5 fill-brand-400 text-brand-400" />
                  <span className="text-xs font-medium text-ink-400">Signature</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink-700 transition-colors group-hover:text-brand-600">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400 line-clamp-2">
                  {dish.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-ink-300">
                    {dish.category.replace('-', ' ')}
                  </span>
                  {/* <Link
                    href="/menu"
                    className="link-underline text-xs font-semibold uppercase tracking-[0.2em] text-brand-600"
                  >
                    Order Now
                  </Link> */}
                </div>
              </div>

              <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-brand-500/0 transition-all duration-500 group-hover:ring-brand-500/40" />
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild className="btn-shine h-12 rounded-full bg-ink-700 px-6 text-white hover:bg-ink-600">
            <Link href="/menu">
              Explore Full Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
