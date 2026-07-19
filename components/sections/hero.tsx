'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CalendarDays, UtensilsCrossed, Star, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });
  const onMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const headline = 'Authentic Flavors. Memorable Moments.';

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('images/6R1A2719 (1).jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/30" />
      </motion.div>


      <div className="container-mx container-px relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-4xl main-section-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Multi-Cuisine Fine Dining · Shirwal
          </motion.div>

          <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-white text-shadow-hero sm:text-6xl md:text-7xl lg:text-8lg">
            <span className="block overflow-hidden">
              {headline.split(' ').map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-top">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{
                      duration: 0.9,
                      delay: 0.2 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                    {i < headline.split(' ').length - 1 ? '\u00A0' : ''}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 text-lg font-serif font-semibold uppercase tracking-[0.3em] text-brand-300"
          >
            Maharashtrian • Punjabi • North Indian • Chinese
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-4 font-serif max-w-xl text-lg leading-relaxed text-white sm:text-xl"
          >
            From traditional Maharashtrian delicacies to Punjabi favorites, every dish is crafted with authentic flavors and heartfelt hospitality          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              className="btn-shine group h-14 rounded-full bg-brand-500 px-7 text-base text-white shadow-xl shadow-brand-500/30 hover:bg-brand-600"
            >
              <Link href="/menu">
                <UtensilsCrossed className="mr-2 h-5 w-5" />
                View Menu
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-full border-white/30 bg-white/5 px-7 text-base text-white backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">
                <CalendarDays className="mr-2 h-5 w-5" />
                Reserve Table
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={s <= 4 ? 'h-4 w-4 fill-brand-400 text-brand-400' : 'h-4 w-4 text-white/30'}
                  />
                ))}
              </div>
              <span className="font-semibold text-white">Loved By 1,600+ Happy Guests</span>
            </div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-400" />
              <span>Shirwal, Maharashtra</span>
            </div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-400" />
              <span>11 AM – 11 PM Daily</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
