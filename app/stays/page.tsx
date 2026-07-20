import type { Metadata } from "next";
import { ph } from "@/lib/images";
import { stays } from "@/lib/data/stays";
import PageHero from "@/components/PageHero";
import StayCard from "@/components/StayCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Stays",
  description:
    "Six private villas, suites, cabins, and lodges above the Philippine clouds — from the signature Cloudline Villa to the Family Highland Lodge.",
};

export default function StaysPage() {
  return (
    <>
      <PageHero
        image={ph.davaoCabins}
        imageAlt="Lamplit cabins glowing beneath tall pines at night"
        eyebrow="Stays"
        title="Six ways to live above the clouds"
        subtitle="Every stay is a standalone retreat with its own stretch of ridge, forest, or garden — chosen by mood, not by floor number."
      />
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {stays.map((stay, i) => (
              <StayCard key={stay.slug} stay={stay} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Undecided? That's allowed."
        subtitle="Tell our concierge who's coming and how you like your mornings — we'll match you to the right villa."
      />
    </>
  );
}
