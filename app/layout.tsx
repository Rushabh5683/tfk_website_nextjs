import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { FloatingButtons } from '@/components/shared/floating-buttons';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';

// ── Root metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "The Farmer's Kitchen Shirwal | Best Multi-Cuisine Family Restaurant near Pune",
    template: "%s | The Farmer's Kitchen Shirwal",
  },
  description: siteConfig.description,
  keywords: [
    ...siteConfig.keywords,
    'Pure Veg Restaurant Shirwal',
    'Restaurant near Pune Bangalore Highway',
    'NH-48 Restaurant',
    'Shirwal Highway Restaurant',
    'Best Veg Non Veg Restaurant Shirwal',
    'Family Restaurant Maharashtra',
    'Dhaba near Shirwal',
    'Restaurant near Satara',
    'Authentic Indian food Shirwal',
    'Thali restaurant Shirwal',
  ],
  authors: [{ name: "The Farmer's Kitchen", url: siteConfig.url }],
  creator: "The Farmer's Kitchen",
  publisher: "The Farmer's Kitchen",
  applicationName: "The Farmer's Kitchen",
  category: 'Restaurant',
  themeColor: '#FF7A00',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: "The Farmer's Kitchen",
    title: "The Farmer's Kitchen Shirwal | Best Multi-Cuisine Family Restaurant near Pune",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "The Farmer's Kitchen Shirwal - Premium Multi-Cuisine Family Dining near Pune Bangalore Highway",
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Farmer's Kitchen Shirwal | Best Multi-Cuisine Family Restaurant",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        alt: "The Farmer's Kitchen Shirwal",
      },
    ],
    creator: '@thefarmerskitchen',
    site: '@thefarmerskitchen',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
  icon: '/favicon.ico',
  shortcut: '/favicon.ico',
  apple: '/apple-touch-icon.png',
},
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "The Farmer's Kitchen",
  },
  other: {
    'google-site-verification': 'google-site-verification-token',
    'msapplication-TileColor': '#FF7A00',
    'msapplication-config': '/browserconfig.xml',
  },
};

// ── Restaurant JSON-LD ────────────────────────────────────────────────────────
const jsonLdRestaurant = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${siteConfig.url}/#restaurant`,
  name: "The Farmer's Kitchen",
  alternateName: 'TFK Shirwal',
  image: [
    `${siteConfig.url}${siteConfig.ogImage}`,
    `${siteConfig.url}/images/New%20Dinning%20Area.webp`,
    `${siteConfig.url}/images/New%20Dinning%20Area%202.webp`,
  ],
  logo: `${siteConfig.url}/circle_logo.png`,
  url: siteConfig.url,
  telephone: '+91-8888833676',
  email: 'hello@thefarmerskitchen.in',
  servesCuisine: [
    'Maharashtrian',
    'Punjabi',
    'North Indian',
    'Chinese',
    'Multi-Cuisine',
  ],
  priceRange: '₹₹',
  acceptsReservations: 'True',
  hasMap: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.location.mapQuery)}`,
  menu: `${siteConfig.url}/menu`,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(siteConfig.rating),
    reviewCount: String(siteConfig.reviewCount),
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
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday',
      ],
      opens: '11:00',
      closes: '23:00',
    },
  ],
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/contact`,
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Table Reservation',
    },
  },
};

// ── LocalBusiness JSON-LD ─────────────────────────────────────────────────────
const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'FoodEstablishment'],
  '@id': `${siteConfig.url}/#localbusiness`,
  name: "The Farmer's Kitchen",
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: '+91-8888833676',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shirwal, Satara District',
    addressLocality: 'Shirwal',
    addressRegion: 'Maharashtra',
    postalCode: '412801',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.location.geo.lat,
    longitude: siteConfig.location.geo.lng,
  },
  openingHours: siteConfig.hours.schema,
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI',
  priceRange: '₹₹',
  image: `${siteConfig.url}/circle_logo.png`,
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch for Google Maps embed */}
        <link rel="dns-prefetch" href="//maps.google.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRestaurant) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Skip to main content – critical for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingButtons />
        <SonnerToaster position="top-right" richColors />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  );
}
