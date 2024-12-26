import React, { useState, useEffect } from "react";
import webdev from "../assets/Webdev.png";
import dsa from "../assets/DSA.png"
import design from "../assets/Design.png"
import aiml from "../assets/AIML.png"
import content from "../assets/CONTENT.jpg"
import evm from "../assets/EVM.png"
import "../styles/Departments.css";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const DepartmentsDesktop = ({ id, className }) => (
  <section id={id} className={className}>
    <div className=" bg-gray-100 scroll-smooth mb-24">
          <h1 className="text-8xl text-right mr-10  text-[#272727] font-bebas-neue mt-10 mb-10 ">
            DEPARTMENTS
          </h1>
          <div className="container ">
            <ul id="cards">
              <li className="card" id="card1">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#EA4335] rounded-lg w-4/5 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue mb-5">WEB DEV</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">We focus on building innovative web applications, enhancing user experiences, and leveraging modern technologies like React, Node.js, and AI to create dynamic, scalable, and visually engaging projects.</p>
                  </div>
                  <img
                    src={webdev}
                    alt="WEB-DEV"
                    className="w-40 h-40 md:w-96 md:h-72 object-contain mr-8 ml-20"
                  />
                </div>
              </li>
              <li className="card" id="card2">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#FBBC04] rounded-lg  w-4/5 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue mb-3">DSA</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">We are dedicated to strengthen problem-solving skills by exploring advanced algorithms, data structures, and optimization techniques, preparing students for competitive programming and technical interviews.</p>
                      
                  </div>
                  <img
                    src={dsa}
                    alt="DSA"
                    className="w-40 h-40 md:w-96 md:h-72 object-contain mr-8 ml-20"
                  />
                </div>
              </li>
              <li className="card" id="card3">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#4285F4] rounded-lg  w-4/5 place-self-center ">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue">Design</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">We prioritize crafting visually stunning and user-friendly designs that balance creativity with functionality. By utilizing modern design tools and methodologies, we aim to deliver compelling visuals, intuitive interfaces, and exceptional user experiences that align with the latest industry trends.</p>
                      
                  </div>
                  <img
                    src={design}
                    alt="Design"
                    className="w-40 h-40 md:w-96 md:h-72 object-fill mr-8 ml-20"
                  />
                </div>
              </li>
              <li className="card" id="card4">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#0F9D58] rounded-lg  w-4/5 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue">AI/ML</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">Our focus is on harnessing the power of artificial intelligence and machine learning to solve real-world problems. From predictive modeling to natural language processing, we explore cutting-edge algorithms and frameworks to develop intelligent, data-driven solutions that revolutionize industries.</p>
                      
                  </div>
                  <img
                    src={aiml}
                    alt="AI/ML"
                    className="w-40 h-40 md:w-96 md:h-72 object-cover mr-8 ml-20"
                  />
                </div>
              </li>
              <li className="card" id="card5">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#EA4335] rounded-lg  w-4/5 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue">Content</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">Creating impactful and engaging content is at the core of what we do. We specialize in curating compelling narratives, and leveraging multimedia formats to connect with audiences, enhance brand presence, and drive meaningful engagement across platforms.</p>
                      
                  </div>
                  <img
                    src={content}
                    alt="Content"
                    className="w-40 h-40 md:w-96 md:h-72 rounded-lg object-cover mr-8 ml-20"
                  />
                </div>
              </li>
              <li className="card" id="card6">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#FBBC04] rounded-lg  w-4/5 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue mb-3">EVM</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed mb-10">We excel in organizing seamless and memorable events by combining meticulous planning, creative execution, and strong team collaboration. From brainstorming innovative themes to ensuring every detail is perfect, we bring ideas to life and create experiences that leave lasting impressions.</p>
                      
                  </div>
                  <img
                    src={evm}
                    alt="EVM"
                    className="w-40 h-40 md:w-96 md:h-72 object-fill mr-8 ml-20"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
  </section>
);



