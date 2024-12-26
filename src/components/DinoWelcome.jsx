import React, { useState, useEffect } from "react";
import dino from "/assets/dino.png";

const DinoWelcome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-4 transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        } flex items-center space-x-4 rounded-lg p-4 max-w-sm sm:max-w-md md:max-w-lg`}
        style={{ zIndex: 1000 }}
        onClick={() => setIsVisible(false)}
      >
        <img
          src={dino}
          alt="Promo"
          className="w-auto h-24 sm:w-auto sm:h-32 md:w-auto md:h-40"
        />
        <div className="rounded-lg p-4 sm:p-6 bg-gray-200 shadow-lg shadow-black border border-gray-100 max-w-xs md:max-w-sm w-full">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
            Welcome to
          </h3>
          <p className="text-sm sm:text-md md:text-lg text-gray-600 mt-2">
            Google Developers Group on Campus-MSIT
          </p>
          <span className="mt-4 inline-block text-xs sm:text-sm md:text-md text-blue-500 hover:text-blue-600 transition duration-200 font-medium">
          ~Dino
          </span> 
        </div>
      </div>
    </>
  );
};

export default DinoWelcome;
