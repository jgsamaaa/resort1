"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MailCheck } from "lucide-react";

const inputClass =
  "w-full border border-mist-100/20 bg-pine-950/40 px-4 py-3.5 text-sm text-cream-50 outline-none transition-colors placeholder:text-taupe-400/50 focus:border-ember-500";

const labelClass =
  "mb-2 block text-[10px] font-medium uppercase tracking-[0.25em] text-taupe-400";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found: Errors = {};
    if (!form.name.trim()) found.name = "Please tell us your name.";
    if (!form.email.trim()) found.email = "We need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      found.email = "That email doesn't look quite right.";
    if (!form.message.trim())
      found.message = "Tell us a little about what you're planning.";
    if (Object.keys(found).length) {
      setErrors(found);
      const firstKey = Object.keys(found)[0];
      document.getElementById(`contact-${firstKey}`)?.focus();
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex h-full flex-col items-center justify-center border border-mist-100/12 bg-forest-800/40 p-10 text-center"
      >
        <MailCheck className="h-11 w-11 text-ember-500" strokeWidth={1.25} />
        <h3 className="mt-5 font-display text-3xl font-light text-cream-50">
          Message noted, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-mist-100/70">
          In a live resort, our concierge would reply within the day. This is a
          design prototype, so nothing was actually sent — but the mountain
          appreciates the thought.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", subject: "general", message: "" });
          }}
          className="mt-7 border border-mist-100/25 px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-mist-100 transition-colors hover:border-ember-400 hover:text-ember-400"
        >
          Write Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border border-mist-100/12 bg-forest-800/30 p-8 lg:p-10"
    >
      <h2 className="font-display text-3xl font-light text-cream-50">
        Write to the concierge
      </h2>
      <p className="mt-2 text-sm font-light text-mist-100/60">
        Trip planning, events, press, or a question about the fog schedule.
      </p>
      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name *
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            className={inputClass}
            placeholder="Juan dela Cruz"
          />
          {errors.name && (
            <p role="alert" className="mt-1.5 text-xs text-ember-400">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            className={inputClass}
            placeholder="you@email.com"
          />
          {errors.email && (
            <p role="alert" className="mt-1.5 text-xs text-ember-400">
              {errors.email}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-subject" className={labelClass}>
            Subject
          </label>
          <select
            id="contact-subject"
            value={form.subject}
            onChange={(e) => set("subject", e.target.value)}
            className={`${inputClass} [&>option]:bg-pine-950`}
          >
            <option value="general">General question</option>
            <option value="booking">Booking & availability</option>
            <option value="event">Private event or proposal</option>
            <option value="group">Group or corporate retreat</option>
            <option value="press">Press & partnerships</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClass}>
            Message *
          </label>
          <textarea
            id="contact-message"
            rows={6}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={!!errors.message}
            className={inputClass}
            placeholder="Tell us what you're dreaming up…"
          />
          {errors.message && (
            <p role="alert" className="mt-1.5 text-xs text-ember-400">
              {errors.message}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 w-full bg-ember-500 px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-pine-950 transition-all duration-300 hover:bg-ember-400 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
