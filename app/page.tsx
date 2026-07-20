import Image from "next/image";
import {
  Flame,
  Wind,
  Sparkles,
  Waves,
  ArrowRight,
  UtensilsCrossed,
} from "lucide-react";
import {
  trustSignals,
  storyImage,
  stays,
  experiences,
  wellness,
  wellnessBg,
  dining,
  arrival,
  locationImage,
  offers,
  testimonials,
  journal,
  finalCtaImage,
} from "@/lib/data";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import StayCard from "@/components/StayCard";
import ExperienceCard from "@/components/ExperienceCard";
import GalleryGrid from "@/components/GalleryGrid";
import OfferCard from "@/components/OfferCard";
import TestimonialCard from "@/components/TestimonialCard";

const wellnessIcons = [Wind, Sparkles, Flame, Waves];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 3 — Atmosphere strip */}
      <section aria-label="What defines Amara Ridge" className="relative border-y border-mist-100/10 bg-pine-900">
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

      {/* 4 — Brand story */}
      <section id="story" className="grain relative overflow-hidden py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:px-10">
          <Reveal direction="left" className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.45em] text-ember-500">
              The Sanctuary
            </p>
            <div className="rule-ember mt-4" />
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-cream-50 sm:text-5xl lg:text-6xl">
              Where the clouds
              <span className="block italic text-linen-200">slow everything down</span>
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
            <a
              href="#stay"
              className="group mt-9 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ember-400 transition-colors hover:text-ember-500"
            >
              Discover the villas
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </Reveal>
          <Reveal direction="right" className="lg:col-span-7">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={storyImage}
                  alt="A warm-lit mountain cabin among autumn pines"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/40 to-transparent" />
              </div>
              <p className="mt-4 text-right text-[10px] uppercase tracking-[0.3em] text-taupe-400">
                Evening light on the ridge — Amara Ridge concept imagery
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 — Signature stays */}
      <section id="stay" className="relative bg-pine-900 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Signature Stays"
              title="Four ways to live above the clouds"
              intro="Each stay is a private, standalone retreat — no corridors, no crowds, nothing between you and the view."
            />
            <Reveal delay={0.2}>
              <a
                href="#reserve"
                className="hidden border border-mist-100/25 px-8 py-3.5 text-[11px] uppercase tracking-[0.28em] text-mist-100 transition-all duration-300 hover:border-ember-400 hover:text-ember-400 lg:block"
              >
                Check Availability
              </a>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {stays.map((stay, i) => (
              <StayCard key={stay.name} stay={stay} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Experiences */}
      <section id="experiences" className="grain relative py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="Experiences"
            title="Days shaped by mist, fire, and mountain time"
            intro="Nothing is mandatory. Everything is worth waking for."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.title} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Wellness */}
      <section id="wellness" className="relative overflow-hidden py-24 lg:py-36">
        <Image
          src={wellnessBg}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950 via-pine-950/60 to-pine-950" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="Wellness"
            title="The art of doing very little, very well"
            intro={wellness.intro}
            align="center"
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="grid gap-6 sm:grid-cols-2">
              {wellness.practices.map((practice, i) => {
                const Icon = wellnessIcons[i % wellnessIcons.length];
                return (
                  <Reveal key={practice.title} delay={(i % 2) * 0.1}>
                    <div className="h-full border border-mist-100/10 bg-pine-950/50 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-ember-500/30">
                      <Icon className="h-6 w-6 text-ember-500" strokeWidth={1.25} />
                      <h3 className="mt-4 font-display text-xl font-light text-cream-50">
                        {practice.title}
                      </h3>
                      <p className="mt-2.5 text-sm font-light leading-relaxed text-mist-100/65">
                        {practice.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {wellness.images.map((image, i) => (
                  <div
                    key={image.src}
                    className={`relative overflow-hidden ${
                      i === 0 ? "aspect-[3/4]" : "mt-10 aspect-[3/4]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1.4s] hover:scale-[1.05]"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-8 border-l-2 border-ember-500/60 pl-5 text-sm font-light italic leading-relaxed text-linen-200/80">
                {wellness.detox}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8 — Dining */}
      <section id="dining" className="relative border-y border-mist-100/10 bg-mist-100 py-24 text-pine-950 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Highland Dining"
                title={dining.name}
                intro={dining.philosophy}
                tone="light"
              />
              <Reveal delay={0.15}>
                <ul className="mt-10 space-y-6">
                  {dining.menu.map((item) => (
                    <li key={item.name} className="border-b border-pine-950/10 pb-5">
                      <p className="font-display text-xl font-medium text-pine-950">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm font-light text-pine-950/60">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                  {dining.settings.map((setting) => (
                    <p
                      key={setting}
                      className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-clay-600"
                    >
                      <UtensilsCrossed className="h-3.5 w-3.5" />
                      {setting}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid h-full grid-cols-2 gap-4">
                <Reveal direction="right" className="col-span-2">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={dining.images[0].src}
                      alt={dining.images[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-[1.4s] hover:scale-[1.05]"
                    />
                  </div>
                </Reveal>
                {dining.images.slice(1).map((image, i) => (
                  <Reveal key={image.src} delay={i * 0.1}>
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 29vw"
                        className="object-cover transition-transform duration-[1.4s] hover:scale-[1.05]"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — Gallery */}
      <section id="gallery" className="grain relative py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="Gallery"
            title="Scenes from the ridge"
            align="center"
          />
          <div className="mt-14">
            <GalleryGrid />
          </div>
        </div>
      </section>

      {/* 10 — Location / arrival */}
      <section id="location" className="relative overflow-hidden bg-pine-900 py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={locationImage}
                alt="A green mountain valley beneath moving clouds"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 max-w-xs font-display text-2xl font-light italic text-cream-50">
                “Above the valley fog, below nothing at all.”
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="Location & Arrival"
              title="High in the Philippine highlands"
              intro={arrival.intro}
            />
            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-6">
                {arrival.points.map((point, i) => (
                  <li key={point.title} className="flex gap-5">
                    <span className="font-display text-lg font-light text-ember-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-lg text-linen-200">
                        {point.title}
                      </p>
                      <p className="mt-1 text-sm font-light leading-relaxed text-mist-100/60">
                        {point.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11 — Offers */}
      <section id="offers" className="grain relative py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="Seasonal Offers"
            title="Stays composed for you"
            intro="Three ways to give the mountain more than a night. Rates are shared upon request through our concierge."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {offers.map((offer, i) => (
              <OfferCard key={offer.name} offer={offer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 12 — Testimonials */}
      <section aria-label="Guest words" className="relative bg-pine-900 py-24 lg:py-32">
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

      {/* 13 — Journal */}
      <section id="journal" className="grain relative py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="The Ridge Journal"
              title="Notes from the mountain"
            />
            <Reveal delay={0.2}>
              <a
                href="#journal"
                className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ember-400 transition-colors hover:text-ember-500 lg:flex"
              >
                All stories <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {journal.map((article, i) => (
              <Reveal key={article.title} delay={(i % 3) * 0.1}>
                <article className="group cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-[1.06]"
                    />
                    <span className="absolute left-4 top-4 bg-pine-950/70 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.25em] text-linen-200 backdrop-blur-sm">
                      {article.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-light leading-snug text-cream-50 transition-colors duration-300 group-hover:text-ember-400">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-light leading-relaxed text-mist-100/60">
                    {article.excerpt}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 14 — Final CTA */}
      <section id="reserve" className="relative overflow-hidden">
        <Image
          src={finalCtaImage}
          alt="Starlit sky over dark mountain silhouettes"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-pine-950/75" />
        <div className="grain relative mx-auto max-w-3xl px-5 py-32 text-center lg:py-44">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.5em] text-ember-400">
              Reservations
            </p>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.02] text-cream-50 sm:text-6xl lg:text-7xl">
              Let the mountain
              <span className="block italic text-linen-200">set the pace.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base font-light leading-relaxed text-mist-100/80">
              Reserve a private highland stay shaped around misty mornings,
              firelit evenings, and time that finally feels unhurried.
            </p>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#top"
                className="w-full bg-ember-500 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-pine-950 transition-all duration-300 hover:bg-ember-400 hover:shadow-xl hover:shadow-ember-500/20 sm:w-auto"
              >
                Reserve Your Stay
              </a>
              <a
                href="mailto:reserve@amararidge.ph"
                className="w-full border border-mist-100/40 px-10 py-4 text-[11px] uppercase tracking-[0.28em] text-mist-100 transition-all duration-300 hover:border-ember-400 hover:text-ember-400 sm:w-auto"
              >
                Speak With Concierge
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
