/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import AppleButton from '../assests/AppleBtn.png'
import GoogleButton from '../assests/GoogleBtn.png'

const DownloadApp = () => {
  return (
    <>
      <div data-aos='fade-right' className="relative top-[20rem] h-[100%] w-screen flex justify-center items-center mt-[2rem]">
        <div className="w-full bg-[#FDCE0C] overflow-visible">
            <div className="container m-auto justify-around">
              <div className="flex max-md:flex-col">
                <div className="ml-[2rem] relative flex-1 m-auto flex-wrap max-[630px]:flex-none">
                  <div className="text-[#273B60] font-extrabold capitalize text-4xl text-left my-4">
                    Download App
                  </div>
                  <div className="text-[#273b60] text-sm mb-2 w-[98%] sm:w-[90%] lg:w-[80%] tracking-wide m-auto sm:m-0">
                    It's all a click away! Just download our mobile application
                    to enjoy hassle-free delivery of your products and services.
                  </div>
                  <div className="flex mt-4">
                    {/* <div className='flex gap-4 items-center mt-3'>
                    <img
                      src={GoogleButton}
                      alt=""
                      className='h-[2.8rem] transition-transform duration-300 transform hover:scale-110 cursor-pointer'
                    />
                    <img
                      src={AppleButton}
                      alt=""
                      className='h-[2.8rem] transition-transform duration-300 transform hover:scale-110 cursor-pointer'
                    />
                    </div> */}
                    <div className="flex gap-4 items-center mt-3">
  <img
    src={GoogleButton}
    alt=""
    className="h-[2.8rem] transition-transform duration-300 transform hover:scale-110 hover:shadow-md  cursor-pointer"
  />
  <img
    src={AppleButton}
    alt=""
    className="h-[2.8rem] transition-transform duration-300 transform hover:scale-105 hover:rotate-4 cursor-pointer"
  />
</div>

                  </div>
                </div>
                <div className="flex-1 top-4 relative sm:top-4">
                  <img
                    className=""
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
