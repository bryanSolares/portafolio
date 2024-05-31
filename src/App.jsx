import About from "./components/about/About";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <main className="main">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
