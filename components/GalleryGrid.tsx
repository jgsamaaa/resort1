"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/lib/data/gallery";

export default function GalleryGrid() {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items =
    category === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((i) =>
        i === null ? null : (i + dir + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  return (
    <div>
      {/* Category filter */}
      <div
        role="tablist"
        aria-label="Gallery categories"
        className="flex flex-wrap justify-center gap-2.5"
      >
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={category === cat}
            onClick={() => {
              setCategory(cat);
              setLightbox(null);
            }}
            className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] transition-all duration-300 ${
              category === cat
                ? "bg-ember-500 font-semibold text-pine-950"
                : "border border-mist-100/20 text-mist-100/70 hover:border-ember-500/50 hover:text-ember-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[15rem]">
        {items.map((item, i) => (
          <button
            key={item.src + category}
            onClick={() => setLightbox(i)}
            aria-label={`Open image: ${item.alt}`}
            className={`group relative block h-64 w-full overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember-500 sm:h-full ${
              item.span === "wide"
                ? "sm:col-span-2"
                : item.span === "tall"
                  ? "sm:row-span-2"
                  : ""
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-pine-950/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute bottom-4 left-5 translate-y-2 text-[11px] uppercase tracking-[0.25em] text-cream-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {item.alt}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && items[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[lightbox].alt}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-pine-950/95 p-5 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 z-10 border border-mist-100/25 p-3 text-mist-100 transition-colors hover:border-ember-400 hover:text-ember-400"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 z-10 border border-mist-100/25 p-3 text-mist-100 transition-colors hover:border-ember-400 hover:text-ember-400 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure
            className="relative max-h-[82vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={items[lightbox].src}
                alt={items[lightbox].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-[11px] uppercase tracking-[0.3em] text-linen-200/80">
              {items[lightbox].alt} · {items[lightbox].category}
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-3 z-10 border border-mist-100/25 p-3 text-mist-100 transition-colors hover:border-ember-400 hover:text-ember-400 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
