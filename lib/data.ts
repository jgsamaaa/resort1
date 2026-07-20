const img = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const site = {
  name: "Amara Ridge",
  tagline: "A mountain sanctuary above the Philippine clouds.",
  eyebrow: "Philippine Highlands",
  email: "reserve@amararidge.ph",
  phone: "+63 917 000 0000",
  concierge: "Concierge available daily, 6:00 AM – 10:00 PM (GMT+8)",
  address: "The Philippine Highlands · exact location shared upon reservation",
};

export const nav = [
  { href: "#stay", label: "Stay" },
  { href: "#experiences", label: "Experiences" },
  { href: "#wellness", label: "Wellness" },
  { href: "#dining", label: "Dining" },
  { href: "#location", label: "Location" },
  { href: "#gallery", label: "Gallery" },
];

export const heroImage = img("1506905925346-21bda4d32df4", 2400);
export const storyImage = img("1470770841072-f978cf4d019e", 1600);
export const locationImage = img("1458668383970-8ddd3927deed", 2000);
export const wellnessBg = img("1487621167305-5d248087c724", 2200);
export const finalCtaImage = img("1519681393784-d120267933ba", 2400);

export const trustSignals = [
  {
    title: "Private mountain villas",
    text: "A small collection of standalone stays, each opening to its own stretch of ridge and sky.",
  },
  {
    title: "Wellness-led stays",
    text: "Forest bathing, breathwork, and warm-water rituals woven gently into every itinerary.",
  },
  {
    title: "Highland Filipino dining",
    text: "Fire, smoke, and mountain harvests at Sulo — our hearth-driven highland restaurant.",
  },
  {
    title: "Concierge arrival support",
    text: "From city gateway to villa door, every transfer is quietly arranged before you ask.",
  },
];

export type Stay = {
  name: string;
  description: string;
  amenities: string[];
  bestFor: string;
  image: string;
  premium?: boolean;
};

export const stays: Stay[] = [
  {
    name: "Cloudline Villa",
    description:
      "Our highest villa, set where the ridge meets open sky. Floor-to-ceiling glass frames the cloud sea at dawn; by night, the fireplace and heated plunge pool hold the warmth in.",
    amenities: [
      "Private terrace",
      "Indoor fireplace",
      "Heated plunge pool",
      "Deep soaking tub",
      "Mountain view",
      "Breakfast service",
    ],
    bestFor: "Couples marking something worth remembering",
    image: img("1499696010180-025ef6e1a8f9"),
    premium: true,
  },
  {
    name: "Pine House Suite",
    description:
      "A warm, timber-lined suite beneath the pines — linen, lamplight, and a window seat made for slow afternoons with coffee and a book.",
    amenities: [
      "Private terrace",
      "Reading nook",
      "Mountain view",
      "Deep soaking tub",
      "Breakfast service",
    ],
    bestFor: "Solo retreats and quiet working escapes",
    image: img("1522708323590-d24dbb6b0267"),
  },
  {
    name: "Terrace Hearth Villa",
    description:
      "Built around a great stone hearth, with a wide terrace and firepit for long evenings. Two bedrooms, one long table, and room for the people you love.",
    amenities: [
      "Two bedrooms",
      "Stone fireplace",
      "Terrace firepit",
      "Mountain view",
      "Breakfast service",
    ],
    bestFor: "Families and small gatherings",
    image: img("1513694203232-719a280e022f"),
  },
  {
    name: "Forest Bathing Cabin",
    description:
      "A pared-back cabin deep in the pines, designed for digital rest — soft light, natural textures, and nothing between you and the forest but glass.",
    amenities: [
      "Forest immersion deck",
      "Outdoor firepit",
      "Deep soaking tub",
      "Digital detox setup",
      "Breakfast service",
    ],
    bestFor: "Deep rest and unplugged weekends",
    image: img("1445019980597-93fa8acb246c"),
  },
];

