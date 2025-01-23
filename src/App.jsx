import React, { useEffect } from "react";
import "./index.css";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events/Events"
import Departments from "./components/Departments";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";

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
  useEffect(() => {
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
          window.history.pushState(null, null, `#${sectionId}`);
        }
      });
    };

    const throttledScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* <Background /> */}
      <div className="min-h-screen bg-gray-100">
        <section id="#" className="h-screen">
          <HeroSection />
        </section>
        <section id="aboutUs" className="h-[60%] pt-40 px-15  pb-16 flex justify-center">
          <AboutUs />
        </section>
        <section id="events" className="h-screen mt-2 ">
          <Events />
        </section>
        <section id="departments " className="py-28 ">
          <Departments />
        </section>
        <section id="team" className="">
          <Team />
        </section>
        <section id="contactUs">
          <ContactUs />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
