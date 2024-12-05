import React, { useState, useEffect } from "react";
import webdev from "../assets/Webdev.png";
import dsa from "../assets/DSA.png"
import design from "../assets/Design.jpg"
import aiml from "../assets/AIML.png"
import content from "../assets/CONTENT.jpg"
import evm from "../assets/EVM.jpg"
import "../styles/Departments.css";

const DepartmentsDesktop = ({ id, className }) => (
  <section id={id} className={className}>
    <div className=" bg-gray-100 scroll-smooth mb-24">
          <h1 className="text-8xl text-right mr-10  text-[#272727] font-bebas-neue mt-10 mb-10 ">
            DEPARTMENTS
          </h1>
          <div className="container ">
            <ul id="cards">
              <li className="card" id="card1">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#EA4335] rounded-lg w-3/4 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue">WEB DEV</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">We focus on building innovative web applications, enhancing user experiences, and leveraging modern technologies like React, Node.js, and AI to create dynamic, scalable, and visually engaging projects.</p>
                      <button className="mt-6 px-6 py-3 bg-[#2EB574] text-[#FFFFFF] rounded-full font-poppins font-medium">
                        See More
                      </button>
                  </div>
                  <img
                    src={webdev}
                    alt="WEB-DEV"
                    className="w-40 h-40 md:w-96 md:h-80 mb-10 rounded-lg shadow-lg object-cover bg-black mr-8"
                  />
                </div>
              </li>
              <li className="card" id="card2">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#FBBC04] rounded-lg  w-3/4 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue">DSA</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">We are dedicated to strengthen problem-solving skills by exploring advanced algorithms, data structures, and optimization techniques, preparing students for competitive programming and technical interviews.</p>
                      <button className="mt-6 px-6 py-3 bg-[#2EB574] text-[#FFFFFF] rounded-full font-poppins font-medium">
                        See More
                      </button>
                  </div>
                  <img
                    src={dsa}
                    alt="DSA"
                    className="w-40 h-40 md:w-96 md:h-80 mb-10 rounded-lg shadow-lg object-cover bg-black mr-8"
                  />
                </div>
              </li>
              <li className="card" id="card3">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#4285F4] rounded-lg  w-3/4 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue">Design</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut nisi totam culpa ab adipisci, iure soluta! Cupiditate suscipit blanditiis, nam maxime esse necessitatibus? Inventore magni dicta odit hic perspiciatis.</p>
                      <button className="mt-6 px-6 py-3 bg-[#2EB574] text-[#FFFFFF] rounded-full font-poppins font-medium">
                        See More
                      </button>
                  </div>
                  <img
                    src={design}
                    alt="Design"
                    className="w-40 h-40 md:w-96 md:h-80 mb-10 rounded-lg shadow-lg object-cover bg-black mr-8"
                  />
                </div>
              </li>
              <li className="card" id="card4">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#0F9D58] rounded-lg  w-3/4 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue">AI/ML</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut nisi totam culpa ab adipisci, iure soluta! Cupiditate suscipit blanditiis, nam maxime esse necessitatibus? Inventore magni dicta odit hic perspiciatis.</p>
                      <button className="mt-6 px-6 py-3 bg-[#2EB574] text-[#FFFFFF] rounded-full font-poppins font-medium">
                        See More
                      </button>
                  </div>
                  <img
                    src={aiml}
                    alt="AI/ML"
                    className="w-40 h-40 md:w-96 md:h-80 mb-10 rounded-lg shadow-lg object-cover bg-black mr-8"
                  />
                </div>
              </li>
              <li className="card" id="card5">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#EA4335] rounded-lg  w-3/4 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue">Content</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut nisi totam culpa ab adipisci, iure soluta! Cupiditate suscipit blanditiis, nam maxime esse necessitatibus? Inventore magni dicta odit hic perspiciatis.</p>
                      <button className="mt-6 px-6 py-3 bg-[#2EB574] text-[#FFFFFF] rounded-full font-poppins font-medium">
                        See More
                      </button>
                  </div>
                  <img
                    src={content}
                    alt="Content"
                    className="w-40 h-40 md:w-96 md:h-80 mb-10 rounded-lg shadow-lg object-cover bg-black mr-8"
                  />
                </div>
              </li>
              <li className="card" id="card6">
                <div className="card-body flex p-3 shadow-2xl  text-white bg-[#FBBC04] rounded-lg  w-3/4 place-self-center">
                  <div className="flex-1">
                    <h2 className="text-8xl font-normal font-bebas-neue">EVM</h2>
                      <p className=" text-lg font-poppins font-medium leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut nisi totam culpa ab adipisci, iure soluta! Cupiditate suscipit blanditiis, nam maxime esse necessitatibus? Inventore magni dicta odit hic perspiciatis.</p>
                      <button className="mt-6 px-6 py-3 bg-[#2EB574] text-[#FFFFFF] rounded-full font-poppins font-medium">
                        See More
                      </button>
                  </div>
                  <img
                    src={evm}
                    alt="EVM"
                    className="w-40 h-40 md:w-96 md:h-80 mb-10 rounded-lg shadow-lg object-cover bg-black mr-8"
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const departments = [
    {
      title: "WEB DEV",
      description:
        "We focus on building innovative web applications, enhancing user experiences, and leveraging modern technologies like React, Node.js, and AI to create dynamic, scalable, and visually engaging projects.",
      color: "#EA4335",
      img: webdev,
    },
    {
      title: "DSA",
      description:
        "We are dedicated to strengthen problem-solving skills by exploring advanced algorithms, data structures, and optimization techniques, preparing students for competitive programming and technical interviews.",
      color: "#FBBC04",
      img: dsa,
    },
    {
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut nisi totam culpa ab adipisci, iure soluta! Cupiditate suscipit blanditiis, nam maxime esse necessitatibus? Inventore magni dicta odit hic perspiciatis.",
      color: "#4285F4",
      img: design,
    },
    {
      title: "AI/ML",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut nisi totam culpa ab adipisci, iure soluta! Cupiditate suscipit blanditiis, nam maxime esse necessitatibus? Inventore magni dicta odit hic perspiciatis.",
      color: "#0F9D58",
      img: aiml,
    },
    {
      title: "Content",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut nisi totam culpa ab adipisci, iure soluta! Cupiditate suscipit blanditiis, nam maxime esse necessitatibus? Inventore magni dicta odit hic perspiciatis.",
      color: "#EA4335",
      img: content,
    },
    {
      title: "EVM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut nisi totam culpa ab adipisci, iure soluta! Cupiditate suscipit blanditiis, nam maxime esse necessitatibus? Inventore magni dicta odit hic perspiciatis.",
      color: "#FBBC04",
      img: evm,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === departments.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto-transition every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      setCurrentIndex((prevIndex) =>
        prevIndex === departments.length - 1 ? 0 : prevIndex + 1
      ); // Swipe right to left
    }

    if (touchEnd - touchStart > 100) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? departments.length - 1 : prevIndex - 1
      ); // Swipe left to right
    }
  };

  return (
    <section id={id} className={className}>
      <div className="bg-gray-100 scroll-smooth mb-24">
        <h1 className="card-body-h1 text-8xl text-right mr-10 text-[#272727] font-bebas-neue mt-10 mb-10">
          DEPARTMENTS
        </h1>
        <div
          className="relative container flex justify-center items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="card-body flex p-3 shadow-2xl text-white rounded-lg w-3/4 transition-all duration-500"
            style={{ backgroundColor: departments[currentIndex].color }}
          >
            <div className="flex-1">
              <h2 className="text-8xl font-normal font-bebas-neue text-left ml-6">
                {departments[currentIndex].title}
              </h2>
              <img
              src={departments[currentIndex].img || ""}
              alt={departments[currentIndex].title}
              className="w-40 h-40 md:w-96 md:h-80 mb-10 rounded-lg shadow-lg object-cover bg-black mr-8"
            />
              <p className="text-xl font-poppins font-medium leading-relaxed">
                {departments[currentIndex].description}
              </p>
              <button className="mt-6 px-6 py-3 bg-[#2EB574] text-[#FFFFFF] rounded-full font-poppins font-medium">
                See More
              </button>
            </div>
          </div>
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
