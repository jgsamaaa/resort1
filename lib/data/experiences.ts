import { ph } from "@/lib/images";

export type Experience = {
  slug: string;
  title: string;
  category: string;
  text: string;
  detail: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    slug: "sunrise-ridge-walk",
    title: "Sunrise Ridge Walk",
    category: "Trail",
    text: "Leave before first light with a guide and a thermos of highland coffee. Arrive as the valley fills with cloud below your feet.",
    detail:
      "The walk is unhurried — forty minutes of switchbacks under fading stars, then the long reward: the cloud sea turning gold beneath the ridge.",
    image: ph.pulagHikers,
  },
  {
    slug: "private-firepit-dinner",
    title: "Private Firepit Dinner",
    category: "Fire",
    text: "A table for two beside open flame — slow-grilled courses, wool blankets, and a sky that gets darker and brighter at once.",
    detail:
      "Our fire cooks build the ember bed an hour before you sit. Courses come off the grill as they're ready, and no one checks a watch.",
    image: ph.bonfire,
  },
  {
    slug: "highland-spa-ritual",
    title: "Highland Spa Ritual",
    category: "Wellness",
    text: "Warm stone, mountain herbs, and unhurried hands — a hilot-inspired treatment paced to the mist, not the clock.",
    detail:
      "Treatments unfold on handwoven daybeds in rooms open to the trees, with warm compresses of lemongrass and mountain herbs.",
    image: ph.quezonDaybed,
  },
  {
    slug: "farm-to-table-tasting",
    title: "Filipino Farm-to-Table Tasting",
    category: "Dining",
    text: "Meet the morning's harvest before it meets the fire. Courses served kamayan-style on banana leaf, drawn from gardens nearby.",
    detail:
      "The tasting begins in the garden rows and ends at the long table — six courses of vegetables, native chicken, and river greens.",
    image: ph.bananaLeafFeast,
  },
  {
    slug: "valley-cultural-tour",
    title: "Valley Cultural Tour",
    category: "Culture",
    text: "Weavers, woodcarvers, and centuries-old rice terraces — an afternoon among the crafts and stories that shaped these mountains.",
    detail:
      "Guests visit terrace villages and workshops with a local guide, and every purchase goes directly to the maker.",
    image: ph.batadTerraces,
  },
  {
    slug: "coffee-cacao-ceremony",
    title: "Slow Coffee & Cacao Ceremony",
    category: "Table",
    text: "Single-origin highland beans and stone-ground tablea, brewed slowly at your terrace as the fog lifts.",
    detail:
      "A barista walks you through Benguet and Sagada beans, then finishes with thick tsokolate whisked the old way, with a batirol.",
    image: ph.ozamizCoffee,
  },
  {
    slug: "forest-bathing-trail",
    title: "Forest Bathing Trail",
    category: "Wellness",
    text: "A guided shinrin-yoku walk through pine and fern — slow, mostly silent, and led by the forest itself.",
    detail:
      "There is no distance goal and no pace to keep. The guide offers gentle invitations; the pines handle the rest.",
    image: ph.baguioPath,
  },
  {
    slug: "stargazing-at-the-ridge",
    title: "Stargazing at the Ridge",
    category: "Night",
    text: "Above the valley haze, the night sky recovers its depth. Blankets, tsokolate, and a guide who knows the northern constellations.",
    detail:
      "On clear nights the ridge deck opens late. The Milky Way makes regular appearances; shooting stars keep their own schedule.",
    image: ph.pulagNight,
  },
];
