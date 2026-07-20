import Image from "next/image";
import { gallery } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[16rem]">
      {gallery.map((item, i) => (
        <Reveal
          key={item.alt}
          direction="zoom"
          delay={(i % 3) * 0.08}
          className={
            item.span === "wide"
              ? "sm:col-span-2"
              : item.span === "tall"
                ? "sm:row-span-2"
                : ""
          }
        >
          <figure className="group relative h-64 w-full overflow-hidden sm:h-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-pine-950/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <figcaption className="absolute bottom-4 left-5 translate-y-2 text-[11px] uppercase tracking-[0.25em] text-cream-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {item.alt}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
