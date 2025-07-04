import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
  const welcomeText = "Welcome to my portfolio".split(" ");
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="hero-img-wrapper"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, type: 'spring' }}
      >
        <img src="/Images/ycpic.png" alt="Yash Chouhan" className="hero-img" />
        <div className="rotating-circle"></div>
      </motion.div>

      <h3 className="animated-text">
        {welcomeText.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            style={{ display: 'inline-block', marginRight: '6px' }}
          >
            {word}
          </motion.span>
        ))}
      </h3>

      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Hi, I'm <span className="highlight-name">Yash Chouhan</span>
      </motion.h1>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="animated-role"
      >
        React Developer
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="animated-description"
      >
        I create beautiful and functional web experiences with modern technologies.
      </motion.p>

      <motion.div
        className="hero-action"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        <div className="hero-connect" onClick={() => scrollToSection('contact')}>
          Connect With Me
        </div>
        
        <a 
          href="/Images/resume.pdf" 
          download="Yash_Chouhan_Resume.pdf" 
          className="hero-resume"
        >
          My Resume
        </a>
      </motion.div>

      <motion.div
        className="hero-socials"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <a href="https://www.instagram.com/its_yash.113?igsh=anpxNm52OTJ2dDVy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/yash-chouhan-bbbb8b28b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/YashChouhan113" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
