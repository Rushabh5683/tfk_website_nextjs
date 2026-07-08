'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { TextReveal } from '@/components/motion/motion';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  breadcrumb: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
}: PageHeroProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative flex h-[70svh] min-h-[480px] items-end overflow-hidden pt-20"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="container-mx container-px relative z-10 pb-16">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 text-xs font-medium text-white/60"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-300">{breadcrumb}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </motion.div>

        <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-white text-shadow-hero sm:text-6xl md:text-7xl">
          <TextReveal text={title} />
        </h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-white"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
