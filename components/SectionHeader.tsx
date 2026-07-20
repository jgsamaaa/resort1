import Reveal from "@/components/Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";
  return (
    <Reveal>
      <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <p
          className={`text-[11px] uppercase tracking-[0.45em] ${
            tone === "dark" ? "text-ember-500" : "text-clay-600"
          }`}
        >
          {eyebrow}
        </p>
        {!centered && <div className="rule-ember mt-4" />}
        <h2
          className={`mt-6 font-display text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl ${
            tone === "dark" ? "text-cream-50" : "text-pine-950"
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mt-5 text-base font-light leading-relaxed sm:text-lg ${
              tone === "dark" ? "text-mist-100/70" : "text-pine-950/70"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}
