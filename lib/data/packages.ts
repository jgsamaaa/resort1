import { ph } from "@/lib/images";

export type Package = {
  slug: string;
  name: string;
  description: string;
  bestFor: string;
  length: string;
  includes: string[];
  image: string;
};

export const packages: Package[] = [
  {
    slug: "cloudline-romance",
    name: "Cloudline Romance",
    description:
      "Two nights in the Cloudline Villa, built around one long, unhurried evening by the fire.",
    bestFor: "Anniversaries, proposals, and quiet celebrations",
    length: "2 nights suggested",
    includes: [
      "Cloudline Villa stay",
      "Private firepit dinner for two",
      "Sunrise terrace breakfast daily",
      "Couples' highland spa ritual",
      "Late checkout, cloud-schedule permitting",
    ],
    image: ph.pulagSunset,
  },
  {
    slug: "wellness-weekend",
    name: "The Wellness Weekend",
    description:
      "Three days of forest bathing, breathwork, and warm water — with your phone resting as deeply as you are.",
    bestFor: "Anyone arriving tired in a way they can't name",
    length: "3 nights suggested",
    includes: [
      "Forest Bathing Cabin or Pine House Suite",
      "Daily guided forest bathing",
      "Morning breathwork on the ridge",
      "Two spa rituals of your choosing",
      "Optional digital detox concierge",
    ],
    image: ph.baguioPines,
  },
  {
    slug: "family-highland-retreat",
    name: "Family Highland Retreat",
    description:
      "The Family Highland Lodge, a long table, and slow days the whole family will keep returning to.",
    bestFor: "Multi-generation trips and reunions",
    length: "3 nights suggested",
    includes: [
      "Family Highland Lodge stay",
      "Family firepit supper with kakanin",
      "Guided valley walk for all ages",
      "Coffee and cacao ceremony for the adults",
      "Merienda basket every afternoon",
    ],
    image: ph.davaoCabins,
  },
  {
    slug: "work-from-the-ridge",
    name: "Work From the Ridge",
    description:
      "Five weekdays of good light, better coffee, and a window the fog keeps redecorating. Meetings optional; sunsets are not.",
    bestFor: "Remote workers who need altitude, not open-plan offices",
    length: "5 nights suggested",
    includes: [
      "Pine House Suite with writing desk",
      "All-day coffee and tsokolate service",
      "Reliable connectivity in-suite",
      "One spa ritual mid-week",
      "Sunset ridge walk any evening",
    ],
    image: ph.dauinTable,
  },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);
