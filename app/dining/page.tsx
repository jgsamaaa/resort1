import type { Metadata } from "next";
import Image from "next/image";
import { Flame, Coffee, UtensilsCrossed } from "lucide-react";
import { ph } from "@/lib/images";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Dining — Sulo at the Ridge",
  description:
    "Elevated Filipino highland dining: fire, smoke, mountain vegetables, native chicken, tablea cacao, and slow breakfasts above the clouds.",
};

const menu = [
  {
    name: "Charred mountain vegetables",
    detail: "coconut vinaigrette, toasted seeds, garden herbs",
  },
  {
    name: "Native chicken broth",
    detail: "ginger, lemongrass, wild mountain greens",
  },
  {
    name: "Longganisa breakfast",
    detail: "garlic rice, soft egg, cane vinegar — served until late morning",
  },
  {
    name: "Ember-grilled catch of the market",
    detail: "burnt calamansi, brown butter patis",
  },
  {
    name: "Smoked cacao tablea tart",
    detail: "stone-ground highland cacao, sea salt, cream",
  },
  {
    name: "Sunrise coffee service",
    detail: "single-origin Benguet beans, brewed at your terrace",
  },
];

const settings = [
  {
    icon: Coffee,
    title: "Private terrace breakfast",
    text: "The long breakfast is a house discipline: silog plates, fruit, thick tsokolate, and no second seating to make room for.",
    image: ph.tagaytayBreakfast,
    alt: "Breakfast on a terrace overlooking a misty green valley",
  },
  {
    icon: Flame,
    title: "Firepit dinner",
    text: "An ember bed built an hour before you sit, courses straight off the grill, and a sky that gets better as the plates empty.",
    image: ph.manilaGrill,
    alt: "Dinner cooking over live charcoal embers",
  },
  {
    icon: UtensilsCrossed,
    title: "Chef's tasting menu",
    text: "Six courses at the hearth counter, written by the morning harvest and narrated by the cooks who grew half of it.",
    image: ph.bananaLeafFeast,
    alt: "A kamayan feast arranged on banana leaves",
  },
];

export default function DiningPage() {
  return (
    <>
      <PageHero
        image={ph.tagaytayBreakfast}
        imageAlt="A slow terrace breakfast above a green highland valley"
        eyebrow="Highland Dining"
        title="Sulo at the Ridge"
        subtitle="Sulo — the Filipino torch — is a restaurant built around fire: seasonal mountain produce, native grains, smoke, and slow breakfasts served above the clouds."
      />

      {/* Philosophy + menu */}
      <section className="relative border-b border-pine-950/10 bg-mist-100 py-20 text-pine-950 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Philosophy"
              title="Written by the harvest, finished over embers"
              intro="The menu changes with the gardens and the market. What never changes: fire does the talking, and breakfast is never rushed."
              tone="light"
            />
            <Reveal delay={0.15}>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                <Image
                  src={ph.silogPlate}
                  alt="White rice, steamed okra, grilled eggplant, and salted egg"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.45em] text-clay-600">
                Sample Menu
              </p>
              <ul className="mt-8 space-y-7">
                {menu.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-6 border-b border-pine-950/10 pb-6"
                  >
                    <div>
                      <p className="font-display text-2xl font-medium text-pine-950">
                        {item.name}
                      </p>
                      <p className="mt-1.5 text-sm font-light text-pine-950/60">
                        {item.detail}
                      </p>
                    </div>
                    <span aria-hidden className="hidden h-px flex-1 bg-pine-950/15 sm:block" />
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm font-light italic text-pine-950/60">
                Menus are illustrative and seasonal. Dietary needs are met with
                enthusiasm, not tolerance — tell us ahead.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Settings */}
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="Ways to Dine"
            title="Three tables, one fire"
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {settings.map((setting, i) => (
              <Reveal key={setting.title} delay={(i % 3) * 0.1}>
                <article className="group h-full border border-mist-100/10 bg-forest-800/30">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={setting.image}
                      alt={setting.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <setting.icon className="h-6 w-6 text-ember-500" strokeWidth={1.25} />
                    <h3 className="mt-4 font-display text-2xl font-light text-cream-50">
                      {setting.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-mist-100/65">
                      {setting.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Button href="/booking">Reserve a Table With Your Stay</Button>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Come hungry. Leave slowly."
        subtitle="Dining reservations are arranged with your stay — tell the concierge which fire you'd like to sit beside."
        image={ph.bonfire}
        imageAlt="Sparks rising from an evening fire"
      />
    </>
  );
}
