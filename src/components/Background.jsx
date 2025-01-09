import { useEffect, useState } from "react";

export default function Background() {
  const [positions, setPositions] = useState([]);

  const generateRandomPositions = () => {
    return Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
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
    <div className="fixed inset-0 z-0">
      {positions.map((circle, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            height: "4rem",
            width: "4rem",
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
