"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import event101 from "/assets/events/event1/event101.jpeg"
import event102 from "/assets/events/event1/event102.jpeg"
import event103 from "/assets/events/event1/event103.jpeg"
import event201 from "/assets/events/event2/event201.jpg"
import event202 from "/assets/events/event2/event202.jpg"
import event203 from "/assets/events/event2/event203.jpg"
import event301 from "/assets/events/event3/event301.jpg"
import event302 from "/assets/events/event3/event302.jpg"
import event401 from "/assets/events/event4/event401.jpg"
import event402 from "/assets/events/event4/event402.jpg"
import event403 from "/assets/events/event4/event403.jpg"

const cards = [
  {
    id: 1,
    title: "INTERNQUEST",
    description:
      "We organized an insightful seminar featuring Monu Kumar, a senior mentor at Coding Blocks, as our esteemed guest. Along with him, a few of our core team members also led the session, focusing on internships — from how to find the right opportunities to preparing effectively for them. The event proved to be highly informative and inspiring for students aspiring to kickstart their professional journeys.",
    color: "bg-[#4285F4]",
    images: [event401, event402, event403],
  },
  {
    id: 2,
    title: "Campaign 1 - Gen AI",
    description:
      "This marked the very first campaign under GDG, bringing an exciting opportunity for participants to dive into hands-on learning through Google Cloud labs and activities. Over 150 enthusiastic learners took part in the campaign, and the top 80 performers were rewarded with exciting goodies — including t-shirts, bottles, stickers, cups, and more — making the experience both engaging and memorable.",
    color: "bg-[#EA4335]",
    images: [event301, event302],
  },
  {
    id: 3,
    title: "GDGoC - Orientation",
    description:
      "The journey began with a wave of renewed energy and purpose, as we stepped into a new tenure with fresh ideas and a re-established vision. During this session, we introduced how the tenure would unfold, discussed various departments, and shared our plans for the upcoming months. To add a spark of fun, the orientation also featured interactive quizzes, singing, and engaging activities that brought everyone together, setting a vibrant tone for the times ahead.",
    color: "bg-[#FBBC05]",
    images: [event201, event202, event203],
  },
  {
    id: 4,
    title: "From Campus to Google - An Intern's Journey",
    description:
      "Students gained valuable insights from Anoushka Gupta, a Google intern, during an online session. She shared her career journey and provided practical advice. The session also included a fun and interactive Kahoot quiz, making it a memorable learning experience.",
    color: "bg-[#34A853]",
    images: [event101, event102, event103],
  },
]

