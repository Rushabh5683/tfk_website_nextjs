import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { AboutPage } from '@/components/pages/about-page';

export const metadata: Metadata = {
  title: "About Us | The Farmer's Kitchen Story - Shirwal Restaurant Since 2019",
  description:
    "Learn the story of The Farmer's Kitchen Shirwal — born in 2019 on NH-48 Pune Bangalore Highway. A premium multi-cuisine family restaurant serving authentic Maharashtrian, Punjabi & North Indian food with 4.2★ Google rating.",
  keywords: [
    "About The Farmer's Kitchen Shirwal",
    'Restaurant Story Shirwal',
    'Highway Restaurant Maharashtra',
    'Family Restaurant Since 2019',
    'Best Restaurant NH-48',
    'Authentic Indian Restaurant Shirwal',
    'Restaurant owner Shirwal',
    'Multi-cuisine restaurant story',
  ],
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About The Farmer's Kitchen | Shirwal's Most Loved Restaurant Since 2019",
    description:
      "Born in 2019, The Farmer's Kitchen serves authentic multi-cuisine food on NH-48 Pune Bangalore Highway. 4.2★ Google rating, 50K+ happy guests, 7+ years of hospitality.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "The Farmer's Kitchen Shirwal - Our Story",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About The Farmer's Kitchen Shirwal",
    description:
      "Born in 2019, The Farmer's Kitchen serves authentic multi-cuisine food on NH-48 Pune Bangalore Highway.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AboutPage />;
}
