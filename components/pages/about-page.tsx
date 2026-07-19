'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Target, Eye, Heart, Award, Leaf, Users } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/motion';
import { Button } from '@/components/ui/button';
import { Stats } from '@/components/sections/stats';
import { Cta } from '@/components/sections/cta';

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description:
      "I spent 26 years working as a Development Officer in a Public Sector Insurance Undertaking. As I was preparing to take voluntary retirement (VRS), an unexpected opportunity came my way, and I found myself becoming an accidental restaurateur.With no prior experience in the hospitality industry, I decided to give it my absolute best. After six months of relentless hard work, dedication, and learning, we proudly opened our doors to the people of Shirwal on 15th August 2019. What began as an unexpected journey soon became a passion for serving delicious food and creating memorable dining experiences for every guest who walks through our doors.",
  },
  {
    year: '2022',
    title: 'A Regional Favourite',
    description:
      'Within three years, we became one of Shirwal’s most loved dining destinations, earning a loyal following for our Maharashtrian thali and Punjabi classics.',
  },
  {
    year: '2024',
    title: 'Multi-Cuisine Expansion',
    description:
      'Our vision was simple—to create the kind of highway restaurant we would love to visit ourselves: clean, hygienic, welcoming, and serving delicious food. We believe every guest deserves a warm smile, a comfortable dining experience, and even a spotless washroom. These values have been our foundation since day one and remain non-negotiable.',
  },
  {
    year: '2025',
    title: 'Premium Dining Redefined',
    description:
      'A complete interior redesign introduced our signature premium ambience — warm lighting, elegant seating and a refined dining atmosphere.',
  },
  {
    year: 'Today',
    title: 'A Shirwal Landmark',
    description:
      "With a 4.2+ Google rating and over 50,000 happy guests served, The Farmer's Kitchen continues to be the most trusted name in family dining on the Shirwal highway.",
  },
];

const values = [
  {
    icon: Target,
    title: 'Authentic Flavors',
    description:
      'We preserve the richness of Maharashtrian, Punjabi, North Indian, and Chinese cuisine through authentic recipes and fresh ingredients.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be Maharashtra’s most loved multi-cuisine family dining destination, recognised for quality, hospitality and an unforgettable experience.',
  },
  {
    icon: Heart,
    title: 'Why Guests Love Us',
    description:
      'Consistent quality, generous portions, premium ambience and a team that treats every guest like family that’s the Farmer’s Kitchen promise.',
  },
];

const milestones = [
  { icon: Award, label: '4.2+ Google Rating', value: 'Trusted' },
  { icon: Users, label: 'Happy Guests', value: '50K+' },
  { icon: Leaf, label: 'Fresh Daily', value: '100%' },
  { icon: Heart, label: 'Years of Service', value: '7+' },
];

export function AboutPage() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <PageHero
        eyebrow="ROOTED IN TRADITION"
        title="Where Great Food Brings People Together"
        description="A premium multi-cuisine family dining destination on NH-48 Pune Banglore Highway — where authentic regional recipes meet warm hospitality."
        image="/images/6R1A2719 (1).jpg"
        breadcrumb="About"
      />

      <section className="section-pad bg-background">
        <div className="container-mx container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl premium-shadow">
                  <img
                    src="/images/6R1A2712 (1).jpg"
                    alt="Family dining at The Farmer's Kitchen"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background p-5 shadow-xl sm:block">
                  <p className="font-serif text-3xl font-semibold text-brand-600">7+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-400">Years of Hospitality</p>
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="OUR STORY"
                title="A Story Of Flavor, Family & Hospitality"
                align="left"
                description=""
              />
              <Reveal delay={0.2}>
                <p className="mt-6 text-base leading-relaxed text-ink-500">
                  The Farmer's Kitchen was built with a simple vision — to bring authentic flavors, warm hospitality, and memorable dining experiences to our guests. Today, families, travelers, and food lovers gather here to enjoy dishes prepared with passion and tradition.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-500">
                  From Maharashtrian specialties and Punjabi favorites to North Indian and Chinese delights, every meal is crafted using fresh ingredients, authentic recipes, and a commitment to quality.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {milestones.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600">
                        <m.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-serif text-lg font-semibold text-ink-700">{m.value}</p>
                        <p className="text-xs text-ink-400">{m.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted/40">
        <div className="container-mx container-px">
          <SectionHeading
            eyebrow="What Drives Us"
            title="The Values Behind Every Meal"
            description="Every dish we serve is guided by a commitment to authentic flavors, warm hospitality, and memorable dining experiences."
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group h-full rounded-3xl border border-border bg-card p-8 premium-shadow card-hover">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all group-hover:bg-brand-500 group-hover:text-white">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-ink-700">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-mx container-px">
          <SectionHeading
            eyebrow="Our Journey"
            title="A Story Worth Telling"
            description="From a humble highway kitchen to Shirwal's most loved dining destination — here's how we got here."
          />
          <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
            <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-500 via-brand-300 to-transparent sm:left-1/2" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative mb-12 sm:mb-16 sm:w-1/2 ${
                  i % 2 === 0 ? 'sm:pr-12' : 'sm:ml-auto sm:pl-12'
                }`}
              >
                <span
                  className={`absolute top-1 grid h-8 w-8 place-items-center rounded-full border-2 border-brand-500 bg-background text-xs font-semibold text-brand-600 ${
                    i % 2 === 0
                      ? 'left-0 sm:-right-4 sm:left-auto'
                      : 'left-0 sm:-left-4'
                  }`}
                >
                  ✦
                </span>
                <div className="ml-12 sm:ml-0">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
                    {item.year}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-ink-700">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Cta />
    </>
  );
}
