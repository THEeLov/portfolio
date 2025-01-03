import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Languages from "./components/Languages";
import "../app/globals.css";
import Timeline from "./components/TImeline";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="home" className="w-full h-full">
        <Main />
      </section>
      <div className="hr">
        <hr />
      </div>

      <section id="about" className="about-section">
        <About />
      </section>

      <Languages />

      <div className="hr">
        <hr />
      </div>

      <section id="timeline" className="timeline-section">
        <Timeline />
      </section>

      <section id="projects" className="w-full h-full p-10">
        <Projects />
      </section>
    </div>
  );
}

export default App;
