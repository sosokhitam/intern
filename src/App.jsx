import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Loader from "./components/ui/Loader";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05050a] text-zinc-100">
      <Loader />
      <ScrollProgress />
      <div className="noise" aria-hidden />

      <Navbar />

      <main className="relative z-[2]">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
