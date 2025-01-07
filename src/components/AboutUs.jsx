import React, { useState, useEffect } from "react";
import "../styles/AboutUs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs1 from "/assets/aboutUs1.png";
import AboutUs2 from "/assets/aboutUs2.jpg";
import AboutUs3 from "/assets/aboutUs3.jpg";
import AboutUs4 from "/assets/aboutUs4.jpg";
import AboutUs5 from "/assets/aboutUs5.jpg";
import AboutUs7 from "/assets/aboutUs7.jpg";

const AboutUs = ({ id, className }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <section id={id} className={className}>
      {isMobile ? (
        <div className="flex flex-col justify-center items-center">
          <div className="aboutUsTextBoxMobile text-[#272727] text-[6rem] font-extrabold whitespace-nowrap flex justify-center">
            <h1>ABOUT US</h1>
          </div>
          <div className="sliderMobile"
          >
            <Slider {...settings}>
              <div>
                <img src={AboutUs2} alt="" />
              </div>
              <div>
                <img src={AboutUs3} alt="" />
              </div>
              <div>
                <img src={AboutUs7} alt="" />
              </div>
            </Slider>
          </div>

          <div className="textUnderAboutUsMobile">
            <h1>
              At GDSC MSIT,we aim to learn, teach and grow. Together, the place
              where creative minds come together to build something amazing
            </h1>
          </div>
        </div>
      ) : (
        <div className="relative m-[10px] flex justify-center items-center">
          <div className="box1 z-100 bg-[#4285F4] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden ">
            <img className="h-full w-auto object-cover" src={AboutUs4} alt="" />
          </div>
          <div className="box2 z-200 bg-[#FBBC04] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img src={AboutUs5} alt="" />
          </div>
          <div className="box3 z-300 bg-[#EA4335] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img className="h-full w-auto object-cover" src={AboutUs3} alt="" />
          </div>
          <div className="box4 z-400 bg-[#1d1d1d] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img src="/assets/gdgLogo.png" alt="" />
          </div>
          <div className="box5 z-500 bg-[#4285F4] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img src={AboutUs1} alt="" />
          </div>
          <div className="box6 z-600 bg-[#FBBC04] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img className="h-full w-auto object-cover" src={AboutUs7} alt="" />
          </div>
          <div className="box7 z-700 bg-[#EA4335] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img className="h-full w-auto object-cover" src={AboutUs2} alt="" />
          </div>
          <div className="aboutUsTextBox z-800 text-[#272727] absolute whitespace-nowrap">
            <h1>ABOUT US</h1>
          </div>
          <div className="textUnderAboutUs absolute text-[1.3rem] w-[600px] transform translate-x-[-400px] translate-y-[300px] text-center">
            <h1>
              At GDSC MSIT,we aim to learn, teach and grow. Together, the place
              where creative minds come together to build something amazing
            </h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
