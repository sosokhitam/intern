import { useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Building2, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";

/**
 * Data Pengalaman
 * Path gambar telah disesuaikan tepat dengan struktur folder public/experience/
 */
const experiences = [
  {
    title: "Intern of Management Information System",
    company: "SAMSAT — Kabupaten 50 Kota, Indonesia",
    period: "Jul 2026 – Aug 2026",
    type: "Internship",
    description:
      "Instansi layanan publik pemerintah yang menangani pajak kendaraan bermotor, administrasi kendaraan, dan layanan publik terkait. Saya mengembangkan Assetify, sistem IT helpdesk dan asset management internal.",
    points: [
      "Membangun Assetify untuk pelaporan, pelacakan, dan penanganan issue aset IT",
      "Menganalisis kebutuhan operasional lalu menerjemahkannya jadi solusi digital",
      "Berkolaborasi dengan staf untuk identifikasi masalah teknis & implementasi solusi",
    ],
    images: [
      "/experience/samsat/1.jpeg",
      "/experience/samsat/2.jpeg",
      "/experience/samsat/3.jpeg",
    ],
  },
  {
    title: "Professional Training — Full-Stack Web Development",
    company: "Dicoding Camp Fullstack Developer",
    period: "Feb 2026 – Jul 2026",
    type: "Program",
    description:
      "Program pelatihan profesional full-stack web development bersama Dicoding & DBS Foundation, mencakup frontend modern, backend service, database, hingga cloud dan praktik kolaborasi tim.",
    points: [
      "React.js, Node.js, Express.js, dan PostgreSQL",
      "Membangun RESTful API dengan validasi & error handling",
      "Capstone project kolaboratif dengan Git workflow",
    ],
    images: [
      "/experience/dicoding/1.png",
      "/experience/dicoding/2.png",
      "/experience/dicoding/3.png",
    ],
  },
  {
    title: "Cybersecurity Project Collaborator",
    company: "Institut Teknologi Sumatera (ITERA) ICT/TIK",
    period: "Nov 2025 – Dec 2025",
    type: "Project",
    description:
      "Berkolaborasi dengan tim ICT ITERA untuk menilai dan meningkatkan keamanan aplikasi web institusi, mulai dari asesmen kerentanan sampai penyusunan laporan teknis.",
    points: [
      "Asesmen keamanan aplikasi web institusi bersama tim ICT",
      "Analisis kerentanan dan evaluasi potensi dampaknya",
      "Dokumentasi temuan + rekomendasi langkah remediasi",
    ],
    images: [
      "/experience/ict/1.jpeg",
      "/experience/ict/2.jpeg",
    ],
  },
  {
    title: "Event Lead — Point Project 3.0",
    company: "Point Project 3.0, Indonesia",
    period: "Oct 2025 – Nov 2025",
    type: "Event",
    description:
      "Kompetisi UI/UX tingkat nasional sebagai wadah mahasiswa menampilkan kreativitas, kemampuan desain, dan solusi inovatif untuk permasalahan nyata.",
    points: [
      "Mengoordinasi perencanaan & eksekusi kompetisi nasional",
      "Mengelola timeline, pembagian tugas, dan koordinasi antar tim",
      "Mendukung persiapan dan pelaksanaan rangkaian kegiatan",
    ],
    images: [
      "/experience/pointproject/1.png",
      "/experience/pointproject/2.JPG",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Institut Teknologi Sumatera (ITERA)",
    period: "Apr 2024 – Sep 2025",
    type: "Assistantship",
    description:
      "Asisten praktikum untuk mata kuliah Introduction to Computers & Software, Algorithm and Data Structures, serta Ethical Hacking. Mendampingi 120 mahasiswa selama kegiatan akademik.",
    points: [
      "Membantu dosen menjalankan sesi praktikum untuk 120 mahasiswa",
      "Membimbing pemahaman materi & pengerjaan latihan praktikum",
      "Memberi bantuan teknis dan troubleshooting selama sesi lab",
    ],
    images: [
      "/experience/asisstant/1.png",
      "/experience/asisstant/2.png",
      "/experience/asisstant/3.jpg",
    ],
  },
  {
    title: "Staff of Academic and Scholarship Division",
    company: "Himpunan Mahasiswa Informatika ITERA",
    period: "Oct 2024 – Aug 2025",
    type: "Organization",
    description:
      "Organisasi mahasiswa Teknik Informatika yang mendukung pengembangan akademik, kegiatan mahasiswa, dan kolaborasi di lingkungan program studi.",
    points: [
      "Mendukung program & kegiatan akademik mahasiswa Informatika",
      "Menyebarkan informasi beasiswa dan peluang akademik",
      "Berkontribusi pada inisiatif pengembangan akademik mahasiswa",
    ],
    images: [
      "/experience/asisstant/1.png",
      "/experience/asisstant/2.png",
    ],
  },
  {
    title: "Founder & Head of Member Development Division",
    company: "Raven Community — Lampung Selatan",
    period: "Feb 2024 – Sekarang",
    type: "Community",
    description:
      "Komunitas teknologi dan cybersecurity yang fokus pada collaborative learning, knowledge sharing, dan pengembangan anggota melalui kegiatan teknis serta program edukasi.",
    points: [
      "Merancang & menyelenggarakan kegiatan belajar teknis dan knowledge sharing",
      "Memfasilitasi pengembangan anggota lewat diskusi teknis kolaboratif",
      "Berkolaborasi dengan tim meningkatkan engagement & program belajar komunitas",
    ],
    images: [
      "/experience/raven/1.jpg",
      "/experience/raven/2.png",
    ],
  },
];

/** Komponen Carousel Interaktif untuk Dokumentasi Foto */
function ImageSlider({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (failed || !images || images.length === 0) {
    return (
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/12 bg-white/[0.02] text-zinc-600">
        <ImageIcon size={24} className="text-indigo-400/60" />
        <p className="font-mono-alt px-4 text-center text-[10px] leading-relaxed">
          Dokumentasi foto dapat ditaruh di:
          <br />
          <span className="text-indigo-300">{images?.[0] || "/experience/..."}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#090914]">
      {/* Gambar dengan Animasi Fade/Slide */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Dokumentasi ${title} - ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Overlay Gradient Soft */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

      {/* Control Buttons (Muncul jika foto lebih dari 1) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Foto Sebelumnya"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-1.5 text-white/80 backdrop-blur-md opacity-0 transition-all hover:bg-indigo-600 hover:text-white group-hover:opacity-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Foto Selanjutnya"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-1.5 text-white/80 backdrop-blur-md opacity-0 transition-all hover:bg-indigo-600 hover:text-white group-hover:opacity-100"
          >
            <ChevronRight size={16} />
          </button>

          {/* Indikator Dots & Counter */}
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-between px-4">
            <div className="flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-5 bg-indigo-400"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono-alt rounded-md bg-black/60 px-2 py-0.5 text-[10px] text-zinc-300 backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default function Experience() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="section">
      <div className="orb left-[-8rem] bottom-10 h-[380px] w-[380px] bg-indigo-600/14" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Pengalaman"
          title="Journey, roles &"
          highlight="kontribusi."
          description="Ringkasan pengalaman development, peran akademik, dan aktivitas organisasi di dunia tech & education."
        />

        <div ref={trackRef} className="relative ml-1 pl-8 md:pl-12">
          {/* Garis Timeline */}
          <div className="absolute left-[3px] top-2 bottom-2 w-[2px] bg-white/8" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[3px] top-2 bottom-2 w-[2px] origin-top bg-gradient-to-b from-indigo-500 via-cyan-400 to-fuchsia-500"
          />

          {experiences.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="mb-8 last:mb-0">
              <div className="relative">
                {/* Node Timeline */}
                <span className="absolute -left-8 top-7 grid h-4 w-4 place-items-center md:-left-12">
                  <span className="h-4 w-4 rounded-full border-4 border-[#05050a] bg-gradient-to-br from-indigo-400 to-cyan-400" />
                </span>

                <TiltCard intensity={4} className="rounded-3xl">
                  <div className="glass grid gap-6 rounded-3xl p-7 md:grid-cols-[1.3fr_0.7fr] md:p-8">
                    {/* Deskripsi Pengalaman */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <span className="font-mono-alt rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-300">
                            {item.period}
                          </span>
                          <span className="font-mono-alt rounded-full border border-white/8 px-3 py-1 text-[11px] text-zinc-500">
                            {item.type}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-bold md:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-indigo-300">
                          <Building2 size={15} />
                          {item.company}
                        </p>

                        <p className="mt-4 leading-relaxed text-zinc-400">
                          {item.description}
                        </p>

                        <ul className="mt-4 space-y-2">
                          {item.points.map((p) => (
                            <li
                              key={p}
                              className="flex items-start gap-2.5 text-sm text-zinc-300"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Component Image Carousel */}
                    <div className="flex flex-col justify-center">
                      <ImageSlider images={item.images} title={item.title} />
                    </div>
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}