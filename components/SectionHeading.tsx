import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <p className="text-xs uppercase tracking-[0.35em] text-gold-500">{eyebrow}</p>
        <h2
          className={`mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] ${
            light ? "text-sand-50" : "text-ocean-950"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg ${
              light ? "text-sand-200/85" : "text-ocean-900/70"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
