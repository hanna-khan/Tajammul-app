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
      <div className="w-screen pb-10 relative top-[38rem] h-[600px] bg-stone-50">
        <div className="absolute left-[13rem] top-[-12rem]">
          <img className="h-[49.5rem]" src={aboutVector} alt="" />
        </div>
        <div className="absolute left-[12.5rem] top-[-7rem]">
          <img className="h-[1rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[23rem] top-[-7rem]">
          <img className="h-[.75rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[38rem] top-[12rem]">
          <img className="h-[1rem]" src={yellowCircle} alt="" />
        </div>
        <div className="absolute left-[28rem] top-[12.5rem]">
          <img className="h-[.75rem]" src={yellowCircle} alt="" />
        </div>
        <div>
          <div className="text-yellow-400 text-[70px] font-extrabold capitalize text-center max-lg:text-5xl">
            About us
          </div>
          <div className="flex container m-auto flex-wrap">
            <div className="flex-1 max-w-[50%]">
              {" "}
              <img
                className="w-[320px] h-[430px] max-w-[900px]:h-[380] max-w-[900px]:w-[280]"
                src={mobile}
                alt="mobile image"
              />
            </div>
            <div className="flex-1 max-w-[50%]">
              <div className="mt-[120px] w-[600px] flex">
                <img src={bag} alt="" />
                <span className="ml-2 text-[#273B60] text-[55px] font-semibold text-center max-lg:text-4xl">
                  tajammul.app
                </span>
              </div>
              <div className="text-right text-orange-500 text-[12px] font-bold leading-[23px] mr-[170px]">
                Shopping Made Easy
              </div>
              <div className="text-lg font-normal leading-[28px] tracking-[0px] text-slate-700 max-lg:text-base">
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
