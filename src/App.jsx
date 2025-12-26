import { useState } from 'react'
import Headers from './Header.jsx'
import './App.css'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Projects from './Project.jsx'
import Resume from './Resume.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
     <Headers/>
     <Hero/>
     <About/>
     <Projects/>
     <Resume/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
