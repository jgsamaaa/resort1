import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ph } from "@/lib/images";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact & Concierge",
  description:
    "Reach the Amara Ridge concierge — trip planning, events, press, and every question about the fog schedule.",
};

const faqs = [
  {
    q: "Is Amara Ridge a real resort?",
    a: "Not yet — it is a fictional concept website. Every photograph, however, is real and was taken in the Philippines.",
  },
  {
    q: "How cold does it get?",
    a: "Highland evenings call for a sweater and reward you for bringing it. Villas hold their warmth with fireplaces and thick duvets.",
  },
  {
    q: "Can you host proposals or small events?",
    a: "The concierge quietly specializes in them. Write to us with the date you have in mind.",
  },
];

const channels = [
  { icon: Phone, title: "Call or text", lines: [site.phone] },
  { icon: Mail, title: "Email", lines: [site.email] },
  { icon: MapPin, title: "Find us", lines: [site.address] },
  { icon: Clock, title: "Hours", lines: [site.concierge] },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        image={ph.sagadaValley}
        imageAlt="A lush green highland valley under soft light"
        eyebrow="Contact"
        title="Speak with the concierge"
        subtitle="Real humans, mountain time zone, remarkably unhurried — and still quick to reply."
      />

      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-5 lg:px-10">
          <div className="space-y-5 lg:col-span-2">
            {channels.map((channel, i) => (
              <Reveal key={channel.title} delay={i * 0.08}>
                <div className="flex gap-5 border border-mist-100/10 bg-forest-800/30 p-6">
                  <channel.icon className="mt-1 h-5 w-5 shrink-0 text-ember-500" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-lg font-light text-cream-50">
                      {channel.title}
                    </h3>
                    {channel.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm font-light text-mist-100/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="border border-mist-100/10 bg-pine-950/50 p-6">
                <h3 className="text-[11px] uppercase tracking-[0.35em] text-ember-500">
                  Quick answers
                </h3>
                <dl className="mt-5 space-y-5">
                  {faqs.map((faq) => (
                    <div key={faq.q}>
                      <dt className="font-display text-lg font-light text-linen-200">
                        {faq.q}
                      </dt>
                      <dd className="mt-1.5 text-sm font-light leading-relaxed text-mist-100/65">
                        {faq.a}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/booking"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ember-400 transition-colors hover:text-ember-500"
                >
                  Ready to reserve instead?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
