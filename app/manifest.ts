import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Farmer's Kitchen Shirwal",
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#FFFFFF',
    theme_color: '#FF7A00',
    icons: [
      {
        src: '/circle_logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/circle_logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['food', 'restaurant', 'lifestyle'],
    lang: 'en-IN',
    dir: 'ltr',
    prefer_related_applications: false,
    shortcuts: [
      {
        name: 'View Menu',
        url: '/menu',
        description: 'Browse our full menu',
      },
      {
        name: 'Reserve a Table',
        url: '/contact',
        description: 'Book your dining experience',
      },
      {
        name: 'Gallery',
        url: '/gallery',
        description: 'See our food and ambience',
      },
    ],
  };
}
