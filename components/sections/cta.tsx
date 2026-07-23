'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CalendarDays, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';

export function Cta() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0  bg-center"
          style={{
            backgroundImage:
              "url('/images/6R1A2709.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="container-mx container-px relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center text-white"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            READY TO DINE?
          </div>
          <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Ready To Experience Authentic Flavors?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg ">
            Whether you're planning a family dinner, weekend outing, or special celebration, we're ready to serve unforgettable flavors and memorable moments.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="btn-shine h-14 rounded-full bg-brand-500 px-7 text-base text-white shadow-xl shadow-brand-500/30 hover:bg-brand-600">
              <Link href="/contact">
                <CalendarDays className="mr-2 h-5 w-5" />
                Reserve Your Experience
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-14 rounded-full border-white/30 bg-white/5 px-7 text-base text-white backdrop-blur hover:bg-white/10 hover:text-white">
              <a href={`tel:${siteConfig.phone.primaryRaw}`}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.phone.primary}
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm ">
            <span>Open daily · 11 AM – 11 PM</span>
            <span className="h-1 w-1 rounded-full bg-brand-500" />
            <span>Shirwal, Maharashtra</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
