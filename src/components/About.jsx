import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Rocket,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";
import CountUp from "./ui/CountUp";

const stats = [
  { icon: Code2, value: 5, suffix: "", label: "Featured Projects" },
  { icon: Briefcase, value: 7, suffix: "", label: "Roles & Pengalaman" },
  { icon: GraduationCap, value: 120, suffix: "+", label: "Mahasiswa Dibimbing" },
  { icon: Award, value: 5, suffix: "+", label: "Sertifikasi" },
];

const focusAreas = [
  "Backend & RESTful API",
  "Database Design",
  "React Frontend",
  "Cloud & Deployment",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="orb left-[-10rem] top-16 h-[380px] w-[380px] bg-fuchsia-600/12" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Tentang Saya"
          title="Membangun solusi digital dengan"
          highlight="tujuan dan inovasi."
          description="Saya percaya kode yang baik bukan hanya yang berjalan, tapi yang mudah dirawat, aman, dan benar-benar menyelesaikan masalah pengguna."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <TiltCard intensity={5} className="rounded-3xl">
              <div className="glass rounded-3xl p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-500/15 text-indigo-300">
                    <Rocket size={22} />
                  </span>
                  <h3 className="font-display text-2xl font-bold">
                    Informatics Engineering Student
                  </h3>
                </div>

                <p className="leading-relaxed text-zinc-300">
                  Mahasiswa Teknik Informatika di{" "}
                  <span className="font-semibold text-white">
                    Institut Teknologi Sumatera (ITERA)
                  </span>{" "}
                  dengan minat kuat pada backend dan web application development.
                  Berpengalaman membangun aplikasi full-stack menggunakan
                  JavaScript, React.js, Node.js, Express.js, Laravel, dan
                  PostgreSQL melalui pembelajaran akademis maupun project nyata.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  Baru menuntaskan{" "}
                  <span className="font-semibold text-indigo-300">
                    Dicoding Camp Fullstack Developer
                  </span>{" "}
                  dan internship Management Information System di SAMSAT. Selain
                  ngoding, saya aktif sebagai teaching assistant dan founder
                  Raven Community — mengajar membuat saya terbiasa menjelaskan
                  hal teknis dengan sederhana.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {focusAreas.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3 border-t border-white/8 pt-6 text-zinc-300">
                  <MapPin size={18} className="text-cyan-400" />
                  <span>Lampung, Indonesia — open to remote & hybrid</span>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={i * 0.1}>
                  <TiltCard intensity={9} className="h-full rounded-3xl">
                    <div className="glass h-full rounded-3xl p-6">
                      <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500/25 to-cyan-400/15 text-indigo-300">
                        <Icon size={24} />
                      </span>

                      <h3 className="font-display text-4xl font-bold">
                        <CountUp value={item.value} suffix={item.suffix} />
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">{item.label}</p>
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
