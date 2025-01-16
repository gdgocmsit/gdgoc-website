import React from 'react'

const CardSlider = () => {
  return (
    <div>
        
    </div>
  )
}

export default CardSlider

            {/* <div
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
            </div> */}