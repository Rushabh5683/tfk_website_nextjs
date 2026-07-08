import type { Metadata } from 'next';
import { GalleryPage } from '@/components/pages/gallery-page';

export const metadata: Metadata = {
  title: 'Gallery | Food, Ambience & Events at The Farmer\'s Kitchen',
  description:
    "Browse the gallery of The Farmer's Kitchen Shirwal — beautifully plated signature dishes, restaurant ambience, private events and customer celebrations.",
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: "Gallery | The Farmer's Kitchen Shirwal",
    description:
      "Browse the gallery of The Farmer's Kitchen Shirwal — beautifully plated signature dishes, restaurant ambience and customer events.",
    url: '/gallery',
  },
};

export default function Page() {
  return <GalleryPage />;
}
