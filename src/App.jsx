import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";
import { CurrentlyLearning } from "./components/sections/CurrentlyLearning";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#030712" }}>
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
  );
}
