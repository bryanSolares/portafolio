import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      {/* <Header /> */}
      <main className="main">
        <Home />
        <About />
        {/* <Projects /> */}
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
