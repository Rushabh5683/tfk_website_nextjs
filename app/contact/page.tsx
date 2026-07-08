import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/contact-page';

export const metadata: Metadata = {
  title: 'Contact & Reservations | The Farmer\'s Kitchen Shirwal',
  description:
    "Reserve a table at The Farmer's Kitchen Shirwal. Call us, WhatsApp us, or fill out the reservation form. Open daily 11 AM – 11 PM on the Shirwal highway.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Contact & Reservations | The Farmer's Kitchen Shirwal",
    description:
      "Reserve a table at The Farmer's Kitchen Shirwal. Call us, WhatsApp us, or fill out the reservation form.",
    url: '/contact',
  },
};

export default function Page() {
  return <ContactPage />;
}
