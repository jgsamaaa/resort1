import { ph } from "@/lib/images";

export type Stay = {
  slug: string;
  name: string;
  kind: "Villa" | "Suite" | "Cabin" | "Lodge";
  short: string;
  description: string[];
  sleeps: number;
  bestFor: string;
  amenities: string[];
  included: string[];
  highlights: string[];
  image: string;
  gallery: { src: string; alt: string }[];
  premium?: boolean;
};

export const stays: Stay[] = [
  {
    slug: "cloudline-villa",
    name: "Cloudline Villa",
    kind: "Villa",
    short:
      "Our highest villa, set where the ridge meets open sky — glass, stone, and the cloud sea at first light.",
    description: [
      "The Cloudline Villa sits at the quiet top of the property, where the ridge falls away and the valley fills with cloud most mornings. Floor-to-ceiling glass frames the drop; a deep stone hearth holds the warmth in when the fog rolls through.",
      "Days here follow the sky. Coffee arrives at the hour you choose, the terrace daybed catches the late sun, and the heated plunge pool steams gently against the cool highland air after dark.",
    ],
    sleeps: 2,
    bestFor: "Couples marking something worth remembering",
    amenities: [
      "Private cloudline terrace",
      "Indoor fireplace",
      "Heated plunge pool",
      "Deep soaking tub",
      "Sunrise-facing bedroom",
      "Daily terrace breakfast",
    ],
    included: [
      "Daily highland breakfast for two",
      "Sunrise coffee and cacao service",
      "One guided ridge walk per stay",
      "Concierge-arranged transfers on request",
    ],
    highlights: [
      "Waking to a sea of clouds below the terrace",
      "A private firelit dinner beside the plunge pool",
      "Stargazing from the daybed on clear nights",
    ],
    image: ph.pulagGolden,
    gallery: [
      { src: ph.pulagSunset, alt: "Sea of clouds at sunset from the ridge" },
      { src: ph.mindanaoClouds, alt: "Cloud-wrapped peaks beyond the villa" },
      { src: ph.tagaytayBreakfast, alt: "Terrace breakfast above the valley" },
    ],
    premium: true,
  },
  {
    slug: "pine-house-suite",
    name: "Pine House Suite",
    kind: "Suite",
    short:
      "A warm, timber-lined suite beneath the pines — lamplight, linen, and a window seat made for slow afternoons.",
    description: [
      "The Pine House Suite is the smallest and quietest of our stays, wrapped in dark timber and set back into the pine stand. Its long window seat faces the forest, and the light that falls through the canopy does most of the decorating.",
      "It suits one guest with a book, or two who don't need much more than each other, good coffee, and mountain air moving through the trees.",
    ],
    sleeps: 2,
    bestFor: "Solo retreats and quiet working escapes",
    amenities: [
      "Forest-facing window seat",
      "Writing desk",
      "Deep soaking tub",
      "Rainfall shower",
      "Daily breakfast service",
      "Reliable connectivity, easily ignored",
    ],
    included: [
      "Daily highland breakfast",
      "Afternoon pot of local coffee or tsokolate",
      "Access to all forest trails",
      "Concierge-arranged transfers on request",
    ],
    highlights: [
      "Morning light through the pine canopy",
      "An afternoon writing at the forest window",
      "The short lamplit walk to dinner at Sulo",
    ],
    image: ph.baguioPines,
    gallery: [
      { src: ph.baguioPath, alt: "Grassy path through the pines" },
      { src: ph.dauinTable, alt: "Wooden table in bright window light" },
      { src: ph.ozamizCoffee, alt: "Pour-over coffee on a wooden table" },
    ],
  },
  {
    slug: "terrace-hearth-villa",
    name: "Terrace Hearth Villa",
    kind: "Villa",
    short:
      "Built around a great stone hearth, with a wide terrace, carved hardwood details, and room for the people you love.",
    description: [
      "The Terrace Hearth Villa is our gathering house — two bedrooms arranged around a central stone hearth and a long hardwood table that has hosted birthdays, reunions, and more than one slow-moving argument about who makes better garlic rice.",
      "Its deep terrace is furnished with pieces by highland woodcarvers, and the outdoor firepit is lit nightly on request. This is the villa for evenings that refuse to end on schedule.",
    ],
    sleeps: 4,
    bestFor: "Small families and close friends",
    amenities: [
      "Two bedrooms",
      "Central stone hearth",
      "Carved hardwood terrace",
      "Outdoor firepit",
      "Long dining table for six",
      "Daily breakfast service",
    ],
    included: [
      "Daily highland breakfast for four",
      "Nightly firepit setup on request",
      "One family firepit supper per stay",
      "Concierge-arranged transfers on request",
    ],
    highlights: [
      "A firelit supper on the carved terrace",
      "Mornings around the long table",
      "Board games by the hearth when the fog closes in",
    ],
    image: ph.alfonsoPorch,
    gallery: [
      { src: ph.iloiloSala, alt: "Heritage sala with capiz-shell windows" },
      { src: ph.bonfire, alt: "Sparks rising from the evening firepit" },
      { src: ph.bananaLeafFeast, alt: "A shared feast served on banana leaf" },
    ],
  },
  {
    slug: "forest-bathing-cabin",
    name: "Forest Bathing Cabin",
    kind: "Cabin",
    short:
      "A pared-back canvas-and-timber hideaway deep in the forest, designed for digital rest and deep sleep.",
    description: [
      "The Forest Bathing Cabin sits furthest from everything, down a lantern-lit path where the forest closes overhead. Canvas, timber, and netting are all that separate you from fern, moss, and birdsong — with proper bedding, warm water, and hot coffee close at hand.",
      "There is no television and the Wi-Fi politely does not reach. Most guests who plan to stay one night book two the next time.",
    ],
    sleeps: 2,
    bestFor: "Deep rest and unplugged weekends",
    amenities: [
      "Forest-immersion deck",
      "Outdoor soaking tub",
      "Lantern-lit path",
      "Digital detox setup",
      "Guided forest bathing on request",
      "Daily breakfast basket",
    ],
    included: [
      "Daily breakfast basket at your deck",
      "One guided forest bathing walk per stay",
      "Field notebook and pencil, in place of your phone",
      "Concierge-arranged transfers on request",
    ],
    highlights: [
      "Falling asleep to rain on canvas",
      "A slow, guided walk with no destination",
      "Coffee on the deck before the forest wakes",
    ],
    image: ph.negrosTents,
    gallery: [
      { src: ph.baguioPines, alt: "Golden light through the pine forest" },
      { src: ph.sagadaRiver, alt: "River running through a green valley" },
      { src: ph.quezonDaybed, alt: "Handwoven daybed in warm light" },
    ],
  },
  {
    slug: "ridge-pool-villa",
    name: "Ridge Pool Villa",
    kind: "Villa",
    short:
      "A garden villa wrapped around its own heated pool — warm water, cool air, and the ridge beyond the trees.",
    description: [
      "The Ridge Pool Villa gives the pool the best seat in the house: a heated, garden-wrapped basin that steams softly in the highland air, ringed by stone and greenery with the ridge line rising past the trees.",
      "Inside, the villa keeps things low and warm — linen, dark wood, and a bathroom built for long evenings. It is the stay our returning guests request by name.",
    ],
    sleeps: 3,
    bestFor: "Slow celebrations and long weekends",
    amenities: [
      "Private heated garden pool",
      "Poolside daybeds",
      "Outdoor shower garden",
      "Deep soaking tub",
      "Evening pool lighting",
      "Daily breakfast service",
    ],
    included: [
      "Daily highland breakfast",
      "Poolside merienda each afternoon",
      "One poolside dinner setup per stay",
      "Concierge-arranged transfers on request",
    ],
    highlights: [
      "A warm swim while the fog moves through",
      "Merienda on the daybeds at golden hour",
      "The pool lit low after dinner",
    ],
    image: ph.marivelesPool,
    gallery: [
      { src: ph.cebuJunglePool, alt: "Forest pool fed by a waterfall" },
      { src: ph.puntaBulataTable, alt: "Hardwood dining set in open air" },
      { src: ph.silogPlate, alt: "A Filipino plate of rice and vegetables" },
    ],
  },
  {
    slug: "family-highland-lodge",
    name: "Family Highland Lodge",
    kind: "Lodge",
    short:
      "Lamplit cabins under the pines with bunks, board games, and room for three generations to slow down together.",
    description: [
      "The Family Highland Lodge is a small cluster of connected cabins beneath the pines, glowing lamplit after dark. Grandparents get quiet corners, kids get bunks and a meadow, and everyone gets breakfast that goes on as long as the stories do.",
      "The lodge keeps its own gentle rhythm — trail mornings, merienda afternoons, and early firelit evenings that somehow still end past bedtime.",
    ],
    sleeps: 6,
    bestFor: "Multi-generation family escapes",
    amenities: [
      "Three connected cabin rooms",
      "Bunk nook for kids",
      "Shared lodge hearth",
      "Meadow and trail access",
      "Family firepit evenings",
      "Daily breakfast service",
    ],
    included: [
      "Daily highland breakfast for six",
      "Family firepit evening with kakanin",
      "Guided valley walk for all ages",
      "Concierge-arranged transfers on request",
    ],
    highlights: [
      "Kids racing the fog across the meadow",
      "Three generations around one fire",
      "Slow mornings that stay slow",
    ],
    image: ph.davaoCabins,
    gallery: [
      { src: ph.familyBed, alt: "A child grinning from a sea of pillows" },
      { src: ph.bananaFritters, alt: "Warm banana fritters for merienda" },
      { src: ph.baguioValley, alt: "Highland valley view near the lodge" },
    ],
  },
];

export const getStay = (slug: string) => stays.find((s) => s.slug === slug);

export const relatedStays = (slug: string, count = 3) =>
  stays.filter((s) => s.slug !== slug).slice(0, count);
