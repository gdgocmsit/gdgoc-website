import React, { useState, useEffect } from "react";
import dino from "/assets/dino.png";

const DinoAbout = ({ eventName, eventAbout }) => {
    // const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <img
                src={dino}
                alt="Promo"
                className="w-auto h-24 sm:w-auto sm:h-32 md:w-auto md:h-40"
            />
            <div className="rounded-lg p-4 sm:p-6 bg-zinc-50 shadow-lg shadow-black border border-zinc-100 max-w-xs md:max-w-sm w-full">

                {/* //Event Heading */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
                    {eventName}
                </h3>

                {/* //Event Description */}
                <p className="text-sm sm:text-xs md:text-sm  text-zinc-700 mt-2 max-h-[40vh] md:max-h-[50vh] overflow-y-auto text-start leading-1">
                    {eventAbout}
                </p>

                <span className="mt-4 inline-block text-xs sm:text-sm md:text-md text-blue-500 hover:text-blue-600 transition duration-200 font-medium">
                    ~Dino
                </span>
            </div>

        </>
    );
};

export default DinoAbout;
