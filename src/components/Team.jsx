import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/Teams.css";
import Naman from "/assets/Naman.jpg";
import Nevin from "/assets/Nevin.jpg";
import Ishita from "/assets/Ishita.png";
import Pranav from "/assets/pranav.jpg";
import Siddharth from "/assets/Siddharth.jpg";
import Udit from "/assets/Udit.jpg";
import Samrat from "/assets/samrat.jpg";
import Mahima from "/assets/Mahima.jpg";
import Gauransh from "/assets/gauransh.jpg";
import Shivam from "/assets/shivam.jpg";
import Shaurya from "/assets/shaurya.jpg";
import Krishna from "/assets/krishna.jpg";
import Ansh from "/assets/Ansh.jpg";
import Daksh from "/assets/Daksh.jpg";
import Aryan from "/assets/Aryan.jpg";
import Yashika from "/assets/op.jpg";
import Tanuj from "/assets/tanujj.jpg";
import Harshita from "/assets/lead.png";

const Team = ({ id, className }) => {
  const slides = [
    {
      id: 1,
      title: "HEAD",
      name: "Naman",
      style: { borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%" },
      image: Naman,
      department: "Development",
    },
    {
      id: 2,
      title: "DEPUTY HEAD",
      name: "Nevin",
      style: { borderRadius: "70% 70% 30% 30% / 40% 40% 60% 60%" },
      image: Nevin,
      department: "Development",
    },
    {
      id: 3,
      title: "HEAD",
      name: "Ishita",
      style: { borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" },
      image: Ishita,
      department: "DSA",
    },
    {
      id: 4,
      title: "DEPUTY HEAD",
      name: "Pranav",
      style: { borderRadius: "45% 45% 45% 45% / 40% 40% 60% 60%" },
      image: Pranav,
      department: "DSA",
    },
    {
      id: 5,
      title: "HEAD",
      name: "Siddharth",
      style: { borderRadius: "40% 40% 60% 60% / 55% 55% 45% 45%" },
      image: Siddharth,
      department: "AI/ML",
    },
    {
      id: 6,
      title: "DEPUTY HEAD",
      name: "Udit",
      style: { borderRadius: "65% 65% 35% 35% / 45% 45% 55% 55%" },
      image: Udit,
      department: "AI/ML",
    },
    {
      id: 7,
      title: "HEAD",
      name: "Samrat",
      style: { borderRadius: "55% 55% 45% 45% / 60% 60% 40% 40%" },
      image: Samrat,
      department: "EVM",
    },
    {
      id: 8,
      title: "DEPUTY HEAD",
      name: "Mahima",
      style: { borderRadius: "40% 40% 60% 60% / 45% 45% 55% 55%" },
      image: Mahima,
      department: "EVM",
    },
    {
      id: 9,
      title: "HEAD",
      name: "Gauransh",
      style: { borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%" },
      image: Gauransh,
      department: "Content",
    },
    {
      id: 10,
      title: "DEPUTY HEAD",
      name: "Shivam",
      style: { borderRadius: "45% 45% 55% 55% / 50% 50% 50% 50%" },
      image: Shivam,
      department: "Content",
    },
    {
      id: 11,
      title: "HEAD",
      name: "Shaurya",
      style: { borderRadius: "60% 60% 40% 40% / 50% 50% 50% 50%" },
      image: Shaurya,
      department: "Design",
    },
    {
      id: 12,
      title: "DEPUTY HEAD",
      name: "Krishna",
      style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
      image: Krishna,
      department: "Design",
    },
    {
      id: 13,
      name: "Ansh",
      style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
      image: Ansh,
      department: "Campaign Leads",
    },
    {
      id: 14,
      name: "Daksh",
      style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
      image: Daksh,
      department: "Campaign Leads",
    },
    {
      id: 15,
      name: "Aryan",
      style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
      image: Aryan,
      department: "Operational Leads",
    },
    {
      id: 16,
      name: "Yashika",
      style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
      image: Yashika,
      department: "Operational Leads",
    },
    {
      id: 17,
      name: "Tanuj",
      style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
      image: Tanuj,
      department: "Operational Leads",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const groupedSlides = slides.reduce((acc, slide) => {
    if (!acc[slide.department]) {
      acc[slide.department] = [];
    }
    acc[slide.department].push(slide);
    return acc;
  }, {});

  const slideGroups = Object.entries(groupedSlides);
  const totalSlides = slideGroups.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  return (
    <section id={id} className={className}>
      <div className="w-full overflow-hidden">
        <div className="relative py-14 px-3 sm:px-6 lg:px-8">
          <div className="relative">
            <h1 className="text-center font-bebas-neue text-6xl sm:text-9xl lg:text-[10rem] xl:text-[14rem] leading-none mb-4">
              <span className="text-[#0F9D58]">G</span>
              <span className="text-[#FBBC04]">D</span>
              <span className="text-[#EA4335]">G</span>
              <span className="ml-4 sm:ml-4 lg:ml-9 text-[#0F9D58]">L</span>
              <span className="text-[#4285F4]">E</span>
              <span className="text-[#FBBC04]">A</span>
              <span className="text-[#EA4335]">D</span>
            </h1>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[450px]">
              <img
                src={Harshita}
                alt="GDG Lead"
                width={400}
                height={40}
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
          <div className="mt-28 sm:mt-72 lg:mt-72 text-center w-full px-4 sm:px-8 lg:px-16">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-poppins">
              <b>Harshita Gupta</b>, a very unique individual and the <b>GDG Lead at MSIT</b>,
              is an award-winning coder by heart and a relentless innovator. She
              has made her mark by winning prestigious hackathons with her
              ingenious ideas and solutions. As a Beta MLSA and an open source
              contributor, Harshita actively uplifts the community through her
              impactful work as a phenomenal speaker and presenter who
              captivates by being clear and passionate while talking. Know for
              her eloquence makes her a perfect blend of brilliant technical
              skills, leadership along with creativity.
            </p>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl mb-3 text-center font-bebas-neue text-black">
            OUR TEAM
          </h2>

          <div className="relative w-full overflow-hidden">
            <div className="mb-1">
              <div
                className="relative w-full transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                <div className="flex">
                  {slideGroups.map(([department, members], index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-full flex flex-col items-center justify-center gap-4 sm:gap-8 py-8"
                    >
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center font-bebas-neue mb-4 mt-6 sm:mt-9">
                        {department}
                      </h2>
                      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 w-full px-4 sm:px-8">
                        {members.map((member) => (
                          <div
                            key={member.id}
                            className={`relative ${
                              department === "Operational Leads"
                                ? "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                                : "w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4"
                            } max-w-xs mb-8`}
                          >
                            {member.title && (
                              <h3 className="text-center text-lg sm:text-xl lg:text-2xl font-text font-bold text-gray-800 mb-4">
                                {member.title}
                              </h3>
                            )}
                            <div
                              className="relative overflow-hidden group"
                              style={member.style}
                            >
                              <div
                                className="w-full aspect-square bg-cover bg-center"
                                style={{
                                  backgroundImage: `url(${member.image})`,
                                }}
                              />
                              <div className="absolute inset-x-0 bottom-0 h-[0%] group-hover:h-[100%] bg-black bg-opacity-40 transition-all duration-300 ease-in-out">
                                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center h-full">
                                  {member.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-5 mt-6">
              <button
                onClick={prevSlide}
                className="mr-8 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mb-5">
              {slideGroups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-red-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
