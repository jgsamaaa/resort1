import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import type { Stay } from "@/lib/data/stays";
import Reveal from "@/components/Reveal";

export default function StayCard({ stay, index = 0 }: { stay: Stay; index?: number }) {
  return (
    <Reveal delay={(index % 2) * 0.12}>
      <article className="group relative flex h-full flex-col overflow-hidden border border-mist-100/10 bg-forest-800/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-2xl hover:shadow-pine-950/70">
        <Link
          href={`/stays/${stay.slug}`}
          className="relative block h-72 overflow-hidden sm:h-80"
          aria-label={`View ${stay.name}`}
        >
          <Image
            src={stay.image}
            alt={stay.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-950/70 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 border border-mist-100/25 bg-pine-950/70 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-linen-200 backdrop-blur-sm">
            {stay.kind}
          </span>
          {stay.premium && (
            <span className="absolute right-5 top-5 border border-ember-500/60 bg-pine-950/70 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-ember-400 backdrop-blur-sm">
              Signature
            </span>
          )}
        </Link>

        <div className="flex flex-1 flex-col p-7 lg:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-3xl font-light text-cream-50">
              {stay.name}
            </h3>
            <p className="flex shrink-0 items-center gap-1.5 pt-2 text-[11px] uppercase tracking-[0.2em] text-taupe-400">
              <Users className="h-3.5 w-3.5 text-ember-500" /> Sleeps {stay.sleeps}
            </p>
          </div>
          <p className="mt-3 text-sm font-light leading-relaxed text-mist-100/70">
            {stay.short}
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {stay.amenities.slice(0, 4).map((a) => (
              <li
                key={a}
                className="text-[11px] uppercase tracking-[0.15em] text-taupe-400 before:mr-2 before:text-ember-500 before:content-['·']"
              >
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-end justify-between gap-4 pt-7">
            <p className="text-xs font-light italic leading-snug text-linen-200/70">
              Best for {stay.bestFor.toLowerCase()}
            </p>
            <Link
              href={`/stays/${stay.slug}`}
              className="flex shrink-0 items-center gap-2 border-b border-ember-500/50 pb-1 text-[11px] uppercase tracking-[0.25em] text-ember-400 transition-colors duration-300 hover:border-ember-400 hover:text-ember-500"
            >
              View Stay
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
