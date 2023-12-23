/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import yellowCircle from "../assests/Ellipse813.png";
import orangeCircle from "../assests/Ellipse807.png";
import vector from "../assests/Vector1.png";
import discover from "../assests/discover.svg";
import payment from "../assests/makePayment.svg";
import shopping from "../assests/EnjoyShopping.svg";
import emptyCircle from "../assests/Ellipse1Outline.png";
import "./Feature.css";

const Feature = () => {
  return (
    <div data-aos='fade-right' id="feature" className="w-screen pb-10 relative top-[19rem]">
      <div className="absolute left-[32rem] top-[-4rem] max-xl:hidden z-0">
        <img className="h-[46rem] max-xl:hidden" src={vector} alt="" />
      </div>
      <div className="absolute left-[63rem] top-[-2rem] max-xl:hidden">
        <img className="h-[0.7rem]" src={orangeCircle} alt="" />
      </div>
      <div className="absolute left-[44.4rem] top-[10rem] max-xl:hidden">
        <img className="h-[0.7rem]" src={yellowCircle} alt="" />
      </div>
      <div className="absolute left-[30rem] top-[10rem] max-xl:hidden">
        <img className="h-[1rem]" src={emptyCircle} alt="" />
      </div>
      <div className="absolute left-[30.6rem] top-[10rem] max-xl:hidden">
        <img className="h-[0.5rem]" src={orangeCircle} alt="" />
      </div>
      <div className="absolute left-[28rem] top-[35rem] max-xl:hidden">
        <img className="h-[1rem]" src={emptyCircle} alt="" />
      </div>
      <div className="absolute left-[28.6rem] top-[35.5rem] max-xl:hidden">
        <img className="h-[0.5rem]" src={orangeCircle} alt="" />
      </div>

     
      <div className="text-yellow-400 capitalize text-center text-4xl font-bold pb-3">
        Features
      </div>
      <div className="flex xl:justify-between justify-center xl:flex-row flex-col ">
        <div className="max-xl:relative max-xl:right-[6rem] max-sm:right-[6rem] ml-[2rem]xl:block justify-center items-center flex-col flex flex-1 relative top-[0rem] xl:top-[-6rem]">
          <div className="h-[18rem] w-[18rem]  max-sm:h-[12rem] max-sm:w-[12rem]">
            <div>
              <div className="relative top-[1rem] max-sm:left-[2rem]">
                <img className={`h-[100%] w-[100%] transition duration-300 ease-in-out hover:scale-110`} src={discover} alt="" />
              </div>
              <div className="relative left-[12rem] max-sm:left-[10rem] max-sm:top-[-6rem] rounded-2xl top-[-10rem] h-[18rem] w-[18rem] max-sm:h-[12rem] max-sm:w-[12rem]">
                <img
                  className="h-[100%] w-[100%] rounded-2xl drop-shadow-lg transition duration-300 ease-in-out hover:scale-110"
                  src={shopping}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="max-sm:h-[12rem] max-sm:w-[12rem] h-[18rem] w-[18rem] relative  top-[-2rem] max-sm:left-[2rem]">
            <img
              className="h-[100%] w-[100%] rounded-2xl drop-shadow-lg transition duration-300 ease-in-out hover:scale-110"
              src={payment}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 flex-wrap pl-[10rem] pt-[3rem] max-xl:pl-[1rem]">
          <div>
            <div
              className="text-[#F16427] text-3xl font-bold  text-left"
              style={{
                wordWrap: "break-word",
              }}
            >
              User
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
          <p className="text-[#273b60] text-sm mb-2 w-[98%] sm:w-[90%] lg:w-[80%] tracking-wide m-auto sm:m-0">
            User, you can browse down to a variety of restaurants and grocery
            stores and pick the one that best suits your needs. You will be able
            to choose from a variety of alternatives. You'll also get access to
            the booking calendar, which is updated with service platform
            availability. Simply shop, schedule appointments, and pay for your
            purchases without any hassle or additional expenses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
