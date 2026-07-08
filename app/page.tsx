import { Hero } from '@/components/sections/hero';
import { CuisineMarquee } from '@/components/sections/cuisine-marquee';
import { AboutPreview } from '@/components/sections/about-preview';
import { SignatureDishes } from '@/components/sections/signature-dishes';
import { WhyChoose } from '@/components/sections/why-choose';
import { Stats } from '@/components/sections/stats';
import { GalleryPreview } from '@/components/sections/gallery-preview';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { Cta } from '@/components/sections/cta';
import { faqs } from '@/lib/data';

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
      item: '/',
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