export type Experience = {
  title: string;
  text: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    title: "Sunrise ridge walk",
    text: "Leave before first light with a guide and a thermos of highland coffee. Arrive as the valley fills with cloud below your feet.",
    image: img("1464822759023-fed622ff2c3b", 1200),
  },
  {
    title: "Private firepit dinner",
    text: "A table for two beside open flame — slow-grilled courses, blankets, and a sky that gets darker and brighter at once.",
    image: img("1478827387698-1527781a4887", 1200),
  },
  {
    title: "Highland spa ritual",
    text: "Warm stone, mountain herbs, and unhurried hands. A treatment paced to the mist, not the clock.",
    image: img("1544161515-4ab6ce6db874", 1200),
  },
  {
    title: "Filipino farm-to-table tasting",
    text: "Meet the morning's harvest before it meets the fire. Six courses drawn from gardens a short walk from your table.",
    image: img("1414235077428-338989a2e8c0", 1200),
  },
  {
    title: "Valley cultural tour",
    text: "Weavers, woodcarvers, and highland kitchens — an afternoon among the crafts and stories that shaped these mountains.",
    image: img("1501785888041-af3ef285b470", 1200),
  },
  {
    title: "Slow coffee & cacao ceremony",
    text: "Single-origin highland beans and stone-ground tablea, brewed slowly at your terrace as the fog lifts.",
    image: img("1495474472287-4d71bcdd2085", 1200),
  },
];

export const wellness = {
  intro:
    "Wellness at Amara Ridge is not a schedule to keep. It is the absence of one.",
  practices: [
    {
      title: "Forest bathing",
      text: "Guided shinrin-yoku walks through pine and fern — slow, silent, and led by the forest itself.",
    },
    {
      title: "Breathwork & meditation",
      text: "Morning sessions on the ridge deck, timed to the hour the clouds begin to move.",
    },
    {
      title: "Spa rituals",
      text: "Hilot-inspired massage and warm herbal compresses in treatment rooms open to the trees.",
    },
    {
      title: "Warm water culture",
      text: "Cedar sauna, warm soaking baths, and heated plunge pools — heat, steam, and mountain air in rotation.",
    },
  ],
  detox:
    "Should you wish it, we will keep your devices safe at reception and leave a field notebook in their place. Most guests who try it stop asking what time it is by the second morning.",
  images: [
    {
      src: img("1441974231531-c6227db76b6e", 1400),
      alt: "Sunlight falling through a pine forest canopy",
    },
    {
      src: img("1518495973542-4542c06a5843", 1400),
      alt: "Soft light through forest leaves",
    },
  ],
};

export const dining = {
  name: "Sulo at the Ridge",
  philosophy:
    "Sulo — the Filipino torch — is a restaurant built around fire. Seasonal mountain produce, native grains, smoke, and slow mornings, cooked over ember and served above the clouds.",
  menu: [
    {
      name: "Charred mountain vegetables",
      detail: "coconut vinaigrette, toasted seeds, garden herbs",
    },
    {
      name: "Native chicken broth",
      detail: "ginger, lemongrass, wild mountain greens",
    },
    {
      name: "Longganisa breakfast",
      detail: "garlic rice, soft egg, cane vinegar — served until late morning",
    },
    {
      name: "Smoked cacao tablea tart",
      detail: "stone-ground highland cacao, sea salt, cream",
    },
    {
      name: "Sunrise coffee service",
      detail: "single-origin highland beans, brewed at your terrace",
    },
  ],
  settings: [
    "Private terrace breakfast",
    "Firepit dinner under the pines",
    "Chef's tasting menu at the hearth counter",
  ],
  images: [
    { src: img("1476224203421-9ac39bcb3327", 1400), alt: "Seasonal vegetables plated at Sulo" },
    { src: img("1504754524776-8f4f37790ca0", 1400), alt: "Slow highland breakfast spread" },
    { src: img("1481391319762-47dff72954d9", 1400), alt: "Smoked cacao tablea tart" },
  ],
};

