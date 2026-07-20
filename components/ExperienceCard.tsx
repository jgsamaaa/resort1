import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/lib/data/experiences";
import Reveal from "@/components/Reveal";

export default function ExperienceCard({
  experience,
  index = 0,
}: {
  experience: Experience;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 3) * 0.1}>
      <Link
        href={`/booking?experience=${experience.slug}`}
        aria-label={`Inquire about ${experience.title}`}
        className="group relative block h-[26rem] overflow-hidden"
      >
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950/95 via-pine-950/25 to-pine-950/10" />
        <span className="absolute left-6 top-6 border border-mist-100/25 bg-pine-950/60 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.3em] text-linen-200 backdrop-blur-sm">
          {experience.category}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-7">
          <div className="h-px w-10 bg-ember-500 transition-all duration-500 group-hover:w-16" />
          <h3 className="mt-4 font-display text-2xl font-light text-cream-50">
            {experience.title}
          </h3>
          <p className="mt-2 text-sm font-light leading-relaxed text-mist-100/75">
            {experience.text}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
