import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">Yash's Portfolio</div>

        <div className="nav-menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About Me</li>
          <li onClick={() => scrollToSection('projects')}>Portfolio</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
        </ul>

        <div className="nav-connect desktop-connect" onClick={() => scrollToSection('contact')}>Connect With Me</div>
      </div>

      {showScrollTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </>
  );
}

export default Navbar;