export const gallery = [
  { src: img("1454496522488-7a8e488e8606", 1600), alt: "Amara Ridge exterior above misty peaks", span: "wide" },
  { src: img("1499696010180-025ef6e1a8f9", 1200), alt: "Villa bedroom opening to the mountains", span: "tall" },
  { src: img("1513694203232-719a280e022f", 1200), alt: "Fireplace lounge in warm light", span: "" },
  { src: img("1571896349842-33c89424de2d", 1200), alt: "Heated plunge pool at dusk", span: "" },
  { src: img("1600334129128-685c5582fd35", 1200), alt: "Forest spa ritual", span: "tall" },
  { src: img("1476224203421-9ac39bcb3327", 1200), alt: "Highland dining at Sulo", span: "" },
  { src: img("1542718610-a1d656d1884c", 1200), alt: "Misty forest trail", span: "" },
  { src: img("1510798831971-661eb04b3739", 1600), alt: "Sunset over the ridges", span: "wide" },
] as const;

export const arrival = {
  intro:
    "Amara Ridge rests in the cool upper elevations of the Philippine highlands, wrapped in pine forest and cloud. Arrival times vary by selected route; concierge-assisted transfers may be arranged from major city gateways.",
  points: [
    {
      title: "Mountain setting",
      text: "Villas sit along a quiet ridge line, above the valley fog and below nothing at all.",
    },
    {
      title: "Forest trails",
      text: "Pine and mossy-forest walking trails begin steps from the villa paths.",
    },
    {
      title: "Valley viewpoints",
      text: "Ridge decks and lookout points face the sunrise — and the cloud sea beneath it.",
    },
    {
      title: "Cultural highlands",
      text: "Weaving villages, terraced farms, and highland markets lie within touring distance.",
    },
    {
      title: "Concierge arrival",
      text: "Share your route and our team will meet you at the gateway of your choice.",
    },
  ],
};

export type Offer = {
  name: string;
  description: string;
  includes: string[];
};

export const offers: Offer[] = [
  {
    name: "Cloudline Romance",
    description:
      "Two nights in the Cloudline Villa, built around one long, unhurried evening by the fire.",
    includes: [
      "Private firepit dinner for two",
      "Sunrise terrace breakfast daily",
      "Couples' highland spa ritual",
      "Late checkout, cloud-schedule permitting",
    ],
  },
  {
    name: "The Wellness Weekend",
    description:
      "Three days of forest bathing, breathwork, and warm water — with your phone resting as deeply as you are.",
    includes: [
      "Daily guided forest bathing",
      "Morning breathwork on the ridge",
      "Two spa rituals of your choosing",
      "Optional digital detox concierge",
    ],
  },
  {
    name: "Family Highland Retreat",
    description:
      "The Terrace Hearth Villa, a long table, and slow days the whole family will keep returning to.",
    includes: [
      "Terrace Hearth Villa stay",
      "Family firepit supper",
      "Guided valley walk for all ages",
      "Cacao and coffee ceremony",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "We came for the view and stayed for the silence. By the second morning we had stopped checking the time entirely — the mist has its own schedule and you simply join it.",
    name: "A couple from Makati",
    context: "Cloudline Villa, two nights",
  },
  {
    quote:
      "The firepit dinner was the finest meal I've had in the mountains — and I grew up in them. Sulo treats highland ingredients with a respect you can taste.",
    name: "A returning guest from Cebu",
    context: "Terrace Hearth Villa, three nights",
  },
  {
    quote:
      "I checked in tired in a way I couldn't name. The forest bathing, the warm baths, the quiet staff who remember everything — I left feeling like myself again.",
    name: "A solo traveler from Singapore",
    context: "Forest Bathing Cabin, four nights",
  },
];

export const journal = [
  {
    title: "The New Luxury of the Philippine Highlands",
    excerpt:
      "Why travelers are trading beachfront for ridge line — and what quiet altitude offers that sea level cannot.",
    image: img("1470252649378-9c29740c9fa8", 1200),
    tag: "Perspective",
  },
  {
    title: "A Slow Weekend Above the Clouds",
    excerpt:
      "Forty-eight hours at Amara Ridge, hour by unhurried hour — from first coffee to last ember.",
    image: img("1476514525535-07fb3b4ae5f1", 1200),
    tag: "Itinerary",
  },
  {
    title: "What to Pack for a Cool-Weather Mountain Retreat",
    excerpt:
      "Layers, linen, wool socks, and one good book. A short list for the Philippines' gentler climate.",
    image: img("1441974231531-c6227db76b6e", 1200),
    tag: "Field Notes",
  },
];
