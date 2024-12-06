import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "HEAD",
    name: "Naman",
    style: {
      borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%", 
    },
    image: "/src/assets/Naman.jpg",
    department: "Development",
  },
  {
    id: 2,
    title: "DEPUTY HEAD",
    name: "Nevin",
    style: { borderRadius: "70% 70% 30% 30% / 40% 40% 60% 60%" },
    image: "/src/assets/Nevin.jpg",
    department: "Development",
  },
  {
    id: 3,
    title: "HEAD",
    name: "Ishita",
    style: { borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" },
    image: "/src/assets/Ishita.png",
    department: "DSA",
  },
  {
    id: 4,
    title: "DEPUTY HEAD",
    name: "Pranav",
    style: { borderRadius: "45% 45% 45% 45% / 40% 40% 60% 60%" },
    image: "/src/assets/pranav.jpg",
    department: "DSA",
  },
  {
    id: 5,
    title: "HEAD",
    name: "Siddharth",
    style: { borderRadius: "40% 40% 60% 60% / 55% 55% 45% 45%" },
    image: "/src/assets/Siddharth.jpg",
    department: "AI/ML",
  },
  {
    id: 6,
    title: "DEPUTY HEAD",
    name: "Udit",
    style: { borderRadius: "65% 65% 35% 35% / 45% 45% 55% 55%" },
    image: "/src/assets/Udit.jpg",
    department: "AI/ML",
  },
  {
    id: 7,
    title: "HEAD",
    name: "Samrat",
    style: { borderRadius: "55% 55% 45% 45% / 60% 60% 40% 40%" },
    image: "/src/assets/samrat.jpg",
    department: "EVM",
  },
  {
    id: 8,
    title: "DEPUTY HEAD",
    name: "Mahima",
    style: { borderRadius: "40% 40% 60% 60% / 45% 45% 55% 55%" },
    image: "/src/assets/Mahima.jpg",
    department: "EVM",
  },
  {
    id: 9,
    title: "HEAD",
    name: "Gauransh",
    style: { borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%" },
    image: "/src/assets/gauransh.jpg",
    department: "Content",
  },
  {
    id: 10,
    title: "DEPUTY HEAD",
    name: "Shivam",
    style: { borderRadius: "45% 45% 55% 55% / 50% 50% 50% 50%" },
    image: "/src/assets/shivam.jpg",
    department: "Content",
  },
  {
    id: 11,
    title: "HEAD",
    name: "Shaurya",
    style: { borderRadius: "60% 60% 40% 40% / 50% 50% 50% 50%" },
    image: "/src/assets/shaurya.jpg",
    department: "Design",
  },
  {
    id: 12,
    title: "DEPUTY HEAD",
    name: "Krishna",
    style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
    image: "/src/assets/krishna.jpg",
    department: "Design",
  },
  {
    id: 13,
    name: "Ansh",
    style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
    image: "/src/assets/Ansh.jpg",
    department: "Campaign Leads",
  },
  {
    id: 14,
    name: "Daksh",
    style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
    image: "/src/assets/Daksh.jpg",
    department: "Campaign Leads",
  },
  {
    id: 15,
    name: "Aryan",
    style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
    image: "/src/assets/Aryan.jpg",
    department: "Operational Leads",
  },
  {
    id: 16,
    name: "Yashika",
    style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
    image: "/src/assets/op.jpg",
    department: "Operational Leads",
  },
  {
    id: 17,
    name: "Tanuj",
    style: { borderRadius: "55% 55% 45% 45% / 45% 45% 55% 55%" },
    image: "/src/assets/tanujj.jpg",
    department: "Operational Leads",
  },
];

export default function LeadershipSlider() {
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
              src="/src/assets/lead.png"
              alt="GDG Lead"
              width={400}
              height={40}
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>
        <div className="mt-28 sm:mt-72 lg:mt-72 text-center w-full px-4 sm:px-8 lg:px-16">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      <div className="py-10">
        <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl mb-6 text-center font-bebas-neue text-black">
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
                            <div className="absolute inset-x-0 bottom-0 h-[0%] group-hover:h-[85%] bg-black bg-opacity-40 transition-all duration-300 ease-in-out">
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
  );
}
