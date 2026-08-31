import Reveal from "./Reveal";

/** Heading section yang konsisten di seluruh halaman. */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}) {
  const centered = align === "center";

  return (
    <div
      className={`mb-14 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}
    >
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.25rem)] font-bold leading-[1.1]">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-zinc-400 leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
