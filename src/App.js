// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';

import Experience from './sections/Experience';

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Skills />
      
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
