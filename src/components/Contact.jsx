import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Phone,
  ArrowUp,
  Copy,
  Check,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";
import { Github, Linkedin } from "./ui/BrandIcons";

const EMAIL = "agussubekti644@gmail.com";
const PHONE = "+6282170278299";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  /**
   * Tanpa backend: form membuka email client dengan isi yang sudah terformat.
   * Kalau nanti ingin terkirim otomatis, bisa diganti ke Formspree / EmailJS
   * dengan mengubah handler ini saja.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact — ${form.name || "Tanpa Nama"}`
    );
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer id="contact" className="section border-t border-white/8">
      <div className="orb right-0 bottom-0 h-[420px] w-[420px] bg-indigo-600/16" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Hubungi Saya"
          title="Mari bangun sesuatu yang"
          highlight="luar biasa."
          description="Saya terbuka untuk internship, freelance project, dan kolaborasi di full-stack web development. Biasanya saya membalas dalam 24 jam."
          align="center"
        />

        <div className="mb-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8">
              <h3 className="mb-7 font-display text-2xl font-bold">
                Informasi Kontak
              </h3>

              <div className="space-y-3">
                <div className="group flex items-center gap-4 rounded-2xl border border-white/6 p-3.5 transition hover:border-indigo-400/40">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-500/12 text-indigo-300">
                    <Mail size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-zinc-500">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="block truncate font-semibold text-zinc-100 hover:text-cyan-300"
                    >
                      {EMAIL}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email"
                    className="icon-btn !h-10 !w-10"
                  >
                    {copied ? (
                      <Check size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/6 p-3.5 transition hover:border-indigo-400/40"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-500/12 text-cyan-300">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="text-xs text-zinc-500">Telepon / WhatsApp</p>
                    <p className="font-semibold text-zinc-100">
                      +62 821 7027 8299
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/6 p-3.5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-fuchsia-500/12 text-fuchsia-300">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="text-xs text-zinc-500">Lokasi</p>
                    <p className="font-semibold text-zinc-100">
                      Lampung, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/8 pt-7">
                <h4 className="mb-4 font-display text-base font-semibold">
                  Connect dengan saya
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/sosokhitam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/agus-subekti-510724331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a href={`mailto:${EMAIL}`} className="icon-btn" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltCard intensity={4} className="h-full rounded-3xl">
              <div className="glass h-full rounded-3xl p-8">
                <h3 className="mb-6 font-display text-2xl font-bold">
                  Kirim Pesan
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs text-zinc-400">
                      Nama
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      className="w-full rounded-xl border border-white/8 bg-[#08080f] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs text-zinc-400">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@domain.com"
                      className="w-full rounded-xl border border-white/8 bg-[#08080f] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs text-zinc-400"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ceritakan project atau peluang yang ingin didiskusikan..."
                      className="w-full resize-none rounded-xl border border-white/8 bg-[#08080f] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={18} />
                    Kirim Pesan
                  </button>

                  <p className="font-mono-alt text-center text-[11px] text-zinc-500">
                    Tombol ini membuka aplikasi email Anda dengan pesan yang sudah terisi.
                  </p>
                </form>
              </div>
            </TiltCard>
          </Reveal>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/8 pt-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Agus Subekti. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-zinc-600">
              Full Stack Developer · Informatics Engineering Student at ITERA
            </p>
          </div>

          <a href="#home" className="btn-ghost !py-2.5 !px-5 text-sm">
            <ArrowUp size={16} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
