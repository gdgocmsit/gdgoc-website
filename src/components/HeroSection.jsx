import { useEffect, useState } from "react";

export default function HeroSection() {
  const [positions, setPositions] = useState([]);

  // Generate random initial positions and directions for each circle
  const generateRandomPositions = () => {
    return Array.from({ length: 30 }, () => ({
      top: Math.random() * 100, // Random starting position (top %)
      left: Math.random() * 100, // Random starting position (left %)
      dx: (Math.random() - 0.5) * 0.1, // Slower movement in x direction
      dy: (Math.random() - 0.5) * 0.1, // Slower movement in y direction
    }));
  };

  useEffect(() => {
    const circles = generateRandomPositions();
    setPositions(circles);

    const moveCircles = () => {
      setPositions((prevPositions) =>
        prevPositions.map((circle) => {
          let { top, left, dx, dy } = circle;

          // Bounce off walls
          if (top <= 0 || top >= 100) dy = -dy;
          if (left <= 0 || left >= 100) dx = -dx;

          return {
            ...circle,
            top: top + dy,
            left: left + dx,
            dx,
            dy,
          };
        })
      );
      requestAnimationFrame(moveCircles);
    };

    moveCircles();
  }, []);

  return (
    <div className="relative min-h-screen bg-white p-4 sm:p-8 flex items-center justify-center overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0">
        {positions.map((circle, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              height: "4rem", // Fixed size
              width: "4rem", // Fixed size
              backgroundColor: ["#EA4335", "#4285F4", "#FBBC04", "#0F9D58"][
                index % 4
              ],
              top: `${circle.top}%`,
              left: `${circle.left}%`,
              filter: "blur(10px)", // Apply blur effect
              opacity: 0.5, // Reduce visibility
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-bold text-gray-800 tracking-tighter flex items-center">
            <span className="relative -translate-y-3 md:-translate-y-7">G</span>
            <span className="relative translate-y-3 md:translate-y-7">D</span>
            <span className="relative -translate-y-3 md:-translate-y-7">G</span>
          </div>

          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-bold text-gray-800 tracking-tighter flex items-center">
            <span className="relative translate-y-3 md:translate-y-7">M</span>
            <span className="relative -translate-y-3 md:-translate-y-7">S</span>
            <span className="relative translate-y-3 md:translate-y-7">I</span>
            <span className="relative -translate-y-3 md:-translate-y-7">T</span>
          </div>
        </div>
        <div className="absolute -top-4 md:-top-1 left-[20%] bg-[#4285F4] text-white px-3 py-1.5 rounded-full text-sm md:text-base font-medium shadow-lg transform -rotate-12">
          Development
        </div>

        <div className="absolute top-[80%] left-[10%] bg-[#EA4335] text-white px-3 py-1.5 rounded-full text-sm md:text-base font-medium shadow-lg transform rotate-6">
          DSA
        </div>

        <div className="absolute bottom-0 left-[40%] bg-[#0F9D58] text-white px-3 py-1.5 rounded-full text-sm md:text-base font-medium shadow-lg transform -rotate-6">
          Design
        </div>

        <div className="absolute -top-7 right-[10%] bg-[#FBBC04] text-white px-3 py-1.5 rounded-full text-sm md:text-base font-medium shadow-lg transform -rotate-12">
          AI ML
        </div>

        <div className="absolute -top-4 md:top-40 left-[73%] bg-[#4285F4] text-white px-3 py-1.5 rounded-full text-sm md:text-base font-medium shadow-lg transform -rotate-12">
          EVM
        </div>

        <div className="absolute top-[10%] left-[45%] bg-[#EA4335] text-white px-3 py-1.5 rounded-full text-sm md:text-base font-medium shadow-lg transform rotate-12">
          Social Media
        </div>
      </div>
    </div>
  );
}





