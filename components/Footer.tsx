import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/BrandIcons";
import { footerNav, site } from "@/lib/site";

export default function Footer() {
  const columns = [footerNav.slice(0, 6), footerNav.slice(6)];

  return (
    <footer className="border-t border-mist-100/10 bg-pine-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-3xl font-light text-cream-50">
            Amara Ridge
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-taupe-400">
            {site.eyebrow}
          </p>
          <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-mist-100/60">
            A fictional concept for a private highland sanctuary — misty
            mornings, firelit evenings, and Filipino warmth above the clouds.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook (placeholder — not a real profile)"
              className="border border-mist-100/15 p-3 text-mist-100/60 transition-colors duration-300 hover:border-ember-500/60 hover:text-ember-400"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram (placeholder — not a real profile)"
              className="border border-mist-100/15 p-3 text-mist-100/60 transition-colors duration-300 hover:border-ember-500/60 hover:text-ember-400"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:col-span-1">
          {columns.map((column, ci) => (
            <div key={ci}>
              <h3 className="text-[11px] uppercase tracking-[0.35em] text-ember-500">
                {ci === 0 ? "The Retreat" : "Plan"}
              </h3>
              <ul className="mt-6 space-y-3 text-sm font-light">
                {column.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-mist-100/65 transition-colors duration-300 hover:text-ember-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.35em] text-ember-500">
            Concierge
          </h3>
          <ul className="mt-6 space-y-4 text-sm font-light text-mist-100/65">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-taupe-400" />
              {site.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-taupe-400" />
              {site.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-taupe-400" />
              {site.email}
            </li>
          </ul>
          <p className="mt-5 text-xs font-light leading-relaxed text-mist-100/45">
            {site.concierge}
          </p>
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-[0.35em] text-ember-500">
            The Ridge Letter
          </h3>
          <p className="mt-6 text-sm font-light leading-relaxed text-mist-100/60">
            Seasonal notes from the mountain — cloud forecasts, new rituals,
            and quiet offers.
          </p>
          <form className="mt-5 flex border border-mist-100/15 focus-within:border-ember-500/60">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-3 text-sm text-cream-50 outline-none placeholder:text-taupe-400/60"
            />
            <button
              type="submit"
              className="shrink-0 bg-ember-500 px-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-pine-950 transition-colors duration-300 hover:bg-ember-400"
            >
              Join
            </button>
          </form>
          <p className="mt-3 text-[11px] font-light text-mist-100/40">
            Prototype signup — no emails are collected.
          </p>
        </div>
      </div>

      <div className="border-t border-mist-100/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-[11px] tracking-wide text-mist-100/40 sm:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} Amara Ridge. A fictional brand concept
            — all content illustrative.
          </p>
          <p className="flex gap-6">
            <span className="cursor-default" title="Placeholder — no policy page exists">
              Privacy (placeholder)
            </span>
            <span className="cursor-default" title="Placeholder — no terms page exists">
              Terms (placeholder)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
