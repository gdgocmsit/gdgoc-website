import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import Departments from './components/Departments';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DinoWelcome from './components/DinoWelcome';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight / 3
        ) {
          const sectionId = section.getAttribute('id');
          window.history.pushState(
            null,
            null,
            `#${sectionId}`
          );
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Navbar/>
      <DinoWelcome/>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HeroSection id="home" className="min-h-screen bg-blue-500" />
                <AboutUs id="aboutUs" className="min-h-screen flex justify-center" />
                <Events id="events" className="min-h-screen bg-red-500" />
                <Departments id="departments"/>
                <Team id="team" />
                <ContactUs id="contactUs"  />
              </div>
            }
          />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
