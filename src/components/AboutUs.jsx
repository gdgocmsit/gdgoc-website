import React,{useState,useEffect} from 'react';
import '../App.css'

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
        <div className="flex flex-col justify-center items-center">
          <div className="aboutUsTextBoxMobile text-[#272727] text-[6rem] font-extrabold whitespace-nowrap flex justify-center">
            <h1>ABOUT US</h1>
          </div>
          <div className="max-w-[500px] max-h-[380px] w-auto object-fill overflow-hidden">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
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
          <div className="flex justify-center text-[1.1rem] max-w-[500px] text-center mt-5">
            <h1>
              At GDSC MSIT,we aim to learn, teach and grow. Together, the place
              where creative minds come together to build something amazing
            </h1>
          </div>
        </div>
      ) : (
        <div className="relative m-[10px] flex justify-center items-center">
          <div className="box1 z-100 bg-[#4285F4] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden ">
            <img
              className="h-full w-auto object-cover"
              src="/src/assets/aboutUsImages/i4.jpg"
              alt=""
            />
          </div>
          <div className="box2 z-200 bg-[#FBBC04] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img src="/src/assets/aboutUsImages/i5.jpg" alt="" />
          </div>
          <div className="box3 z-300 bg-[#EA4335] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img
              className="h-full w-auto object-cover"
              src="/src/assets/aboutUsImages/i3.jpg"
              alt=""
            />
          </div>
          <div className="box4 z-400 bg-[#1d1d1d] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img src="/public/assets/gdgLogo.png" alt="" />
          </div>
          <div className="box5 z-500 bg-[#4285F4] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img src="/src/assets/aboutUsImages/i1.png" alt="" />
          </div>
          <div className="box6 z-600 bg-[#FBBC04] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img
              className="h-full w-auto object-cover"
              src="/src/assets/aboutUsImages/i7.jpg"
              alt=""
            />
          </div>
          <div className="box7 z-700 bg-[#EA4335] absolute h-[250px] w-[200px] rounded-[20px] flex justify-center items-center overflow-hidden">
            <img
              className="h-full w-auto object-cover"
              src="/src/assets/aboutUsImages/i2.jpg"
              alt=""
            />
          </div>
          <div className="aboutUsTextBox z-800 text-[#272727] absolute whitespace-nowrap">
            <h1>ABOUT US</h1>
          </div>
          <div className="textUnderAboutUs absolute text-[1.5rem] w-[600px] transform translate-x-[-400px] translate-y-[300px] text-center">
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
