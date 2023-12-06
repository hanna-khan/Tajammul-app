/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import yellowCircle from "../assests/Ellipse813.png";
import orangeCircle from "../assests/Ellipse807.png";
import vector from "../assests/Vector1.png";
import discover from "../assests/discover.jpg";
import payment from "../assests/payment.jpg";
import shopping from "../assests/shopping.jpg";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="w-screen pb-10 relative top-[19rem]">
      <div className="absolute left-[42rem] top-[-4rem] max-lg:hidden">
        <img className="h-[53rem] max-lg:hidden" src={vector} alt="" />
      </div>
      <div className="absolute left-[76.2rem] top-[-2rem] max-lg:hidden">
        <img className="h-[1rem]" src={orangeCircle} alt="" />
      </div>
      <div className="absolute left-[58.5rem] top-[10rem] max-lg:hidden">
        <img className="h-[1rem]" src={yellowCircle} alt="" />
      </div>

      <div className="absolute left-[56.8rem] top-[40rem] max-lg:hidden">
        <img className="h-[.75rem]" src={yellowCircle} alt="" />
      </div>
      <div className="text-yellow-400 text-[70px] font-extrabold capitalize text-center max-lg:text-5xl pb-3">
        Features
      </div>

      <div className="flex xl:justify-between justify-center xl:flex-row flex-col ">
        <div className="max-xl:relative max-xl:right-[8rem] max-sm:right-[6rem] ml-[2rem]xl:block justify-center items-center flex-col flex flex-1 pt-[2rem]">
          <div className="h-[18rem] w-[18rem]  max-sm:h-[12rem] max-sm:w-[12rem] mb-[1rem] rounded-2xl bg-white px-5 pb-20 pt-9 text-[20px] font-bold  text-slate-700 drop-shadow-lg">
            <div>
              <div >
                <img className={`h-[100%] w-[100%]`} src={discover} alt="" />
                <p className="text-center mt-2">Discover</p>
              </div>
              <div className="relative left-[14rem] max-sm:left-[9rem] rounded-2xl top-[-6rem] h-[18rem] w-[18rem] max-sm:h-[12rem] max-sm:w-[12rem]">
                <img
                  className="h-[100%] w-[100%] rounded-2xl drop-shadow-lg"
                  src={shopping}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="max-sm:h-[12rem] max-sm:w-[12rem] h-[18rem] w-[18rem] text-[20px] font-bold  text-slate-700">
            <img
              className="h-[100%] w-[100%] rounded-2xl drop-shadow-lg"
              src={payment}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 flex-wrap pl-[2rem] pt-[3rem]">
          <div>
            <div
              className="text-[#F16427] text-[52px] font-extrabold capitalize max-lg:text-4xl text-left"
              style={{
                wordWrap: "break-word",
              }}
            >
              User
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
          <div className="text-lg font-normal leading-[28px] text-slate-700 w-[90%] sm:text-lg ">
            user, you can browse down to a variety of restaurants and grocery
            stores and pick the one that best suits your needs. You will be able
            to choose from a variety of alternatives. You'll also get access to
            the booking calendar, which is updated with service platform
            availability. Simply shop, schedule appointments, and pay for your
            purchases without any hassle or additional expenses.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
