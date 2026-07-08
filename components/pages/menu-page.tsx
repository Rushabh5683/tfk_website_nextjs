'use client';

import * as React from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Search, Flame, Leaf, Star, SlidersHorizontal } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { dishes, menuCategories } from '@/lib/data';
import { cn } from '@/lib/utils';

export function MenuPage() {
  const [active, setActive] = React.useState('all');
  const [query, setQuery] = React.useState('');
  const [vegOnly, setVegOnly] = React.useState(false);
  const gridRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: '-40px' });

  const filtered = React.useMemo(() => {
    return dishes.filter((d) => {
      if (active !== 'all' && d.category !== active) return false;
      if (vegOnly && !d.veg) return false;
      if (query) {
        const q = query.toLowerCase();
        if (
          !d.name.toLowerCase().includes(q) &&
          !d.description.toLowerCase().includes(q) &&
          !d.category.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [active, query, vegOnly]);

  const tabs = [{ id: 'all', name: 'All', icon: '' }, ...menuCategories];

  return (
    <>
      <PageHero
        eyebrow="SIGNATURE FLAVORS"
        title="Discover Authentic Flavors"
        description="Every plate at The Farmer's Kitchen celebrates authentic flavors, fresh ingredients, and the rich culinary traditions of India."
        image="/images/6R1A2715.jpg"
        breadcrumb="Menu"
      />

      <section className="section-pad bg-background">
        <div className="container-mx container-px">
          <div className="grid gap-6 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-28 space-y-6">
                {/* <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                    Search
                  </label>
                  <div className="relative mt-3">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search dishes..."
                      className="pl-9"
                    />
                  </div>
                </div> */}

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                    Categories
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2 lg:flex-col">
                    {tabs.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setActive(t.id)}
                        className={cn(
                          'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all lg:w-full lg:justify-between',
                          active === t.id
                            ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                            : 'border border-border bg-card text-ink-500 hover:border-brand-300 hover:text-brand-600'
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <span>{t.icon}</span>
                          <span>{t.name}</span>
                        </span>
                        <span className="hidden text-xs opacity-70 lg:inline">
                          {t.id === 'all'
                            ? dishes.length
                            : dishes.filter((d) => d.category === t.id).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-ink-600">Pure Veg Only</span>
                    </div>
                    <button
                      onClick={() => setVegOnly((v) => !v)}
                      className={cn(
                        'relative h-6 w-11 rounded-full transition-colors',
                        vegOnly ? 'bg-green-600' : 'bg-ink-200'
                      )}
                      aria-label="Toggle veg only"
                    >
                      <span
                        className={cn(
                          'absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform',
                          vegOnly ? 'translate-x-5' : 'translate-x-0.5'
                        )}
                      />
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5">
                  <p className="font-serif text-lg font-semibold text-ink-700">
                    Can&apos;t decide?
                  </p>
                  <p className="mt-2 text-sm text-ink-500">
                    Try our chef-curated signature dishes for the full experience.
                  </p>
                  <Button
                    onClick={() => {
                      setActive('all');
                      setQuery('');
                      setVegOnly(false);
                    }}
                    className="mt-4 w-full rounded-full bg-brand-500 text-white hover:bg-brand-600"
                  >
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Reset Filters
                  </Button>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-ink-400">
                  Showing <span className="font-semibold text-ink-700">{filtered.length}</span> dishes
                </p>
                <div className="flex items-center gap-2 text-xs text-ink-400">
                  <span className="flex items-center gap-1">
                    <span className="grid h-4 w-4 place-items-center rounded-sm border-2 border-green-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                    </span>
                    Veg
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="grid h-4 w-4 place-items-center rounded-sm border-2 border-red-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    </span>
                    Non-Veg
                  </span>
                </div>
              </div>

              <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filtered.map((dish, i) => (
                    <motion.article
                      key={dish.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="group overflow-hidden rounded-2xl border border-border bg-card premium-shadow card-hover"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-700/60 to-transparent" />
                        <div className="absolute left-3 top-3 flex gap-2">
                          <span
                            className={cn(
                              'grid h-7 w-7 place-items-center rounded-full border-2 bg-white/95',
                              dish.veg ? 'border-green-600' : 'border-red-500'
                            )}
                          >
                            <span
                              className={cn(
                                'h-2.5 w-2.5 rounded-full',
                                dish.veg ? 'bg-green-600' : 'bg-red-500'
                              )}
                            />
                          </span>
                          {dish.spicy && (
                            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/30 bg-ink-700/60 text-brand-300 backdrop-blur">
                              <Flame className="h-3.5 w-3.5" />
                            </span>
                          )}
                        </div>
                        <div className="absolute right-3 top-3 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                          ₹{dish.price}
                        </div>
                        {dish.signature && (
                          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                            <Star className="h-3 w-3 fill-brand-400 text-brand-400" />
                            Signature
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg font-semibold text-ink-700 transition-colors group-hover:text-brand-600">
                          {dish.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-400 line-clamp-2">
                          {dish.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {dish.tags?.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-500"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {filtered.length === 0 && (
                <div className="grid place-items-center rounded-2xl border border-dashed border-border py-20 text-center">
                  <p className="font-serif text-2xl font-semibold text-ink-700">No dishes found</p>
                  <p className="mt-2 text-sm text-ink-400">
                    Try adjusting your filters or search query.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
