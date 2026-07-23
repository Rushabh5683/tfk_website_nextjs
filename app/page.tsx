import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { Hero } from '@/components/sections/hero';
import { AboutPreview } from '@/components/sections/about-preview';
import { SignatureDishes } from '@/components/sections/signature-dishes';
import { WhyChoose } from '@/components/sections/why-choose';
import { Stats } from '@/components/sections/stats';
import { GalleryPreview } from '@/components/sections/gallery-preview';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { Cta } from '@/components/sections/cta';
import { faqs } from '@/lib/data';

// ── Home page metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    absolute:
      "The Farmer's Kitchen Shirwal | Best Multi-Cuisine Family Restaurant on NH-48 Pune Bangalore Highway",
  },
  description: siteConfig.description,
  keywords: [
    ...siteConfig.keywords,
    'Best Restaurant Shirwal',
    'Shirwal Highway Dining',
    'Restaurant Pune Bangalore Highway',
    'Top Rated Restaurant Shirwal',
    'Vegetarian Non Vegetarian Restaurant Shirwal',
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title:
      "The Farmer's Kitchen Shirwal | Best Multi-Cuisine Family Restaurant on NH-48",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "The Farmer's Kitchen Shirwal - Authentic Multi-Cuisine Family Dining",
      },
    ],
  },
};

// ── Page-specific JSON-LD ─────────────────────────────────────────────────────
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero />
      {/* <CuisineMarquee /> */}
      <AboutPreview />
      <SignatureDishes />
      <WhyChoose />
      <Stats />
      <GalleryPreview />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
