import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/gdgLogo.png";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [activeLink, setActiveLink] = useState('');
  
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav ref={navbarRef} className="fixed w-full top-0 left-0 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3">
        <div className="flex items-center space-x-6 lg:flex">
          <Link 
            to="#hero" 
            className={`text-lg ${activeLink === 'hero' ? 'text-gray-900' : 'text-gray-600'}`}
            onClick={() => setActiveLink('hero')}
          >
            Home
          </Link>
          <Link 
            to="#aboutUs" 
            className={`text-lg ${activeLink === 'aboutUs' ? 'text-gray-900' : 'text-gray-600'}`}
            onClick={() => setActiveLink('aboutUs')}
          >
            About Us
          </Link>
          <Link 
            to="#events" 
            className={`text-lg ${activeLink === 'events' ? 'text-gray-900' : 'text-gray-600'}`}
            onClick={() => setActiveLink('events')}
          >
            Events
          </Link>
          <Link 
            to="#departments" 
            className={`text-lg ${activeLink === 'departments' ? 'text-gray-900' : 'text-gray-600'}`}
            onClick={() => setActiveLink('departments')}
          >
            Departments
          </Link>
          <Link 
            to="#team" 
            className={`text-lg ${activeLink === 'team' ? 'text-gray-900' : 'text-gray-600'}`}
            onClick={() => setActiveLink('team')}
          >
            Team
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-16 w-16" />
        </div>

        <div className="hidden lg:flex">
          <Link 
            to="#contactUs" 
            className={`text-lg ${activeLink === 'contactUs' ? 'text-gray-900' : 'text-gray-600'}`}
            onClick={() => setActiveLink('contactUs')}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
