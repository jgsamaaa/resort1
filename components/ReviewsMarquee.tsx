import { Quote } from "lucide-react";
import { reviews } from "@/lib/data";
import Stars from "@/components/Stars";

export default function ReviewsMarquee() {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ocean-950 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ocean-950 to-transparent sm:w-32" />
      <div className="animate-marquee flex w-max gap-6">
        {doubled.map((review, i) => (
          <figure
            key={`${review.name}-${i}`}
            className="w-80 shrink-0 rounded-2xl border border-sand-50/10 bg-ocean-900/60 p-6 backdrop-blur-sm sm:w-96"
          >
            <div className="flex items-center justify-between">
              <Stars rating={review.rating} />
              <Quote className="h-5 w-5 text-gold-400/60" />
            </div>
            <blockquote className="mt-4 line-clamp-5 text-sm leading-relaxed text-sand-100/90">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-5 border-t border-sand-50/10 pt-4">
              <p className="font-display text-base text-gold-300">{review.name}</p>
              <p className="text-xs text-sand-200/60">
                {review.origin} · {review.date}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
