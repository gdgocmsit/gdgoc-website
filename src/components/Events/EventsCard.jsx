import { delay, easeIn, easeInOut, easeOut, motion, useAnimationControls } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { GrNext } from 'react-icons/gr'
import { useMediaQuery } from 'react-responsive';

const EventsCard = ({ eventsList }) => {

    const controls = useAnimationControls()
    const nextRef = useRef(null)
    const [index, setIndex] = useState(0)
    const [isHover, setIsHover] = useState(false)
    const [nextSlid, setNextSlid] = useState(false)
    const [clicked, setClicked] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' }); // Adjust breakpoint as needed

    const onMouseEnter = () => {
        setIsHover(true)
    }

    const onMouseExits = () => {
        setIsHover(false)
    }

    const onMouseExitsNext = () => {
        console.log(isHover)

        controls.start({ x: -50, opacity: 0 })
    }
    const onMouseEnterNext = () => {
        console.log(isHover)

        controls.start({ x: 0, opacity: 1 })
    }

    const onClickNext = () => {
        setIsHover(false);
        setNextSlid(true)
        setIndex((prevIndex) => {
            return prevIndex === eventsList.length - 1 ? 0 : prevIndex + 1
        });
    };

    const hoverNext = () => {
        setNextSlid(false)
    }


    const onClickedPic = () => {
        if (isMobile) {
            setClicked(!clicked)
        }
    }

    const handleOutsideClick = (e) => {
        if (isMobile) {
            if (e.target === e.currentTarget) {
                setClicked(false);
            }
        }
    }

    return (
        <div
            className='h-[70vh] md:h-[80vh] w-[85vw] md:w-[25vw] flex items-center justify-center px-5 relative gap-20 '
            onMouseEnter={onMouseEnterNext}
            onMouseLeave={onMouseExitsNext}
        >

            <div
                className='flex flex-col gap-4 w-full h-full md:h-auto bg-zinc-200 tracking-tighter md:text-xs text-lg md:leading-none text-zinc-800 relative py-4 px-2 rounded-lg'
            >

                {/* Chat Bubbule Wrap */}
                <div className='w-full px-5 flex flex-col gap-2'>
                    <div className='w-full flex justify-start'>
                        <p className='tracking-tight uppercase relative border-[1px] border-zinc-100 rounded-xl bg-white px-4  py-1 pr-10 text-xs font-poppins' >
                            Wanna Explore Our Event?
                        </p>
                    </div>
                    <div className='w-full flex justify-end'>
                        <p className='uppercase text-xs relative border-[1px] border-zinc-100 rounded-xl bg-white text-zinc-800 px-4  py-1 font-poppins'>
                            For Sure
                        </p>
                    </div>
                </div>

                {/* Photos Collection  :: Curr Slid*/}
                <div className='h-fit relative'>

                    <div
                        className='w-[90vw] md:w-[30vw] h-[45vh] flex gap-2 relative -left-5'
                    >
                        <img
                            src={eventsList[index].Img[0]}
                            alt="event-img"
                            className=' h-[100%] md:h-auto w-[65%] object-cover object-center rounded-xl'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseExits}
                            onClick={onClickedPic}
                        />

                        <img
                            src={eventsList[index].nextImg[0]}
                            alt="event-img"
                            className=' w-[16%] object-left object-cover rounded-xl rounded-r-none'
                            ref={nextRef}
                        />

                        <motion.div
                            className='flex text-2xl items-center justify-start cursor-pointer relative left-4 md:left-0 '
                            initial={{ x: -50, opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.3, ease: easeOut }}
                        >
                            <div
                                className='h-fit w-fit'
                                onClick={onClickNext}
                                onMouseEnter={hoverNext}

                            >

                                <GrNext />
                            </div>
                        </motion.div>
                    </div>

                    {/* //Second Slid  */}
                    <motion.div
                        className={`${nextSlid ? 'flex' : 'hidden'} w-[90vw] md:w-[30vw] h-[45vh] gap-2 absolute top-0 -left-5 z-20`}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: easeIn }}
                    >

                        <img
                            src={eventsList[index].Img[0]}
                            alt="event-img"
                            className=' h-[100%] md:h-auto w-[65%] object-cover object-center rounded-xl'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseExits}
                            onClick={onClickedPic}
                        />

                        <img
                            src={eventsList[index].nextImg[0]}
                            alt="event-img"
                            className=' w-[16%] object-left object-cover rounded-xl rounded-r-none'
                            ref={nextRef}
                        />

                        <motion.div
                            className='flex text-2xl items-center justify-start cursor-pointer relative left-4 md:left-0 '
                            initial={{ x: -50, opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.3, ease: easeOut }}
                        >
                            <div
                                className='h-fit w-fit'
                                onClick={onClickNext}
                                onMouseEnter={hoverNext}

                            >

                                <GrNext />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>


                {/* About */}
                <div className='px-4 font-poppins tracking-tight text-xs text-zinc-500'>
                    {eventsList[index].eventAbout}
                </div>

            </div>

            {/* While Hover : Cover Photo*/}
            <div
                className={`h-[70vh] md:h-[65vh] w-[90vw] md:w-[25vw] ${clicked ? "block" : "hidden"} ${clicked ? "absolute" : "static"} md:block left-6 -top-4`}
                onClick={handleOutsideClick}
            >
                <motion.div
                    className={`w-[80%] md:h-[80%] h-[70%] ${isHover ? "md:flex" : "md:hidden"} flex-col justify-center absolute top-[14%] bg-[#717171d8] rounded-2xl pt-2 items-center z-30`}
                    initial={{ scale: 1, x: 50, opacity: 0.5 }}
                    whileInView={{ scale: 1, x: 0, opacity: 1 }}
                    // animate={{ scale:1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: easeIn }}
                >
                    <div className='w-full flex justify-center h-[45%] pt-5 md:pt-0'>
                        <img
                            src={eventsList[index].Img[0]}
                            alt="Event Img"
                            className='object-fill h-full md:w-[95%] w-[90%] rounded-2xl'
                        />
                    </div>

                    <h1 className='text-4xl font-extrabold text-zinc-100 w-full flex justify-center pb-2'>
                        {eventsList[index].eventName}
                    </h1>

                    <div className='flex gap-2 w-full h-[40%] justify-center box-border pb-2'>
                        <img
                            src={eventsList[index].Img[1]}
                            alt="Event-img"
                            className='w-[45%] h-full object-cover object-center rounded-xl'
                        />
                        <img
                            src={eventsList[index].Img[2]}
                            alt="Event-img"
                            className='w-[45%] h-full object-cover object-center rounded-xl'
                        />
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default EventsCard