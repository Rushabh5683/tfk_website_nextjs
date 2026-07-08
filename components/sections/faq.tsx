'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/shared/section-heading';
import { faqs } from '@/lib/data';

export function Faq() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="faq" className="section-pad relative overflow-hidden bg-background">
      <div className="container-mx container-px">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="QUICK ANSWERS"
              title="Frequently Asked Questions"
              description="Find answers about reservations, dining, parking, timings, and everything you need for a memorable visit to The Farmer's Kitchen."
              align="left"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-6"
            >
              <p className="font-serif text-lg font-semibold text-ink-700">
                Need Help Planning Your Visit?
              </p>
              <p className="mt-2 text-sm text-ink-500">
                Our team is happy to assist with reservations, group bookings, family celebrations, and menu recommendations.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Contact us →
              </a>
            </motion.div>
          </div>

          <div ref={ref} className="lg:col-span-7">
            <Accordion type="single" collapsible defaultValue="f1" className="space-y-3">
              {faqs.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <AccordionItem
                    value={f.id}
                    className="overflow-hidden rounded-2xl border border-border bg-card px-5 data-[state=open]:border-brand-300 data-[state=open]:bg-brand-50/40"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-ink-700 hover:no-underline">
                      {f.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-ink-500">
                      {f.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
