import type { Metadata } from "next";
import { ph } from "@/lib/images";
import { packages } from "@/lib/data/packages";
import PageHero from "@/components/PageHero";
import PackageCard from "@/components/PackageCard";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Offers & Packages",
  description:
    "Cloudline Romance, The Wellness Weekend, Family Highland Retreat, and Work From the Ridge — composed highland stays with rates upon request.",
};

export default function OffersPage() {
  return (
    <>
      <PageHero
        compact
        image={ph.pulagGolden}
        imageAlt="Golden sunset light over highland peaks"
        eyebrow="Offers"
        title="Stays composed for you"
        subtitle="Four ways to give the mountain more than a night. Every package is adjusted to your dates and party by the concierge."
      />
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="The Packages"
            title="Pick a mood, not a room"
            intro="Rates are shared upon request — every quote is composed for your dates, party, and appetite for firewood."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} index={i} />
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="text-center text-sm font-light text-mist-100/55">
              Packages are illustrative for this concept site. Best-for notes:
              {" "}
              {packages.map((p) => p.bestFor.toLowerCase()).join(" · ")}.
            </p>
          </Reveal>
        </div>
      </section>
      <CTASection
        title="None of them quite fit?"
        subtitle="The concierge composes stays from scratch more often than not. Tell us the occasion; we'll bring the fire."
      />
    </>
  );
}
