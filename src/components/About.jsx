/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full h-[881px] bg-stone-50">
        <div className="mx-[100px]">
          <div className="text-yellow-400 text-[70px] font-extrabold capitalize text-center">
            About us
          </div>
          <div className="flex container m-auto">
            <div className="flex-1">
              {" "}
              {/* Add ml-4 for left margin */}
              <img
                className="w-[320px] h-[430px]"
                src="./mobile.png"
                alt="mobile image"
              />
            </div>
            <div className="flex-1">
              <div className="mt-[120px] w-[600px] flex">
                <img src="./orangeBag.png" alt="" />
                <span className="ml-2 text-[#273B60] text-[55px] font-semibold text-center">
                  tajammul.app
                </span>
              </div>
              <div className="text-right text-orange-500 text-[12px] font-bold leading-[23px] mr-[170px]">
                Shopping Made Easy
              </div>
              <div className="text-lg font-medium leading-[28px] tracking-[0px] text-slate-700">
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
