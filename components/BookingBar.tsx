"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CalendarDays, Users, Home, ArrowRight } from "lucide-react";
import { stays } from "@/lib/data/stays";

const field =
  "w-full bg-transparent text-sm text-cream-50 outline-none placeholder:text-taupe-400/60 [color-scheme:dark]";

const label =
  "flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-taupe-400";

/**
 * The hero search bar. On submit it routes to /booking carrying the chosen
 * stay as a query parameter so the inquiry form arrives preselected.
 */
export default function BookingBar() {
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];
  const [checkIn, setCheckIn] = useState("");
  const [stay, setStay] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
      className="w-full max-w-4xl"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(stay ? `/booking?stay=${stay}` : "/booking");
        }}
        aria-label="Start a booking inquiry"
        className="grid gap-5 border border-mist-100/15 bg-pine-950/60 p-6 shadow-2xl shadow-pine-950/60 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr_1.1fr_auto] lg:items-end lg:gap-6 lg:p-7"
      >
        <div className="space-y-2.5">
          <label htmlFor="bar-check-in" className={label}>
            <CalendarDays className="h-3.5 w-3.5 text-ember-500" /> Check-in
          </label>
          <input
            id="bar-check-in"
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={`${field} border-b border-mist-100/20 pb-2 focus:border-ember-500`}
          />
        </div>
        <div className="space-y-2.5">
          <label htmlFor="bar-check-out" className={label}>
            <CalendarDays className="h-3.5 w-3.5 text-ember-500" /> Check-out
          </label>
          <input
            id="bar-check-out"
            type="date"
            min={checkIn || today}
            className={`${field} border-b border-mist-100/20 pb-2 focus:border-ember-500`}
          />
        </div>
        <div className="space-y-2.5">
          <label htmlFor="bar-guests" className={label}>
            <Users className="h-3.5 w-3.5 text-ember-500" /> Guests
          </label>
          <select
            id="bar-guests"
            defaultValue="2"
            className={`${field} border-b border-mist-100/20 pb-2 focus:border-ember-500 [&>option]:bg-pine-950`}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2.5">
          <label htmlFor="bar-villa" className={label}>
            <Home className="h-3.5 w-3.5 text-ember-500" /> Villa type
          </label>
          <select
            id="bar-villa"
            value={stay}
            onChange={(e) => setStay(e.target.value)}
            className={`${field} border-b border-mist-100/20 pb-2 focus:border-ember-500 [&>option]:bg-pine-950`}
          >
            <option value="">Any villa</option>
            {stays.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2.5 bg-ember-500 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-pine-950 transition-all duration-300 hover:bg-ember-400 sm:col-span-2 lg:col-span-1"
        >
          Reserve
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </form>
    </motion.div>
  );
}
