import { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown, MapPin, FileText } from "lucide-react";
import LanyardCard from "./ui/LanyardCard";
import { Github, Linkedin } from "./ui/BrandIcons";

const HeroScene = lazy(() => import("./three/HeroScene"));

const roles = [
  "Full Stack Developer",
  "React & Node.js Engineer",
  "Laravel Developer",
  "Informatics Student @ ITERA",
];

/** Efek typewriter untuk daftar role. */
function useTypewriter(words, typing = 75, deleting = 40, hold = 1600) {
  const [state, setState] = useState({ index: 0, len: 0, phase: "typing" });
  const word = words[state.index % words.length];

  useEffect(() => {
    const { len, phase } = state;
    let delay;

    if (phase === "typing") delay = len < word.length ? typing : hold;
    else delay = len > 0 ? deleting : 0;

    // Semua transisi lewat timer -> tidak ada setState sinkron di dalam effect.
    const timer = setTimeout(() => {
      setState((prev) => {
        if (prev.phase === "typing") {
          return prev.len < word.length
            ? { ...prev, len: prev.len + 1 }
            : { ...prev, phase: "deleting" };
        }
        return prev.len > 0
          ? { ...prev, len: prev.len - 1 }
          : { index: prev.index + 1, len: 0, phase: "typing" };
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [state, word, typing, deleting, hold]);

  return word.slice(0, state.len);
}

const floatCards = [
  
];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Scene 3D sebagai background */}
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-[#05050a]" />}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a]/40 via-[#05050a]/70 to-[#05050a]" />
      <div className="orb left-[-8rem] top-24 h-[420px] w-[420px] bg-indigo-600/25" />
      <div className="orb right-[-6rem] bottom-0 h-[380px] w-[380px] bg-cyan-500/20" />

      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-300"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
            Open for internship & freelance
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="font-mono-alt mb-4 text-sm text-indigo-300"
          >
            {"<hello world />"}
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.75 }}
            className="text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[1.03]"
          >
            Agus
            <br />
            <span className="text-gradient">Subekti</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="mt-6 flex min-h-[2.5rem] items-center font-display text-lg text-zinc-200 md:text-2xl"
          >
            <span aria-live="polite">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[3px] animate-pulse bg-cyan-400 md:h-7" />
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-xl leading-relaxed text-zinc-400"
          >
            Saya membangun web application yang scalable dan efisien — dari
            desain database, RESTful API, sampai antarmuka yang enak dipakai.
            Fokus pada JavaScript, React.js, Node.js, Express.js, Laravel, dan
            PostgreSQL. Alumni Dicoding Camp Fullstack Developer dan founder
            Raven Community.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              Lihat Projects
              <ArrowDown size={18} />
            </a>

            {/* Taruh CV di public/cv-agus-subekti.pdf */}
            <a
              href="/cv-agus-subekti.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <FileText size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <div className="flex gap-3">
              <a
                className="icon-btn"
                href="https://github.com/sosokhitam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                className="icon-btn"
                href="https://www.linkedin.com/in/agus-subekti-510724331/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                className="icon-btn"
                href="mailto:agussubekti644@gmail.com"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <span className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={15} className="text-indigo-400" />
              Lampung, Indonesia
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <LanyardCard />

          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {floatCards.map((card, i) => (
              <motion.span
                key={card.label}
                className="float-card !static"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                {card.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-500 hover:text-white md:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
