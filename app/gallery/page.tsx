import type { Metadata } from "next";
import { ph } from "@/lib/images";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Scenes from Amara Ridge — villas, highland dining, wellness, landscapes, and experiences, photographed across the Philippine highlands.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        compact
        image={ph.marlboroHill}
        imageAlt="Mist drifting through layered green mountain ridges"
        eyebrow="Gallery"
        title="Scenes from the ridge"
        subtitle="Every photograph here was taken in the Philippines — the mountains, tables, and firelight this concept is built from."
      />
      <section className="grain relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <GalleryGrid />
        </div>
      </section>
      <CTASection
        title="It photographs well. It feels better."
        subtitle="Reserve a stay and see what the fog does at eye level."
      />
    </>
  );
}