const DepartmentsMobile = ({ id, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const departments = [
    {
      title: "WEB DEV",
      description:
        "We focus on building powerful web applications that deliver engaging user experiences. Using tools like React, Node.js, and AI, we create scalable and innovative solutions. Our projects emphasize dynamic designs and modern features tailored to meet user needs effectively.",
      color: "#EA4335",
      img: webdev,
    },
    {
      title: "DSA",
      description:
        "We strengthen problem-solving skills by exploring algorithms, data structures, and optimization techniques. Our mission is to prepare students for competitive programming, technical interviews, and real-world challenges. We empower learners to tackle problems.",
      color: "#FBBC04",
      img: dsa,
    },
    {
      title: "Design",
      description:
        "We craft beautiful, user-friendly designs that combine creativity and functionality. Leveraging modern tools, we create interfaces that enhance usability and delight users. Our designs focus on balancing aesthetics with practicality to deliver exceptional experiences.",
      color: "#4285F4",
      img: design,
    },
    {
      title: "AI/ML",
      description:
        "We explore the power of AI and machine learning to address real-world issues. By applying advanced algorithms, we develop intelligent solutions in areas like data prediction and natural language processing. Our goal is to innovate and revolutionize industries.",
      color: "#0F9D58",
      img: aiml,
    },
    {
      title: "Content",
      description:
        "We create compelling and impactful content tailored to captivate audiences. By focusing on storytelling, SEO optimization, and multimedia formats, we aim to build meaningful connections. Our goal is to enhance brand visibility and engagement across platforms.",
      color: "#EA4335",
      img: content,
    },
    {
      title: "EVM",
      description:
        "We specialize in organizing seamless and memorable events through creative planning and execution. From ideation to perfection, we collaborate as a team to bring unique experiences to life. Our attention to detail ensures lasting impressions on all attendees.",
      color: "#FBBC04",
      img: evm,
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
      handleNext();
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section id={id} className={className}>
      <div className="bg-gray-100 scroll-smooth mb-24">
        <h1 className="card-body-h1 text-8xl text-right mr-10 text-[#272727] font-bebas-neue mt-10 mb-10">
          DEPARTMENTS
        </h1>
        <div className="relative container flex justify-center items-center">
          {/* Previous card */}
          <motion.div
            className="card-body flex p-3 shadow-2xl text-white rounded-lg w-3/4 absolute left-0 z-10"
            style={{ backgroundColor: departments[(currentIndex - 1 + departments.length) % departments.length].color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1">
              <h2 className="text-8xl font-normal font-bebas-neue">
                {departments[(currentIndex - 1 + departments.length) % departments.length].title}
              </h2>
              <p className="text-xl font-poppins font-medium leading-relaxed">
                {departments[(currentIndex - 1 + departments.length) % departments.length].description}
              </p>
            </div>
            <img
              src={departments[(currentIndex - 1 + departments.length) % departments.length].img}
              alt={departments[(currentIndex - 1 + departments.length) % departments.length].title}
              className="w-40 h-40 md:w-96 md:h-80 mb-10 object-cover mr-8"
            />
          </motion.div>

          {/* Current card */}
          <motion.div
            className="card-body flex p-3 shadow-2xl text-white rounded-lg w-3/4 transition-all duration-500 z-20"
            style={{ backgroundColor: departments[currentIndex].color }}
            {...handlers}
          >
            <div className="flex-1">
              <h2 className="text-8xl font-normal font-bebas-neue">{departments[currentIndex].title}</h2>
              <p className="text-xl font-poppins font-medium leading-relaxed">{departments[currentIndex].description}</p>
              
            </div>
            <img
              src={departments[currentIndex].img}
              alt={departments[currentIndex].title}
              className="w-40 h-40 md:w-96 md:h-80 mb-10 object-cover mr-8"
            />
          </motion.div>

          {/* Next card */}
          <motion.div
            className="card-body flex p-3 shadow-2xl text-white rounded-lg w-3/4 absolute right-0 z-10"
            style={{ backgroundColor: departments[(currentIndex + 1) % departments.length].color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1">
              <h2 className="text-8xl font-normal font-bebas-neue">
                {departments[(currentIndex + 1) % departments.length].title}
              </h2>
              <p className="text-xl font-poppins font-medium leading-relaxed">
                {departments[(currentIndex + 1) % departments.length].description}
              </p>
            </div>
            <img
              src={departments[(currentIndex + 1) % departments.length].img}
              alt={departments[(currentIndex + 1) % departments.length].title}
              className="w-40 h-40 md:w-96 md:h-80 mb-10  object-cover  mr-8"
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
                  index === currentIndex
                    ? "scale-125"
                    : "opacity-50"
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
