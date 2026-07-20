import type { Metadata } from "next";
import { Suspense } from "react";
import { ph } from "@/lib/images";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description:
    "Send a booking inquiry for Amara Ridge — choose your dates, stay, and package, and our concierge responds with availability and rates.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        compact
        image={ph.mindanaoClouds}
        imageAlt="Clouds wrapping a green mountain range"
        eyebrow="Reservations"
        title="Reserve your stay"
        subtitle="Tell us your dates and who's coming. Our concierge replies with availability and rates — no payment is taken at inquiry."
      />
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Suspense>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
