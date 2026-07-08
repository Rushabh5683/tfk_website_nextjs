'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Leaf,
  Scroll,
  Users,
  Sparkles,
  MapPin,
  Heart,
  Zap,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { whyChooseItems } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Scroll,
  Users,
  Sparkles,
  MapPin,
  Heart,
  Zap,
  Globe,
};

export function WhyChoose() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="why-choose" className="section-pad relative overflow-hidden bg-ink-700 text-white">
      <div className="absolute inset-0 -z-0 opacity-40">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
      </div>
      <div className="container-mx container-px relative z-10">
        <SectionHeading
          eyebrow="WHY GUESTS KEEP RETURNING"
          title="The Taste, Service & Ambience You Deserve"
          description="Whether you're stopping by with family, friends, or fellow travelers, we serve food that brings people together."
          light
        />

        <div
          ref={ref}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseItems.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-brand-500/40 hover:bg-white/10"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-500/10 blur-2xl transition-all group-hover:bg-brand-500/30" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-brand-300 transition-all group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
                <span className="mt-4 block h-px w-0 bg-brand-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
