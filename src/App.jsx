import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import About from "./components/About";
import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Education from "./components/Education";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      {/* <div id="about">
        <About />
      </div> */}
      <div id="skills">
        <Skills />
      </div>
      {/* <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div> */}
    </div>
  );
}

export default App;
