/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Feature = () => {
  return (
    <div className="w-full h-[881px] bg-stone-50">
      <div className="mx-[100px]">
        <div className="text-yellow-400 text-[70px] font-extrabold capitalize text-center">
          Features
        </div>
        <div className="flex container m-auto">
          <div className="flex-1">
            {" "}
            {/* <img
              className="w-[320px] h-[430px]"
              src="./mobile.png"
              alt="mobile image"
            /> */}
           <div className="inline-flex h-96 w-96 flex-row rounded-2xl bg-white drop-shadow-lg" />
           <div className="relative top-[200px] right-[50px] inline-flex h-96 w-96 flex-row rounded-2xl bg-white drop-shadow-lg" />
           <div className="inline-flex h-96 w-96 flex-row rounded-2xl bg-white drop-shadow-lg" />
           
           
          </div>
          <div className="flex-1">
            <div className="mt-[120px] w-[600px]">
              {/* <span className="text-[#273B60] text-[55px] font-semibold text-center">
                User
                Perspective
              </span> */}
              <div style={{color: '#F16427', fontSize: 52, fontWeight: '800', textTransform: 'capitalize', wordWrap: 'break-word'}}>User</div>
              <div style={{color: '#FDCE0C', fontSize: 69, fontWeight: '800', textTransform: 'capitalize', wordWrap: 'break-word'}}>Perspective</div>
            </div>
            <div className="text-lg font-normal leading-[28px] tracking-[0px] text-slate-700">
              user, you can browse down to a variety of restaurants and grocery
              stores and pick the one that best suits your needs. You will be
              able to choose from a variety of alternatives. You'll also get
              access to the booking calendar, which is updated with service
              platform availability. Simply shop, schedule appointments, and pay
              for your purchases without any hassle or additional expenses.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
