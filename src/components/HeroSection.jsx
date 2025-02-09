"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaGoogle,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaCalendar,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

const FallingLetter = ({ children, delay }) => {
  const controls = useAnimation();
  const randomRotation = Math.random() * 360 - 180;

  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 900 + delay * 100));
      await controls.start({
        y: ["-100vh", "0vh"],
        rotate: [randomRotation, randomRotation / 2, 0],
        opacity: [0, 1],
        transition: {
          y: { type: "spring", stiffness: 50, damping: 10, duration: 1.5 },
          rotate: { type: "spring", stiffness: 60, damping: 8, duration: 1.5 },
          opacity: { duration: 0.5 },
        },
      });
    };
    sequence();
  }, []);

  return (
    <motion.span
      style={{ display: "inline-block", opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.span>
  );
};

const FallingText = ({ text, startDelay }) => {
  return (
    <span className="inline-flex">
      {text.split("").map((letter, index) => (
        <FallingLetter key={index} delay={startDelay + index}>
          {letter}
        </FallingLetter>
      ))}
    </span>
  );
};

const FeatureCard = ({ Icon, title, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-4 md:p-5 rounded-xl shadow-lg flex items-center space-x-4 w-full max-w-xs border-l-4"
    style={{ borderColor: color }}
  >
    <Icon className="text-2xl md:text-3xl" style={{ color }} />
    <h3 className="text-sm md:text-md font-semibold">{title}</h3>
  </motion.div>
);

const EventCard = ({ title, date, location, attendees }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-md p-4 md:p-5 w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
  >
    <h3 className="font-semibold text-gray-800 mb-2 text-center">{title}</h3>
    <div className="flex items-center text-sm text-gray-600 mb-1">
      <FaCalendar className="mr-2 text-[#4285F4] text-lg bg-blue-100 p-1 rounded-full" />
      <span>{date}</span>
    </div>
    <div className="flex items-center text-sm text-gray-600 mb-1">
      <FaMapMarkerAlt className="mr-2 text-[#EA4335]" />
      <span>{location}</span>
    </div>
    <div className="flex items-center text-sm text-gray-600">
      <FaUsers className="mr-2 text-[#0F9D58]" />
      <span>{attendees} Attendees</span>
    </div>
  </motion.div>
);

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState("Android");
  const techStack = ["Android", "Web", "Cloud", "AI", "IoT"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => {
        const currentIndex = techStack.indexOf(prev);
        return techStack[(currentIndex + 1) % techStack.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col mt-10 items-center justify-center px-6 sm:px-10 md:px-16 py-12">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="text-center lg:text-left w-full lg:w-1/2 space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none flex justify-center lg:justify-start">
            <span className="text-[#4285F4]">
              <FallingText text="GDG" startDelay={0} />
            </span>
            <span className="text-[#0F9D58] ml-3">
              <FallingText text="MSIT" startDelay={3} />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium"
          >
            Empowering students through <span className="text-[#EA4335] font-bold">{currentTech}</span> technology.
          </motion.p>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard Icon={FaGoogle} title="Google Campaign" color="#4285F4" />
            <FeatureCard Icon={FaCode} title="Coding Workshops" color="#FBBC04" />
            <FeatureCard Icon={FaLightbulb} title="Innovative Projects" color="#0F9D58" />
            <FeatureCard Icon={FaRocket} title="Career Growth" color="#EA4335" />
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center w-full lg:w-1/2">
          <motion.div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm">
            <h2 className="text-lg md:text-2xl font-bold mb-6 text-[#4285F4] text-center">
              Upcoming/Recent Events
            </h2>
            <EventCard title="Google I/O Extended 2023" date="May 15, 2023" location="MSIT Auditorium" attendees="500+" />
            <EventCard title="Android Dev Summit" date="June 10, 2023" location="Virtual Event" attendees="1000+" />
            <EventCard title="Cloud Next '23" date="July 5, 2023" location="MSIT Tech Hub" attendees="300+" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
