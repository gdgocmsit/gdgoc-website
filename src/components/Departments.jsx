import React, { useState, useEffect } from "react";
import dev1 from "/departments/DEV.gif";
import aiml1 from "/departments/AIML.gif";
import content1 from "/departments/CONTENT.gif";
import dsa1 from "/departments/DSA.gif";
import design1 from "/departments/DESIGN.gif";
import evm1 from "/departments/EVM.gif";

import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const upvariant = {
  hidden: { opacity: 0, y: 100 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: custom,
    },
  }),
};

const downvariant = {
  hidden: { opacity: 0, y: -100 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: custom,
    },
  }),
};

const DepartmentsDesktop = ({ id, className }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "320px",
      height: "450px",
    },
    collapsed: {
      width: "170px",
      height: "400px",
    },
  };

  const departments = [
    {
      name: "DEV",
      color: "bg-[#EA4335]",
      icon: dev1,
      color1: "bg-red-400",
      imgcss: "",
      description:
        "Building web apps with React, Node.js, and AI, focusing on scalability, dynamic designs, and modern user experiences.",
      custom: 0.3,
      animation: upvariant,
    },
    {
      name: "AI/ML",
      color: "bg-[#FBBC04]",
      icon: aiml1,
      color1: "bg-yellow-400",
      imgcss: "size-40 object-cover",
      description:
        "Applying AI and machine learning to solve real-world problems, focusing on data prediction and natural language processing.",
      custom: 0.6,
      animation: downvariant,
    },
    {
      name: "EVM",
      color: "bg-[#4285F4]",
      icon: evm1,
      color1: "bg-blue-400",
      imgcss: "",
      description:
        "Organizing creative and seamless events, ensuring memorable experiences through detailed planning and flawless execution.",
      custom: 0.9,
      animation: upvariant,
    },
    {
      name: "DESIGN",
      color: "bg-[#0F9D58]",
      icon: design1,
      color1: "bg-green-500",
      imgcss: "size-40 object-cover",
      description:
        "Creating aesthetic and functional designs, enhancing usability with modern tools for exceptional user experiences.",
      custom: 1.2,
      animation: downvariant,
    },
    {
      name: "CONTENT",
      color: "bg-[#EA4335]",
      icon: content1,
      color1: "bg-red-400",
      imgcss: "size-72 object-cover",
      description:
        "Crafting engaging content through storytelling, SEO, and multimedia to boost brand visibility and audience engagement.",
      custom: 1.5,
      animation: upvariant,
    },
    {
      name: "DSA",
      color: "bg-[#FBBC04]",
      icon: dsa1,
      color1: "bg-yellow-400",
      imgcss: "size-32 object-cover",
      description:
        "Enhancing problem-solving skills with algorithms, data structures, and optimization techniques for coding and technical interviews.",
      custom: 1.8,
      animation: downvariant,
    },
  ];

  return (
    <section
      id={id}
      className={`${className} transition-all duration-500 ease-in-out mb-20 mt-28`}
    >
      <div className="flex flex-col   ">
        <h1 className="text-8xl font-semibold   text-left ml-20  text-[#272727] font-bebas-neue pt-0  mb-16     ">
          DEPARTMENTS
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {departments.map((dept, index) => (
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              custom={dept.custom}
              variants={dept.animation}
            >
              <motion.div
                key={index}
                className={`relative flex flex-col items-center rounded-Large ${dept.color} shadow-lg transition-all transform cursor-pointer duration-500 ease-in-out`}
                variants={cardVariants}
                initial="collapsed"
                animate={index === expandedIndex ? "expanded" : "collapsed"}
                transition={{ duration: 0.2 }}
                onClick={() => handleCardClick(index)}
                style={{ width: "250px", height: "300px" }}
              >
                <div
                  className={`w-36 h-40 rounded-medium flex items-center ${dept.color1} justify-center text-3xl mt-10 transition-opacity duration-500`}
                >
                  <img
                    src={dept.icon}
                    alt={dept.name}
                    className={`filter brightness-0 ${dept.imgcss}`}
                  />
                </div>
                <p className="mt-8 text-white text-5xl font-bebas-neue">
                  {dept.name}
                </p>
                {index === expandedIndex && (
                  <motion.p
                    className="text-black text-center font-poppins text-md mr-2 p-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    {dept.description}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DepartmentsMobile = ({ id, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const departments = [
    {
      title: "DEV",
      color: "#EA4335",
      icon: dev1,
      color1: "bg-red-500",
      imgcss: "",
      description:
        "Building web apps with React, Node.js, and AI, focusing on scalability, dynamic designs, and modern user experiences.",
      custom: 0.3,
      animation: upvariant,
    },
    {
      title: "AI/ML",
      color: "#FBBC04",
      icon: aiml1,
      color1: "bg-yellow-400",
      imgcss: "",
      description:
        "Applying AI and machine learning to solve real-world problems, focusing on data prediction and natural language processing.",
      custom: 0.6,
      animation: downvariant,
    },
    {
      title: "EVM",
      color: "#4285F4",
      icon: evm1,
      color1: "bg-blue-400",
      imgcss: "",
      description:
        "Organizing creative and seamless events, ensuring memorable experiences through detailed planning and flawless execution.",
      custom: 0.9,
      animation: upvariant,
    },
    {
      title: "DESIGN",
      color: "#0F9D58",
      icon: design1,
      color1: "bg-green-500",
      imgcss: "",
      description:
        "Creating aesthetic and functional designs, enhancing usability with modern tools for exceptional user experiences.",
      custom: 1.2,
      animation: downvariant,
    },
    {
      title: "CONTENT",
      color: "#EA4335",
      icon: content1,
      color1: "bg-red-400",
      imgcss: "",
      description:
        "Crafting engaging content through storytelling, SEO, and multimedia to boost brand visibility and audience engagement.",
      custom: 1.5,
      animation: upvariant,
    },
    {
      title: "DSA",
      color: "#FBBC04",
      icon: dsa1,
      color1: "bg-yellow-400",
      imgcss: "",
      description:
        "Enhancing problem-solving skills with algorithms, data structures, and optimization techniques for coding and technical interviews.",
      custom: 1.8,
      animation: downvariant,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? departments.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === departments.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === departments.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array prevents infinite loop

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section id={id} className={className}>
      <div className="bg-gray-100 scroll-smooth mb-15">
        <h1 className="card-body-h1 text-7xl text-center  text-[#272727] font-bebas-neue mt-10 mb-10">
          DEPARTMENTS
        </h1>
        <div className="relative container flex justify-center items-center">
          {/* Previous card */}
          <motion.div
            className="card-body flex p-3 shadow-2xl text-white rounded-Large w-3/4 h-full absolute left-0 z-10 flex-col items-center text-center"
            style={{
              backgroundColor:
                departments[
                  (currentIndex - 1 + departments.length) % departments.length
                ].color,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1">
              <h2 className="text-7xl font-normal font-bebas-neue mt-10">
                {
                  departments[
                    (currentIndex - 1 + departments.length) % departments.length
                  ].title
                }
              </h2>
              <p className="text-xl font-poppins font-medium leading-relaxed mt-5">
                {
                  departments[
                    (currentIndex - 1 + departments.length) % departments.length
                  ].description
                }
              </p>
            </div>
            <img
              src={
                departments[
                  (currentIndex - 1 + departments.length) % departments.length
                ].icon
              }
              alt={
                departments[
                  (currentIndex - 1 + departments.length) % departments.length
                ].title
              }
              className={` w-40 h-40 mb-10 ${departments.imgcss} mr-8 filter brightness-0 ${departments.color1}`}
            />
          </motion.div>

          {/* Current card */}
          <motion.div
            className="card-body flex p-3 shadow-2xl text-white rounded-Large w-3/4 h-5/6 transition-all duration-500 z-20 flex-col items-center text-center"
            style={{ backgroundColor: departments[currentIndex].color }}
            {...handlers}
          >
            <div className="flex-1">
              <h2 className="text-7xl font-normal font-bebas-neue mt-10">
                {departments[currentIndex].title}
              </h2>
              <p className="text-xl font-poppins font-medium leading-relaxed mt-5">
                {departments[currentIndex].description}
              </p>
            </div>
            <img
              src={departments[currentIndex].icon}
              alt={departments[currentIndex].title}
              className={`w-40 h-40 mb-10 filter brightness-0 `}
            />
          </motion.div>

          {/* Next card */}
          <motion.div
            className="card-body flex p-3 shadow-2xl text-white rounded-Large w-3/4 h-full absolute  right-0 z-10 flex-col items-center text-center"
            style={{
              backgroundColor:
                departments[(currentIndex + 1) % departments.length].color,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1">
              <h2 className="text-7xl font-normal font-bebas-neue  mt-10">
                {departments[(currentIndex + 1) % departments.length].title}
              </h2>
              <p className="text-xl font-poppins font-medium leading-relaxed mt-5">
                {
                  departments[(currentIndex + 1) % departments.length]
                    .description
                }
              </p>
            </div>
            <img
              src={departments[(currentIndex + 1) % departments.length].icon}
              alt={departments[(currentIndex + 1) % departments.length].title}
              className={`w-40 h-40 mb-10 ${departments.imgcss} mr-8 filter brightness-0 ${departments.color1}`}
            />
          </motion.div>
        </div>
        {/* Dots */}
        <div className="flex justify-center space-x-3 mt-6">
          {departments.map((dept, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "scale-125" : "opacity-50"
              }`}
              style={{
                backgroundColor:
                  index === currentIndex ? dept.color : "#D3D3D3",
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

const Departments = ({ id, className }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? (
    <DepartmentsMobile id={id} className={className} />
  ) : (
    <DepartmentsDesktop id={id} className={className} />
  );
};

export default Departments;
