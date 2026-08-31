import { BadgeCheck, ExternalLink } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";

/**
 * `url` opsional — isi link verifikasi sertifikat kalau ada,
 * biarkan "#" kalau belum. Recruiter sangat suka link verifikasi.
 */
const certifications = [
  {
    title: "Menjadi React Web Developer Expert",
    issuer: "Dicoding & DBS Foundation",
    year: "Agu 2026",
    tag: "Frontend",
    url: "#",
  },
  {
    title: "Coding Camp 2026 — Full-Stack Web Developer",
    issuer: "Dicoding & DBS Foundation",
    year: "Jul 2026",
    tag: "Fullstack",
    url: "#",
  },
  {
    title: "English for Business Communication",
    issuer: "The British Institute (TBI) & Dicoding",
    year: "Jun 2026",
    tag: "Soft Skill",
    url: "#",
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding & DBS Foundation",
    year: "Apr 2026",
    tag: "Frontend",
    url: "#",
  },
  {
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding & DBS Foundation",
    year: "Feb 2026",
    tag: "Cloud & AI",
    url: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="orb right-[-7rem] top-16 h-[360px] w-[360px] bg-cyan-500/12" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Sertifikasi"
          title="Pembelajaran &"
          highlight="pencapaian."
          description="Sertifikasi dari platform pembelajaran terkemuka di bidang web development, cloud computing, dan AI."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <TiltCard intensity={10} className="h-full rounded-3xl">
                <div className="glass flex h-full flex-col rounded-3xl p-6">
                  <div className="mb-5 flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500/25 to-cyan-400/15 text-cyan-300">
                      <BadgeCheck size={22} />
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="font-mono-alt rounded-full border border-white/8 px-2.5 py-1 text-[10px] text-zinc-400">
                        {item.tag}
                      </span>
                      <span className="font-mono-alt text-[11px] text-zinc-500">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-base font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-indigo-300">{item.issuer}</p>

                  {item.url !== "#" && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-xs text-zinc-400 transition hover:text-cyan-300"
                    >
                      <ExternalLink size={14} />
                      Verifikasi sertifikat
                    </a>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
