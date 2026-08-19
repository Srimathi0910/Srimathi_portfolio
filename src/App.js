import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Journey from "./components/Journey";
// import ProblemSolving from "./components/ProblemSolving";
import Github from "./components/Github";
import Learning from "./components/Learning";
import Interests from "./components/Interests";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Journey />
        {/* <ProblemSolving /> */}
        <Github />
        <Learning />
        <Interests />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
