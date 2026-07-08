'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { siteConfig } from '@/lib/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="The Farmer's Kitchen home">
      <Image
        src="/circle_logo.png"
        alt="The Farmer's Kitchen logo"
        width={120}
        height={56}
        className="h-14 w-auto object-contain"
        priority
      />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 60);
  });

  React.useEffect(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? ' bg-black/30 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="container-mx container-px">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-lg font-medium transition-colors',
                    'text-white/80 hover:text-white',
                    active && 'text-white'
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${siteConfig.phone.primaryRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span>{siteConfig.phone.primary}</span>
            </a>
            <Button
              asChild
              className="btn-shine h-10 rounded-full bg-brand-500 px-5 text-sm font-semibold text-white hover:bg-brand-600"
            >
              <Link href="/contact">
                <CalendarDays className="mr-2 h-4 w-4" />
                Reserve Table
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-sm border-l border-white/10 bg-ink-700/95 p-0 backdrop-blur-md"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                    <Logo />
                    <button
                      aria-label="Close menu"
                      onClick={() => setMobileOpen(false)}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <nav className="flex flex-1 flex-col gap-1 px-6 py-6">
                    {navLinks.map((link, i) => {
                      const active = pathname === link.href;
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 + i * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            className={cn(
                              'flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors',
                              active
                                ? 'bg-brand-500/20 text-brand-300'
                                : 'text-white/80 hover:bg-white/10 hover:text-white'
                            )}
                          >
                            {link.label}
                            <span className="text-xs text-white/30">0{i + 1}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>
                  <div className="space-y-3 border-t border-white/10 px-6 py-6">
                    <a
                      href={`tel:${siteConfig.phone.primaryRaw}`}
                      className="flex items-center gap-3 text-sm font-medium text-white/80"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-500/20 text-brand-300">
                        <Phone className="h-4 w-4" />
                      </span>
                      {siteConfig.phone.primary}
                    </a>
                    <Button
                      asChild
                      className="w-full rounded-full bg-brand-500 text-white hover:bg-brand-600"
                    >
                      <Link href="/contact">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        Reserve a Table
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
