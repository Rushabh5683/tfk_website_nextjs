'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  UtensilsCrossed,
  MapPin,
  Phone,
  Clock,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { Reveal } from '@/components/motion/motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const cuisineLinks = [
  'Maharashtrian',
  'Punjabi',
  'North Indian',
  'Chinese',
];

const socials = [
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  // { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
  // { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
];

export function Footer() {
  const [email, setEmail] = React.useState('');

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Thanks for subscribing! We will be in touch soon.');
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden bg-ink-700 text-white">
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
      </div>
      <div className="container-mx container-px relative z-10">
        <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Link href="/" className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-brand-500/40 bg-brand-500/10 text-brand-300">
                  <UtensilsCrossed className="h-5 w-5" />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-serif text-xl font-semibold">The Farmer&apos;s Kitchen</span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-brand-300">
                    Shirwal
                  </span>
                </span>
              </Link>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
                {siteConfig.tagline}. The Farmer's Kitchen brings together authentic Maharashtrian, Punjabi, North Indian, and Chinese flavors in a warm family-friendly setting. A destination where great food and memorable moments come together.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
                Explore
              </h3>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="link-underline text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.15}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
                Cuisines
              </h3>
              <ul className="mt-5 space-y-3">
                {cuisineLinks.map((c) => (
                  <li key={c}>
                    <span className="text-sm text-white/70">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
                Visit Us
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <span>{siteConfig.location.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <span className="flex flex-col">
                    <a href={`tel:${siteConfig.phone.primaryRaw}`} className="hover:text-white">
                      {siteConfig.phone.primary}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <span>
                    {siteConfig.hours.days} · {siteConfig.hours.open} – {siteConfig.hours.close}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <a href="mailto:hello@thefarmerskitchen.in" className="hover:text-white">
                    thefarmerskitchen@gmail.com
                  </a>
                </li>
              </ul>

            
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} The Farmer&apos;s Kitchen, Shirwal. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Crafted with passion in Maharashtra</span>
            <span className="h-1 w-1 rounded-full bg-brand-500" />
            <span>Authentic Flavors. Memorable Moments.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
