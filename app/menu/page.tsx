import type { Metadata } from 'next';
import { MenuPage } from '@/components/pages/menu-page';

export const metadata: Metadata = {
  title: 'Menu | Maharashtrian, Punjabi, Chinese & More',
  description:
    "Explore the full menu at The Farmer's Kitchen Shirwal — authentic Maharashtrian, Punjabi, North Indian, Chinese dishes and tandoori specialities.",
  alternates: { canonical: '/menu' },
  openGraph: {
    title: "Menu | The Farmer's Kitchen Shirwal",
    description:
      "Explore the full menu at The Farmer's Kitchen Shirwal — authentic Maharashtrian, Punjabi, North Indian and Chinese.",
    url: '/menu',
  },
};

export default function Page() {
  return <MenuPage />;
}
