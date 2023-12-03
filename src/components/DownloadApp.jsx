/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const DownloadApp = () => {
  return (
    <>
      <div className="w-screen pb-10 relative top-[42rem] flex justify-center items-center h-[900px]">
        <div className="w-full h-[250px] bg-[#FDCE0C] overflow-visible">
          <div>
            <div className="container m-auto justify-around">
              <div className="flex">
                <div className="flex-1 max-w-[50%] ml-[80px] max-[1010px]:ml-[20px] flex-wrap max-[630px]:ml-[0px] max-[630px]:max-w-[80%] max-[630px]:flex-none">
                  <div className="text-[#273B60] text-[42px] max-[770px]:text-[32px] font-extrabold capitalize leading-[4.5rem] text-left">
                    Download App
                  </div>
                  <div className="text-lg max-[770px]:text-[14px] font-normal leading-[28px] tracking-[0px] text-slate-700">
                    It's all a click away! Just download our mobile application
                    to enjoy hassle-free delivery of your products and services.
                  </div>
                  <div className="flex mt-4">
                    <a href="#">
                      <button
                        type="submit"
                        className="btn btn-primary w-[10rem]"
                      >
                        <img src="./GoogleBtn.png" alt="" />
                      </button>
                    </a>
                    <a href="#">
                      <button
                        type="submit"
                        className="btn btn-primary ml-2 w-[10rem]"
                      >
                        <img src="./AppleBtn.png" alt="" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="flex-1 max-w-[50%] max-[630px]:hidden">
                  <img
                    className="max-w-min relative top-[-80px] right-[170px] h-[435px] max-[1010px]:h-[375px] max-[1010px]:top-[-50px] max-[1010px]:right-[100px] max-[770px]:h-[320px] max-[770px]:top-[-20px] max-[770px]:right-[90px]"
                    src="./twoPhone.png"
                    alt="Phone Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
