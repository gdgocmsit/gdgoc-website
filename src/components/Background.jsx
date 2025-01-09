import { useEffect, useState } from "react";

export default function Background() {
  const [positions, setPositions] = useState([]);

  const circleSize = 4;
  const circleRadiusPercentage = (circleSize * 16) / window.innerHeight * 100;

  const generateRandomPositions = () => {
    return Array.from({ length: 35 }, () => ({
      top: Math.random() * (100 - 2 * circleRadiusPercentage) + circleRadiusPercentage,
      left: Math.random() * (100 - 2 * circleRadiusPercentage) + circleRadiusPercentage,
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
    }));
  };

  useEffect(() => {
    const circles = generateRandomPositions();
    setPositions(circles);

    const moveCircles = () => {
      setPositions((prevPositions) =>
        prevPositions.map((circle) => {
          let { top, left, dx, dy } = circle;

          if (top <= circleRadiusPercentage || top >= 100 - circleRadiusPercentage) dy = -dy;
          if (left <= circleRadiusPercentage || left >= 100 - circleRadiusPercentage) dx = -dx;

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
    <div className="absolute inset-0 z-0 overflow-hidden">
      {positions.map((circle, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            height: `${circleSize}rem`,
            width: `${circleSize}rem`,
            backgroundColor: ["#EA4335", "#4285F4", "#FBBC04", "#0F9D58"][
              index % 4
            ],
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            filter: "blur(7px)",
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
}
