import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import event101 from "/assets/events/event1/event101.jpeg";
import event102 from "/assets/events/event1/event102.jpeg";
import event103 from "/assets/events/event1/event103.jpeg";

const cards = [
  // {
  //   id: 1,
  //   title: "EVENT NAME",
  //   description:
  //     "Working towards a zero waste city and promoting circular economy through proper waste management system",
  //   color: "bg-[#4285F4]",
  //   images: [event101, event102, event103],
  // },
  // {
  //   id: 2,
  //   title: "FORM NEW CONNECTIONS",
  //   description: "Connect with like-minded individuals while making a difference",
  //   color: "bg-[#EA4335]",
  //   images: [event101, event102, event103],
  // },
  // {
  //   id: 3,
  //   title: "FUTURE",
  //   description: "Building a sustainable future together",
  //   color: "bg-[#FBBC05]",
  //   images: [event101, event102, event103],
  // },
  {
    id: 1,
    title: "From Campus to Google - An Intern's Journey",
    description: "Students gained valuable insights from Anoushka Gupta, a Google intern, during an online session. She shared her career journey and provided practical advice. The session also included a fun and interactive Kahoot quiz, making it a memorable learning experience.",
    color: "bg-[#34A853]",
    images: [event101, event102, event103],
  },
];

export default function EventPage() {
  const [activeCards, setActiveCards] = useState(cards);
  const [removedCards, setRemovedCards] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const [enablePageScroll, setEnablePageScroll] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isTransitioning && !enablePageScroll) {
        if (e.deltaY > 0 && activeCards.length > 1) {
          e.preventDefault();
          setIsTransitioning(true);
          const removedCard = activeCards[0];
          const direction = removedCards.length % 2 === 0 ? "right" : "left";
          setRemovedCards((prev) => [{ ...removedCard, direction }, ...prev]);
          setActiveCards((prev) => prev.slice(1));
          setTimeout(() => setIsTransitioning(false), 500);
        } else if (e.deltaY < 0 && removedCards.length > 0) {
          e.preventDefault();
          let reversedCards = [...removedCards];
          let newActiveCards = [...activeCards];
          let interval = setInterval(() => {
            if (reversedCards.length > 0) {
              const lastRemoved = reversedCards.shift();
              newActiveCards = [{ ...lastRemoved }, ...newActiveCards];
              setActiveCards([...newActiveCards]);
              setRemovedCards([...reversedCards]);
            } else {
              clearInterval(interval);
              setIsTransitioning(false);
            }
          }, 300);
        } else if (e.deltaY > 0 && activeCards.length === 1) {
          setTimeout(() => setEnablePageScroll(true), 500);
        }
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, [isTransitioning, activeCards, removedCards, enablePageScroll]);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen w-full bg-gray-100 ${enablePageScroll ? "overflow-y-auto" : "overflow-hidden"}`}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative h-[60vh] w-full max-w-4xl">
          <AnimatePresence mode="popLayout">
            {activeCards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
                total={activeCards.length}
                isFirst={index === 0}
                direction={removedCards[0]?.direction || "right"}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const Card = React.forwardRef(({ card, index, total, isFirst, direction }, ref) => {
  const variants = {
    enter: (custom) => ({
      x: custom.isReturning ? (custom.direction === "right" ? 1500 : -1500) : 0,
      y: -index * 8,
      rotate: (index % 2 === 0 ? -1 : 1) * (total - index - 1) * 3,
      opacity: 1,
    }),
    center: {
      x: 0,
      y: -index * 8,
      rotate: (index % 2 === 0 ? -1 : 1) * (total - index - 1) * 3,
      opacity: 1,
    },
    exit: {
      x: isFirst ? (direction === "right" ? 1500 : -1500) : 0,
      opacity: isFirst ? 0 : 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      layout
      custom={{ isReturning: index === 0 && total > 1, direction }}
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      style={{ zIndex: total - index }}
      className="absolute left-0 right-0"
    >
      <div className={`mx-4 overflow-hidden rounded-xl ${card.color} shadow-xl p-8 flex flex-col sm:flex-row sm:items-center gap-8`}>
        <Carousel images={card.images} />
        <div className="text-center sm:text-left flex-1 flex justify-center items-center">
          <div>
            <h2 className="text-4xl font-bold text-white">{card.title}</h2>
            <p className="text-lg text-white/90 mt-4">{card.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative flex items-center justify-center w-full sm:w-1/2 h-64 sm:h-80 min-w-[300px] overflow-hidden rounded-xl">
      <button
        onClick={handlePrev}
        className="absolute left-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full"
      >
        ❮
      </button>

      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Carousel ${i}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <button
        onClick={handleNext}
        className="absolute right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full"
      >
        ❯
      </button>
    </div>
  );
}
