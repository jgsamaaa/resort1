import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { ph } from "@/lib/images";

export default function CTASection({
  eyebrow = "Reservations",
  title = "Let the mountain set the pace.",
  subtitle = "Reserve a private highland stay shaped around misty mornings, firelit evenings, and time that finally feels unhurried.",
  primaryHref = "/booking",
  primaryLabel = "Reserve Your Stay",
  secondaryHref = "/contact",
  secondaryLabel = "Speak With Concierge",
  image = ph.pulagNight,
  imageAlt = "Stars over the dark silhouette of the ridge",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-pine-950/75" />
      <div className="grain relative mx-auto max-w-3xl px-5 py-28 text-center lg:py-40">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.5em] text-ember-400">
            {eyebrow}
          </p>
          <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] text-cream-50 sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-mist-100/80">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} className="w-full sm:w-auto">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="outline" className="w-full sm:w-auto">
              {secondaryLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
