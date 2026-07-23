import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { GalleryPage } from '@/components/pages/gallery-page';

export const metadata: Metadata = {
  title: "Gallery | Food, Ambience & Restaurant Photos – The Farmer's Kitchen Shirwal",
  description:
    "Browse the photo gallery of The Farmer's Kitchen Shirwal — beautifully plated signature dishes, our warm dining ambience, restaurant interior, private events and happy customer celebrations. Experience the beauty before you visit.",
  keywords: [
    "The Farmer's Kitchen Gallery Shirwal",
    'Restaurant Photos Shirwal',
    'Food Photography Shirwal Restaurant',
    'Restaurant Interior Shirwal',
    'Dining Ambience Shirwal',
    'Highway Restaurant Photos Maharashtra',
    'Indian Food Pictures Shirwal',
    'Restaurant Events Shirwal',
    'Family Dining Photos Shirwal',
  ],
  alternates: { canonical: `${siteConfig.url}/gallery` },
  openGraph: {
    title: "Gallery | Food & Ambience Photos – The Farmer's Kitchen Shirwal",
    description:
      "Step inside The Farmer's Kitchen through our lens — beautifully plated signature dishes, warm dining ambience, private events and happy customer celebrations.",
    url: `${siteConfig.url}/gallery`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "The Farmer's Kitchen Gallery - Food and Ambience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gallery | The Farmer's Kitchen Shirwal",
    description:
      "Browse food photography, restaurant ambience and dining photos from The Farmer's Kitchen Shirwal.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <GalleryPage />;
}
