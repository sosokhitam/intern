import { ExternalLink } from "lucide-react";
import SisaBisa from "../assets/Project/sisabisa.png";
import cleanarea from "../assets/Project/cleanarea.png";
import orderq from "../assets/Project/orderq.png";

const projects = [
  {
    title: "SisaBisa",
    description:
      "AI-powered food waste management platform that helps users manage ingredients, track expiration dates, receive reminders, and get recipe recommendations based on available food ingredients.",
    tech: ["React", "Express.js", "PostgreSQL", "Supabase", "AI"],
    role: "AI Food Intelligence Platform",
    image: SisaBisa,
    demo: "https://sisabisa.vercel.app/",
    github: "https://github.com/sosokhitam/sisabisa-capstone",
  },
  {
    title: "OrderQ",
    description:
      "Order and queue management system for UMKM, cafes, and restaurants to manage products, customer orders, carts, stock, and payment flow in one integrated platform.",
    tech: ["Laravel", "PostgreSQL", "Supabase", "Tailwind CSS", "Breeze"],
    role: "Laravel Fullstack Application",
    image: orderq,
    demo: "#",
    github: "#",
  },
  {
    title: "Clean Area",
    description:
      "Premium shoe cleaning service website built for a local UMKM to showcase services, promotions, location, and digital business presence through a modern landing page.",
    tech: ["Laravel", "MySQL", "Bootstrap", "Deployment"],
    role: "Real Client Project",
    image: cleanarea,
    demo: "https://cleanarea.id/",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="absolute left-0 top-20 w-[420px] h-[420px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-blue-400 mb-3 font-semibold">FEATURED PROJECTS</p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Hasil karya dan case studies
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl">
            Kumpulan project nyata yang merepresentasikan pengalaman dalam fullstack development, 
            Laravel applications, backend API, database design, AI integration, dan deployment.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-[1.15fr_0.85fr] bg-[#111827] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition duration-300"
            >
              <div className="bg-[#070A12] p-4 md:p-6 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#0B1120] border-b border-white/10">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-zinc-400">
                      {project.title}
                    </span>
                  </div>

                  <div className="bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-blue-400 text-sm mb-3">
                  {project.role}
                </p>

                <h3 className="text-3xl md:text-4xl font-bold mb-5">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-sm text-zinc-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-5 mt-8">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition"
                    >
                      <span className="text-xs font-bold">GH</span>
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}