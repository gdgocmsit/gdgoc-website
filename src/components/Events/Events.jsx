import { easeIn, motion, useInView } from "framer-motion";
import { useRef } from "react";
import EventsCard from "./EventsCard";
import DinoAbout from "./EventAboutDino";

const Events = ({ id, className }) => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  const orientationImg = ["./EventsImgs/orientation3.jpg", "./EventsImgs/orientation2.JPG", "./EventsImgs/orientation1.jpg"]

  const Talk = {
    Img: ["./EventsImgs/talk1.jpeg", "./EventsImgs/talk2.jpeg", "./EventsImgs/talk3.jpeg"],
    eventName: "Talk",
    eventAbout: "From Campus to Google - An Intern's Journey: A captivating talk sharing insights, challenges, and triumphs of a Google internship",
    nextImg: ["./EventsImgs/talk1.jpeg", "./EventsImgs/talk2.jpeg", "./EventsImgs/talk3.jpeg"]
  }

  // const EthnicDay = {
  //   Img: ["./EventsImgs/ethnic3.JPG", "./EventsImgs/ethnic2.JPG", "./EventsImgs/ethnic1.jpg"],
  //   eventName: "Ethnic Day",
  //   eventAbout: "Celebrate the vibrant tapestry of cultures at our Ethnic Day! Immerse yourself in a kaleidoscope of traditions, music, dance, and cuisine.!",
  //   nextImg: ["./EventsImgs/orientation3.jpg", "./EventsImgs/orientation2.JPG", "./EventsImgs/orientation1.jpg"],
  // }

  const eventsList = [
    Talk,
    // EthnicDay
  ]


  return (
    <section id={id} className={className}>

      <div className="w-full min-h-screen bg-white relative py-28 px-5 items-center">
        <div ref={ref} className='absolute top-[25%] w-10 h-10 '></div>

        <div className="w-full md:w-1/2 ">
          <h1 className='w-full h-[6.5rem] overflow-y-hidden overflow-hidden relative mb-18 md:text-start md:box-border md:pl-20 '>
            {isInView &&
              "EVENTS".split("").map((item, index) => {
                if (index == 1) {
                  return (         
                    <motion.span
                      className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bebas-neue font-semibold text-zinc-800 relative tracking-wide"
                      whileHover={{ fontSize: 60, fontStyle: "italic" }}
                      initial={{ bottom: "-100%", }}
                      animate={{ bottom: "0" }}
                      transition={{ ease: easeIn, delay: index * 0.06 }}
                    >
                      {item}
                    </motion.span>
                  )
                }
                else {
                  return (
                    <motion.span
                      className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bebas-neue font-bold text-zinc-800 relative tracking-wide'
                      initial={{ bottom: "-100%", }}
                      animate={{ bottom: "0" }}
                      transition={{ ease: easeIn, delay: index * 0.1 }}
                    >
                      {item}
                    </motion.span>
                  )
                }
              })
            }
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-10 justify-center flex-wrap">

          <EventsCard
            eventName="Orientation"
            eventAbout="Welcome to GDSoC MSIT Orientation, where you'll embark on a journey of innovation, collaboration, and growth!"
            eventImg={orientationImg}
            eventsList={eventsList}
          />

        </div>

        <DinoAbout />
      </div>

    </section>
  );
};

export default Events;
