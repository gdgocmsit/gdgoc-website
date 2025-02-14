import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Departments from "./components/Departments";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/Cursor";
import GoogleAnimation from "./components/Loader";
import EventPage from "./pages/EventPage";

const throttle = (callback, delay) => {
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      callback(...args);
      lastTime = now;
    }
  };
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2850);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight / 3
        ) {
          const sectionId = section.getAttribute("id");
          if (window.location.hash !== `#${sectionId}`) {
            window.history.pushState(null, null, `#${sectionId}`);
          }
        }
      });
    };

    const throttledScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      {loading ? (
        <GoogleAnimation />
      ) : (
        <MainContent />
      )}
    </Router>
  );
};

const MainContent = () => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    window.history.replaceState(null, null, "/");
    window.location.hash = sectionId;
  };

  return (
    <div>
      <Navbar navigate={navigate} onNavClick={handleNavClick} />
      <CustomCursor />
      <div className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="hero" className="h-screen">
                  <HeroSection />
                </section>
                <section id="aboutUs" className="h-3/5 mt-[30rem] md:mt-0 pb-20 flex justify-center">
                  <AboutUs />
                </section>
                <section id="events" className="h-screen ">
                  <Events />
                </section>
                <section id="departments">
                  <Departments />
                </section>
                <section id="team">
                  <Team />
                </section>
                <section id="contactUs">
                  <ContactUs />
                </section>
              </>
            }
          />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
