import type { Metadata } from 'next';
import { MenuPage } from '@/components/pages/menu-page';

export const metadata: Metadata = {
  title: 'Menu | Maharashtrian, Punjabi, Chinese, Mughlai & More',
  description:
    "Explore the full menu at The Farmer's Kitchen Shirwal — authentic Maharashtrian, Punjabi, North Indian, Chinese and Mughlai dishes, kebabs and tandoori specialities.",
  alternates: { canonical: '/menu' },
  openGraph: {
    title: "Menu | The Farmer's Kitchen Shirwal",
    description:
      "Explore the full menu at The Farmer's Kitchen Shirwal — authentic Maharashtrian, Punjabi, North Indian, Chinese and Mughlai dishes.",
    url: '/menu',
  },
};

export default function Page() {
  return <MenuPage />;
}
