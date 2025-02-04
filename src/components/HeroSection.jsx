/* eslint-disable react/prop-types */
"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGoogle, FaCode, FaLightbulb } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Background from "./Background";

const FeatureCard = ({ icon: Icon, text, description, position }) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      rotate: position === "left" ? -5 : position === "right" ? 5 : 0,
    }}
    whileTap={{ scale: 0.95 }}
    className="relative group h-full feature-card"
  >
    <div className="absolute inset-0 bg-gradient-to-r md:h-[80%] h-[80%] from-[#4285F4] to-[#0F9D58] rounded-[2rem] blur opacity-40 transition duration-300" />
    <div className="relative flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-lg overflow-hidden h-[100%]">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <div className="relative z-10 p-5 bg-white rounded-full shadow-inner mb-4">
        <Icon className="h-10 w-10 sm:h-7 sm:w-7 text-blue-500" />
      </div>
      <h3 className="relative z-10 text-2xl sm:text-xl font-semibold text-gray-800 mb-10 sm:mb-1">
        {text}
      </h3>
      <p className="relative text-lg sm:text-sm z-10 text-gray-600 text-center">
        {description}
      </p>
    </div>
  </motion.div>
);

const AnimatedText = ({ text }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="inline-block"
  >
    {text}
  </motion.span>
);

const FallingLetter = ({ children, delay }) => {
  const controls = useAnimation();
  const randomRotation = Math.random() * 360 - 180;

  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 900 + delay * 100));
      await controls.start({
        y: ["-100vh", "0vh"],
        rotate: [randomRotation, randomRotation, randomRotation / 2, 0],
        opacity: [0, 1, 1],
        transition: {
          y: { type: "spring", stiffness: 50, damping: 10, duration: 1.5 },
          rotate: { type: "spring", stiffness: 60, damping: 8, duration: 1.5 },
          opacity: { duration: 0.3, times: [0, 0.2, 1] },
        },
      });
    };
    sequence();
  }, [controls, delay, randomRotation]);

  return (
    <motion.span
      style={{ display: "inline-block", opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.span>
  );
};

const FallingText = ({ text, startDelay }) => (
  <span className="inline-flex">
    {text.split("").map((letter, index) => (
      <FallingLetter key={index} delay={startDelay + index}>
        {letter}
      </FallingLetter>
    ))}
  </span>
);

const FeatureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 1,
        spacing: 15,
      },
      created(s) {
        s.moveToIdx(1);
      },
      updated(s) {
        setCurrentSlide(s.track.details.rel);
      },
      animationEnded(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider h-[320px] max-w-[90%] mx-auto">
      <div className="keen-slider__slide">
        <FeatureCard
          icon={FaGoogle}
          text="Google Campaign"
          description="Join our Google campaigns and events to learn from experts."
          position="left"
        />
      </div>
      <div className="keen-slider__slide">
        <FeatureCard
          icon={FaCode}
          text="Learning Sessions"
          description="Enhance your skills through interactive workshops and sessions."
          position="center"
        />
      </div>
      <div className="keen-slider__slide">
        <FeatureCard
          icon={FaLightbulb}
          text="Innovative Projects"
          description="Build real-world projects with cutting-edge technologies."
          position="right"
        />
      </div>
    </div>
  );
};

export default function HeroSection({id,className}) {
  return (
    <>
      {/* <Background /> */}
      <div className="relative min-h-[70%] overflow-hidden md:pt-20 md:mt-0 pt-44">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="flex flex-col items-center justify-center space-y-12 sm:space-y-16">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 0.98, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-red-500/10 rounded-2xl blur-2xl"
              />
              <h1 className="relative text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter">
                <span className="bg-clip-text text-[#272727] flex items-center justify-center gap-8">
                  <FallingText text="GDG" startDelay={0} />
                  <FallingText text="MSIT" startDelay={3} />
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                <AnimatedText text="Empowering students through technology and innovation" />
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-5xl mx-auto"
            >
              <div className="hidden md:grid grid-cols-3 gap-6 sm:gap-8">
                <FeatureCard
                  icon={FaGoogle}
                  text="Google Campaign"
                  description="Join our Google campaigns and events to learn from experts."
                  position="left"
                />
                <FeatureCard
                  icon={FaCode}
                  text="Learning Sessions"
                  description="Enhance your skills through interactive workshops and sessions."
                  position="center"
                />
                <FeatureCard
                  icon={FaLightbulb}
                  text="Innovative Projects"
                  description="Build real-world projects with cutting-edge technologies."
                  position="right"
                />
              </div>
              <div className="md:hidden ">
                <FeatureCarousel />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
