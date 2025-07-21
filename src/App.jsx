import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Loader from './Component/Loder/Loader';
import About from './Component/About/About';
import Skill from './Component/Skills/Skill';
import Project from './Component/Project/Project';
import Qualification from './Component/Oualfication/Qualification';
import Contact from './Component/ContactForm/Contact';
import Footer from './Component/Footer/Footer';
import Container from './Component/Container';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 sec loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <Navbar/>
          <Container>
            <Hero/>
            <About/>
            <Skill/>
            <Project/>
            <Qualification/>
            <Contact/>
          </Container>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