export default function EventPage() {
  const [activeCards, setActiveCards] = useState(cards)
  const [removedCards, setRemovedCards] = useState([])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef(null)
  const [scrollDirection, setScrollDirection] = useState(null)

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isTransitioning) {
        if (e.deltaY > 0 && activeCards.length > 1) {
          e.preventDefault()
          setIsTransitioning(true)
          setScrollDirection("down")
          const removedCard = activeCards[0]
          const direction = removedCards.length % 2 === 0 ? "right" : "left"
          setRemovedCards((prev) => [{ ...removedCard, direction }, ...prev])
          setActiveCards((prev) => prev.slice(1))
          setTimeout(() => setIsTransitioning(false), 500)
        } else if (e.deltaY < 0 && removedCards.length > 0) {
          e.preventDefault()
          setIsTransitioning(true)
          setScrollDirection("up")
          const reversedCards = [...removedCards]
          let newActiveCards = [...activeCards]
          const interval = setInterval(() => {
            if (reversedCards.length > 0) {
              const lastRemoved = reversedCards.shift()
              newActiveCards = [{ ...lastRemoved }, ...newActiveCards]
              setActiveCards([...newActiveCards])
              setRemovedCards([...reversedCards])
            } else {
              clearInterval(interval)
              setIsTransitioning(false)
            }
          }, 300)
        }
      }
    }

    const container = containerRef.current
    container?.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      container?.removeEventListener("wheel", handleWheel)
    }
  }, [isTransitioning, activeCards, removedCards])

  const handleTouchStart = useRef({ y: 0 })
  const handleTouchMove = useRef({ y: 0 })

  useEffect(() => {
    const container = containerRef.current

    const touchStart = (e) => {
      handleTouchStart.current.y = e.touches[0].clientY
    }

    const touchMove = (e) => {
      handleTouchMove.current.y = e.touches[0].clientY
    }

    const touchEnd = () => {
      const diffY = handleTouchStart.current.y - handleTouchMove.current.y

      if (!isTransitioning) {
        if (diffY > 50 && activeCards.length > 1) {
          // Swipe up
          setIsTransitioning(true)
          setScrollDirection("down")
          const removedCard = activeCards[0]
          const direction = removedCards.length % 2 === 0 ? "right" : "left"
          setRemovedCards((prev) => [{ ...removedCard, direction }, ...prev])
          setActiveCards((prev) => prev.slice(1))
          setTimeout(() => setIsTransitioning(false), 500)
        } else if (diffY < -50 && removedCards.length > 0) {
          // Swipe down
          setIsTransitioning(true)
          setScrollDirection("up")
          const reversedCards = [...removedCards]
          let newActiveCards = [...activeCards]
          const interval = setInterval(() => {
            if (reversedCards.length > 0) {
              const lastRemoved = reversedCards.shift()
              newActiveCards = [{ ...lastRemoved }, ...newActiveCards]
              setActiveCards([...newActiveCards])
              setRemovedCards([...reversedCards])
            } else {
              clearInterval(interval)
              setIsTransitioning(false)
            }
          }, 300)
        }
      }
    }

    container?.addEventListener("touchstart", touchStart)
    container?.addEventListener("touchmove", touchMove)
    container?.addEventListener("touchend", touchEnd)

    return () => {
      container?.removeEventListener("touchstart", touchStart)
      container?.removeEventListener("touchmove", touchMove)
      container?.removeEventListener("touchend", touchEnd)
    }
  }, [isTransitioning, activeCards, removedCards])

  return (
    <div ref={containerRef} className="h-screen mt-10 w-full overflow-hidden">
      <div className="h-screen flex items-center justify-center">
        <div className="relative h-[70vh] w-full max-w-5xl px-4 md:px-8">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-center text-gray-500">
            <p className="text-sm font-medium">Scroll to explore events</p>
          </div>

          <AnimatePresence mode="popLayout">
            {activeCards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
                total={activeCards.length}
                isFirst={index === 0}
                direction={removedCards[0]?.direction || "right"}
                scrollDirection={scrollDirection}
              />
            ))}
          </AnimatePresence>

          {activeCards.length > 0 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {cards.map((card, idx) => (
                  <div
                    key={card.id}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeCards.some((ac) => ac.id === card.id) && activeCards[0].id === card.id
                        ? `${card.color.replace("bg-", "bg-")} w-6`
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Card = React.forwardRef(({ card, index, total, isFirst, direction, scrollDirection }, ref) => {
  const variants = {
    enter: (custom) => ({
      x: custom.isReturning ? (custom.direction === "right" ? 1500 : -1500) : 0,
      y: -index * 12,
      rotate: (index % 2 === 0 ? -1 : 1) * (total - index - 1) * 2,
      opacity: 1,
      scale: 1 - index * 0.05,
    }),
    center: {
      x: 0,
      y: -index * 12,
      rotate: (index % 2 === 0 ? -1 : 1) * (total - index - 1) * 2,
      opacity: 1,
      scale: 1 - index * 0.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: isFirst ? (direction === "right" ? 1500 : -1500) : 0,
      opacity: isFirst ? 0 : 1,
      transition: { duration: 0.5 },
    },
  }

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
      <div
        className={`mx-auto overflow-hidden rounded-2xl ${card.color} shadow-xl p-4 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 border border-white/10`}
      >
        <Carousel images={card.images} />
        <div className="text-center lg:text-left flex-1 flex justify-center items-center">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-2">
              EVENT {card.id}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">{card.title}</h2>
            <div className="w-16 h-0.5 bg-white/30 mx-auto lg:mx-0 rounded-full"></div>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">{card.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
})

function Carousel({ images }) {
  const [index, setIndex] = useState(0)

  const handleNext = (e) => {
    e.stopPropagation()
    setIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images])

  return (
    <div className="relative flex items-center justify-center w-full lg:w-2/5 h-64 sm:h-72 lg:h-80 min-w-[250px] overflow-hidden rounded-xl group">
      <button
        onClick={handlePrev}
        className="absolute left-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation()
              setIndex(i)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Event image ${i + 1}`}
          className="absolute w-full h-full object-cover transition-opacity duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      <button
        onClick={handleNext}
        className="absolute right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
