import Image from "next/image";
import { ph } from "@/lib/images";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-5">
      <Image
        src={ph.marlboroHill}
        alt="Mist drifting through mountain ridges"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-pine-950/80" />
      <div className="grain relative max-w-xl py-32 text-center">
        <p className="text-[11px] uppercase tracking-[0.5em] text-ember-400">
          404 — Lost in the fog
        </p>
        <h1 className="mt-6 font-display text-5xl font-light leading-[1.05] text-cream-50 sm:text-6xl">
          This trail doesn&apos;t exist
          <span className="block italic text-linen-200">— but the view does.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-mist-100/75">
          The page you&apos;re after has wandered off the ridge. The concierge
          suggests one of these paths back.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/stays" variant="outline">
            Browse Stays
          </Button>
          <Button href="/booking" variant="outline">
            Reserve
          </Button>
        </div>
      </div>
    </section>
  );
}
