"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, CheckCircle2, Sparkles } from "lucide-react";
import { stays } from "@/lib/data/stays";
import { packages } from "@/lib/data/packages";
import { experiences } from "@/lib/data/experiences";
import { site } from "@/lib/site";

const inputClass =
  "w-full border border-mist-100/20 bg-pine-950/40 px-4 py-3.5 text-sm text-cream-50 outline-none transition-colors placeholder:text-taupe-400/50 focus:border-ember-500 [color-scheme:dark]";

const labelClass =
  "mb-2 block text-[10px] font-medium uppercase tracking-[0.25em] text-taupe-400";

const errorClass = "mt-1.5 text-xs text-ember-400";

type Errors = Partial<Record<string, string>>;

export default function BookingForm() {
  const params = useSearchParams();

  const staySlug = params.get("stay") ?? "";
  const packageSlug = params.get("package") ?? "";
  const experienceSlug = params.get("experience") ?? "";

  const initialStay = stays.some((s) => s.slug === staySlug) ? staySlug : "";
  const initialPackage = packages.some((p) => p.slug === packageSlug)
    ? packageSlug
    : "";
  const preselectedExperience = experiences.find(
    (e) => e.slug === experienceSlug
  );

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    stay: initialStay,
    pkg: initialPackage,
    requests: preselectedExperience
      ? `We're interested in the "${preselectedExperience.title}" experience.`
      : "",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const set = (key: keyof typeof form, value: string | boolean) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.firstName.trim()) e.firstName = "Please tell us your first name.";
    if (!form.lastName.trim()) e.lastName = "Please tell us your last name.";
    if (!form.email.trim()) e.email = "We need an email to confirm your stay.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "That email doesn't look quite right.";
    if (form.phone.trim() && !/^[+\d][\d\s().-]{5,}$/.test(form.phone.trim()))
      e.phone = "That phone number doesn't look quite right.";
    if (!form.checkIn) e.checkIn = "Please choose a check-in date.";
    if (!form.checkOut) e.checkOut = "Please choose a check-out date.";
    if (
      form.checkIn &&
      form.checkOut &&
      new Date(form.checkOut) <= new Date(form.checkIn)
    )
      e.checkOut = "Check-out must be after check-in.";
    if (!form.consent)
      e.consent = "Please agree so our concierge may reply to you.";
    return e;
  };

  const nights = useMemo(() => {
    if (!form.checkIn || !form.checkOut) return 0;
    const diff =
      (new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) /
      86_400_000;
    return diff > 0 ? Math.round(diff) : 0;
  }, [form.checkIn, form.checkOut]);

  const selectedStay = stays.find((s) => s.slug === form.stay);
  const selectedPackage = packages.find((p) => p.slug === form.pkg);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).some((k) => found[k])) {
      setErrors(found);
      const firstKey = Object.keys(found).find((k) => found[k]);
      if (firstKey) document.getElementById(firstKey)?.focus();
      return;
    }
    setReference(`AR-${Date.now().toString(36).toUpperCase().slice(-6)}`);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl border border-mist-100/12 bg-forest-800/40 p-10 text-center lg:p-14"
      >
        <Sparkles className="mx-auto h-12 w-12 text-ember-500" strokeWidth={1.25} />
        <h2 className="mt-6 font-display text-4xl font-light text-cream-50">
          Salamat, {form.firstName.trim()}.
        </h2>
        <p className="mx-auto mt-5 max-w-md font-light leading-relaxed text-mist-100/75">
          Your inquiry has been noted. In a live resort, our concierge would
          reply to <span className="text-linen-200">{form.email}</span> within
          the day with availability and rates. This website is a design
          prototype — no reservation has been made.
        </p>
        <div className="mx-auto mt-8 max-w-md border border-mist-100/10 bg-pine-950/50 p-6 text-left text-sm font-light text-mist-100/80">
          <p className="text-[10px] uppercase tracking-[0.25em] text-taupe-400">
            Inquiry reference
          </p>
          <p className="mt-1 font-display text-2xl text-ember-400">{reference}</p>
          <ul className="mt-4 space-y-1.5">
            {selectedStay && <li>Stay: {selectedStay.name}</li>}
            {selectedPackage && <li>Package: {selectedPackage.name}</li>}
            <li>
              <CalendarDays className="mr-2 inline h-4 w-4 text-ember-500" />
              {form.checkIn} → {form.checkOut} ({nights}{" "}
              {nights === 1 ? "night" : "nights"})
            </li>
            <li>{form.guests} guest(s)</li>
          </ul>
        </div>
        <p className="mt-6 text-xs text-mist-100/50">{site.concierge}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/stays"
            className="border border-mist-100/30 px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] text-mist-100 transition-colors hover:border-ember-400 hover:text-ember-400"
          >
            Browse More Stays
          </Link>
          <Link
            href="/"
            className="bg-ember-500 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-pine-950 transition-colors hover:bg-ember-400"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.form
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        noValidate
        onSubmit={handleSubmit}
        className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-3"
      >
        <div className="border border-mist-100/12 bg-forest-800/30 p-8 lg:col-span-2 lg:p-10">
          <h2 className="font-display text-3xl font-light text-cream-50">
            Your details
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First name *
              </label>
              <input
                id="firstName"
                type="text"
                autoComplete="given-name"
                value={form.firstName}
                onChange={(e) => set("firstName", e.target.value)}
                aria-invalid={!!errors.firstName}
                className={inputClass}
                placeholder="Juan"
              />
              {errors.firstName && (
                <p role="alert" className={errorClass}>
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last name *
              </label>
              <input
                id="lastName"
                type="text"
                autoComplete="family-name"
                value={form.lastName}
                onChange={(e) => set("lastName", e.target.value)}
                aria-invalid={!!errors.lastName}
                className={inputClass}
                placeholder="dela Cruz"
              />
              {errors.lastName && (
                <p role="alert" className={errorClass}>
                  {errors.lastName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email *
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                aria-invalid={!!errors.email}
                className={inputClass}
                placeholder="you@email.com"
              />
              {errors.email && (
                <p role="alert" className={errorClass}>
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone <span className="normal-case opacity-60">(optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                aria-invalid={!!errors.phone}
                className={inputClass}
                placeholder="+63 9xx xxx xxxx"
              />
              {errors.phone && (
                <p role="alert" className={errorClass}>
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <h2 className="mt-11 font-display text-3xl font-light text-cream-50">
            Your stay
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="checkIn" className={labelClass}>
                Check-in *
              </label>
              <input
                id="checkIn"
                type="date"
                min={today}
                value={form.checkIn}
                onChange={(e) => set("checkIn", e.target.value)}
                aria-invalid={!!errors.checkIn}
                className={inputClass}
              />
              {errors.checkIn && (
                <p role="alert" className={errorClass}>
                  {errors.checkIn}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="checkOut" className={labelClass}>
                Check-out *
              </label>
              <input
                id="checkOut"
                type="date"
                min={form.checkIn || today}
                value={form.checkOut}
                onChange={(e) => set("checkOut", e.target.value)}
                aria-invalid={!!errors.checkOut}
                className={inputClass}
              />
              {errors.checkOut && (
                <p role="alert" className={errorClass}>
                  {errors.checkOut}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="guests" className={labelClass}>
                Guests
              </label>
              <select
                id="guests"
                value={form.guests}
                onChange={(e) => set("guests", e.target.value)}
                className={`${inputClass} [&>option]:bg-pine-950`}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="stay" className={labelClass}>
                Preferred stay
              </label>
              <select
                id="stay"
                value={form.stay}
                onChange={(e) => set("stay", e.target.value)}
                className={`${inputClass} [&>option]:bg-pine-950`}
              >
                <option value="">No preference yet</option>
                {stays.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} · sleeps {s.sleeps}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="pkg" className={labelClass}>
                Package interest
              </label>
              <select
                id="pkg"
                value={form.pkg}
                onChange={(e) => set("pkg", e.target.value)}
                className={`${inputClass} [&>option]:bg-pine-950`}
              >
                <option value="">Just the stay, thank you</option>
                {packages.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="requests" className={labelClass}>
                Special requests
              </label>
              <textarea
                id="requests"
                rows={4}
                value={form.requests}
                onChange={(e) => set("requests", e.target.value)}
                className={inputClass}
                placeholder="Celebrating something? Dietary notes? Early arrival? We read every word."
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="flex items-start gap-3 text-sm font-light text-mist-100/75">
              <input
                id="consent"
                type="checkbox"
                checked={form.consent}
                onChange={(e) => set("consent", e.target.checked)}
                aria-invalid={!!errors.consent}
                className="mt-1 h-4 w-4 accent-ember-500"
              />
              <span>
                I agree that the Amara Ridge concierge may contact me about
                this inquiry. *
              </span>
            </label>
            {errors.consent && (
              <p role="alert" className={errorClass}>
                {errors.consent}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-9 w-full bg-ember-500 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-pine-950 transition-all duration-300 hover:bg-ember-400 hover:shadow-xl hover:shadow-ember-500/20"
          >
            Send Booking Inquiry
          </button>
          <p className="mt-4 text-center text-xs font-light text-mist-100/50">
            Prototype form — nothing is charged and no real reservation is
            made. Rates are shared upon request.
          </p>
        </div>

        {/* Summary rail */}
        <aside className="h-fit border border-mist-100/12 bg-pine-950/60 p-8 backdrop-blur-sm lg:sticky lg:top-28">
          <h3 className="font-display text-2xl font-light text-ember-400">
            Inquiry summary
          </h3>
          <dl className="mt-6 space-y-4 text-sm font-light">
            <div className="flex justify-between gap-4 border-b border-mist-100/10 pb-3">
              <dt className="text-taupe-400">Stay</dt>
              <dd className="text-right text-linen-200">
                {selectedStay ? selectedStay.name : "No preference"}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-mist-100/10 pb-3">
              <dt className="text-taupe-400">Package</dt>
              <dd className="text-right text-linen-200">
                {selectedPackage ? selectedPackage.name : "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-mist-100/10 pb-3">
              <dt className="text-taupe-400">Nights</dt>
              <dd className="text-linen-200">{nights || "—"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-taupe-400">Guests</dt>
              <dd className="text-linen-200">{form.guests}</dd>
            </div>
          </dl>
          <ul className="mt-8 space-y-3 text-xs font-light text-mist-100/70">
            {[
              "Concierge replies within the day",
              "Rates shared upon request",
              "No payment taken at inquiry",
              "Transfers arranged on request",
            ].map((perk) => (
              <li key={perk} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember-500" />
                {perk}
              </li>
            ))}
          </ul>
        </aside>
      </motion.form>
    </AnimatePresence>
  );
}
