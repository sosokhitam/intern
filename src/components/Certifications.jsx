import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2026"
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    year: "2026"
  },
  {
    title: "Merancang Percakapan Cerdas di Azure AI Foundry",
    issuer: "Microsoft Learn",
    year: "2025"
  },
  {
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "AWS Academy",
    year: "2025"
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2024"
  },
  {
    title: "Full Stack Developer Learning Path",
    issuer: "Dicoding Camp",
    year: "2026"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-blue-400 mb-3 font-semibold">SERTIFIKASI</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Pembelajaran & Pencapaian
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Berbagai sertifikasi dari platform pembelajaran terkemuka dalam web development, cloud computing, dan AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-white/10 rounded-3xl p-6 hover:border-blue-500/50 transition duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500/20 transition">
                  <CheckCircle size={24} />
                </div>
                <span className="text-xs text-zinc-500 bg-white/5 px-2 py-1 rounded">{item.year}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-blue-400">{item.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}