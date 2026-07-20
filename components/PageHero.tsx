import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative flex h-[62vh] min-h-[420px] items-end overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="animate-kenburns object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/30 to-ocean-950/40" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 lg:px-8">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-300">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl text-sand-50 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-sand-100/90 sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
