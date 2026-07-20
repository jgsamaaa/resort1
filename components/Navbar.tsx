"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shell } from "lucide-react";
import { site } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Rates" },
  { href: "/about", label: "About" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ocean-950/90 shadow-lg shadow-ocean-950/20 backdrop-blur-md"
          : "bg-gradient-to-b from-ocean-950/60 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <Shell
            className="h-7 w-7 text-gold-400 transition-transform duration-500 group-hover:rotate-45"
            strokeWidth={1.5}
          />
          <div className="leading-tight">
            <span className="font-display text-xl tracking-wide text-sand-50">
              {site.name}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-sand-200/80">
              Beach Resort &amp; Villas
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm uppercase tracking-[0.18em] transition-colors ${
                  pathname === link.href
                    ? "text-gold-300"
                    : "text-sand-100 hover:text-gold-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/booking"
              className="rounded-full bg-gold-500 px-6 py-2.5 text-sm font-medium uppercase tracking-[0.18em] text-ocean-950 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30"
            >
              Book Now
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-sand-50 lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 border-t border-sand-50/10 bg-ocean-950/95 px-5 pb-6 pt-3 backdrop-blur-md">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2.5 text-sm uppercase tracking-[0.18em] ${
                  pathname === link.href ? "text-gold-300" : "text-sand-100"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href="/booking"
              className="block rounded-full bg-gold-500 px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.18em] text-ocean-950"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
