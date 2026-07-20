import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Users, Check, Sparkles } from "lucide-react";
import { stays, getStay, relatedStays } from "@/lib/data/stays";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import StayCard from "@/components/StayCard";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return stays.map((stay) => ({ slug: stay.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const stay = getStay((await params).slug);
  if (!stay) return { title: "Stay not found" };
  return { title: stay.name, description: stay.short };
}

export default async function StayDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stay = getStay(slug);
  if (!stay) notFound();

  return (
    <>
      <PageHero
        image={stay.image}
        imageAlt={stay.name}
        eyebrow={`${stay.kind} · Sleeps ${stay.sleeps}`}
        title={stay.name}
        subtitle={stay.short}
      />

      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-3 lg:px-10">
          {/* Main copy */}
          <div className="lg:col-span-2">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.45em] text-ember-500">
                The Stay
              </p>
              <div className="rule-ember mt-4" />
              {stay.description.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mt-6 text-base font-light leading-relaxed text-mist-100/80 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-3xl font-light text-cream-50">
                Amenities
              </h2>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {stay.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-start gap-3 text-sm font-light text-linen-200/85"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember-500" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-3xl font-light text-cream-50">
                Sample stay highlights
              </h2>
              <ul className="mt-6 space-y-4">
                {stay.highlights.map((highlight, i) => (
                  <li key={highlight} className="flex gap-5">
                    <span className="font-display text-lg font-light text-ember-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-0.5 text-sm font-light leading-relaxed text-mist-100/75">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Gallery */}
            <Reveal className="mt-14">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {stay.gallery.map((image, i) => (
                  <figure
                    key={image.src}
                    className={`group relative overflow-hidden ${
                      i === 0 ? "col-span-2 aspect-[16/10] sm:col-span-2 sm:row-span-2 sm:aspect-auto" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 40vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                    />
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Booking rail */}
          <aside className="h-fit lg:sticky lg:top-28">
            <Reveal direction="right">
              <div className="border border-mist-100/12 bg-forest-800/40 p-8">
                <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-taupe-400">
                  <Users className="h-4 w-4 text-ember-500" /> Sleeps {stay.sleeps}
                </p>
                <p className="mt-4 font-display text-2xl font-light italic text-linen-200">
                  Best for {stay.bestFor.toLowerCase()}
                </p>
                <div className="mt-7 border-t border-mist-100/10 pt-6">
                  <h3 className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ember-500">
                    <Sparkles className="h-4 w-4" /> What&apos;s included
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {stay.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm font-light text-mist-100/75"
                      >
                        <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-ember-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href={`/booking?stay=${stay.slug}`}
                  className="mt-8 w-full"
                  ariaLabel={`Reserve the ${stay.name}`}
                >
                  Reserve This Stay
                </Button>
                <p className="mt-4 text-center text-[11px] font-light text-mist-100/50">
                  Rates available upon request · no payment at inquiry
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Related stays */}
      <section className="relative border-t border-mist-100/10 bg-pine-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="font-display text-4xl font-light text-cream-50">
              Other ways to stay
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {relatedStays(stay.slug).map((related, i) => (
              <StayCard key={related.slug} stay={related} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
