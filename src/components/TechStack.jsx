import { Suspense, lazy } from "react";
import { Code, Server, Database, Wrench } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";

const TechGlobe = lazy(() => import("./three/TechGlobe"));

const stacks = [
  {
    category: "Frontend",
    icon: Code,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["PHP", "Laravel", "Node.js", "Express.js", "Hapi.js", "REST API"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    category: "DevOps & Cloud",
    icon: Wrench,
    items: ["Docker", "AWS EC2", "AWS RDS", "Git", "GitHub", "Vercel"],
  },
];

const marqueeItems = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "Laravel",
  "PHP",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Git",
  "REST API",
  "C++",
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section">
      <div className="orb right-[-8rem] top-10 h-[400px] w-[400px] bg-cyan-500/14" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies yang saya"
          highlight="gunakan sehari-hari."
          description="Kumpulan bahasa, framework, dan tools yang saya pakai untuk membangun aplikasi web full-stack dari nol sampai production."
          align="center"
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <Suspense fallback={null}>
                <TechGlobe />
              </Suspense>
              <div className="pointer-events-none absolute inset-0 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {stacks.map((stack, i) => {
              const Icon = stack.icon;
              return (
                <Reveal key={stack.category} delay={i * 0.09}>
                  <TiltCard intensity={8} className="h-full rounded-3xl">
                    <div className="glass h-full rounded-3xl p-6">
                      <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500/25 to-cyan-400/15 text-cyan-300">
                        <Icon size={24} />
                      </span>

                      <h3 className="mb-4 font-display text-lg font-semibold">
                        {stack.category}
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {stack.items.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="marquee marquee-mask mt-16 overflow-hidden">
          <div className="marquee-track gap-4">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="font-mono-alt shrink-0 rounded-full border border-white/8 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
