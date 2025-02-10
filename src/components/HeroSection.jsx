"use client";

import { useEffect, useState } from "react";
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
    <motion.span style={{ display: "inline-block", opacity: 0 }} animate={controls}>
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
    whileHover={{ scale: 1.1 }}
    className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4 w-full max-w-sm border-l-4 border-b-4 hover:shadow-2xl transition-all duration-300"
    style={{ borderColor: color }}
  >
    <Icon className="text-3xl" style={{ color }} />
    <h3 className="text-md font-semibold text-gray-800">{title}</h3>
  </motion.div>
);

const EventCard = ({ title, date, location, attendees }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
  >
    <h3 className="font-semibold text-gray-800 text-lg text-center mb-4">{title}</h3>
    <div className="flex items-center text-sm text-gray-600 mb-2">
      <FaCalendar className="mr-2 text-[#4285F4] text-lg bg-[#E3F2FD] p-1 rounded-full shadow-sm" />
      <span>{date}</span>
    </div>
    <div className="flex items-center text-sm text-gray-600 mb-2">
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
    <div className="min-h-screen flex flex-col mt-10 items-center justify-center px-8 py-12">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16">
        {/* Left Section */}
        <div className="text-center lg:text-left w-full lg:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none flex justify-center lg:justify-start">
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
            className="text-xl text-gray-700 font-medium"
          >
            Empowering students through <span className="text-[#EA4335] font-bold">{currentTech}</span> technology.
          </motion.p>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard Icon={FaGoogle} title="Google Campaign" color="#4285F4" />
            <FeatureCard Icon={FaCode} title="Coding Workshops" color="#FBBC04" />
            <FeatureCard Icon={FaLightbulb} title="Innovative Projects" color="#0F9D58" />
            <FeatureCard Icon={FaRocket} title="Career Growth" color="#EA4335" />
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center w-full lg:w-1/2">
          <motion.div className="bg-gray-100 rounded-3xl shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-xl font-bold mb-6 text-[#4285F4] text-center">
              Upcoming/Recent Events
            </h2>
            <div className="space-y-4">
              <EventCard title="Google I/O Extended 2023" date="May 15, 2023" location="MSIT Auditorium" attendees="500+" />
              <EventCard title="Android Dev Summit" date="June 10, 2023" location="Virtual Event" attendees="1000+" />
              <EventCard title="Cloud Next '23" date="July 5, 2023" location="MSIT Tech Hub" attendees="300+" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
