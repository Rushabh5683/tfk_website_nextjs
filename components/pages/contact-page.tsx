'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, useInView } from 'framer-motion';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  CalendarDays,
  Users,
  Send,
  CheckCircle2,
  MessageCircle,
  Loader2
} from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/motion/motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { siteConfig } from '@/lib/site';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid 10-digit phone number')
    .max(14, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  guests: z.string().min(1, 'Please select number of guests'),
  occasion: z.string().optional(),
  message: z.string().max(500, 'Message should be under 500 characters').optional(),
});

type FormValues = z.infer<typeof schema>;

const timeSlots = [
  '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '8+'];

const contactCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [siteConfig.location.address],
    action: { label: 'Open in Maps', href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.location.mapQuery)}` },
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [siteConfig.phone.primary],
    action: { label: 'Call Now', href: `tel:${siteConfig.phone.primaryRaw}` },
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: [siteConfig.hours.days, `${siteConfig.hours.open} – ${siteConfig.hours.close}`],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@thefarmerskitchen.in'],
    action: { label: 'Send Email', href: 'mailto:hello@thefarmerskitchen.in' },
  },
];

export function ContactPage() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      occasion: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    setShowModal(true);

    const phone = "+918888833676";

    const formattedDate = new Date(values.date).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

    const message = `
━━━━━━━━━━━━━━━━━━━━━━

*THE FARMER'S KITCHEN*

*TABLE RESERVATION*

━━━━━━━━━━━━━━━━━━━━━━

*Customer*

Name
${values.name}

Phone
${values.phone}

Email
${values.email}

━━━━━━━━━━━━━━━━━━━━━━

*Reservation*

Date
${formattedDate}

Time
${values.time}

Guests
${values.guests}

━━━━━━━━━━━━━━━━━━━━━━

*Occasion*

${values.occasion || "No Occasion Selected"}

━━━━━━━━━━━━━━━━━━━━━━

*Special Requests*

${values.message || "No Special Requests"}

━━━━━━━━━━━━━━━━━━━━━━

Please confirm my reservation.

Thank you ❤️
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    await new Promise((resolve) =>
      setTimeout(resolve, 2200)
    );

    window.open(url, "_blank");

    setLoading(false);
    setSubmitted(true);

    form.reset();

    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Create Delicious Memories"
        description="Whether it's a family dinner, birthday celebration, business gathering, or weekend outing, we're ready to make your visit memorable with authentic flavors and warm hospitality."
        image="/images/New Dinning Area.webp"
        breadcrumb="Contact"
      />



      <section className="pb-20 md:pb-28 " style={{ marginTop: '4rem' }}>
        <div className="container-mx container-px">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border bg-card p-6 premium-shadow sm:p-10">
                <SectionHeading
                  eyebrow="Reservation Form"
                  title="Book Your Experience"
                  description="Fill in your details and our team will confirm your reservation within a few hours."
                  align="left"
                />

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 88888 33676" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-5 sm:grid-cols-3">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                              <Input type="date" min={today} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((t) => (
                                  <SelectItem key={t} value={t}>{t}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Guests</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {guestOptions.map((g) => (
                                  <SelectItem key={g} value={g}>{g}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="occasion"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Occasion (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Birthday, anniversary, family dinner..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests (optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any dietary preferences, seating requests or notes for our team..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={loading}
                      className="h-12 w-full rounded-full"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Preparing Reservation...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Request Reservation
                        </>
                      )}
                    </Button>
                    {submitted && (
                      <div>
                        <p className="font-semibold">
                          Reservation Ready!
                        </p>

                        <p className="mt-1">
                          WhatsApp has been opened.
                          Simply tap <strong>Send</strong> to complete your reservation.
                        </p>
                      </div>
                    )}
                  </form>
                </Form>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-6">
                <Reveal>
                  <div className="overflow-hidden rounded-3xl border border-border bg-card premium-shadow">
                    <div className="aspect-[4/3] w-full">
                      <iframe
                        title="The Farmer's Kitchen location map"
                        src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.location.mapQuery)}&output=embed`}
                        className="h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-serif text-lg font-semibold text-ink-700">
                            The Farmer&apos;s Kitchen
                          </p>
                          <p className="text-sm text-ink-500">{siteConfig.location.address}</p>
                          <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.location.mapQuery)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline mt-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-600"
                          >
                            Get Directions
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <a
                    href={`https://wa.me/${siteConfig.phone.primaryRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-3xl border border-[#25D366]/30 bg-[#25D366]/5 p-6 transition-all hover:bg-[#25D366]/10"
                  >
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-serif text-lg font-semibold text-ink-700">Chat on WhatsApp</p>
                        <p className="text-sm text-ink-500">Quick reservations &amp; enquiries</p>
                      </div>
                    </div>
                    <Send className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-1" />
                  </a>
                </Reveal>

                <Reveal delay={0.25}>
                  <div className="rounded-3xl border border-border bg-ink-700 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">
                      Plan Your Visit
                    </p>
                    <h3 className="mt-3 font-serif text-2xl font-semibold">
                      A premium dining experience awaits
                    </h3>
                    <p className="mt-3 text-sm text-white/70">
                      Walk-ins are welcome, but reservations are recommended on weekends and holidays to ensure the best experience.
                    </p>
                    <div className="mt-5 flex items-center gap-3 text-sm text-white/80">
                      <CalendarDays className="h-4 w-4 text-brand-400" />
                      <span>{siteConfig.hours.days}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-sm text-white/80">
                      <Clock className="h-4 w-4 text-brand-400" />
                      <span>{siteConfig.hours.open} – {siteConfig.hours.close}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-sm text-white/80">
                      <Users className="h-4 w-4 text-brand-400" />
                      <span>Avg. ₹{siteConfig.costForTwo} for two</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={showModal}>

        <DialogContent className="max-w-md rounded-3xl">

          <div className="py-8 text-center">

            {loading ? (

              <>

                <Loader2 className="mx-auto h-14 w-14 animate-spin text-brand-500" />

                <h2 className="mt-6 text-2xl font-bold">

                  Preparing Your Reservation

                </h2>

                <p className="mt-3 text-muted-foreground">

                  Please wait...

                  We are preparing your reservation details.

                </p>

              </>

            ) : (

              <>

                <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />

                <h2 className="mt-6 text-2xl font-bold">

                  Reservation Ready!

                </h2>

                <p className="mt-3 text-muted-foreground">

                  WhatsApp has opened successfully.

                </p>

                <p className="font-semibold mt-2">

                  Simply tap SEND to complete your reservation.

                </p>

              </>

            )}

          </div>

        </DialogContent>

      </Dialog>
    </>
  );
}
