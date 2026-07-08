'use client';

import * as React from 'react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const letterContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

export const letterVariant: Variants = {
  hidden: { opacity: 0, y: '60%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'span' | 'li' | 'h2' | 'h3' | 'p';
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = 'div',
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function Stagger({
  children,
  className,
  delay = 0,
  once = true,
}: StaggerProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
};

export function Parallax({
  children,
  className,
  speed = 0.3,
}: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${-speed * 100}%`]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function TextReveal({
  text,
  className,
  delay = 0,
  once = true,
}: TextRevealProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: '-40px' });
  const words = text.split(' ');
  return (
    <span ref={ref} className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {words.map((word, wi) => (
          <span
            key={wi}
            style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
          >
            <span style={{ display: 'inline-block' }}>
              {word.split('').map((char, ci) => (
                <motion.span
                  key={ci}
                  style={{ display: 'inline-block' }}
                  variants={letterVariant}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{
                    duration: 0.6,
                    delay: delay + (wi * 0.05) + (ci * 0.018),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
              {wi < words.length - 1 ? '\u00A0' : ''}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
