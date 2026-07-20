import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ph } from "@/lib/images";
import { testimonials } from "@/lib/site";
import { stays } from "@/lib/data/stays";
import { experiences } from "@/lib/data/experiences";
import { packages } from "@/lib/data/packages";
import { journal } from "@/lib/data/journal";
import { galleryItems } from "@/lib/data/gallery";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import StayCard from "@/components/StayCard";
import ExperienceCard from "@/components/ExperienceCard";
import PackageCard from "@/components/PackageCard";
import JournalCard from "@/components/JournalCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";

const trustSignals = [
  {
    title: "Private mountain villas",
    text: "A small collection of standalone stays, each opening to its own stretch of ridge and sky.",
  },
  {
    title: "Wellness-led stays",
    text: "Forest bathing, breathwork, and warm-water rituals woven gently into every itinerary.",
  },
  {
    title: "Highland Filipino dining",
    text: "Fire, smoke, and mountain harvests at Sulo — our hearth-driven highland restaurant.",
  },
  {
    title: "Concierge arrival support",
    text: "From city gateway to villa door, every transfer is quietly arranged before you ask.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust / atmosphere strip */}
      <section
        aria-label="What defines Amara Ridge"
        className="relative border-y border-mist-100/10 bg-pine-900"
      >
        <div className="mx-auto grid max-w-7xl gap-px sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal, i) => (
            <Reveal key={signal.title} delay={i * 0.08} className="h-full">
              <div className="h-full border-mist-100/10 px-7 py-10 sm:border-l first:sm:border-l-0 lg:px-8 lg:py-12">
                <p className="font-display text-lg font-light text-linen-200">
                  {signal.title}
                </p>
                <p className="mt-3 text-sm font-light leading-relaxed text-mist-100/55">
                  {signal.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="grain relative overflow-hidden py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:px-10">
          <Reveal direction="left" className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.45em] text-ember-500">
              The Sanctuary
            </p>
            <div className="rule-ember mt-4" />
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-cream-50 sm:text-5xl lg:text-6xl">
              Where the clouds
              <span className="block italic text-linen-200">
                slow everything down
              </span>
            </h2>
            <p className="mt-7 text-base font-light leading-relaxed text-mist-100/75">
              Set in the cool upper reaches of the Philippine highlands, Amara
              Ridge is built for slow mornings, quiet reconnection, and
              evenings by firelight. Every villa opens toward mist, pine, and
              mountain air — with Filipino warmth woven into every detail.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-mist-100/75">
              There are no schedules here worth keeping. The fog lifts when it
              lifts. Coffee is poured when you wake. And the mountain, as our
              guests like to say, sets the pace.
            </p>
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ember-400 transition-colors hover:text-ember-500"
            >
              Read our story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
          <Reveal direction="right" className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={ph.marlboroHill}
                alt="Mist moving through the green ridges of the Cordillera"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/40 to-transparent" />
            </div>
            <p className="mt-4 text-right text-[10px] uppercase tracking-[0.3em] text-taupe-400">
              Morning fog on the ridge line
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured stays */}
      <section className="relative bg-pine-900 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Signature Stays"
              title="Villas, suites, and cabins above the clouds"
              intro="Each stay is a private, standalone retreat — no corridors, no crowds, nothing between you and the view."
            />
            <Reveal delay={0.2}>
              <Button href="/stays" variant="outline" className="hidden lg:inline-flex">
                All Stays <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {stays.slice(0, 4).map((stay, i) => (
              <StayCard key={stay.slug} stay={stay} index={i} />
            ))}
          </div>
          <Reveal className="mt-12 text-center lg:hidden">
            <Button href="/stays" variant="outline">
              View All Stays <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Featured experiences */}
      <section className="grain relative py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Experiences"
              title="Days shaped by mist, fire, and mountain time"
              intro="Nothing is mandatory. Everything is worth waking for."
            />
            <Reveal delay={0.2}>
              <Button href="/experiences" variant="outline" className="hidden lg:inline-flex">
                All Experiences <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.slice(0, 3).map((exp, i) => (
              <ExperienceCard key={exp.slug} experience={exp} index={i} />
            ))}
          </div>
          <Reveal className="mt-12 text-center lg:hidden">
            <Button href="/experiences" variant="outline">
              View All Experiences <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Wellness teaser */}
      <section className="relative overflow-hidden border-y border-mist-100/10">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[24rem] lg:min-h-[34rem]">
            <Image
              src={ph.baguioPines}
              alt="Late golden light falling through Baguio pines"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-pine-950/20" />
          </div>
          <div className="flex items-center bg-pine-900 px-5 py-16 lg:px-16 lg:py-24">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.45em] text-ember-500">
                Wellness
              </p>
              <div className="rule-ember mt-4" />
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-cream-50 sm:text-5xl">
                The art of doing very little, very well
              </h2>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-mist-100/70">
                Forest bathing under the pines, breathwork on the ridge deck,
                hilot-inspired rituals, and warm water against cool highland
                air. Wellness here is not a schedule to keep — it is the
                absence of one.
              </p>
              <Button href="/wellness" variant="ghost" className="mt-9">
                Explore Wellness
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dining teaser */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="order-2 flex items-center bg-mist-100 px-5 py-16 text-pine-950 lg:order-1 lg:px-16 lg:py-24">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.45em] text-clay-600">
                Highland Dining
              </p>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] sm:text-5xl">
                Sulo at the Ridge
              </h2>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-pine-950/70">
                Sulo — the Filipino torch — is a restaurant built around fire:
                seasonal mountain produce, native grains, smoke, and slow
                breakfasts served above the clouds.
              </p>
              <Button href="/dining" variant="outlineDark" className="mt-9">
                See the Menu
              </Button>
            </Reveal>
          </div>
          <div className="relative order-1 min-h-[24rem] lg:order-2 lg:min-h-[34rem]">
            <Image
              src={ph.tagaytayBreakfast}
              alt="A slow terrace breakfast overlooking a green highland valley"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="grain relative border-t border-mist-100/10 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="Gallery"
            title="Scenes from the ridge"
            align="center"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {galleryItems.slice(0, 8).map((item, i) => (
              <Reveal key={item.src} direction="zoom" delay={(i % 4) * 0.08}>
                <Link
                  href="/gallery"
                  aria-label={`Open gallery — ${item.alt}`}
                  className="group relative block overflow-hidden"
                >
                  <div
                    className={`relative ${i % 4 === 1 || i % 4 === 2 ? "aspect-[3/4]" : "aspect-square"}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Button href="/gallery" variant="outline">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Packages preview */}
      <section className="relative bg-pine-900 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Seasonal Offers"
              title="Stays composed for you"
              intro="Rates are shared upon request through our concierge."
            />
            <Reveal delay={0.2}>
              <Button href="/offers" variant="outline" className="hidden lg:inline-flex">
                All Offers <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {packages.slice(0, 2).map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} index={i} />
            ))}
          </div>
          <Reveal className="mt-12 text-center lg:hidden">
            <Button href="/offers" variant="outline">
              View All Offers <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-label="Guest words" className="grain relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="Guest Words"
            title="What the quiet sounds like"
            intro="Illustrative guest impressions, written for this concept."
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                context={t.context}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Journal preview */}
      <section className="relative border-t border-mist-100/10 bg-pine-900 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader eyebrow="The Ridge Journal" title="Notes from the mountain" />
            <Reveal delay={0.2}>
              <Link
                href="/journal"
                className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ember-400 transition-colors hover:text-ember-500 lg:flex"
              >
                All stories <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {journal.slice(0, 3).map((post, i) => (
              <JournalCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
