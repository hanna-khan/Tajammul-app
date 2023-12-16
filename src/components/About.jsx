/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PlayBtn from "../assests/Polygon1.png";
import bigCircle from "../assests/Ellipse1Outline.png";
import yellowCircle from "../assests/Ellipse813.png";
import aboutVector from "../assests/aboutVector.png";
import mobile from "../assests/mobile.png";
import bag from "../assests/orangeBag.png";
import smile from "../assests/smile.png";
import handle from "../assests/handle.png";
import aboutgif from "../assests/aboutgif.gif";
const About = () => {
  return (
    <>
      <div data-aos='fade-right' id="about" className="w-screen pb-[8rem] relative top-[15rem] bg-stone-50 px-[20px]">
        <div className="absolute left-[13rem] top-[-16rem] max-lg:hidden">
          <img className="h-[66rem]" src={aboutVector} alt="" />
        </div>
        <div className="absolute left-[13.5rem] top-[-7rem] max-lg:hidden">
          <img className="h-[1rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[26rem] top-[-7rem] max-lg:hidden">
          <img className="h-[.75rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[44rem] top-[12rem] max-lg:hidden">
          <img className="h-[1rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[27.5rem] top-[12.5rem] max-lg:hidden">
          <img className="h-[.75rem]" src={yellowCircle} alt="" />
        </div>
        <div>
          <div className="text-yellow-400 text-[70px] font-extrabold capitalize text-center max-lg:text-5xl pt-[1rem]">
            About us
          </div>
          <div className="flex container m-auto flex-wrap max-[730px]:flex-col-reverse">
            <div className="flex-1 relative top-[4rem] max-w-[50%] max-[730px]:m-auto max-[400px]:m-0 max-[730px]:block max-[400px]:left-[5rem]">
            <img src={aboutgif} alt="" className="h-[26rem] relative top-[6rem] left-[2rem] max-lg:h-[16rem]  max-lg:top-[4rem]  max-lg:left-[0rem] max-sm:h-[12rem]" />
              <img
                className="absolute top-[0rem] w-[24rem] h-[33rem] max-lg:w-[15rem] max-lg:h-[20rem] max-[730px]:h-[22rem] max-[730px]:w-[16rem] pr-2 max-sm:h-[16rem] max-sm:w-[12rem]"
                src={mobile}
                alt="mobile image"
              />
            </div>
            <div className="flex-1 max-[730px]:m-auto max-[730px]:block">
              <div className="mt-[120px] max-lg:mt-[20px] w-[400px] flex">
                <img  className="h-[6rem] max-md:h-[4rem]" src={bag} alt="" />
                <img className="h-[2rem] relative top-[-1rem] left-[-4.8rem] max-md:left-[-3.5rem] max-md:h-[1.5rem]" src={handle} alt="" />
                <img  className="max-md:h-[2rem]  max-md:top-[1.5rem]  max-md:left-[-6rem] h-[3rem] relative top-[2rem] left-[-8.52rem]" src={smile} alt="" />
  

                <span className="ml-[-5rem] text-[#273B60] text-[55px] font-semibold text-center max-lg:text-4xl mr-2 max-sm:text-[1.75rem]">
                  tajammul.app
                </span>
              {/* <span className="text-right text-orange-500 text-[12px] font-bold leading-[20px] relative right-[17rem] top-[3rem]">
                Shopping Made Easy
              </span> */}
              </div>
              <div className="text-lg font-normal leading-[28px] tracking-[0px] text-slate-700 max-lg:text-base max-w-[80%] max-[730px]:m-auto max-[730px]:block max-sm:text-[0.9rem] ">
                Tajammul is an online solution for online groceries, food, and
                daily needs delivery. More importantly, it provides a platform
                for consumers to book services based on their current location.
                Users can look for the availability of service stations, such as
                salons, clinics, dental clinics, labor/maid hiring, and
                decoration services. Also, merchants can register as salespeople
                promoting their businesses, such as food delivery restaurants,
                grocery stores and medical pharmacies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
