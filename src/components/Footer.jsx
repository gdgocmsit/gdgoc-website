import GDG from "/assets/Group 39.png";
import logo from "/assets/gdgLogo.png";
import Frame from "/assets/Frame.png";
import Dino from "/assets/unnamed (1) 2.png";
import styled, { keyframes } from "styled-components";

function Footer() {
  return (
    <div className="bg-[#272727] md:h-[530px] h-[470px] items-center justify-around text-white p-10">
      <div className="flex items-center justify-between gap-40">
        <div className="left  md:ml-20 ">
          <div className="hidden md:block">
          <img src={logo} className="w-20 h-20" alt="" />
          </div>
          <div className="block md:hidden">
          <img
            src={GDG}
            // width={50}
            alt=""
            className="h-20 w-40"
          />
          </div>
          <div className="mt-5 ">
            <a href="https://chat.whatsapp.com/FJO99dIJBRtH29SZta0lyg">
              <Button className="md:text-[16px]  text-[14px] p-[7px] md:p-3 border-[#ffffffbc] hover:border-[#ffffff]  border-2 rounded-3xl w-[250px] md:w-[350px] items-start flex ">
                <div className="flex items-center md:mt-1 mt-[5px]">
                  JOIN OUR WHATSAPP GROUP
                </div>
                <button>
                  <a href="https://chat.whatsapp.com/FJO99dIJBRtH29SZta0lyg">
                    <img
                      src={Frame}
                      className={` h-8 w-8 md:translate-x-20 translate-x-3 rounded-full -rotate-90  bg-[#ffffff]`}
                      alt=""
                    />
                  </a>
                </button>
              </Button>
            </a>
          </div>
          <div className="mt-5 ">
            <a href="/#home">
              <Button className="md:text-[16px] text-[14px] mb-3 md:mb-0 p-[7px] md:p-3 border-[#ffffffbc] hover:border-[#ffffff] border-2 rounded-3xl md:w-[220px] w-[200px]  items-start flex ">
                <div className="md:mt-1 mt-[5px]">BACK TO TOP</div>
                <button>
                  <a href="/#home">
                    <img
                      src={Frame}
                      className="h-8 w-8  rounded-full translate-x-16 bg-[#ffffff]"
                      alt=""
                    />
                  </a>
                </button>
              </Button>
            </a>
          </div>
        </div>
        <div className="right md:flex flex items-center justify-center   ml-32 mb-10 md:mb-0">
          <img
            src={GDG}
            width={500}
            alt=""
            className="  -translate-x-36 md:translate-x-0 "
          />
          {/* <img src={logo} className="w-20 h-20 md:-translate-x-24 -translate-x-32 md:translate-y-12 " alt="" /> */}
        </div>
      </div>
      <div>
        <img src={Dino} className="w-14 h-14 translate-y-5" alt="" />
        <hr className="text-[1px] mt-5" />
        <div className="flex justify-evenly items-center mt-7 md:mt-10">
          <a
            href="https://x.com/GdscMsit"
            className="uppercase hover:underline-offset-2 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/gdscmsit?igsh=bW56Z3lsZmYxeWxv"
            className="uppercase hover:underline-offset-2 hover:underline"
          >
            instagram
          </a>
          <a
            href="https://www.linkedin.com/company/gdsc-msit-delhi/posts/?feedView=all"
            className="uppercase hover:underline-offset-2 hover:underline"
          >
            linkedin
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

const slideIn = keyframes` from { 
  transform: translateX(0); 
  } to { 
    transform: translateX(0); 
    } `;

const slideOut = keyframes` from {
   transform: translateX(0); 
   } to { 
    transform: translateX(0); 
    } `;

const Button = styled.button`
  &:hover {
    background-color: #ffffff;
    color: black;
  }
  animation: ${(props) => (props.animateIn ? slideIn : slideOut)} 0.5s forwards;
`;