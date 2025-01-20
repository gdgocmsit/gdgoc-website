import {
  AnimatePresence,
  delay,
  easeIn,
  easeInOut,
  easeOut,
  motion,
  useAnimationControls,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GrNext } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";
import DinoAbout from "./DinoAbout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const EventsCard = ({ eventsList }) => {
  const controls = useAnimationControls();
  const controlSlide = useAnimationControls();
  const [index, setIndex] = useState(0);
  const [nextSlid, setNextSlid] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [knowMore, setKnowMore] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" }); // Adjust breakpoint as needed
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const variants = {
    initial: { scale: 1, x: 50, opacity: 0 },
    animate: { scale: 1, x: 0, opacity: 1 },
    exit: { scale: 1, x: 50, opacity: 0 },
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onMouseEnter = () => {
    // For Next slid animation at entering
    // setIsHover(true)
    controlSlide.start({ x: 0, opacity: 1 });
  };

  const onMouseExits = () => {
    // For Next slid animation at exting
    controlSlide.start({ x: 50, opacity: 0 });
  };

  const onMouseExitsNext = () => {
    //For next button animation appear at entering the card
    // console.log(isHover)
    controls.start({ x: -50, opacity: 0 });
  };
  const onMouseEnterNext = () => {
    // For next button animation appear at exiting the card
    // console.log(isHover)
    controls.start({ x: 0, opacity: 1 });
  };

  const onClickNext = () => {
    // setIsHover(false);
    setNextSlid(true);
    setIndex((prevIndex) => {
      return prevIndex === eventsList.length - 1 ? 0 : prevIndex + 1;
    });

    setTimeout(() => {
      setNextSlid(false);
    }, 500);
  };

  const onClickedPic = () => {
    if (isMobile) {
      // controls.start({ x: -50, opacity: 0 })
      setClicked(!clicked);
    }
  };
  const handleOutsideClick = (e) => {
    if (isMobile) {
      if (e.target === e.currentTarget) {
        setClicked(false);
      }
    }
  };

  const onClickMore = () => {
    setKnowMore(!knowMore);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    dots: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  useEffect(() => {
    // Reset to the first slide
    setCurrentSlide(0);
  }, [index]);

  return (
    <div
      className="h-[70vh] md:h-[80vh] w-[85vw] md:w-[25vw] flex items-center justify-center px-5 relative gap-20 "
      onClick={handleOutsideClick}
    >
      <div
        className={`flex flex-col gap-4 w-full h-full md:h-auto bg-zinc-200 tracking-tighter md:text-xs text-lg md:leading-none text-zinc-800 relative py-4 px-2 rounded-lg`}
        onMouseEnter={onMouseEnterNext}
        onMouseLeave={onMouseExitsNext}
      >
        {/* Chat Bubbule Wrap */}
        <div className="w-full px-5 flex flex-col gap-2">
          <div className="w-full flex justify-start">
            <p className="tracking-tight uppercase relative border-[1px] border-zinc-100 rounded-xl bg-white px-4  py-1 pr-10 text-xs font-poppins">
              Wanna Explore Our Event?
            </p>
          </div>
          <div className="w-full flex justify-end">
            <p className="uppercase text-xs relative border-[1px] border-zinc-100 rounded-xl bg-white text-zinc-800 px-4  py-1 font-poppins">
              For Sure
            </p>
          </div>
        </div>

        {/* Photos Collection  :: Curr Slid*/}
        <div className={`h-fit relative`}>
          <div className="w-[90vw] md:w-[30vw] h-[45vh] flex gap-2 relative -left-5">
            <img
              src={eventsList[index].Img[0]}
              alt="event-img"
              className=" h-[100%] md:h-auto w-[65%] object-cover object-center rounded-xl"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseExits}
              onClick={onClickedPic}
            />

            <img
              src={eventsList[index].nextImg[0]}
              alt="event-img"
              className=" w-[16%] object-left object-cover rounded-xl rounded-r-none"
            />

            <motion.div
              className={`hidden md:flex text-2xl items-center justify-start cursor-pointer relative left-4 md:left-0 `}
              initial={{ x: -50, opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <div className="h-fit w-fit" onClick={onClickNext}>
                <GrNext />
              </div>
            </motion.div>

            {isMobile && (
              <motion.div
                className={`flex text-2xl items-center justify-start cursor-pointer relative left-4 md:left-0 `}
              >
                <div
                  className="h-fit w-fit relative z-50"
                  onClick={onClickNext}
                >
                  <GrNext />
                </div>
              </motion.div>
            )}
          </div>

          {/* //Next Slide  */}
          <motion.div
            className={`${nextSlid ? "flex" : "hidden"}  ${
              isMobile ? "overflow-x-hidden" : ""
            }  w-[90vw] md:w-[30vw] h-[45vh] gap-2 absolute top-0 -left-5 z-20 `}
            variants={{
              initial2:
                windowWidth <= 768
                  ? { x: 15, opacity: 0 }
                  : { x: 50, opacity: 0 },
            }}
            initial="initial2"
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: easeIn }}
          >
            <img
              src={eventsList[index].Img[0]}
              alt="event-img"
              className=" h-[100%] md:h-auto w-[65%] object-cover object-center rounded-xl"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseExits}
              onClick={onClickedPic}
            />

            <img
              src={eventsList[index].nextImg[0]}
              alt="event-img"
              className=" w-[16%] object-left object-cover rounded-xl rounded-r-none"
            />

            <motion.div
              className="flex text-2xl items-center justify-start cursor-pointer relative left-4 md:left-0 "
              initial={{ x: -50, opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <div className="h-fit w-fit" onClick={onClickNext}>
                <GrNext />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* About */}
        <div className="px-4 font-poppins tracking-tight text-xs text-zinc-500 flex flex-col justify-center ">
          {eventsList[index].eventAbout}

          <div className="w-full flex justify-center">
            <motion.button
              className=" w-fit text-xs text-zinc-50 bg-zinc-700 border-[1px] rounded-2xl font-poppins px-3 py-1 mt-2"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#111827",
                color: "FFFFFF",
              }}
              whileTap={{ scale: 0.99 }}
              onClick={(e) => {
                onClickMore(), e.stopPropagation();
              }}
            >
              Know More
            </motion.button>
          </div>
        </div>
      </div>

      {/* While Hover : Collage Photo*/}
      {/* //For PC  */}
      {!isMobile && (
        <div className={`absolute md:-right-[100%]  `}>
          <motion.div
            className={`w-[64vw] md:w-[20vw] md:h-[50vh] h-[35vh] absolute md:relative top-[25%] md:top-[14%] bg-[#717171d8] rounded-2xl pt-8 flex-col justify-evenly z-30`}
            initial={{ scale: 1, x: 50, opacity: 0 }}
            // whileInView={{ scale: 1, x: 0, opacity: 1 }}
            animate={controlSlide}
            transition={{ duration: 0.5, ease: easeIn }}
          >
            <div className="w-full h-[30%] flex justify-evenly gap-2 overflow-hidden">
              {eventsList[index].Img.map((img, slNo) => {
                return (
                  <img
                    key={slNo}
                    src={img}
                    alt="Event Img"
                    className="w-1/5 h-[90%] object-contain rounded-lg bg-black object-center"
                  />
                );
              })}
            </div>

            <h1 className="text-4xl font-extrabold text-zinc-100 w-full flex justify-center pb-2">
              {eventsList[index].eventName}
            </h1>

            <Slider {...settings} className=" pb-0 mb-0">
              {eventsList[index].Img.map((img, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex justify-center items-center h-[50%] pt-5 md:pt-0"
                >
                  <img
                    src={img}
                    alt="Event Img"
                    className=" w-full pl-2 pr-2 h-28 object-fill object-center"
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      )}

      {/* //For Mobile */}
      {isMobile && (
        <AnimatePresence>
          {clicked && (
            <motion.div
              className={`w-[64vw] h-[35vh] absolute top-[25%] bg-[#717171d8] rounded-2xl pt-8 flex-col justify-evenly z-30`}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: easeIn }}
              // onClick={handleOutsideClick}
            >
              <div className="w-full h-[30%] flex justify-evenly gap-2 overflow-hidden">
                {eventsList[index].Img.map((img, slNo) => {
                  return (
                    <img
                      key={slNo}
                      src={img}
                      alt="Event Img"
                      className="w-1/5 h-[90%] object-contain rounded-lg bg-black object-center"
                    />
                  );
                })}
              </div>

              <h1 className="text-4xl font-extrabold text-zinc-100 w-full flex justify-center pb-2">
                {eventsList[index].eventName}
              </h1>

              <Slider {...settings} className=" pb-0 mb-0">
                {eventsList[index].Img.map((img, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full flex justify-center items-center h-[50%] pt-5 md:pt-0"
                  >
                    <img
                      src={img}
                      alt="Event Img"
                      className=" w-full pl-2 pr-2 h-28 object-fill object-center"
                    />
                  </div>
                ))}
              </Slider>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Dino-Know More */}
      <AnimatePresence>
        {knowMore && (
          <motion.div
            className={`fixed bottom-0 left-0 flex items-end gap-0 rounded-lg p-4 pl-0 max-w-sm sm:max-w-md md:max-w-lg `}
            style={{ zIndex: 1000 }}
            onClick={onClickMore}
            initial={{ scale: 1, y: 100, x: -100, opacity: 0.5 }}
            animate={{ scale: 1, y: 0, x: 0, opacity: 1 }}
            exit={{ scale: 1, y: 100, x: -100, opacity: 1 }}
            transition={{ duration: 0.5, ease: easeInOut }}
          >
            <DinoAbout
              eventName={eventsList[index].eventName}
              eventAbout={eventsList[index].eventKnowMore}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsCard;
