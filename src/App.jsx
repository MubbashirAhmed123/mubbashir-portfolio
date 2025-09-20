import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };



  return(
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Navbar isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} setIsMenuOpen={setIsMenuOpen}/>
          <Hero scrollToSection={scrollToSection}/>
          <About scrollToSection={scrollToSection}/>
          <Experience scrollToSection={scrollToSection}/>
          <Skills scrollToSection={scrollToSection}/>
          <Projects scrollToSection={scrollToSection} />
          <Education scrollToSection={scrollToSection} />
          <Contact/>
</div>
  )
}

export default App