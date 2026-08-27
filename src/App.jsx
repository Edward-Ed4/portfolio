import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";
import { CurrentlyLearning } from "./components/sections/CurrentlyLearning";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
import { ParticleCanvas } from "./components/magicui/ParticleCanvas";

export default function App() {
  return (
    <div className="relative min-h-screen text-white" style={{ background: "#020c10" }}>
      {/* Fixed full-page particle canvas — runs behind everything */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleCanvas />
      </div>

      {/* All content sits above the canvas */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <CurrentlyLearning />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
