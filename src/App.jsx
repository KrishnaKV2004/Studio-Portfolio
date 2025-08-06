import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Facts from './sections/Facts'

const App = () => {
  return (
  <div className="container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Facts />
    <section className="min-h-screen"/>
    {/*Contact*/}
    {/*Footer*/}
  </div>
  )
}

export default App;