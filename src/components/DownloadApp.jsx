/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const DownloadApp = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[500px]">
        <div className="w-full h-[250px] bg-[#FDCE0C] overflow-visible">
          <div className="mx-[100px]">
            <div className="container m-auto justify-around">
              <div className="flex mx-[100px]">
                <div className="flex-1 max-w-[50%] ml-[80px]">
                  <div className="text-[#273B60] text-[42px] font-extrabold capitalize leading-[4.5rem] text-left">
                    Download App
                  </div>
                  <div className="text-lg font-normal leading-[28px] tracking-[0px] text-slate-700">
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
                <div className="flex-1 max-w-[50%]">
                  <img
                    className="max-w-fit relative top-[-80px] right-[170px] h-[435px]"
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
