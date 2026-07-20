import { Star } from "lucide-react";

export default function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${
            i < rating ? "fill-gold-400 text-gold-400" : "fill-sand-200 text-sand-200"
          }`}
        />
      ))}
    </div>
  );
}
