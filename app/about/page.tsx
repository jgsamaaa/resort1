import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, Leaf, Hammer, Mountain } from "lucide-react";
import { ph } from "@/lib/images";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story and philosophy of Amara Ridge — Filipino hospitality, highland craft, and a resort designed to disappear into its mountain.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Malasakit",
    text: "The Filipino word for care that goes beyond duty. Our concierge model is built on it: anticipate quietly, remember everything, never hover.",
  },
  {
    icon: Mountain,
    title: "The mountain leads",
    text: "Schedules bend to fog and firelight. We design stays around the ridge's weather, not against it.",
  },
  {
    icon: Hammer,
    title: "Highland craft",
    text: "Carved hardwood, handwoven textiles, stone laid by upland masons — every villa is furnished by makers from the surrounding valleys.",
  },
  {
    icon: Leaf,
    title: "Light footprint",
    text: "Solar water heating, zero single-use plastic, and a kitchen that buys from highland farmers and gardens first.",
  },
];

const team = [
  {
    role: "Concierge & Arrival",
    note: "The team that meets you at the gateway and remembers how you take your coffee by day two.",
  },
  {
    role: "Kitchen & Fire",
    note: "Cooks, gardeners, and fire-keepers at Sulo — half the menu grows within sight of the dining room.",
  },
  {
    role: "Trails & Wellness",
    note: "Guides for the ridge walks, forest bathing, and spa rituals, all raised in these mountains.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={ph.zambalesRidge}
        imageAlt="A long green mountain ridge under an open sky"
        eyebrow="Our Story"
        title="Built to disappear into its mountain"
        subtitle="Amara Ridge is a fictional concept — a study in what Philippine highland luxury could look like when Filipino warmth leads the design."
      />

      {/* Story */}
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <Reveal direction="left">
            <p className="text-[11px] uppercase tracking-[0.45em] text-ember-500">
              The Idea
            </p>
            <div className="rule-ember mt-4" />
            <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-cream-50 sm:text-5xl">
              Quiet luxury,
              <span className="block italic text-linen-200">spoken in Filipino</span>
            </h2>
            <div className="mt-7 space-y-4 text-base font-light leading-relaxed text-mist-100/75">
              <p>
                Amara Ridge began with a simple observation: the
                Philippines&apos; most transporting luxury isn&apos;t imported
                — it&apos;s already in the uplands. Cool air. Pine smoke.
                Hand-carved terraces older than
                most countries. And a way of caring for guests, malasakit,
                that no hospitality school teaches.
              </p>
              <p>
                The concept gathers those things into one ridge: a handful of
                standalone villas that never rise above the tree line, a
                restaurant built around fire, and wellness that borrows from
                hilot and the forest rather than a spa menu template.
              </p>
              <p>
                Nothing here shouts. The architecture defers to the view, the
                service defers to your pace, and the mountain — as always —
                has the final word.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={ph.alfonsoPorch}
                  alt="A carved hardwood porch opening to lush greenery"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-10 aspect-[3/4] overflow-hidden">
                <Image
                  src={ph.iloiloSala}
                  alt="A heritage Filipino sala with capiz-shell windows"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-4 text-right text-[10px] uppercase tracking-[0.3em] text-taupe-400">
              Filipino craft: carved hardwood & capiz light
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative border-y border-mist-100/10 bg-pine-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Hospitality with roots"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 4) * 0.08}>
                <div className="h-full border border-mist-100/10 bg-pine-950/40 p-8 transition-transform duration-500 hover:-translate-y-1.5">
                  <value.icon className="h-7 w-7 text-ember-500" strokeWidth={1.25} />
                  <h3 className="mt-5 font-display text-xl font-light text-cream-50">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist-100/65">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="The People"
            title="Three small teams, one ridge"
            intro="Placeholder team section — in a live resort, the faces would go here. The warmth is accurate."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {team.map((group, i) => (
              <Reveal key={group.role} delay={(i % 3) * 0.1}>
                <div className="h-full border-t border-ember-500/30 bg-forest-800/30 p-8">
                  <p className="font-display text-2xl font-light text-linen-200">
                    {group.role}
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist-100/65">
                    {group.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Come meet the mountain."
        subtitle="The story reads better from a terrace, with coffee, while the fog decides what to do with the morning."
      />
    </>
  );
}
