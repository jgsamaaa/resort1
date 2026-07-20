import { ArrowRight } from "lucide-react";
import type { Offer } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.12}>
      <article className="group flex h-full flex-col border border-mist-100/12 bg-gradient-to-b from-forest-800/50 to-pine-950/40 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember-500/40 lg:p-10">
        <p className="text-[10px] uppercase tracking-[0.35em] text-taupe-400">
          Package {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-4 font-display text-3xl font-light text-cream-50">
          {offer.name}
        </h3>
        <p className="mt-3 text-sm font-light leading-relaxed text-mist-100/70">
          {offer.description}
        </p>
        <ul className="mt-6 space-y-2.5 border-t border-mist-100/10 pt-6">
          {offer.includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm font-light text-linen-200/80"
            >
              <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-ember-500" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between pt-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-taupe-400">
            Rates upon request
          </p>
          <a
            href="#reserve"
            aria-label={`View the ${offer.name} package`}
            className="flex items-center gap-2 border-b border-ember-500/50 pb-1 text-[11px] uppercase tracking-[0.25em] text-ember-400 transition-colors duration-300 hover:text-ember-500"
          >
            View Package
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}
