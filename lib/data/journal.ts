import { ph } from "@/lib/images";

export type JournalPost = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
  body: { type: "p" | "quote" | "h2"; text: string }[];
};

export const journal: JournalPost[] = [
  {
    slug: "new-luxury-philippine-highlands",
    title: "The New Luxury of the Philippine Highlands",
    tag: "Perspective",
    date: "Sample date — June 2026",
    readingTime: "5 min read",
    excerpt:
      "Why travelers are trading beachfront for ridge line — and what quiet altitude offers that sea level cannot.",
    image: ph.marlboroHill,
    body: [
      {
        type: "p",
        text: "For decades, a Philippine holiday meant one thing: the coast. White sand, warm shallows, a mango shake sweating on a bamboo table. The mountains, when they came up at all, were framed as an adventure — something you climbed, conquered, and left before dark.",
      },
      {
        type: "p",
        text: "That framing is quietly changing. A generation of travelers who have done the beach — done it beautifully, done it repeatedly — are discovering what upland Filipinos have always known: that altitude changes the texture of time. Above a certain elevation, the air cools, the light softens, and the day stops demanding an itinerary.",
      },
      { type: "h2", text: "What the ridge offers that the shore cannot" },
      {
        type: "p",
        text: "The highlands trade the drama of the sea for something slower and stranger: fog that arrives like a tide, pine resin on cold air, terraces cut by hand over centuries still holding water and light. Sweater weather, in a tropical country, remains a small daily miracle.",
      },
      {
        type: "quote",
        text: "Luxury here is not marble. It is a blanket at breakfast, in a country where you never thought you'd want one.",
      },
      {
        type: "p",
        text: "The new highland luxury is built on that miracle — fireplaces instead of infinity pools, brewed Benguet coffee instead of beach bars, silence as the headline amenity. It is hospitality that asks less of you, and gives back more slowly. Which, it turns out, is exactly what many of us came to find.",
      },
    ],
  },
  {
    slug: "slow-weekend-above-the-clouds",
    title: "A Slow Weekend Above the Clouds",
    tag: "Itinerary",
    date: "Sample date — May 2026",
    readingTime: "6 min read",
    excerpt:
      "Forty-eight hours at Amara Ridge, hour by unhurried hour — from first coffee to last ember.",
    image: ph.pulagSunset,
    body: [
      {
        type: "p",
        text: "Friday, 4:00 PM. You arrive as the afternoon fog does, which feels coordinated but isn't. A warm towel, a cup of tsokolate, and the concierge walks you down a stone path to your villa. Unpacking takes eight minutes. You will not need most of what you brought.",
      },
      {
        type: "p",
        text: "Friday, 6:30 PM. Dinner at Sulo is built around fire and whatever the gardens gave up that morning. Order the native chicken broth. Order it again tomorrow. Nobody is judging.",
      },
      { type: "h2", text: "Saturday: the day the mountain plans for you" },
      {
        type: "p",
        text: "5:15 AM. The ridge walk leaves in the dark, which feels like a mistake until it very much isn't. The cloud sea below the summit does not photograph the way it feels, though everyone tries. Back by 8:00 for a terrace breakfast that goes long.",
      },
      {
        type: "p",
        text: "Afternoon belongs to the spa pavilion or the plunge pool — warm water, cool air, no decisions heavier than that one. At golden hour, merienda arrives without being asked for: banana fritters, thick coffee, a blanket.",
      },
      {
        type: "quote",
        text: "By Saturday night you have stopped checking the time. The fire is lit. That is the schedule now.",
      },
      {
        type: "p",
        text: "Sunday, 10:00 AM. One last slow breakfast, one last look at the ridge, and the drive down through the pines. The phone regains signal somewhere around the second switchback. Let it ring a little longer.",
      },
    ],
  },
  {
    slug: "what-to-pack-mountain-retreat",
    title: "What to Pack for a Cool-Weather Mountain Retreat",
    tag: "Field Notes",
    date: "Sample date — April 2026",
    readingTime: "4 min read",
    excerpt:
      "Layers, linen, wool socks, and one good book. A short list for the Philippines' gentler climate.",
    image: ph.baguioPines,
    body: [
      {
        type: "p",
        text: "First-time highland guests tend to make the same two mistakes: packing for the tropics, and packing too much of it. The uplands run cool year-round — think early-morning single digits to gentle afternoon warmth — and the wardrobe that works is closer to autumn in temperate countries than summer at the beach.",
      },
      { type: "h2", text: "The short list" },
      {
        type: "p",
        text: "Layers over statements: a wool sweater, a light down or fleece jacket for dawn walks, long trousers, and one warm hat you'll pretend you brought ironically. Linen and cotton for midday. Real walking shoes with grip — trails here are stone and pine needle, lovely and occasionally slick.",
      },
      {
        type: "p",
        text: "Wool socks earn their space on the first foggy evening. So does a swimsuit, which surprises people: warm plunge pools and soaking tubs are best used when the air is coldest.",
      },
      {
        type: "quote",
        text: "Pack one good book and finish it. That is the whole test of whether the retreat worked.",
      },
      {
        type: "p",
        text: "Leave behind: the drone, the third pair of shoes, the ring light. The fog photographs beautifully on any phone, and the best hours here don't get documented at all.",
      },
    ],
  },
  {
    slug: "filipino-highland-dining",
    title: "Why Filipino Highland Dining Belongs on Your Travel List",
    tag: "Table",
    date: "Sample date — March 2026",
    readingTime: "5 min read",
    excerpt:
      "Smoke, tablea, mountain rice, and vegetables picked the same morning — the uplands are quietly serving the country's most exciting food.",
    image: ph.bananaLeafFeast,
    body: [
      {
        type: "p",
        text: "Filipino food's international moment has largely been written at sea level — adobo, sisig, the great garlicky canon. But some of the country's most quietly thrilling cooking is happening in the cold: highland kitchens working with mountain rice, smoked meats, wild greens, and cacao grown a valley away.",
      },
      { type: "h2", text: "What makes upland cooking different" },
      {
        type: "p",
        text: "Altitude edits the pantry. Cool weather favors crisp vegetables and brassicas the lowlands struggle with; pine and hardwood smoke replace the fryer as the kitchen's loudest voice; and coffee and cacao — Benguet arabica, stone-ground tablea — anchor both ends of every meal.",
      },
      {
        type: "quote",
        text: "The broth arrives first: native chicken, ginger, mountain herbs. It tastes like being taken care of.",
      },
      {
        type: "p",
        text: "At Sulo, our restaurant on the ridge, the menu is written by the morning harvest and finished over embers. Charred vegetables with coconut vinaigrette, longganisa with garlic rice and a soft egg, a smoked tablea tart that has ended arguments. None of it is fusion. All of it is Filipino — just higher up, and a little closer to the fire.",
      },
    ],
  },
];

export const getPost = (slug: string) => journal.find((p) => p.slug === slug);

export const relatedPosts = (slug: string, count = 3) =>
  journal.filter((p) => p.slug !== slug).slice(0, count);
