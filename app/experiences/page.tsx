import type { Metadata } from "next";
import { ph } from "@/lib/images";
import { experiences } from "@/lib/data/experiences";
import PageHero from "@/components/PageHero";
import ExperienceCard from "@/components/ExperienceCard";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Sunrise ridge walks, firepit dinners, spa rituals, farm-to-table tastings, cultural tours, and stargazing in the Philippine highlands.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        image={ph.pulagHikers}
        imageAlt="Guests walking a high mountain ridge at first light"
        eyebrow="Experiences"
        title="Days shaped by mist, fire, and mountain time"
        subtitle="Eight ways to spend a highland day. Nothing is mandatory; everything is worth waking for. Each experience can be added to any stay through our concierge."
      />
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            eyebrow="On the Mountain"
            title="Choose your mornings, surrender your afternoons"
            intro="Select any card to start a booking inquiry with that experience noted."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience, i) => (
              <ExperienceCard
                key={experience.slug}
                experience={experience}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="The mountain has more."
        subtitle="Seasonal experiences — cloud-sea camping, harvest days, tablea making — appear as the weather allows. Ask the concierge what the ridge is offering this month."
      />
    </>
  );
}
