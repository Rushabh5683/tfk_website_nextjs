import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/about-page';

export const metadata: Metadata = {
  title: 'About Us | The Farmer\'s Kitchen Shirwal',
  description:
    "Discover the story of The Farmer's Kitchen — Shirwal's premium multi-cuisine family dining destination, blending authentic regional recipes with warm hospitality.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About Us | The Farmer's Kitchen Shirwal",
    description:
      "Discover the story of The Farmer's Kitchen — Shirwal's premium multi-cuisine family dining destination.",
    url: '/about',
  },
};

export default function Page() {
  return <AboutPage />;
}
