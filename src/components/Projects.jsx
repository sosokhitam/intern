import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Sparkles, ImageIcon } from "lucide-react";
import { projects, projectFilters } from "../data/projects";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";
import { Github } from "./ui/BrandIcons";

/** Preview browser mockup dengan auto-reset state jika path gambar berubah. */
function BrowserPreview({ project }) {
  const [failed, setFailed] = useState(false);

  // Otomatis reset status error jika prop project.image berubah
  useEffect(() => {
    setFailed(false);
  }, [project.image]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b18] shadow-2xl">
      {/* Top Bar Mockup Browser */}
      <div className="flex items-center gap-2 border-b border-white/8 bg-[#101024] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="font-mono-alt ml-3 truncate text-[11px] text-zinc-500">
          {project.demo !== "#"
            ? project.demo.replace(/^https?:\/\//, "")
            : `${project.title.toLowerCase().replace(/\s+/g, "-")}.local`}
        </span>
      </div>

      {/* Konten Gambar / Fallback */}
      {failed ? (
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-gradient-to-br from-indigo-500/12 via-[#0b0b18] to-cyan-500/12 text-zinc-500">
          <ImageIcon size={30} />
          <p className="font-mono-alt px-6 text-center text-[11px] leading-relaxed">
            Gambar gagal dimuat:
            <br />
            <span className="text-indigo-300">{project.image}</span>
          </p>
        </div>
      ) : (
        <div className="flex aspect-[16/10] w-full items-center justify-center bg-[#070712] p-1.5">
          <img
            key={project.image}
            src={project.image}
            alt={`Tampilan ${project.title}`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section">
      <div className="orb left-[-9rem] top-24 h-[420px] w-[420px] bg-indigo-600/16" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Hasil karya dan"
          highlight="case studies."
          description="Kumpulan project nyata yang merepresentasikan pengalaman saya di fullstack development, backend API, database design, AI integration, security, dan deployment."
        />

        <Reveal>
          <div className="mb-10 flex flex-wrap gap-2">
            {projectFilters.map((item) => {
              const active = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    active ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 -z-10 rounded-full border border-indigo-400/40 bg-indigo-500/18"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                  )}
                  {!active && (
                    <span className="absolute inset-0 -z-10 rounded-full border border-white/8" />
                  )}
                  {item}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-7 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={project.featured ? "lg:col-span-2" : ""}
              >
                <TiltCard intensity={project.featured ? 4 : 7} className="h-full rounded-3xl">
                  <div
                    className={`glass group h-full overflow-hidden rounded-3xl ${
                      project.featured
                        ? "grid lg:grid-cols-[1.05fr_0.95fr]"
                        : "flex flex-col"
                    }`}
                  >
                    <div className="border-b border-white/8 bg-[#07070f]/60 p-5 lg:border-b-0 lg:border-r">
                      <BrowserPreview project={project} />
                    </div>

                    <div className="flex flex-col justify-center p-7 lg:p-9">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="font-mono-alt rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3 py-1 text-[11px] uppercase tracking-wider text-indigo-300">
                          {project.category}
                        </span>
                        <span className="font-mono-alt text-[11px] text-zinc-500">
                          {project.year}
                        </span>
                        {project.featured && (
                          <span className="flex items-center gap-1 text-[11px] text-cyan-300">
                            <Sparkles size={12} />
                            Featured
                          </span>
                        )}
                      </div>

                      <h3
                        className={`font-display font-bold ${
                          project.featured ? "text-3xl md:text-4xl" : "text-2xl"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-1.5 text-sm text-cyan-300">
                        {project.tagline}
                      </p>

                      <p className="mt-4 leading-relaxed text-zinc-400">
                        {project.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {project.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-sm text-zinc-300"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-wrap gap-4">
                        {project.demo !== "#" ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary !py-2.5 !px-5 text-sm"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        ) : (
                          <span className="btn-ghost cursor-not-allowed !py-2.5 !px-5 text-sm opacity-45">
                            <ExternalLink size={16} />
                            Demo Private
                          </span>
                        )}

                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-ghost !py-2.5 !px-5 text-sm"
                          >
                            <Github size={16} />
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/sosokhitam"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Github size={18} />
              Lihat semua repository di GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}