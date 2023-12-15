/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const DownloadApp = () => {
  return (
    <>
      <div data-aos='fade-right' className="relative top-[20rem] h-[100%] w-screen flex justify-center items-center mt-[2rem]">
        <div className="w-full bg-[#FDCE0C] overflow-visible">
            <div className="container m-auto justify-around">
              <div className="flex max-md:flex-col">
                <div className="ml-[2rem] relative flex-1 flex-wrap max-[630px]:flex-none">
                  <div className="text-[#273B60] text-[42px] max-md:text-[32px] font-extrabold capitalize leading-[4.5rem] text-left">
                    Download App
                  </div>
                  <div className="text-lg max-md:text-[14px] font-normal leading-[28px] tracking-[0px] text-slate-700">
                    It's all a click away! Just download our mobile application
                    to enjoy hassle-free delivery of your products and services.
                  </div>
                  <div className="flex mt-4">
                    <a href="#">
                      <button
                        type="submit"
                        className="btn btn-primary w-[10rem] max-sm:w-[8rem]"
                      >
                        <img src="./GoogleBtn.png" alt="" />
                      </button>
                    </a>
                    <a href="#">
                      <button
                        type="submit"
                        className="btn btn-primary ml-2 w-[10rem] max-sm:w-[8rem]"
                      >
                        <img src="./AppleBtn.png" alt="" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    className="max-md:flex-col relative top-[-2rem] right-[170px] h-[20rem] max-lg:h-[16rem] max-lg:top-[-4px] max-lg:right-[0rem] max-md:h-[320px] max-sm:h-[16rem] max-md:top-[20px] max-md:left-[4rem] max-sm:left-[0rem]"
                    src="./twoPhone.png"
                    alt="Phone Image"
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default DownloadApp;
