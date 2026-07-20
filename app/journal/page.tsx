import type { Metadata } from "next";
import { ph } from "@/lib/images";
import { journal } from "@/lib/data/journal";
import PageHero from "@/components/PageHero";
import JournalCard from "@/components/JournalCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "The Ridge Journal — essays and field notes on highland travel, Filipino mountain dining, slow weekends, and what to pack for the cold.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        compact
        image={ph.luzonForest}
        imageAlt="Aerial view of forested ridges in Luzon"
        eyebrow="The Ridge Journal"
        title="Notes from the mountain"
        subtitle="Essays, itineraries, and field notes from the Philippine highlands — written slowly, like everything else here."
      />
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-2">
            {journal.map((post, i) => (
              <JournalCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Reading about it is the slow part."
        subtitle="The fog, the fire, and the long breakfast are all still here. Reserve a stay and meet them."
      />
    </>
  );
}
