import type { Metadata } from "next";
import Image from "next/image";
import { Wind, Sparkles, Flame, Waves, MoonStar, Leaf } from "lucide-react";
import { ph } from "@/lib/images";
import { packages } from "@/lib/data/packages";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import PackageCard from "@/components/PackageCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Wellness",
  description:
    "Forest bathing, breathwork, hilot-inspired spa rituals, warm-water culture, and a digital detox program in the Philippine highlands.",
};

const practices = [
  {
    icon: Leaf,
    title: "Forest bathing",
    text: "Guided shinrin-yoku walks through pine and fern — slow, mostly silent, and led by the forest itself. No distance goals, no pace to keep.",
  },
  {
    icon: Wind,
    title: "Breathwork & meditation",
    text: "Morning sessions on the ridge deck, timed to the hour the clouds begin to move. Wool blankets provided; thoughts optional.",
  },
  {
    icon: Sparkles,
    title: "Spa rituals",
    text: "Hilot-inspired massage and warm compresses of lemongrass and mountain herbs, on handwoven daybeds in pavilions open to the trees.",
  },
  {
    icon: Waves,
    title: "Warm water culture",
    text: "Cedar sauna, deep soaking baths, and heated plunge pools — heat, steam, and cool mountain air taken in slow rotation.",
  },
  {
    icon: MoonStar,
    title: "Sleep program",
    text: "Blackout villas, evening tsokolate, and a wake-up call performed exclusively by birds. Most guests report their best sleep in years.",
  },
  {
    icon: Flame,
    title: "Fire evenings",
    text: "Warmth is a wellness practice here. Firepits are lit nightly on request, and staring into them counts as meditation.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <PageHero
        image={ph.baguioPines}
        imageAlt="Golden afternoon light through a highland pine forest"
        eyebrow="Wellness"
        title="The art of doing very little, very well"
        subtitle="Wellness at Amara Ridge is not a schedule to keep. It is the absence of one."
      />

      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="The Practice"
            title="Six quiet disciplines"
            intro="Every practice is optional, unhurried, and shaped by the mountain's own weather."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practices.map((practice, i) => (
              <Reveal key={practice.title} delay={(i % 3) * 0.1}>
                <div className="h-full border border-mist-100/10 bg-forest-800/30 p-8 transition-colors duration-500 hover:border-ember-500/30">
                  <practice.icon className="h-6 w-6 text-ember-500" strokeWidth={1.25} />
                  <h3 className="mt-4 font-display text-2xl font-light text-cream-50">
                    {practice.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist-100/65">
                    {practice.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Digital detox */}
      <section className="relative overflow-hidden border-y border-mist-100/10">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[24rem] lg:min-h-[30rem]">
            <Image
              src={ph.cebuJunglePool}
              alt="A natural forest pool fed by a waterfall, seen from above"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-pine-950/25" />
          </div>
          <div className="flex items-center bg-pine-900 px-5 py-16 lg:px-16 lg:py-24">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.45em] text-ember-500">
                Digital Detox
              </p>
              <div className="rule-ember mt-4" />
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-cream-50 sm:text-5xl">
                Leave your phone at reception. We dare you.
              </h2>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-mist-100/70">
                Should you wish it, we will keep your devices safe and leave a
                field notebook in their place. Most guests who try it stop
                asking what time it is by the second morning. Emergencies still
                reach you — the concierge sees to that quietly.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Wellness packages */}
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="Wellness Stays"
            title="Built around rest"
            intro="Two of our packages put wellness at the center of the stay."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {packages
              .filter((p) => ["wellness-weekend", "cloudline-romance"].includes(p.slug))
              .map((pkg, i) => (
                <PackageCard key={pkg.slug} pkg={pkg} index={i} />
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Rest is the itinerary."
        subtitle="Tell our concierge how tired you actually are. We'll shape the stay around the answer."
      />
    </>
  );
}
