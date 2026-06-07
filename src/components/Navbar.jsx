export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#09090B]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center font-bold">
            AS
          </div>
          <span className="font-semibold text-lg">Agus Subekti</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        <a
          href="#contact"
          className="hidden md:block bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl text-sm font-medium"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}