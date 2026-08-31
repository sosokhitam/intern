/**
 * DAFTAR PROJECT
 * --------------------------------------------------------------
 * Menggunakan absolute path langsung ke folder public/projects/
 */
export const projects = [
  {
    title: "Aksesara",
    tagline: "Real-Time Adaptive System for Inclusive Rendering & Response Assistance",
    year: "2026",
    featured: true,
    category: "AI & Accessibility",
    description:
      "Browser extension dan web API bertenaga AI yang dibangun untuk GEMASTIK XVIII. Aksesara mengadaptasi antarmuka digital secara real-time untuk pengguna dengan kebutuhan aksesibilitas yang beragam, mengacu pada standar WCAG 2.2.",
    highlights: [
      "Parsing kontekstual form field yang kompleks",
      "Menerjemahkan instruksi birokratis menjadi bahasa sederhana",
      "Dirancang mengikuti standar WCAG 2.2",
    ],
    tech: ["WXT", "NestJS", "Groq LLM", "TypeScript", "WCAG 2.2"],
    image: "/projects/aksesara.png",
    demo: "#",
    github: "#",
  },
  {
    title: "Assetify",
    tagline: "Sistem Manajemen Aset & Layanan IT — SAMSAT",
    year: "2026",
    featured: true,
    category: "Enterprise System",
    description:
      "Sistem IT helpdesk dan asset management berbasis web yang dikembangkan selama internship di SAMSAT Kabupaten 50 Kota. Menyederhanakan pelacakan aset, maintenance, dan pengelolaan service request dalam satu platform terpusat.",
    highlights: [
      "Pelacakan aset IT & riwayat maintenance",
      "Alur pelaporan dan penanganan issue internal",
      "Arsitektur frontend + backend dengan integrasi database",
    ],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/assetify.png",
    demo: "#",
    github: "#",
  },
  {
    title: "SisaBisa",
    tagline: "AI-Powered Food Waste Management",
    year: "2026",
    featured: true,
    category: "Fullstack + AI",
    description:
      "Platform manajemen food waste berbasis AI: pengguna mencatat bahan makanan, sistem melacak tanggal kedaluwarsa, mengirim reminder, lalu merekomendasikan resep dari bahan yang tersisa. Dikembangkan sebagai capstone project Dicoding.",
    highlights: [
      "Rekomendasi resep berbasis bahan yang tersedia",
      "Reminder kedaluwarsa otomatis",
      "Auth & storage via Supabase",
    ],
    tech: ["React", "Express.js", "PostgreSQL", "Supabase", "AI API"],
    image: "/projects/sisabisa.png",
    demo: "https://sisabisa.vercel.app/",
    github: "https://github.com/sosokhitam/sisabisa-capstone",
  },
  {
    title: "OrderQ",
    tagline: "Order & Queue Management System",
    year: "2025",
    featured: false,
    category: "Laravel Fullstack",
    description:
      "Sistem pemesanan dan antrean untuk UMKM, cafe, dan restoran. Mengelola produk, keranjang, stok, status pesanan, dan alur pembayaran dalam satu dashboard terintegrasi.",
    highlights: [
      "Multi-role: admin, kasir, pelanggan",
      "Manajemen stok & status antrean real-time",
      "Dashboard analitik penjualan",
    ],
    tech: ["Laravel", "PostgreSQL", "Supabase", "Tailwind CSS", "Breeze"],
    image: "/projects/orderq.png",
    demo: "#",
    github: "#",
  },
  {
    title: "Clean Area",
    tagline: "Real Client Project — UMKM Landing Page",
    year: "2025",
    featured: false,
    category: "Client Work",
    description:
      "Website layanan premium shoe cleaning untuk UMKM lokal. Menampilkan katalog layanan, promo, lokasi, dan kontak untuk memperkuat kehadiran digital bisnis.",
    highlights: [
      "Live di domain produksi cleanarea.id",
      "SEO on-page & performa mobile",
      "Deployment + maintenance mandiri",
    ],
    tech: ["Laravel", "MySQL", "Bootstrap", "VPS Deployment"],
    image: "/projects/cleanarea.png",
    demo: "https://cleanarea.id/",
    github: "#",
  },
];

export const projectFilters = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];