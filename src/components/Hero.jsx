import React from "react";
import AppleButton from "../assests/AppleBtn.png";
import GoogleButton from "../assests/GoogleBtn.png";
import LeftCard from "../assests/leftcard.png";
import RightCard from "../assests/rightcard.png";
import Line from "../assests/line.png";
import Message from "../assests/msg.png";
import Message2 from "../assests/msg2.png";
import MobileNav from "../assests/mobileNav.png";
import MobileScreen from "../assests/mobilescreen.png";
import MobileBg from "../assests/bg.png";
import CircleGif from "../assests/circle.gif";
import Pot from "../assests/pot.svg";
import Cart from "../assests/cart.svg";

const Hero = () => {
  return (
    <div
      data-aos="fade-left"
      className="w-screen relative top-[5rem] font-poppins"
    >
      {/* MAIN HERO SECTION CODE  */}
      <div className="lg:flex justify-between w-[screen]">
        {/* LEFT SECTION  */}
        <div className="flex-1 pl-[1rem] pr-[1rem] sm:pl-[6.7rem] lg:mb-0 mb-[2rem]">
          {/* TEXT  */}
          <div className="">
            <div className="flex items-center gap-x-2 mb-2">
              <p className="text-[#F16427] text-3xl font-bold mb-[-1rem]">
                Life
              </p>
              <img src={Cart} alt="" className="h-[7rem]" />
            </div>
            <h1 className="text-[#fdce0c] text-4xl font-bold mb-2 mt-[-1rem]">
              Made Easy
            </h1>
            <p className="text-[#273b60] text-sm mb-2 w-[98%] sm:w-[90%] lg:w-[80%] tracking-wide">
              Tajammul.app is a complete eCommerce solution that aims to ease
              your life by providing you with online delivery services for food,
              grocery and other essentials. Not only do we serve you with the
              best of our quality products, but with Tajammul.app you can book
              your services anytime and anywhere, by tracking the availability
              of the restaurants, clinics and salons. You can book both, as a
              merchant and get profits, as well as book as a consumer and avail
              offered services.
            </p>
          </div>

          {/* BUTTONS  */}
          <div className=" flex gap-4 items-center mt-3">
            <img
              src={GoogleButton}
              alt=""
              className="h-[2.8rem] transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
            <img
              src={AppleButton}
              alt=""
              className="h-[2.8rem] transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />
          </div>
        </div>

        {/* RIGHT SECTION  */}

        <div className="flex-1 relative flex justify-center lg:justify-end">
          <div className="relative mr-0 lg:mr-[8rem]">
            {/* MOBILE BACKGROUND BLACK */}
            <div>
              <img src={MobileBg} alt="" className="lg:h-[24rem] h-[30rem]" />
            </div>

            {/* MOBILE MAIN SCREEN */}
            <div className="absolute top-4 left-3">
              <img
                src={MobileScreen}
                alt=""
                className="lg:h-[22rem] h-[28rem]"
              />
            </div>
          </div>

          {/* LEFT DECORATOR  */}

          <div className="lg:block hidden">
            <div className="absolute right-[20rem] top-[1rem]">
              <img src={Message} alt="" />
            </div>

            <div className="absolute right-[20rem] top-[6rem]">
              <img src={LeftCard} alt="" className="h-[10rem]" />
            </div>

            <div className="absolute right-[15rem] top-[17.5rem]">
              <img src={MobileNav} alt="" className="" />
            </div>
          </div>

          {/* RIGHT SIDE DECORATORS  */}
          <div className="lg:block hidden">
            <div className="absolute right-[7px] top-[3rem]">
              <img src={Message2} alt="" />
            </div>
            <div className="absolute right-[1.8rem] top-[4.3rem] font-bold text-white">
              <p>Products</p>
            </div>

            <div className="absolute right-[20px] top-[8rem]">
              <img src={RightCard} alt="" className="h-[10rem]" />
            </div>

            <div className="absolute right-[3rem] top-[18rem]">
              <img src={Pot} alt="" className="h-[6rem]" />
            </div>

            <div className="absolute right-[4rem] top-[23.5rem]">
              <img src={Line} alt="" className="" />
            </div>
          </div>

          {/* CIRCLE GIF */}

          <div className="absolute top-[-2rem] lg:right-0 hidden lg:block -z-50">
            <img src={CircleGif} alt="" className="h-[25rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
