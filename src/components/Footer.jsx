/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FooterImage from "../assests/footer.png";
import AtTheRate from "../assests/attherate.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div data-aos="" id="contact" className="w-[100vw] relative top-[7vh] font-poppins ">
      {/* UPPER PART  */}
      <div className="mt-8 z-50 flex justify-center items-center flex-col mb-[1rem] sm:mb-[0.6rem] ">
        <p className="text-[#273b60] font-extrabold text-3xl mb-4 pt-[1rem]">
          Get In Touch
        </p>
        <p className="text-[#273B60]   max-sm:text-[7px] text-[0.7rem] relative top-[1rem] sm:top-[1.5rem]">
          info@tajammul.app
        </p>
        <img
          src={AtTheRate}
          className="text-center h-[4rem] flex justify-center relative top-[-3rem] items-center"
        />
      </div>

      {/* MAIN FOOTER  */}

      <div className=" h-[24rem] relative bg-gradient-to-r from-gray-900 via-blue-900 to-blue-900">
        {/* UPPER EMAIL  */}

        {/* MAIN LINKS  */}
        <div className="flex justify-center bg-gradient-to-r from-gray-900 via-blue-900 to-blue-900 items-start gap-x-10 sm:pt-[2rem] pt-[1rem] pl-3 pr-3 sm:pl-0 sm:pr-0 text-white w-screen">
          <div className="max-sm:pt-[1rem]">
            <p className="font-bold text-lg mb-2 sm:text-base max-sm:text-[14px]">
              Contact Us
            </p>
            <p className="text-xs max-sm:text-[10px] hover:text-[#6d96e0] transition-all ease-in-out cursor-pointer">@ info@tajammul.pk</p>
          </div>

          <div className="flex flex-col max-sm:pt-[1rem]">
            <p className="mb-2 font-bold text-lg sm:text-base max-sm:text-[14px]">
              Our Company
            </p>
            <a href="#about" className="mb-2 text-xs max-sm:text-[10px] cursor-pointer hover:text-[#6d96e0] transition-all ease-in-out">
              About
            </a>
            <a href="#serviceOfferings" className="mb-2 text-xs max-sm:text-[10px] cursor-pointer hover:text-[#6d96e0] transition-all ease-in-out">
              Product
            </a>
            <a href="#serviceOfferings" className="mb-2 text-xs max-sm:text-[10px] cursor-pointer hover:text-[#6d96e0] transition-all ease-in-out">
              Services
            </a>
            <a href="#contact" className="mb-2 text-xs max-sm:text-[10px] cursor-pointer hover:text-[#6d96e0] transition-all ease-in-out">
              Contact us
            </a>
            <Link to="/privacy-policy-business" className="text-xs pb-2 cursor-pointer max-sm:text-[10px] hover:text-[#6d96e0] transition-all ease-in-out">
              Privacy Policy Business
            </Link>
            <Link to="/privacy-policy-customer" className="text-xs cursor-pointer max-sm:text-[10px] hover:text-[#6d96e0] transition-all ease-in-out">
              Privacy Policy Customer
            </Link>
          </div>

          <div className="max-sm:pt-[1rem]">
            <p className="mb-6 font-bold text-lg max-sm:text-[14px]">Social Contacts</p>
            <div className="flex gap-x-2 items-center flex-wrap justify-between">
              <div
                style={{ border: "2px solid white" }}
                className="w-[1.5rem] hover:bg-[#6d96e0] cursor-pointer h-[1.5rem] rounded-full flex justify-center items-center max-sm:w-[1.3rem] max-sm:h-[1.3rem]"
              >
                <FaFacebookF size={14} />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[1.5rem] h-[1.5rem] hover:bg-[#6d96e0] cursor-pointer rounded-full flex justify-center items-center max-sm:w-[1.3rem] max-sm:h-[1.3rem]"
              >
                <FaTwitter size={14} />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[1.5rem] h-[1.5rem] hover:bg-[#6d96e0] cursor-pointer rounded-full flex justify-center items-center max-sm:w-[1.3rem] max-sm:h-[1.3rem]"
              >
                <FaLinkedinIn size={14} />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[1.5rem] h-[1.5rem] hover:bg-[#6d96e0] cursor-pointer rounded-full flex justify-center items-center max-sm:w-[1.3rem] max-sm:h-[1.3rem]"
              >
                <FaInstagram size={14} />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[1.5rem] h-[1.5rem] hover:bg-[#6d96e0] cursor-pointer rounded-full flex justify-center items-center max-sm:w-[1.3rem] max-sm:h-[1.3rem]"
              >
                <FaYoutube size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER IMAGE  */}
        <div className=" absolute bottom-0">
          <img
            src={FooterImage}
            alt=""
            className="h-[7rem] bg-cover w-[100vw]"
          />
        </div>

        {/* FOOTER COPYRIGHT  */}
        <div className=" absolute bottom-2">
          <p className="text-[#273B60] text-center w-screen text-sm max-sm:text-[12px]">
            Copyright © 2022 tajammul. All Rights Reserved
          </p>
        </div>
      </div>

      {/* FOOTER TOP IMAGE  */}
      <div className="absolute top-0 -z-50 w-[100vw] bg-gradient-to-r from-gray-900 via-blue-900 to-blue-900">
        <img
          src={FooterImage}
          alt=""
          className="h-[10rem] bg-cover w-[100vw]  rotate-180"
        />
      </div>
    </div>
  );
};

export default Footer;
