import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Waves,
  Sun,
  UtensilsCrossed,
  Sailboat,
  ChevronDown,
} from "lucide-react";
import { heroImages, rooms, amenities, galleryImages, site } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import Stars from "@/components/Stars";

const stats = [
  { icon: Waves, big: "50 m", small: "from bed to bay" },
  { icon: Sun, big: "300+", small: "sunny days a year" },
  { icon: UtensilsCrossed, big: "Farm-to-table", small: "Filipino kitchen" },
  { icon: Sailboat, big: "4 lagoon tours", small: "on private bangkas" },
];

export default function HomePage() {
  const featured = [
    rooms.find((r) => r.slug === "deluxe-ocean-room")!,
    rooms.find((r) => r.slug === "beachfront-suite")!,
    rooms.find((r) => r.slug === "villa-dalisay")!,
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-svh min-h-[600px] items-center justify-center overflow-hidden">
        <Image
          src={heroImages.home}
          alt="Turquoise water and white sand at Dalisay Cove, El Nido"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/50 via-ocean-950/20 to-ocean-950/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <Reveal direction="fade">
            <p className="text-xs uppercase tracking-[0.45em] text-gold-300 sm:text-sm">
              El Nido · Palawan · Philippines
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-sand-50 sm:text-7xl lg:text-8xl">
              Where the island
              <span className="block italic text-gold-300">breathes.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand-100/90 sm:text-lg">
              A small beachfront resort with a handful of rooms, one
              extraordinary villa, and the clearest water you have ever waded
              into.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="w-full rounded-full bg-gold-500 px-9 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ocean-950 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30 sm:w-auto"
              >
                Book Your Escape
              </Link>
              <Link
                href="/rooms"
                className="w-full rounded-full border border-sand-50/60 px-9 py-4 text-sm uppercase tracking-[0.2em] text-sand-50 backdrop-blur-sm transition-all hover:border-gold-300 hover:text-gold-300 sm:w-auto"
              >
                Explore Rooms
              </Link>
            </div>
          </Reveal>
        </div>

        <ChevronDown className="absolute bottom-8 left-1/2 z-10 h-7 w-7 -translate-x-1/2 animate-bounce text-sand-50/70" />
      </section>

      {/* Welcome */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="animate-floaty absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-sand-50 shadow-2xl sm:block lg:-right-10">
                <div className="relative aspect-square">
                  <Image
                    src={galleryImages[3].src}
                    alt={galleryImages[3].alt}
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500">
              Welcome to {site.name}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ocean-950 sm:text-4xl lg:text-[2.75rem]">
              Small by design.
              <br />
              Unforgettable by nature.
            </h2>
            <p className="mt-6 leading-relaxed text-ocean-900/70">
              Tucked into a quiet cove near Lio Beach, Dalisay Cove is not a
              mega-resort — and that is the whole point. With just a handful of
              rooms, suites, and one signature pool villa, every guest is a
              name, not a number. Days here begin with sunrise over Bacuit Bay
              and end with rum by a beach fire.
            </p>
            <p className="mt-4 leading-relaxed text-ocean-900/70">
              <em className="font-display text-ocean-900">Dalisay</em> means
              &ldquo;pure&rdquo; in Filipino. It is the standard we hold for our
              water, our food, and our welcome.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-sand-200 pt-8 text-center sm:text-left">
              {[
                ["12", "Rooms & suites"],
                ["1", "Signature villa"],
                ["50m", "To the water"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="font-display text-4xl text-ocean-950">{num}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ocean-900/60">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ocean-800 transition-colors hover:text-gold-600"
            >
              Our story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured rooms */}
      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Stay With Us"
            title="Rooms, suites & the villa"
            subtitle="Five ways to fall asleep to the sound of the sea — from garden bungalows to a private-pool villa on the point."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((room, i) => (
              <Reveal key={room.slug} delay={i * 0.12}>
                <Link
                  href={`/booking?room=${room.slug}`}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-lg shadow-ocean-950/5 transition-shadow hover:shadow-2xl hover:shadow-ocean-950/15"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-ocean-950/80 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-gold-300 backdrop-blur-sm">
                      {room.kind}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-ocean-950">
                      {room.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ocean-900/70">
                      {room.shortDescription}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-sand-200 pt-4">
                      <p className="text-sm text-ocean-900/60">
                        from{" "}
                        <span className="font-display text-xl text-ocean-950">
                          ₱{room.pricePHP.toLocaleString()}
                        </span>
                        /night
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-gold-600">
                        Book
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 rounded-full border border-ocean-900/25 px-8 py-3.5 text-sm uppercase tracking-[0.2em] text-ocean-900 transition-all hover:border-ocean-900 hover:bg-ocean-900 hover:text-sand-50"
            >
              View all rooms & rates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="The Dalisay Days"
            title="More than a place to sleep"
            subtitle="Everything you came to the Philippines for, arranged from your doorstep."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity, i) => (
              <Reveal key={amenity.title} delay={(i % 3) * 0.12}>
                <div className="group relative h-80 overflow-hidden rounded-3xl">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl text-sand-50">
                      {amenity.title}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-sand-100/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden bg-ocean-900 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 text-center text-sand-50 sm:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.small} delay={i * 0.1}>
              <stat.icon
                className="mx-auto h-8 w-8 text-gold-400"
                strokeWidth={1.5}
              />
              <p className="mt-4 font-display text-2xl sm:text-3xl">{stat.big}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-sand-200/70">
                {stat.small}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-ocean-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Guest Stories"
            title="Loved from Manila to Berlin"
            light
          />
          <Reveal className="mt-6 flex items-center justify-center gap-3">
            <Stars rating={5} className="h-5 w-5" />
            <p className="text-sm text-sand-200/80">
              4.9 / 5 from 300+ verified stays
            </p>
          </Reveal>
        </div>
        <Reveal direction="fade" className="mt-12">
          <ReviewsMarquee />
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="The Cove in Pictures"
            title="See it. Then come see it."
          />
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 px-3 sm:grid-cols-4">
          {galleryImages.map((image, i) => (
            <Reveal key={image.src} direction="zoom" delay={(i % 4) * 0.08}>
              <div
                className={`group relative overflow-hidden rounded-2xl ${
                  i % 4 === 1 || i % 4 === 2 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image
          src={galleryImages[4].src}
          alt="Sunset over Bacuit Bay"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ocean-950/70" />
        <div className="relative mx-auto max-w-3xl px-5 py-28 text-center lg:py-36">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-300">
              The tide is right
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-sand-50 sm:text-5xl">
              Your island chapter starts here
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sand-100/85">
              Direct bookings get our best rate, free airport transfers on 3+
              night stays, and a welcome buko waiting at check-in.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="w-full rounded-full bg-gold-500 px-9 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ocean-950 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30 sm:w-auto"
              >
                Check Availability
              </Link>
              <Link
                href="/contact"
                className="w-full rounded-full border border-sand-50/60 px-9 py-4 text-sm uppercase tracking-[0.2em] text-sand-50 transition-all hover:border-gold-300 hover:text-gold-300 sm:w-auto"
              >
                Send an Inquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
