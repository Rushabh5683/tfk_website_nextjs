import * as React from 'react';
import { cn } from '@/lib/utils';
import { Reveal, TextReveal } from '@/components/motion/motion';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
  revealTitle?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
  revealTitle = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-brand-500" />
          </div>
        </Reveal>
      )}
      <h2
        className={cn(
          'text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl',
          light ? 'text-white' : 'text-ink-700'
        )}
      >
        {revealTitle ? (
          <TextReveal text={title} />
        ) : (
          <Reveal as="span">{title}</Reveal>
        )}
      </h2>
      {description && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              'max-w-2xl text-base leading-relaxed sm:text-lg',
              light ? 'text-white/70' : 'text-ink-400',
              align === 'center' && 'mx-auto'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
