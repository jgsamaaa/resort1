"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ph } from "@/lib/images";
import { site } from "@/lib/site";
import BookingBar from "@/components/BookingBar";

const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export default function Hero() {
  return (
    <section className="grain relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pb-28 pt-36 sm:pb-32">
      <Image
        src={ph.pulagSunset}
        alt="The sun setting over a sea of clouds below the ridges of Mount Pulag"
        fill
        priority
        sizes="100vw"
        className="animate-slow-drift object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-pine-950/80 via-pine-950/30 to-pine-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(16,23,19,0.55)_100%)]" />
      <div
        aria-hidden
        className="animate-mist absolute inset-x-[-15%] bottom-1/4 h-40 bg-gradient-to-r from-transparent via-mist-100/10 to-transparent blur-2xl"
      />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease }}
          className="text-[11px] uppercase tracking-[0.5em] text-linen-200/90 sm:text-xs"
        >
          {site.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.1, ease }}
          className="mt-6 font-display text-6xl font-light leading-[0.95] text-cream-50 sm:text-7xl lg:text-[7rem]"
        >
          Wake Above
          <span className="block italic text-linen-200">the Clouds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1, ease }}
          className="mt-7 max-w-xl text-base font-light leading-relaxed text-mist-100/85 sm:text-lg"
        >
          A quiet mountain retreat of private villas, pine-scented mornings,
          and warm Filipino hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 1, ease }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/booking"
            className="bg-ember-500 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-pine-950 transition-all duration-300 hover:bg-ember-400 hover:shadow-xl hover:shadow-ember-500/20"
          >
            Reserve Your Stay
          </Link>
          <Link
            href="/stays"
            className="border border-mist-100/40 px-10 py-4 text-[11px] uppercase tracking-[0.28em] text-mist-100 backdrop-blur-sm transition-all duration-300 hover:border-ember-400 hover:text-ember-400"
          >
            Explore the Retreat
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 mt-16 flex w-full max-w-4xl justify-center sm:mt-20">
        <BookingBar />
      </div>
    </section>
  );
}
