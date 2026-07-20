import type { Metadata } from "next";
import Image from "next/image";
import { Plane, CarFront, TreePine, Mountain, Landmark, ConciergeBell } from "lucide-react";
import { ph } from "@/lib/images";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Location & Arrival",
  description:
    "Amara Ridge rests in the cool upper elevations of the Philippine highlands. Concierge-assisted transfers may be arranged from major city gateways.",
};

const surroundings = [
  {
    icon: Mountain,
    title: "Mountain setting",
    text: "Villas sit along a quiet ridge line, above the valley fog and below nothing at all.",
  },
  {
    icon: TreePine,
    title: "Forest trails",
    text: "Pine and mossy-forest walking trails begin steps from the villa paths, mapped by mood rather than distance.",
  },
  {
    icon: Landmark,
    title: "Cultural highlands",
    text: "Weaving villages, hand-carved rice terraces, and highland markets lie within touring distance.",
  },
  {
    icon: Plane,
    title: "City gateways",
    text: "Arrival times vary by selected route. Concierge-assisted transfers may be arranged from major city gateways.",
  },
  {
    icon: CarFront,
    title: "The mountain road",
    text: "The final stretch climbs through pine switchbacks — the moment most guests say the trip begins.",
  },
  {
    icon: ConciergeBell,
    title: "Concierge arrival",
    text: "Share your route and our team meets you at the gateway of your choice, cold towels included.",
  },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        image={ph.baguioHills}
        imageAlt="Folded green mountains of the Philippine highlands under moving clouds"
        eyebrow="Location & Arrival"
        title="High in the Philippine highlands"
        subtitle="Wrapped in pine forest and cloud, in the cool upper elevations where sweater weather is a daily gift."
      />

      {/* Map-style panel */}
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-5 lg:grid-cols-5 lg:px-10">
          <Reveal direction="left" className="lg:col-span-3">
            <div className="relative h-full min-h-[24rem] overflow-hidden border border-mist-100/12">
              <Image
                src={ph.sagadaGreen}
                alt="A terraced highland valley in deep green"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/20 to-transparent" />
              {/* Stylized map annotations */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-ember-400">
                  Illustrative map panel — not to scale
                </p>
                <p className="mt-2 font-display text-3xl font-light text-cream-50">
                  The Philippine Highlands
                </p>
                <p className="mt-1 text-sm font-light text-mist-100/70">
                  Exact directions and coordinates are shared upon reservation.
                </p>
              </div>
              <span className="absolute left-1/2 top-1/3 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-ember-500/50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-ember-500" />
              </span>
            </div>
          </Reveal>
          <Reveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col border border-mist-100/12 bg-forest-800/30 p-8 lg:p-10">
              <p className="text-[11px] uppercase tracking-[0.45em] text-ember-500">
                Getting Here
              </p>
              <div className="rule-ember mt-4" />
              <p className="mt-6 text-base font-light leading-relaxed text-mist-100/80">
                Amara Ridge rests in the cool upper elevations of the
                Philippine highlands. Arrival times vary by selected route;
                concierge-assisted transfers may be arranged from major city
                gateways.
              </p>
              <p className="mt-4 text-base font-light leading-relaxed text-mist-100/80">
                Most guests describe the journey in two parts: the road, and
                the moment the pines close overhead and the temperature drops
                — at which point the concierge recommends rolling the windows
                down.
              </p>
              <div className="mt-auto border-t border-mist-100/10 pt-6">
                <p className="text-sm font-light text-mist-100/60">{site.address}</p>
                <p className="mt-2 text-sm font-light text-mist-100/60">{site.concierge}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Surroundings */}
      <section className="relative border-t border-mist-100/10 bg-pine-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="The Surroundings"
            title="What the ridge keeps close"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {surroundings.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.1}>
                <div className="h-full border border-mist-100/10 bg-pine-950/40 p-8">
                  <item.icon className="h-6 w-6 text-ember-500" strokeWidth={1.25} />
                  <h3 className="mt-4 font-display text-xl font-light text-cream-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist-100/65">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-sm font-light leading-relaxed text-mist-100/55">
              Travel reassurance: our concierge tracks weather and road
              conditions daily and will adjust transfer plans before you need
              to ask. No guest has ever been left waiting at a gateway — a
              record we intend to keep.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="The road up is half the story."
        subtitle="Tell the concierge your arrival city and we'll plan the rest — including where to stop for the best halo-halo on the way."
      />
    </>
  );
}
