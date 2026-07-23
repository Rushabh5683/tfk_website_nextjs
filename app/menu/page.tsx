import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { MenuPage } from '@/components/pages/menu-page';

export const metadata: Metadata = {
  title: "Menu | Maharashtrian Thali, Punjabi, Chinese & More – The Farmer's Kitchen Shirwal",
  description:
    "Explore the full menu at The Farmer's Kitchen Shirwal — authentic Maharashtrian thali, Punjabi favorites, North Indian, tandoori, Chinese dishes and more. Veg and non-veg options. Open 11 AM to 11 PM.",
  keywords: [
    "The Farmer's Kitchen Menu Shirwal",
    'Maharashtrian Thali Shirwal',
    'Punjabi Food Shirwal',
    'Chinese Restaurant Shirwal',
    'North Indian Food Shirwal',
    'Tandoori Restaurant Shirwal',
    'Veg Non Veg Menu Shirwal',
    'Highway Restaurant Food Menu',
    'Best Thali Shirwal',
    'Butter Chicken Shirwal',
    'Dal Makhani Shirwal',
    'Biryani Shirwal',
  ],
  alternates: { canonical: `${siteConfig.url}/menu` },
  openGraph: {
    title: "Menu | Authentic Multi-Cuisine Dishes – The Farmer's Kitchen Shirwal",
    description:
      "Explore our full menu — Maharashtrian thali, Punjabi classics, Chinese delights, tandoori specialities, and authentic North Indian dishes. Veg & non-veg options daily.",
    url: `${siteConfig.url}/menu`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "The Farmer's Kitchen Menu - Authentic Multi-Cuisine",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Menu | The Farmer's Kitchen Shirwal",
    description:
      "Authentic Maharashtrian thali, Punjabi, North Indian & Chinese dishes. Open 11 AM - 11 PM.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <MenuPage />;
}
