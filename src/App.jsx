import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground"; // Import ini

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-blue-500 selection:text-white">
      
      {/* Pasang Background di sini paling atas */}
      <AnimatedBackground />

      <Navbar />
      
      <main className="relative z-10"> {/* Tambah z-10 agar konten di atas background */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;