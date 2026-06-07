import { Code2, GraduationCap, Briefcase, Users, Award, MapPin } from "lucide-react";

const statsData = [
  {
    iconName: "Code2",
    value: "5+",
    label: "Projects Completed",
  },
  {
    iconName: "Briefcase",
    value: "3+",
    label: "Professional Roles",
  },
  {
    iconName: "GraduationCap",
    value: "6th",
    label: "Semester at ITERA",
  },
  {
    iconName: "Award",
    value: "8+",
    label: "Certifications",
  },
];

const iconMap = {
  Code2,
  Briefcase,
  GraduationCap,
  Award,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-blue-400 mb-3 font-semibold">TENTANG SAYA</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Membangun solusi digital dengan
            <span className="text-blue-400"> tujuan dan inovasi.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition">
            <h3 className="text-2xl font-bold mb-4">Informatics Engineering Student</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Saya adalah mahasiswa Informatics Engineering di Institut Teknologi Sumatera (ITERA) 
              dengan minat kuat dalam backend dan web application development. Berpengalaman dalam 
              mengembangkan full-stack applications menggunakan JavaScript, React.js, Node.js, Express.js, 
              dan PostgreSQL melalui pembelajaran akademis dan project-based learning.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-4">
              Saat ini mengikuti <span className="text-blue-300 font-semibold">Full Stack Developer Cohort di Dicoding Camp </span> 
              di mana saya belajar pengembangan web modern, cloud computing, dan deployment.
            </p>

            <div className="flex items-center gap-3 text-zinc-300">
              <MapPin size={18} className="text-blue-400" />
              <span>Lampung, Indonesia</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {statsData.map((item, index) => {
              const IconComponent = iconMap[item.iconName];
              return (
                <div
                  key={index}
                  className="bg-[#111827] border border-white/10 rounded-3xl p-6 hover:border-blue-500/50 transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5">
                    <IconComponent size={26} />
                  </div>

                  <h3 className="text-3xl font-bold">{item.value}</h3>
                  <p className="text-zinc-400 mt-1 text-sm">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}