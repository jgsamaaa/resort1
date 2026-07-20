import Link from "next/link";
import { Shell, Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/BrandIcons";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-sand-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Shell className="h-8 w-8 text-gold-400" strokeWidth={1.5} />
            <div className="leading-tight">
              <span className="font-display text-2xl">{site.name}</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-sand-200/70">
                Beach Resort &amp; Villas
              </span>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-sand-200/80">
            A small, soulful beachfront resort on the quiet side of El Nido,
            Palawan — where the sand stays white, the water stays clear, and
            the welcome stays warm.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-300">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["Rooms & Rates", "/rooms"],
              ["About the Resort", "/about"],
              ["Where We Are", "/location"],
              ["Book Your Stay", "/booking"],
              ["Contact & Inquiries", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sand-200/80 transition-colors hover:text-gold-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-300">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-sand-200/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              {site.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              {site.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              {site.email}
            </li>
          </ul>
          <div className="mt-5 flex gap-4">
            <span className="rounded-full border border-sand-200/20 p-2.5 transition-colors hover:border-gold-400 hover:text-gold-300">
              <FacebookIcon />
            </span>
            <span className="rounded-full border border-sand-200/20 p-2.5 transition-colors hover:border-gold-400 hover:text-gold-300">
              <InstagramIcon />
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-300">Stay in the Loop</h3>
          <p className="mt-4 text-sm text-sand-200/80">
            Seasonal offers, island tips, and the occasional sunset photo. No
            spam — promise.
          </p>
          <form className="mt-4 flex" action="/contact">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-l-full border border-sand-200/20 bg-ocean-900 px-4 py-2.5 text-sm text-sand-50 placeholder:text-sand-200/40 focus:border-gold-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r-full bg-gold-500 px-5 text-sm font-medium text-ocean-950 transition-colors hover:bg-gold-400"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-sand-200/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-sand-200/50 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p>{site.tagline} · El Nido, Palawan</p>
        </div>
      </div>
    </footer>
  );
}
