import React from "react";
import { Link } from "react-router-dom";
import img1 from "/assets/orientation2.JPG";
import img2 from "/assets/orientation3.jpg";
import img3 from "/assets/aboutUs9.jpg";
import img4 from "/assets/aboutUs4.jpg";
import img5 from "/assets/aboutUs8.jpg";
import img6 from "/assets/aboutUs2.jpg";
import img7 from "/assets/orientation1.jpg";
import img8 from "/assets/aboutUs3.jpg";
import img9 from "/assets/aboutUs1.png";

const Events = () => {
  return (
    <>
      <h1 className="text-9xl text-left mr-10 text-[#272727] font-bebas-neue px-20 pt-20 mb-10 animate-fade-in">
        Events
      </h1>
      <div className="bg-gray-300 text-xl sm:text-2xl md:text-3xl font-semibold w-[90%] sm:w-[70%] md:w-[50%] mx-auto rounded-full py-2 text-center">
        Wanna Explore Our Events?
      </div>
      <Link to="/events">
        <div className="flex ml-[50%] justify-center mt-5">
          <button className="text-lg sm:text-xl md:text-2xl px-6 py-2 rounded-full bg-gray-300">
            Yes
          </button>
        </div>
      </Link>

      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mx-auto mt-6 w-[85vw] h-[60vh]">
        <div className="grid grid-cols-5 grid-rows-7 md:w-[45%] h-full gap-3">
          <div className="bg-slate-400 col-span-3 row-span-3 rounded-2xl overflow-hidden hover:cursor-pointer">
            <img
              src={img1}
              alt="Logo"
              className="w-full h-full object-cover rounded-2xl hover:scale-[1.15] transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="bg-slate-900 col-span-2 row-span-3 rounded-2xl overflow-hidden hover:cursor-pointer">
            <img
              src={img2}
              alt="Logo"
              className="w-full h-full object-cover rounded-2xl hover:scale-[1.15] transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="bg-slate-400 col-span-2 row-span-4 rounded-2xl overflow-hidden hover:cursor-pointer">
            <img
              src={img3}
              alt="Logo"
              className="w-full h-full object-cover rounded-2xl hover:scale-[1.15] transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="bg-slate-400 col-span-3 row-span-4 rounded-2xl overflow-hidden hover:cursor-pointer">
            <img
              src={img4}
              alt="Logo"
              className="w-full h-full object-cover rounded-2xl hover:scale-[1.15] transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        <div className="grid grid-cols-9 grid-rows-5 md:w-[55%] h-full gap-3">
          <div className="bg-slate-400 col-span-3 row-span-3 rounded-2xl overflow-hidden hover:cursor-pointer">
            <img
              src={img5}
              alt="Logo"
              className="w-full h-full object-cover rounded-2xl hover:scale-[1.15] transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="bg-slate-400 col-span-6 row-span-3 rounded-2xl overflow-hidden hover:cursor-pointer">
            <img
              src={img6}
              alt="Logo"
              className="w-full h-full object-cover rounded-2xl hover:scale-[1.15] transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="bg-slate-400 col-span-2 row-span-2 rounded-2xl overflow-hidden hover:cursor-pointer">
            <img
              src={img7}
              alt="Logo"
              className="w-full h-full object-cover rounded-2xl hover:scale-[1.15] transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="bg-slate-400 col-span-5 row-span-2 rounded-2xl overflow-hidden hover:cursor-pointer">
            <img
              src={img8}
              alt="Logo"
              className="w-full h-full object-cover rounded-2xl hover:scale-[1.15] transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="bg-slate-900 col-span-2 row-span-2 rounded-2xl overflow-hidden hover:cursor-pointer">
            <img
              src={img9}
              alt="Logo"
              className="w-full h-full object-cover rounded-2xl hover:scale-[1.15] transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
