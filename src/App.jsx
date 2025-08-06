import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'

const App = () => {
  return (
  <div className="container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experience />
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
    {/*About*/}
    {/*Projects*/}
    {/*Experience*/}
    {/*Testimonial*/}
    {/*Contact*/}
    {/*Footer*/}
  </div>
  )
}

export default App;