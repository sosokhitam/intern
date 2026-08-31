import { Users, Lightbulb, Target, MessageCircle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";

const softSkills = [
  {
    category: "Leadership",
    icon: Users,
    description:
      "Mendampingi 120 mahasiswa sebagai teaching assistant, founder Raven Community, dan event lead kompetisi nasional.",
  },
  {
    category: "Problem Solving",
    icon: Target,
    description:
      "Analytical thinking, debugging sistematis, dan logical reasoning berbasis data.",
  },
  {
    category: "Innovation",
    icon: Lightbulb,
    description:
      "Eksplorasi teknologi baru, integrasi AI, dan mencari solusi yang efisien.",
  },
  {
    category: "Communication",
    icon: MessageCircle,
    description:
      "Dokumentasi jelas, presentasi teknis, dan kerja sama lintas peran.",
  },
];

const technicalLevels = [
  { name: "JavaScript / React", level: 88 },
  { name: "Node.js / Express.js", level: 85 },
  { name: "Laravel / PHP", level: 82 },
  { name: "PostgreSQL / MySQL", level: 80 },
  { name: "Docker & AWS", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="orb right-0 top-20 h-[400px] w-[400px] bg-fuchsia-600/12" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Skills"
          title="Kemampuan teknis dan"
          highlight="beyond code."
          description="Kombinasi keterampilan teknis dan soft skill yang saya bawa ke dalam tim development."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h3 className="mb-7 font-display text-xl font-semibold">
                Technical Proficiency
              </h3>

              <div className="space-y-6">
                {technicalLevels.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-zinc-200">{skill.name}</span>
                      <span className="font-mono-alt text-zinc-500">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/6">
                      <Reveal delay={i * 0.08} y={0}>
                        <div
                          className="relative h-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500"
                          style={{
                            width: `${skill.level}%`,
                            transition: "width 1.1s cubic-bezier(0.22,1,0.36,1)",
                          }}
                        >
                          <span className="shine absolute inset-0 overflow-hidden rounded-full" />
                        </div>
                      </Reveal>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-mono-alt mt-8 text-[11px] leading-relaxed text-zinc-500">
                * Level merupakan estimasi berdasarkan pengalaman project dan
                pembelajaran terstruktur.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {softSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <Reveal key={skill.category} delay={i * 0.09}>
                  <TiltCard intensity={9} className="h-full rounded-3xl">
                    <div className="glass h-full rounded-3xl p-7">
                      <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/15 text-indigo-300">
                        <Icon size={24} />
                      </span>

                      <h3 className="mb-3 font-display text-lg font-bold">
                        {skill.category}
                      </h3>

                      <p className="text-sm leading-relaxed text-zinc-400">
                        {skill.description}
                      </p>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
