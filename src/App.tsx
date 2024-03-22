import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import "../app/globals.css"
import Timeline from "./components/TImeline";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <div className="hr">
        <hr />
      </div>

      <section className="about-section">
        <About />
      </section>

      <Languages />

      <div className="hr">
        <hr />
      </div>

      <section className="timeline-section">
        <Timeline />
      </section>
      <Contact />
    </div>
  );
}

export default App;
