import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Package } from "@/lib/data/packages";
import Reveal from "@/components/Reveal";

export default function PackageCard({
  pkg,
  index = 0,
}: {
  pkg: Package;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 2) * 0.12}>
      <article className="group flex h-full flex-col border border-mist-100/12 bg-gradient-to-b from-forest-800/50 to-pine-950/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember-500/40">
        <Link
          href={`/booking?package=${pkg.slug}`}
          aria-label={`Inquire about the ${pkg.name} package`}
          className="relative block h-56 overflow-hidden"
        >
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 to-transparent" />
          <span className="absolute bottom-4 left-6 text-[10px] uppercase tracking-[0.3em] text-linen-200">
            {pkg.length}
          </span>
        </Link>
        <div className="flex flex-1 flex-col p-8 lg:p-9">
          <h3 className="font-display text-3xl font-light text-cream-50">{pkg.name}</h3>
          <p className="mt-3 text-sm font-light leading-relaxed text-mist-100/70">
            {pkg.description}
          </p>
          <ul className="mt-6 space-y-2.5 border-t border-mist-100/10 pt-6">
            {pkg.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm font-light text-linen-200/80"
              >
                <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-ember-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center justify-between gap-4 pt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-taupe-400">
              Rates upon request
            </p>
            <Link
              href={`/booking?package=${pkg.slug}`}
              className="flex items-center gap-2 border-b border-ember-500/50 pb-1 text-[11px] uppercase tracking-[0.25em] text-ember-400 transition-colors duration-300 hover:text-ember-500"
            >
              Inquire
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
