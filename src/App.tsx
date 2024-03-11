import Navbar from "./components/Navbar"
import Main from "./components/Main"
import About from "./components/About"
import Languages from "./components/Languages"
import Contact from "./components/Contact"
import './styles/main.css'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Main />
      <div className="hr">
        <hr/>
      </div>

      <section>
        <About />
      </section>

      <Languages />

      <div className="hr">
        <hr/>
      </div>
      <Contact />
    </div>
  )
}

export default App
