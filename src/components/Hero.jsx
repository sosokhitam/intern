import profile from "../assets/profile.png";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f655,transparent_30%)]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Agus
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Subekti</span>
          </h1>

          <h2 className="text-xl md:text-2xl mt-6 text-zinc-200 font-semibold">
            Full Stack Developer &
            <br />
            Informatics Engineering Student
          </h2>

          <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
            Passionate tentang membangun web applications yang scalable dan efficient. 
            Experienced dalam mengembangkan full-stack applications menggunakan JavaScript, React.js, 
            Node.js, Express.js, dan PostgreSQL. Saat ini mengikuti Full Stack Developer Cohort di Dicoding Camp.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-medium"
            >
              Lihat Projects
            </a>

            <a
              href="https://www.linkedin.com/in/agus-subekti-510724331/"
              target="_blank"
              className="border border-white/20 hover:border-blue-500 transition px-6 py-3 rounded-xl font-medium"
            >
              View CV
            </a>
          </div>

          <div className="flex gap-4 mt-10">
            <a 
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-500/20 transition flex items-center justify-center text-sm font-bold hover:text-blue-400" 
              href="https://github.com/sosokhitam" 
              target="_blank"
              rel="noopener noreferrer"
            >
              GH
            </a>

            <a 
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-500/20 transition flex items-center justify-center text-sm font-bold hover:text-blue-400" 
              href="https://www.linkedin.com/in/agus-subekti-510724331/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              IN
            </a>

            <a 
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-500/20 transition flex items-center justify-center hover:text-blue-400" 
              href="mailto:agussubekti644@gmail.com"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full" />

          <img
            src={profile}
            alt="Agus Subekti"
            className="relative w-full max-w-md mx-auto rounded-3xl border border-white/10 shadow-2xl"
          />

          <div className="tech-card top-5 right-0 border-blue-500/30">
            🚀 Laravel
          </div>

          <div className="tech-card top-32 -right-4 border-cyan-500/30">
            ⚛️ React
          </div>

          <div className="tech-card bottom-20 -left-4 border-green-500/30">
            🟢 Node.js
          </div>

          <div className="tech-card bottom-0 right-10 border-yellow-500/30">
            🐘 PostgreSQL
          </div>
        </motion.div>
      </div>
    </section>
  );
}