/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PlayBtn from "../assests/Polygon1.png";
import bigCircle from "../assests/Ellipse1Outline.png";
import yellowCircle from "../assests/Ellipse813.png";
import aboutVector from "../assests/aboutVector.png";
import mobile from "../assests/mobile.png";
import bag from "../assests/orangeBag.png";

const About = () => {
  return (
    <>
      <div className="w-screen pb-10 relative top-[38rem] h-[600px] max-[730px]:h-[900px] bg-stone-50 px-[20px]">
        <div className="absolute left-[13rem] top-[-12rem] max-lg:hidden">
          <img className="h-[49.5rem]" src={aboutVector} alt="" />
        </div>
        <div className="absolute left-[12.5rem] top-[-7rem] max-lg:hidden">
          <img className="h-[1rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[23rem] top-[-7rem] max-lg:hidden">
          <img className="h-[.75rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[38rem] top-[12rem] max-lg:hidden">
          <img className="h-[1rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[28rem] top-[12.5rem] max-lg:hidden">
          <img className="h-[.75rem]" src={yellowCircle} alt="" />
        </div>
        <div>
          <div className="text-yellow-400 text-[70px] font-extrabold capitalize text-center max-lg:text-5xl">
            About us
          </div>
          <div className="flex container m-auto flex-wrap max-[730px]:flex-col-reverse">
            <div className="flex-1 relative top-[4rem] max-w-[50%] max-[730px]:m-auto max-[730px]:block">
              {" "}
              <img
                className="max-[1024px]:relative max-[1024px]:w-[15rem] max-[1024px]:h-[15rem] max-[550px]:w-[12rem] max-[550px]:h-[16rem] max-[1024px]:left[-10px] max-[1024px]:top-[11rem] w-[20rem] h-[28rem] max-[730px]:h-[22rem] max-[730px]:w-[16rem]"
                src={mobile}
                alt="mobile image"
              />
            </div>
            <div className="flex-1 max-[730px]:m-auto max-[730px]:block">
              <div className="mt-[120px] w-[400px] flex">
                <img src={bag} alt="" />
                <span className="ml-2 text-[#273B60] text-[55px] font-semibold text-center max-lg:text-4xl mr-2">
                  tajammul.app
                </span>
              <span className="text-right text-orange-500 text-[12px] font-bold leading-[20px] relative right-[17rem] top-[3rem]">
                Shopping Made Easy
              </span>
              </div>
              <div className="text-lg font-normal leading-[28px] tracking-[0px] text-slate-700 max-lg:text-base max-w-[80%] max-[730px]:m-auto max-[730px]:block">
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
