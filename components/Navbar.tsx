"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        solid
          ? "border-b border-mist-100/10 bg-pine-950/85 backdrop-blur-xl"
          : "bg-gradient-to-b from-pine-950/70 to-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-5 lg:px-8"
      >
        <Link href="/" className="group leading-none">
          <span className="font-display text-2xl font-medium tracking-[0.08em] text-cream-50">
            Amara Ridge
          </span>
          <span className="mt-1 block text-[9px] uppercase tracking-[0.45em] text-taupe-400 transition-colors group-hover:text-ember-400">
            {site.eyebrow}
          </span>
        </Link>

        <ul className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          {nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-ember-400"
                    : "text-mist-100/75 hover:text-ember-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/booking"
              className="border border-ember-500/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ember-400 transition-all duration-300 hover:bg-ember-500 hover:text-pine-950"
            >
              Reserve
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="p-1 text-mist-100 xl:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-500 ease-in-out xl:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="max-h-[calc(100vh-5rem)] space-y-0.5 overflow-y-auto border-t border-mist-100/10 bg-pine-950/95 px-6 pb-8 pt-4 backdrop-blur-xl">
            {[{ href: "/", label: "Home" }, ...nav].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 font-display text-xl transition-colors ${
                    isActive(link.href)
                      ? "text-ember-400"
                      : "text-mist-100/90 hover:text-ember-400"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="block border border-ember-500/70 px-7 py-4 text-center text-xs uppercase tracking-[0.3em] text-ember-400"
              >
                Reserve
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
