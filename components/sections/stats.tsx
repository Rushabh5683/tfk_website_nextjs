'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { Counter } from '@/components/shared/counter';
import { stats } from '@/lib/data';

export function Stats() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative overflow-hidden bg-brand-500 py-16 text-white">
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-brand-300/40 blur-3xl" />
      </div>
      <div className="container-mx container-px relative z-10">
        <div ref={ref} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <p className="font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.value % 1 !== 0 ? 1 : 0}
                />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-white/80 sm:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
