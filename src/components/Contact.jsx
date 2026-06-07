import { Mail, MapPin, Send, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="relative py-24 px-6 border-t border-white/10">
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-blue-400 mb-3 font-semibold">HUBUNGI SAYA</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Mari kita bangun sesuatu yang luar biasa.
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Saya terbuka untuk internship opportunities, freelance projects, dan collaboration dalam full-stack web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Informasi Kontak</h3>

            <div className="space-y-4">
              <a 
                href="mailto:agussubekti644@gmail.com"
                className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition flex items-center justify-center">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="font-semibold">agussubekti644@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+6282170278299"
                className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition flex items-center justify-center">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Telepon</p>
                  <p className="font-semibold">+62 821 7027 8299</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Lokasi</p>
                  <p className="font-semibold">Lampung, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Connect dengan saya</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/sosokhitam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/10 hover:bg-blue-500/20 transition flex items-center justify-center text-zinc-300 hover:text-blue-400 text-sm font-bold"
                  title="GitHub"
                >
                  GH
                </a>
                <a 
                  href="https://www.linkedin.com/in/agus-subekti-510724331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/10 hover:bg-blue-500/20 transition flex items-center justify-center text-zinc-300 hover:text-blue-400 text-sm font-bold"
                  title="LinkedIn"
                >
                  IN
                </a>
                <a 
                  href="mailto:agussubekti644@gmail.com"
                  className="w-12 h-12 rounded-lg bg-white/10 hover:bg-blue-500/20 transition flex items-center justify-center text-zinc-300 hover:text-blue-400"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition">
            <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full bg-[#09090B] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition text-white placeholder-zinc-500"
              />

              <input
                type="email"
                placeholder="Email Anda"
                className="w-full bg-[#09090B] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition text-white placeholder-zinc-500"
              />

              <textarea
                rows="5"
                placeholder="Pesan Anda"
                className="w-full bg-[#09090B] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition text-white placeholder-zinc-500 resize-none"
              />

              <button className="w-full bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2">
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-zinc-500 text-sm">
        <p>© 2026 Agus Subekti. All rights reserved.</p>
        <p className="text-xs mt-2">Full Stack Developer | Informatics Engineering Student at ITERA</p>
      </div>
    </footer>
  );
}
