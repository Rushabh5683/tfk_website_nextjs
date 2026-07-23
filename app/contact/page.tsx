import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { ContactPage } from '@/components/pages/contact-page';

export const metadata: Metadata = {
  title: "Contact & Table Reservations | The Farmer's Kitchen Shirwal – Call +91 88888 33676",
  description:
    "Reserve a table at The Farmer's Kitchen Shirwal. Call +91 88888 33676 or WhatsApp us to book. Located on NH-48 Pune Bangalore Highway, Shirwal, Maharashtra. Open daily 11 AM – 11 PM. Walk-ins welcome.",
  keywords: [
    "Reserve Table The Farmer's Kitchen Shirwal",
    'Restaurant Reservation Shirwal',
    'Book Table Shirwal Restaurant',
    'Contact Restaurant Shirwal',
    'Restaurant Phone Number Shirwal',
    'Highway Restaurant Reservation Maharashtra',
    'WhatsApp Restaurant Booking Shirwal',
    'Table Booking Shirwal',
    'Restaurant Near Pune Bangalore Highway',
    'NH-48 Restaurant Reservation',
  ],
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact & Reserve | The Farmer's Kitchen Shirwal",
    description:
      "Reserve a table at The Farmer's Kitchen. Call +91 88888 33676, WhatsApp us or fill the reservation form. NH-48 Pune Bangalore Highway, Shirwal. Open 11 AM – 11 PM daily.",
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Reserve a Table at The Farmer's Kitchen Shirwal",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact & Reserve | The Farmer's Kitchen Shirwal",
    description:
      "Reserve a table at The Farmer's Kitchen. Call +91 88888 33676. NH-48 Pune Bangalore Highway, Open 11 AM – 11 PM.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ContactPage />;
}
