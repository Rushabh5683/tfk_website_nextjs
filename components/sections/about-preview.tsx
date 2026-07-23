'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Quote, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/motion/motion';

const points = [
  'Authentic Multi-Cuisine Menu\nMaharashtrian, Punjabi, North Indian & Chinese favorites',
  'Fresh Ingredients Daily\nPrepared with quality ingredients and traditional spices',
  'Family Dining Destination\nComfortable ambience for every occasion',
  'Warm Hospitality\nServing guests with care, passion, and attention',
];

export function AboutPreview() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-background">
      <div className="absolute -right-32 top-20 -z-0 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
      <div className="container-mx container-px relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl premium-shadow">
                <Image
                  src="/images/New Dinning Area 2.webp"
                  alt="Family dining at The Farmer's Kitchen Shirwal - warm and welcoming restaurant"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-700/40 to-transparent" />
              </div>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-4 bottom-10 hidden rounded-2xl border border-border bg-background/95 p-5 shadow-xl backdrop-blur sm:block lg:-left-10"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Quote className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-serif text-3xl font-semibold text-ink-700">7+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-400">Years of Hospitality</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-4 top-10 hidden rounded-2xl border border-border bg-background/95 p-5 shadow-xl backdrop-blur sm:block lg:-right-10"
            >
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-serif text-3xl font-semibold text-brand-600">4.2★ Rated Dining Experience</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div ref={ref}>
            <SectionHeading
              eyebrow="ROOTED IN TRADITION"
              title="Where Tradition Meets Taste"
              align="left"
              description="At The Farmer's Kitchen, every dish is inspired by authentic recipes, fresh ingredients, and the warmth of Indian hospitality. From Maharashtrian specialties to Punjabi favorites and Chinese delights, we create memorable dining experiences for every guest."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand-300"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm text-ink-500">{p}</span>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button asChild className="btn-shine h-12 rounded-full bg-brand-500 px-6 text-white hover:bg-brand-600">
                  <Link href="/about">
                    Discover ROOTED IN TRADITION
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="flex items-center gap-3 text-sm text-ink-400">
                  <span className="h-px w-8 bg-brand-500" />
                  <span>Where Every Meal Creates Memories</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
