'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site';

export function CuisineMarquee() {
  const items = [...siteConfig.cuisines, ...siteConfig.cuisines];
  return (
    <section className="border-y border-border bg-ink-700 py-6 text-white">
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((c, i) => (
            <div key={i} className="flex items-center">
              <span className="px-8 font-serif text-2xl font-medium text-white/80 sm:text-3xl">
                {c}
              </span>
              <span className="text-brand-500">✦</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-700 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-700 to-transparent" />
      </div>
    </section>
  );
}
