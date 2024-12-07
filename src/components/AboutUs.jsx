import React,{useState,useEffect} from 'react';
import '../App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const AboutUs = ({ id, className }) => {

  const [isMobile,setIsMobile]=useState(false)

  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize',handleResize)
    return () => window.removeEventListener('resize',handleResize)
  },[])
  
  return (
    <section id={id} className={className}>
      {isMobile ? (
        <div className="mobileView">
          <div className="aboutUsTextBoxMobile">
            <h1>ABOUT US</h1>
          </div>
          <div className="carouselBox">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="1000"
            >
              <div className="carousel-inner overflow-visible ">
                <div className="carousel-item active">
                  <img
                    src="/src/assets/aboutUsImages/i4.jpg"
                    className="d-block h-100vh scale-150"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/src/assets/aboutUsImages/i3.jpg"
                    className="d-block h-100vh"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/src/assets/aboutUsImages/i2.jpg"
                    className="d-block h-100vh"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/src/assets/aboutUsImages/i7.jpg"
                    className="d-block h-100vh"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev opacity-0"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next opacity-0"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="textUnderAboutUsMobile">
              <h1>
                At GDSC MSIT,we aim to learn, teach and grow. Together, the
                place where creative minds come together to build something
                amazing
              </h1>
          </div>
        </div>
      ) : (
        <div className="desktopView">
          <div className="box box1">
            <img
              className="h-full w-auto object-cover"
              src="/src/assets/aboutUsImages/i4.jpg"
              alt=""
            />
          </div>
          <div className="box box2">
            <img src="/src/assets/aboutUsImages/i5.jpg" alt="" />
          </div>
          <div className="box box3">
            <img
              className="h-full w-auto object-cover"
              src="/src/assets/aboutUsImages/i3.jpg"
              alt=""
            />
          </div>
          <div className="box box4">
            <img src="/src/assets/gdgLogo.png" alt="" />
          </div>
          <div className="box box5">
            <img src="/src/assets/aboutUsImages/i1.png" alt="" />
          </div>
          <div className="box box6">
            <img
              className="h-full w-auto object-cover"
              src="/src/assets/aboutUsImages/i7.jpg"
              alt=""
            />
          </div>
          <div className="box box7">
            <img
              className="h-full w-auto object-cover"
              src="/src/assets/aboutUsImages/i2.jpg"
              alt=""
            />
          </div>
          <div className="aboutUsTextBox">
            <h1>ABOUT US</h1>
          </div>
          <div className="textUnderAboutUs">
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
