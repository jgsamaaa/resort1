import Image from "next/image";
import Link from "next/link";
import { Users, Maximize, BedDouble, Eye, ArrowRight } from "lucide-react";
import type { Room } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function RoomCard({
  room,
  index = 0,
}: {
  room: Room;
  index?: number;
}) {
  const reversed = index % 2 === 1;
  return (
    <Reveal direction={reversed ? "right" : "left"}>
      <article
        className={`group grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-ocean-950/5 lg:grid-cols-2 ${
          reversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        <div className="relative h-72 overflow-hidden lg:h-auto lg:min-h-[26rem] lg:[direction:ltr]">
          <Image
            src={room.image}
            alt={room.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-5 top-5 rounded-full bg-ocean-950/80 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-300 backdrop-blur-sm">
            {room.kind}
          </span>
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-12 lg:[direction:ltr]">
          <h3 className="font-display text-2xl text-ocean-950 sm:text-3xl">
            {room.name}
          </h3>
          <p className="mt-3 leading-relaxed text-ocean-900/70">
            {room.description}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm text-ocean-900/80">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gold-500" />
              Up to {room.guests} guests
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="h-4 w-4 text-gold-500" />
              {room.size}
            </div>
            <div className="flex items-center gap-2">
              <BedDouble className="h-4 w-4 text-gold-500" />
              {room.bed}
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-gold-500" />
              {room.view}
            </div>
          </dl>

          <ul className="mt-5 flex flex-wrap gap-2">
            {room.features.map((f) => (
              <li
                key={f}
                className="rounded-full bg-sand-100 px-3.5 py-1.5 text-xs text-ocean-900/80"
              >
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p>
              <span className="font-display text-3xl text-ocean-950">
                ₱{room.pricePHP.toLocaleString()}
              </span>
              <span className="text-sm text-ocean-900/60">
                {" "}
                / night · ≈ ${room.priceUSD}
              </span>
            </p>
            <Link
              href={`/booking?room=${room.slug}`}
              className="group/btn inline-flex items-center gap-2 rounded-full bg-ocean-900 px-6 py-3 text-sm uppercase tracking-[0.15em] text-sand-50 transition-all hover:bg-ocean-800 hover:shadow-lg"
            >
              Book this {room.kind.toLowerCase()}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
