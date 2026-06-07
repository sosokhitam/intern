const experiences = [
  {
    year: "Feb 2026",
    title: "Full Stack Developer Cohort",
    company: "Dicoding Camp",
    description:
      "Learning full stack web development using React.js, Node.js, Express.js, dan PostgreSQL. Mengembangkan RESTful APIs, cloud computing dengan AWS, Docker containerization, dan collaborative project development.",
    period: "Feb 2026 – Present"
  },
  {
    year: "Jun 2025",
    title: "Laboratory Assistant - Ethical Hacking",
    company: "Institut Teknologi Sumatera",
    description:
      "Mentored 30+ students tentang cybersecurity fundamentals dan penetration testing. Guided pembelajaran praktis SQL Injection, XSS, dan CSRF vulnerabilities berdasarkan OWASP Top 10.",
    period: "Jun 2025 – Nov 2025"
  },
  {
    year: "Feb 2025",
    title: "Laboratory Assistant - Programming Fundamentals",
    company: "Institut Teknologi Sumatera",
    description:
      "Membantu 50 students memahami programming fundamentals, algorithms, dan data structures. Fasilitasi laboratory sessions dengan fokus pada logical problem-solving menggunakan C++.",
    period: "Feb 2025 – Jul 2025"
  },
  {
    year: "Aug 2024",
    title: "Academic Staff - Division of Academics & Scholarship",
    company: "Himpunan Mahasiswa Informatika ITERA",
    description:
      "Managed dan structured academic archive system untuk past exams dan alumni theses. Kolaborasi dengan faculty untuk verify dan update learning materials sesuai dengan latest curriculum.",
    period: "Aug 2024 – Aug 2025"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-blue-400 mb-3 font-semibold">PENGALAMAN</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Journey, Projects & Roles
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl">
            Ringkasan pengalaman development, academic roles, dan leadership activities dalam dunia tech & education.
          </p>
        </div>

        <div className="relative border-l-2 border-blue-500/30 ml-4">
          {experiences.map((item, index) => (
            <div key={index} className="mb-10 ml-8 relative">
              <div className="absolute -left-[27px] top-1 w-6 h-6 rounded-full bg-blue-500 border-4 border-[#09090B]" />

              <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 hover:border-blue-500/50 transition duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-400 font-semibold">{item.period}</span>
                  <span className="text-xs text-zinc-500 bg-white/5 px-3 py-1 rounded-full">{item.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {item.title}
                </h3>

                <p className="text-blue-300 mt-1 font-medium">
                  {item.company}
                </p>

                <p className="text-zinc-400 leading-relaxed mt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}