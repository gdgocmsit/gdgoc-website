"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { FaGoogle, FaCode, FaLightbulb, FaRocket, FaCalendar, FaMapMarkerAlt, FaUsers } from "react-icons/fa"

const FallingLetter = ({ children, delay }) => {
  const controls = useAnimation()
  const randomRotation = Math.random() * 360 - 180
  const hasAnimated = useRef(false)

  useEffect(() => {
    const sequence = async () => {
      // Only run the animation if it hasn't run before
      if (!hasAnimated.current) {
        hasAnimated.current = true
        await new Promise((resolve) => setTimeout(resolve, 900 + delay * 100))
        await controls.start({
          y: ["-100vh", "0vh"],
          rotate: [randomRotation, randomRotation / 2, 0],
          opacity: [0, 1],
          transition: {
            y: { type: "spring", stiffness: 50, damping: 10, duration: 1.5 },
            rotate: {
              type: "spring",
              stiffness: 60,
              damping: 8,
              duration: 1.5,
            },
            opacity: { duration: 0.5 },
          },
        })
      }
    }
    sequence()
  }, [controls, delay, randomRotation])

  return (
    <motion.span
      style={{ display: "inline-block", opacity: hasAnimated.current ? 1 : 0 }}
      animate={controls}
      className="relative"
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 1.5 + delay * 0.1, duration: 0.3 }}
        style={{
          background: "linear-gradient(90deg, #4285F4, #EA4335, #FBBC04, #34A853, #4285F4)",
          backgroundSize: "200% 100%",
          animation: "gradientMove 2s linear infinite",
        }}
      />
    </motion.span>
  )
}

const FallingText = ({ text, startDelay }) => {
  return (
    <span className="inline-flex">
      {text.split("").map((letter, index) => (
        <FallingLetter key={index} delay={startDelay + index}>
          {letter}
        </FallingLetter>
      ))}
    </span>
  )
}

const FeatureCard = ({ Icon, title, color, description }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-white p-4 rounded-lg shadow flex items-start space-x-3 w-full border-l-3 hover:shadow-md transition-all duration-300"
    style={{ borderColor: color }}
  >
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: `${color}20` }}
    >
      <Icon className="text-lg" style={{ color }} />
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-600 mt-1">{description}</p>
    </div>
  </motion.div>
)

