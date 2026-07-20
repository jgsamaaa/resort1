import Reveal from "@/components/Reveal";

export default function TestimonialCard({
  quote,
  name,
  context,
  index,
}: {
  quote: string;
  name: string;
  context: string;
  index: number;
}) {
  return (
    <Reveal delay={(index % 3) * 0.12}>
      <figure className="flex h-full flex-col border-t border-ember-500/30 bg-forest-800/30 p-8 lg:p-9">
        <span aria-hidden className="font-display text-6xl leading-none text-ember-500/40">
          “
        </span>
        <blockquote className="mt-2 flex-1 font-display text-xl font-light italic leading-relaxed text-mist-100/90">
          {quote}
        </blockquote>
        <figcaption className="mt-7 border-t border-mist-100/10 pt-5">
          <p className="text-sm text-linen-200">{name}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-taupe-400">
            {context}
          </p>
        </figcaption>
      </figure>
    </Reveal>
  );
}
