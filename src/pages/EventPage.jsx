"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const cards = [
  {
    id: 1,
    title: "EVENT NAME",
    description:
      "Working towards a zero waste city and promoting circular economy through proper waste management system",
    color: "bg-[#4285F4]",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XPar910vlDhW0Of9vwk5MNSUS6icOj.png",
  },
  {
    id: 2,
    title: "FORM NEW CONNECTIONS",
    description: "Connect with like-minded individuals while making a difference",
    color: "bg-[#EA4335]",
  },
  {
    id: 3,
    title: "FUTURE",
    description: "Building a sustainable future together",
    color: "bg-[#FBBC05]",
  },
  {
    id: 4,
    title: "GOOD",
    description: "Making a positive impact",
    color: "bg-[#34A853]",
  },
]

export default function EventPage() {
  const [activeCards, setActiveCards] = useState(cards)
  const [removedCards, setRemovedCards] = useState([])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef(null)
  const [enablePageScroll, setEnablePageScroll] = useState(false)

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
          setIsTransitioning(true);
  
          let reversedCards = [...removedCards]; // Copy of removed cards
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
          }, 300); // Adjust timing for smooth effect
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
  )
}

function Card({ card, index, total, isFirst, direction }) {
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
  }

  return (
    <motion.div
      layout
      custom={{ isReturning: index === 0 && total > 1, direction }}
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      style={{ zIndex: total - index }}
      className="absolute left-0 right-0"
    >
      <div className={`mx-4 overflow-hidden rounded-[2rem] ${card.color} shadow-xl`}>
        <div className="relative aspect-[2/1] p-8">
          {card.image ? (
            <div className="grid grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-xl">
                <img src={card.image || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">{card.title}</h2>
                <p className="text-lg text-white/90">{card.description}</p>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col justify-center space-y-4">
              <h2 className="text-4xl font-bold text-white">{card.title}</h2>
              <p className="text-lg text-white/90">{card.description}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}