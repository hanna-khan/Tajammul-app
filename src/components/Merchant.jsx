/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import yellowCircle from "../assests/Ellipse813.png";
import orangeCircle from "../assests/Ellipse807.png";
import merchantVector from "../assests/merchantVector.png";
import phone2 from "../assests/sellProduct.svg";
import product from "../assests/productservice.svg";
import arrow from "../assests/Polygon 2.svg";
import orangeEmptyCircle from "../assests/Ellipse 1 - Outline.svg";
import time from "../assests/timeslotes.svg";
import emptyCircle from "../assests/Ellipse1Outline.png";


import "./Feature.css";

const Feature = () => {
  return (
    <div data-aos='fade-left' className="w-screen pb-10 relative top-[19rem] bg-stone-50 pl-[1rem] pt-[3rem]">
      <div className="absolute left-[44.2rem] top-[0rem] max-lg:hidden">
        <img className="h-[43.5rem] max-xl:hidden" src={merchantVector} alt="" />
      </div>
      <div className="absolute left-[45.6rem] top-[2rem] max-xl:hidden">
        <img className="h-[0.7rem]" src={orangeCircle} alt="" />
      </div>
      <div className="absolute left-[55rem] top-[6rem] max-xl:hidden">
        <img className="h-[0.7rem]" src={yellowCircle} alt="" />
      </div>
      <div className="absolute left-[68.5rem] top-[42.7rem] max-xl:hidden">
        <img className="h-[0.7rem]" src={yellowCircle} alt="" />
      </div>
      <div className="absolute left-[56rem] top-[10rem] max-xl:hidden">
        <img className="h-[1rem]" src={emptyCircle} alt="" />
      </div>
      <div className="absolute left-[56.6rem] top-[10rem] max-xl:hidden">
        <img className="h-[0.5rem]" src={orangeCircle} alt="" />
      </div>
      <div className="absolute left-[56rem] top-[33rem] max-xl:hidden">
        <img className="h-[1rem]" src={orangeEmptyCircle} alt="" />
      </div>
      <div className="absolute left-[55.6rem] top-[33.5rem] max-xl:hidden">
        <img className="h-[0.5rem]" src={arrow} alt="" />
      </div>

      {/* <div className="absolute left-[55.5rem] top-[40rem] max-lg:hidden">
        <img className="h-[.75rem]" src={yellowCircle} alt="" />
      </div> */}

      <div className="flex xl:justify-between justify-center xl:flex-row flex-col">
        <div className="flex-1 flex-wrap mx-2 relative left-[8rem] max-xl:left-[0rem] xl:top-[10rem] top-0">
          <div>
            <div
              className="text-[#F16427] text-3xl font-bold  text-left"
            >
              Merchant
            </div>
            <div
              className="text-[#FDCE0C] text-4xl font-bold  text-left"
              style={{
                wordWrap: "break-word",
              }}
            >
              Perspective
            </div>
          </div>
          <div className="text-[#273b60] text-sm mb-2 sm:w-[90%] lg:w-[80%] tracking-wide m-auto sm:m-0">
            As a merchant, you will register your company as well as the
            products or services it provides. Then, in the booking calendar
            section, you must include the availability and time slots of those
            services so that people can book them accordingly. You're ready to
            profit from selling your goods and services.
          </div>
        </div>
        {/* Images Section */}
        <div className="xl:block justify-center items-center flex-col flex flex-1 pt-[2rem]  max-xl:relative max-xl:right-[8rem] max-sm:right-[9rem] ml-[2rem]">
          <div className="max-sm:h-[12rem] max-sm:w-[12rem] relative max-sm:left-[12rem] left-[14rem] h-[18rem] w-[18rem] xl:top-[-4rem] top-0">
            <div>
             
              <div className="max-sm:h-[12rem] max-sm:w-[12rem] relative rounded-2xl left-[-2rem] top-[1rem] h-[18rem] w-[18rem]">
                <img
                  className="h-[100%] w-[100%] rounded-2xl drop-shadow-lg transition duration-300 ease-in-out hover:scale-110"
                  src={product}
                  alt=""
                />
              </div>
              <div className="relative top-[-1rem] left-[-2rem]">
                <img className={`h-[100%] w-[100%] transition duration-300 ease-in-out hover:scale-110`} src={phone2} alt="" />
               
              </div>
            </div>
          </div>
          <div className="max-sm:left-[3rem] max-sm:top-[-7rem] max-sm:h-[12rem] max-sm:w-[12rem] relative top-[-13rem] max-xl:top-[-10rem] h-[18rem] w-[18rem] text-[20px] font-bold  text-slate-700">
            <img
              className="h-[100%] w-[100%] rounded-2xl drop-shadow-lg transition duration-300 ease-in-out hover:scale-110"
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
