# 🏔️ Amara Ridge

*A mountain sanctuary above the Philippine clouds.*

A fully clickable, multi-page luxury mountain resort concept website for a
fictional brand in the Philippine highlands. **Every photograph on the site
was verified as taken in the Philippines** (Mt. Pulag, Sagada, Batad, Baguio,
Davao, Tagaytay, and more) via Unsplash location metadata.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion

## Routes

| Route | Page |
| --- | --- |
| `/` | Cinematic home — hero + booking bar, stays, experiences, wellness/dining teasers, gallery, offers, journal, CTA |
| `/stays` + `/stays/[slug]` | 6 stays with full detail pages (amenities, inclusions, highlights, gallery, related stays) |
| `/experiences` | 8 highland experiences |
| `/wellness` | Six practices, digital detox, wellness packages |
| `/dining` | Sulo at the Ridge — philosophy, sample menu, three dining settings |
| `/gallery` | Filterable gallery (Villas · Dining · Wellness · Landscape · Experiences) with keyboard-accessible lightbox |
| `/offers` | 4 packages, rates upon request |
| `/journal` + `/journal/[slug]` | 4 full editorial articles with related reading |
| `/location` | Arrival, illustrative map panel, surroundings |
| `/booking` | Validated booking inquiry form with query-param preselection (`?stay=`, `?package=`, `?experience=`) |
| `/contact` | Concierge contact form + FAQ |
| `/about` | Brand story, values, team placeholder |
| 404 | Branded not-found page |

## Data architecture

All content lives in typed data files: `lib/data/stays.ts`,
`lib/data/experiences.ts`, `lib/data/packages.ts`, `lib/data/journal.ts`,
`lib/data/gallery.ts`, plus `lib/images.ts` (the verified Philippine image
map) and `lib/site.ts` (nav + contact).

## Run locally

```bash
npm install
npm run dev
```

## Notes

Amara Ridge is a fictional brand. Forms are client-side prototypes (no data
is sent), rates are intentionally "upon request," and no real travel claims
are made. Photography via Unsplash, Philippines-only.
