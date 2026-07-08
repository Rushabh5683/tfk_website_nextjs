import './globals.css';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { FloatingButtons } from '@/components/shared/floating-buttons';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "The Farmer's Kitchen Shirwal | Best Multi-Cuisine Family Restaurant",
    template: "%s | The Farmer's Kitchen Shirwal",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: "The Farmer's Kitchen" }],
  creator: "The Farmer's Kitchen",
  publisher: "The Farmer's Kitchen",
  applicationName: "The Farmer's Kitchen",
  category: 'Restaurant',
  alternates: {
    canonical: '/',
  },
  themeColor: '#FF7A00',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: "The Farmer's Kitchen",
    title: "The Farmer's Kitchen Shirwal | Best Multi-Cuisine Family Restaurant",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "The Farmer's Kitchen Shirwal - Premium Multi-Cuisine Family Dining",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Farmer's Kitchen Shirwal | Best Multi-Cuisine Family Restaurant",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@thefarmerskitchen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  other: {
    'google-site-verification': 'google-site-verification-token',
  },
};

const jsonLdRestaurant = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "The Farmer's Kitchen",
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  url: siteConfig.url,
  telephone: siteConfig.phone.primary,
  servesCuisine: siteConfig.cuisines,
  priceRange: '₹₹',
  acceptsReservations: 'True',
  starRating: { '@type': 'Rating', ratingValue: '4.2' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: siteConfig.rating,
    reviewCount: siteConfig.reviewCount,
    bestRating: '5',
    worstRating: '1',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.location.address,
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    postalCode: siteConfig.location.postalCode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.location.geo.lat,
    longitude: siteConfig.location.geo.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '11:00',
      closes: '23:00',
    },
  ],
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Maharashtrian',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Mutton Rogan Josh' },
          { '@type': 'MenuItem', name: 'Chicken Sukka' },
          { '@type': 'MenuItem', name: 'Maharashtrian Thali' },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Punjabi',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Paneer Kadhai' },
          { '@type': 'MenuItem', name: 'Butter Chicken' },
          { '@type': 'MenuItem', name: 'Dal Makhani' },
        ],
      },
    ],
  },
};

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "The Farmer's Kitchen",
  telephone: [siteConfig.phone.primary],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Shirwal',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRestaurant) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <SonnerToaster position="top-right" />
      </body>
    </html>
  );
}
