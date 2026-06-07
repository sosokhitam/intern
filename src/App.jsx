import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
}