const EventCard = ({ title, date, location, attendees, index, isPast = false, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className={`bg-white rounded-xl shadow-lg p-5 w-full hover:shadow-xl transition-all duration-300 border ${
      isPast ? "border-gray-200" : "border-[#4285F4]/20"
    } relative`}
  >
    {!isPast && (
      <div className="absolute -top-3 -right-3 z-10 bg-[#4285F4] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
        New
      </div>
    )}
    <h3 className={`font-semibold ${isPast ? "text-gray-600" : "text-gray-800"} text-base mb-3`}>{title}</h3>
    <div className="space-y-2">
      <div className="flex items-center text-xs text-gray-600">
        <div
          className={`w-7 h-7 rounded-full ${
            isPast ? "bg-gray-100" : "bg-[#E3F2FD]"
          } flex items-center justify-center mr-2`}
        >
          <FaCalendar className={isPast ? "text-gray-400" : "text-[#4285F4]"} size={12} />
        </div>
        <span>{date}</span>
      </div>
      <div className="flex items-center text-xs text-gray-600">
        <div
          className={`w-7 h-7 rounded-full ${
            isPast ? "bg-gray-100" : "bg-[#FDEDE3]"
          } flex items-center justify-center mr-2`}
        >
          <FaMapMarkerAlt className={isPast ? "text-gray-400" : "text-[#EA4335]"} size={12} />
        </div>
        <span>{location}</span>
      </div>
      <div className="flex items-center text-xs text-gray-600">
        <div
          className={`w-7 h-7 rounded-full ${
            isPast ? "bg-gray-100" : "bg-[#E3F9ED]"
          } flex items-center justify-center mr-2`}
        >
          <FaUsers className={isPast ? "text-gray-400" : "text-[#0F9D58]"} size={12} />
        </div>
        <span>{attendees} Attendees</span>
      </div>
    </div>
    {!isPast ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-3 w-full py-1.5 rounded-lg bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white text-sm font-medium"
        >
          Register Now
        </motion.button>
      </a>
    ) : (
      <></>
    )}
  </motion.div>
)

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState("Android")
  const techStack = ["Android", "Web", "Cloud", "AI", "IoT"]
  const [isHovering, setIsHovering] = useState(false)
  const carouselRef = useRef(null)
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingEvents = [
    {
      title: "Google-Powered Solution Challenge 2025",
      date: "6th Jan - 2nd week of July",
      location: "Online",
      attendees: "200+",
      link: "https://vision.hack2skill.com/event/solutionschallenge2025?utm_source=hack2skill&utm_medium=homepage",
    },
    {
      title: "Not Available",
      date: "NA",
      location: "NA",
      attendees: "NA",
      link: "#",
    },
  ]

  const pastEvents = [
    {
      title: "Interquest Seminar",
      date: "24th March",
      location: "Hall 406, MSIT",
      attendees: "100+",
      link: "#",
    },
    {
      title: "GDG Game Night",
      date: "24th -25th Jan",
      location: "Online",
      attendees: "100+",
      link: "#",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentTech((prev) => {
          const currentIndex = techStack.indexOf(prev)
          return techStack[(currentIndex + 1) % techStack.length]
        })
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [isHovering, techStack])

  const featureCards = [
    {
      Icon: FaGoogle,
      title: "Google Campaign",
      color: "#4285F4",
      description: "Connect with Google technologies and experts.",
    },
    {
      Icon: FaCode,
      title: "Coding Workshops",
      color: "#FBBC04",
      description: "Hands-on workshops to enhance your skills.",
    },
    {
      Icon: FaLightbulb,
      title: "Innovative Projects",
      color: "#0F9D58",
      description: "Collaborate on cutting-edge tech projects.",
    },
    {
      Icon: FaRocket,
      title: "Career Growth",
      color: "#EA4335",
      description: "Boost your career with industry connections.",
    },
  ]

  return (
    <div className="min-h-screen mt-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden w-full">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Section */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute -top-16 -left-16 md:-left-20 w-16 h-16 opacity-20"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-[#4285F4] to-[#34A853]" />
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none flex justify-center lg:justify-start relative z-10">
              <span className="text-[#4285F4]">
                <FallingText text="GDG" startDelay={0} />
              </span>
              <span className="text-[#0F9D58] ml-3">
                <FallingText text="MSIT" startDelay={3} />
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-12 h-12 opacity-20"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-[#FBBC04] to-[#EA4335]" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative mb-8"
          >
            <p className="text-xl text-gray-700 font-medium">
              Empowering students through{" "}
              <motion.span
                className="relative inline-block"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTech}
                    className="text-[#EA4335] font-bold inline-block"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentTech}
                  </motion.span>
                </AnimatePresence>
                <motion.div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#EA4335]" layoutId="underline" />
              </motion.span>{" "}
              technology.
            </p>
          </motion.div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-[#4285F4] flex items-center">
              <FaLightbulb className="mr-2" /> What We Offer
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {featureCards.map((card, index) => (
                <FeatureCard
                  key={index}
                  Icon={card.Icon}
                  title={card.title}
                  color={card.color}
                  description={card.description}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center lg:justify-start gap-4"
          >
            <a href="https://chat.whatsapp.com/FJO99dIJBRtH29SZta0lyg">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#4285F4] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Community
              </motion.button>
            </a>
            <a href="https://developers.google.com/community">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#4285F4] font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#4285F4]"
              >
                Learn More
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center w-full lg:w-1/2 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-gray-100 rounded-3xl shadow-2xl p-8 w-full max-w-md relative border-2 border-[#4285F4]"
          >
            <h2 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <span className="relative inline-block">
                <span className="text-[#4285F4]">Upcoming</span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#4285F4]"
                  layoutId="titleUnderline"
                />
              </span>{" "}
              Events
            </h2>

            <div className="relative" ref={carouselRef}>
              <div className="flex mb-4 border-b">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "upcoming" ? "text-[#4285F4] border-b-2 border-[#4285F4]" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming Events
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "past" ? "text-[#4285F4] border-b-2 border-[#4285F4]" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("past")}
                >
                  Past Events
                </motion.button>
              </div>

              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeTab === "upcoming" ? (
                    <motion.div
                      key="upcoming"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {upcomingEvents.map((event, idx) => (
                        <EventCard
                          key={idx}
                          title={event.title}
                          date={event.date}
                          location={event.location}
                          attendees={event.attendees}
                          index={idx}
                          isPast={false}
                          link={event.link}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="past"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {pastEvents.map((event, idx) => (
                        <EventCard
                          key={idx}
                          title={event.title}
                          date={event.date}
                          location={event.location}
                          attendees={event.attendees}
                          index={idx}
                          isPast={true}
                          link={event.link}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  )
}

export default HeroSection

