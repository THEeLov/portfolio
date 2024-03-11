import Navbar from "./components/Navbar"
import Main from "./components/Main"
import About from "./components/About"
import './styles/main.css'

function App() {

  return (
    <>
      <Navbar/>
      <Main />
      
      <section>
        <About/>
      </section>
    </>
  )
}

export default App
