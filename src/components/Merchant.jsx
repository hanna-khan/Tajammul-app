/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import yellowCircle from "../assests/Ellipse813.png";
import orangeCircle from "../assests/Ellipse807.png";
import vector from "../assests/Vector1.png";
import aboutVector from "../assests/aboutVector.png";
import discover from "../assests/discover.jpg";
import services from "../assests/services.png";
import product from "../assests/product.jpg";
import time from "../assests/time.jpg"; 

import "./Feature.css";

const Feature = () => {
  return (
    <div className="w-screen pb-10 relative top-[19rem] bg-stone-50 pl-[2rem] pt-[3rem]">
      {/* <div className="absolute left-[43.5rem] top-[0rem]">
        <img className="h-[46.8rem]" src={aboutVector} alt="" />
      </div> */}
      <div className="absolute left-[42rem] top-[-4rem] max-lg:hidden">
        <img className="h-[51rem] max-lg:hidden" src={vector} alt="" />
      </div>
      <div className="absolute left-[75rem] top-[-2rem] max-lg:hidden">
        <img className="h-[1rem]" src={orangeCircle} alt="" />
      </div>
      <div className="absolute left-[56.5rem] top-[10rem] max-lg:hidden">
        <img className="h-[1rem]" src={yellowCircle} alt="" />
      </div>

      <div className="absolute left-[55.5rem] top-[40rem] max-lg:hidden">
        <img className="h-[.75rem]" src={yellowCircle} alt="" />
      </div>

      <div className="flex xl:justify-between justify-center xl:flex-row flex-col">
        <div className="flex-1 flex-wrap mx-2 m-auto">
          <div>
            <div
              className="text-[#F16427] text-[52px] font-extrabold capitalize max-lg:text-4xl text-left"
              style={{
                wordWrap: "break-word",
              }}
            >
              Merchant
            </div>
            <div
              className="text-[#FDCE0C] text-[69px] font-extrabold capitalize max-lg:text-5xl text-left"
              style={{
                wordWrap: "break-word",
              }}
            >
              Perspective
            </div>
          </div>
          <div className="text-lg font-normal leading-[28px] text-slate-700 w-[90%] sm:text-lg">
            As a merchant, you will register your company as well as the
            products or services it provides. Then, in the booking calendar
            section, you must include the availability and time slots of those
            services so that people can book them accordingly. You're ready to
            profit from selling your goods and services.
          </div>
        </div>
        {/* Images Section */}
        <div className="xl:block justify-center items-center flex-col flex flex-1 pt-[2rem]  max-xl:relative max-xl:right-[8rem] max-sm:right-[6rem] ml-[2rem]">
          <div className="max-sm:h-[12rem] max-sm:w-[12rem] relative left-[14rem] h-[18rem] w-[18rem] mb-[1rem] rounded-2xl bg-white px-5 pb-20 pt-9 text-[20px] font-bold  text-slate-700 drop-shadow-lg">
            <div>
              <div>
                <img className={`h-[100%] w-[100%]`} src={discover} alt="" />
                <p className="text-center mt-2 max-sm:text-[14px]">Add your product or services</p>
              </div>
              <div className="max-sm:h-[12rem] max-sm:w-[12rem] relative rounded-2xl left-[-1rem] top-[2rem] h-[18rem] w-[18rem]">
                <img
                  className="h-[100%] w-[100%] rounded-2xl drop-shadow-lg"
                  src={product}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="max-sm:h-[12rem] max-sm:w-[12rem] relative top-[-10rem] h-[18rem] w-[18rem] text-[20px] font-bold  text-slate-700">
            <img
              className="h-[100%] w-[100%] rounded-2xl drop-shadow-lg"
              src={time}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
