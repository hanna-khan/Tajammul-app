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
import serviceGif from '../assests/servicegif.gif'

import DotGif from '../assests/rounded.gif'
const ServiceOfferings = () => {
  return (

    <div data-aos='zoom-out' id="serviceOfferings" className="pb-[15rem] relative w-screen flex justify-center items-center top-[20rem] flex-col font-poppins">

      {/* UPPER BOX  */}
      <div className="md:flex justify-between items-center w-[100%] h-fit bg-[#F8F8F8]">

        <div className="lg:pl-[2rem] pl-[1rem] flex-1 pt-[8rem] pb-[8rem] md:pt-0 md:pb-0">
          <h1 className="text-3xl font-bold mb-2 text-[#F16427]">Services</h1>
          <h1 className="text-4xl mb-2 font-bold text-[#FDCE0C]">Offerings</h1>
          <p className="text-[#273b60] text-sm mb-2 lg:w-[80%] tracking-wide w-[97%] sm:w-[90%] m-auto sm:m-0">Are you tired of going to service stations only to discover that they are all full and having to return without getting your services?Tajammul.pk saves the day by allowing you to pre-book your services based on their availability. We keep an updated calendar so that we can provide you with the best possible services. You can now book a time slot and get your services. We offer salon, clinical, catering, decoration, auto mechanic, and plumbing services, as well as the option of hiring labor or maids for home services. Save yourself hours of waiting in lines by scheduling your services according to your availability.</p>
        </div>

        <div className="flex-1 relative flex justify-center  items-center bg-[#051c45] h-[25rem] pt-3">
        <img src={serviceGif} alt="" className="h-[24rem] relative left-[10rem] " />
          <img src={RLImage} alt="" className="h-[13rem] mr-[-2rem] relative right-[11.5rem]" />
          <img src={RICenter} alt="" className="h-[18rem] z-50 relative right-[11.5rem]" />
          <img src={RImage} alt="" className="h-[13rem] ml-[-1.7rem] z-50 relative right-[11.5rem]" />
          <img className=" absolute right-0 top-[30%] h-[10rem]" src={Decorter1} alt="" srcset="" />
          <img src={CurveLine1} alt="" className=" absolute top-0 h-[100%]" />
        </div>

      </div>

      {/* LOWER BOX  */}
      <div className="md:flex relative justify-between items-center w-[100%] h-fit bg-[#F8F8F8]">

        <div className="flex-1 hidden  relative md:flex justify-center items-center bg-[#26395e] h-[25rem]">

        

          {/* MAIN SECTION  */}

          <div className="w-[100%] h-[100%] flex justify-center items-center">
            {/* CENTER GIF  */}

            <div className="relative h-[22rem]">
              <img src={DotGif} alt="" className="h-[22rem]" />
              <img src={RLImage} alt="" className="h-[15rem] absolute top-[4rem] left-[1rem]" />
              <img src={Center2Image} alt="" className="h-[18rem] absolute z-50 top-[3rem] left-[7rem]" />
              <img src={VegImage} alt="" className="h-[15rem] absolute top-[4rem] right-[0.3rem]" />
            </div>

          </div>

          {/* <div className="absolute top-[0rem] right-[25%] ">
            
            <img src={DotGif} alt="" className="h-[25rem] bg-cover w-[100%]" />

            <img src={RLImage} alt="" className="h-[15rem] absolute top-[5rem] left-[10%]" />
            <img src={Center2Image} alt="" className="h-[18rem] absolute top-[4rem] right-[30%]"/>

            <img src={VegImage} alt="" className="h-[15rem] ml-[-1.7rem] z-50 absolute top-[5rem] left-[18.7rem]" />
          </div> */}
        </div>

        <div className="flex-1 pl-[1rem] relative pt-[8rem] pb-[8rem] md:pt-0 md:pb-0">
          <h1 className="text-3xl font-bold mb-2 text-[#F16427]">Product</h1>
          <h1 className="text-4xl mb-2 font-bold text-[#FDCE0C]">Offerings</h1>
          <p className="text-[#273b60] text-sm mb-2 lg:w-[80%] tracking-wide w-[97%] sm:w-[90%] m-auto sm:m-0">Tajammul offers a wide range of products to satisfy your cravings, meet your demands, fulfill your desires and, most importantly, make your life easier. It includes everything from groceries to cuisine that is store-friendly. Snacks, fruits and vegetables, meat, milk, drinks and beverages, chocolates and sweets, household needs, party supplies, cosmetics, baby essentials, urgent pharmaceutical deliveries, frozen foods, and much more are all included in this product category. Also, now you can scroll through a variety of clothes and purchase what suits you best with just a few clicks away. </p>
          <img className="absolute right-0 top-[45%] h-[13rem]" src={Decorter3} alt="image" srcset="" />
        </div>


        <div className="flex  relative md:hidden justify-center items-center bg-[#26395e] h-[25rem] pt-3">
          <div className="w-[100%] h-[100%] flex justify-center items-center">
            {/* CENTER GIF  */}

            <div className="relative h-[22rem]">
              <img src={DotGif} alt="" className="h-[22rem]" />
              <img src={RLImage} alt="" className="h-[15rem] absolute top-[4rem] left-[0rem]" />
              <img src={Center2Image} alt="" className="h-[18rem] absolute top-[3rem] left-[6rem]" />
              <img src={VegImage} alt="" className="h-[15rem] absolute top-[4rem] right-[1.2rem]" />
            </div>

          </div>
        </div>

        {/* GIF  */}





      </div>

    </div>

  );
};

export default ServiceOfferings;
