import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import ScrollToTop from './components/ScrollToTop';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import './styles/global.css';

/* ============================================
   Main Portfolio Component
   - Navigation, Hero Section, and All Content Sections
   ============================================ */

const Portfolio = () => {
  // Note: activeSection state prepared for future scroll-to-section feature
  // const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Navigation Scroll Handler */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ============================================
          Navigation Bar Component
          ============================================ */}
      <Navbar
        activeSection="home"
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
      />

      {/* ============================================
          Cursor Glow Effect Component
          ============================================ */}
      <CursorGlow />

      {/* ============================================
          Content Sections
          ============================================ */}

      {/* Hero Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* ============================================
          Scroll to Top Button Component
          ============================================ */}
      <ScrollToTop />
    </>
  );
};

export default Portfolio;
