import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  compact = false,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={`grain relative flex items-end overflow-hidden ${
        compact ? "h-[52vh] min-h-[380px]" : "h-[68vh] min-h-[480px]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="animate-slow-drift object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/35 to-pine-950/45" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.45em] text-ember-400">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-light leading-[1.02] text-cream-50 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-mist-100/85 sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
