import React from "react";
import RLImage from '../assests/rls.png'
import RICenter from '../assests/rc.png'
import RImage from '../assests/rr.png'
import Decorter1 from '../assests/Decorator (3).png'
import CurveLine1 from '../assests/curveline1.png'
import Decorter2 from '../assests/Decorator (1).png'
import Decorter3 from '../assests/Decorator (4).png'

import Center2Image from '../assests/13.png'
import VegImage from '../assests/vegscreen.png'
const ServiceOfferings = () => {
  return (

    <div className=" relative top-[100vh] w-screen flex justify-center items-center flex-col font-poppins">

      {/* UPPER BOX  */}
      <div className="flex justify-between items-center w-[100%] h-fit bg-[#F8F8F8]">

        <div className="flex-1 pl-[10rem]">
          <h1 className="text-2xl mb-2 font-semibold text-[#F16427]">Services</h1>
          <h1 className="text-3xl mb-2 font-semibold text-[#FDCE0C]">Offerings</h1>
          <p className="text-sm font-semibold text-[#283D4B] w-[80%]">Are you tired of going to service stations only to discover that they are all full and having to return without getting your services?Tajammul.pk saves the day by allowing you to pre-book your services based on their availability. We keep an updated calendar so that we can provide you with the best possible services. You can now book a time slot and get your services. We offer salon, clinical, catering, decoration, auto mechanic, and plumbing services, as well as the option of hiring labor or maids for home services. Save yourself hours of waiting in lines by scheduling your services according to your availability.</p>
        </div>

        <div className="flex-1 relative flex justify-center items-center bg-gradient-to-br from-blue-800 to-blue-900 h-[25rem] pt-3">
          <img src={RLImage} alt="" className="h-[15rem] mr-[-2rem]" />
          <img src={RICenter} alt="" className="h-[20rem] z-50" />
          <img src={RImage} alt="" className="h-[15rem] ml-[-1.7rem] z-50" />
          <img className=" absolute right-0 top-[30%] h-[10rem]" src={Decorter1} alt="" srcset="" />
          <img src={CurveLine1} alt="" className=" absolute top-0 h-[100%]" />
        </div>

      </div>

      {/* LOWER BOX  */}
      <div className="flex justify-between items-center w-[100%] h-fit bg-[#F8F8F8]">

        <div className="w-[55.88%] relative flex justify-center items-center bg-gradient-to-br from-blue-800 to-blue-900 h-[25rem] pt-3">
          <img src={RLImage} alt="" className="h-[15rem] mr-[-2rem]" />
          <img src={Center2Image} alt="" className="h-[20rem] z-50" />
          <img src={VegImage} alt="" className="h-[15rem] ml-[-1.7rem] z-50" />
          <img className=" absolute left-0 top-[0%] h-[7rem]" src={Decorter2} alt="" srcset="" />
        </div>

        <div className="flex-1 pl-[3rem] relative">
          <h1 className="text-2xl mb-2 font-semibold text-[#F16427]">Product</h1>
          <h1 className="text-3xl mb-2 font-semibold text-[#FDCE0C]">Offerings</h1>
          <p className="text-sm font-semibold text-[#283D4B] w-[80%]">Tajammul offers a wide range of products to satisfy your cravings, meet your demands, fulfill your desires and, most importantly, make your life easier. It includes everything from groceries to cuisine that is store-friendly. Snacks, fruits and vegetables, meat, milk, drinks and beverages, chocolates and sweets, household needs, party supplies, cosmetics, baby essentials, urgent pharmaceutical deliveries, frozen foods, and much more are all included in this product category. Also, now you can scroll through a variety of clothes and purchase what suits you best with just a few clicks away. </p>
          <img className="absolute right-0 top-[45%] h-[13rem]" src={Decorter3} alt="image" srcset="" />
        </div>


      </div>

    </div>

  );
};

export default ServiceOfferings;
