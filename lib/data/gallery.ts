import { ph } from "@/lib/images";

export type GalleryCategory =
  | "All"
  | "Villas"
  | "Dining"
  | "Wellness"
  | "Landscape"
  | "Experiences";

export type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  span?: "wide" | "tall";
};

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Villas",
  "Dining",
  "Wellness",
  "Landscape",
  "Experiences",
];

export const galleryItems: GalleryItem[] = [
  { src: ph.pulagSunset, alt: "Sea of clouds at sunset below the ridge", category: "Landscape", span: "wide" },
  { src: ph.davaoCabins, alt: "Lamplit cabins under the pines at night", category: "Villas", span: "tall" },
  { src: ph.tagaytayBreakfast, alt: "Terrace breakfast above a green valley", category: "Dining" },
  { src: ph.negrosTents, alt: "Canvas cabins glowing in the forest", category: "Villas" },
  { src: ph.baguioPines, alt: "Golden light through the pine forest", category: "Wellness", span: "tall" },
  { src: ph.bananaLeafFeast, alt: "Kamayan feast on banana leaf", category: "Dining" },
  { src: ph.marlboroHill, alt: "Misty ridges of the Cordillera", category: "Landscape" },
  { src: ph.bonfire, alt: "Sparks rising from the evening firepit", category: "Experiences" },
  { src: ph.batadTerraces, alt: "Hand-carved rice terraces in Ifugao", category: "Landscape", span: "wide" },
  { src: ph.quezonDaybed, alt: "Handwoven daybed in warm light", category: "Wellness" },
  { src: ph.marivelesPool, alt: "Garden pool seen from above", category: "Villas" },
  { src: ph.ozamizCoffee, alt: "Slow pour-over coffee service", category: "Dining" },
  { src: ph.pulagHikers, alt: "Guests walking the sunrise ridge", category: "Experiences" },
  { src: ph.sagadaGreen, alt: "Terraced highland valley in deep green", category: "Landscape" },
  { src: ph.iloiloSala, alt: "Heritage sala with capiz-shell windows", category: "Villas" },
  { src: ph.pulagNight, alt: "Stars over the mountain silhouette", category: "Experiences", span: "tall" },
  { src: ph.cebuJunglePool, alt: "Natural forest pool below a waterfall", category: "Wellness" },
  { src: ph.manilaGrill, alt: "Dinner cooking over live embers", category: "Dining" },
];
