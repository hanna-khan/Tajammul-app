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
import Logo from "../assests/tajamul.png";

import aboutgif from "../assests/aboutgif.gif";
const About = () => {
  return (
    <>
      <div
        data-aos="fade-right"
        id="about"
        className="font-poppins w-screen pb-[8rem] relative top-[15rem] bg-stone-50 px-[20px]"
      >
        <div className="absolute left-[13rem] top-[-16rem] max-lg:hidden">
          <img className="h-[49rem]" src={aboutVector} alt="" />
        </div>
        <div className="absolute left-[13.1rem] top-[-9rem] max-lg:hidden">
          <img className="h-[1rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[23.6rem] top-[-9rem] max-lg:hidden">
          <img className="h-[.75rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[37.6rem] top-[8rem] max-lg:hidden">
          <img className="h-[1rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[27.5rem] top-[12.5rem] max-lg:hidden">
          <img className="h-[.75rem]" src={yellowCircle} alt="" />
        </div>
        <div>
          <div className="text-yellow-400 text-4xl font-bold capitalize text-center pt-[1rem]">
            About us
          </div>
          <div className="flex container m-auto flex-wrap max-[730px]:flex-col-reverse">
            <div className="flex-1 relative top-[4rem] max-w-[50%] max-[730px]:m-auto max-[400px]:m-0 max-[730px]:block max-[400px]:left-[5rem] max-md:top-[0rem]">
              <img
                src={aboutgif}
                alt=""
                className="h-[20rem] max-md:left-[0px] relative top-[1rem] left-[18rem] max-lg:h-[16rem]  max-lg:top-[6rem]  max-lg:left-[4rem] max-sm:h-[12rem] max-xl:left-[5rem]"
              />
              <img
                className="absolute top-[-4rem] left-[18rem]
                w-[18rem] h-[24rem] 
                max-lg:w-[15rem] max-lg:h-[20rem] max-lg:top-[2rem] max-xl:left-[5rem] max-md:left-[0rem] 
                pr-2
                max-sm:h-[16rem] max-sm:w-[12rem] max-sm:left-[0rem] "
                src={mobile}
                alt="mobile image"
              />
            </div>
            <div className="flex-1 max-[730px]:m-auto max-[730px]:block mt-[8rem] max-md:mt-[4rem] ml-4">
              <div>
                <img src={Logo} alt="" className="lg:h-[3rem] h-[2rem]" />
              </div>
              <p className="text-[#273b60] text-sm mb-2 w-[90%] sm:w-[90%] lg:w-[80%] tracking-wide m-auto sm:m-0">
                Tajammul is an online solution for online groceries, food, and
                daily needs delivery. More importantly, it provides a platform
                for consumers to book services based on their current location.
                Users can look for the availability of service stations, such as
                salons, clinics, dental clinics, labor/maid hiring, and
                decoration services. Also, merchants can register as salespeople
                promoting their businesses, such as food delivery restaurants,
                grocery stores and medical pharmacies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
