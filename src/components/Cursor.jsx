import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = ({ colors = ["#EA4335", "#FBBC04", "#4285F4", "#0F9D58"], size = 12, radius = 25 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Main white ball (moves exactly with the cursor, no delay) */}
      <div
        className="rounded-full bg-slate-400 fixed blur-sm"
        style={{
          width: size,
          height: size,
          left: mousePosition.x - size / 2,
          top: mousePosition.y - size / 2,
          position: "absolute",
          pointerEvents: "none",
        }}
      />
      
      {/* Colored trailing balls */}
      {colors.map((color, index) => (
        <motion.div
          key={color}
          className="rounded-full absolute blur-sm"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
          }}
          animate={{
            x: mousePosition.x - size / 2 + Math.cos((index * Math.PI) / 2) * radius,
            y: mousePosition.y - size / 2 + Math.sin((index * Math.PI) / 2) * radius,
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 50 + index * 20,
            mass: 0.1 + index * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
