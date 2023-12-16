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
    <div
      data-aos=""
      id="contact"
      className="w-[100vw] relative top-[7vh] font-poppins"
    >
      {/* UPPER PART  */}
      <div className="mt-8 z-50 flex justify-center items-center flex-col">
        <p className="text-[#273b60] font-extrabold text-3xl  mb-4 pt-[1rem]">
          Get In Touch
        </p>
        <p className="text-[#273B60] text-[0.7rem] relative top-[1.5rem]">
          info@tajammul.app
        </p>
        <img
          src={AtTheRate}
          className="text-center h-[4rem] flex justify-center relative top-[-3rem] items-center"
        />
      </div>

      {/* MAIN FOOTER  */}

      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-900 h-[24rem] relative -z-50">
        {/* UPPER EMAIL  */}

        {/* MAIN LINKS  */}
        <div className="flex justify-center items-start gap-x-10 sm:pt-[2rem] pt-[1rem] pl-3 pr-3 sm:pl-0 sm:pr-0 text-white">
          <div>
            <p className="font-bold text-lg mb-2 sm:text-base text-xs">
              Contact Us
            </p>
            <p className="text-xs">@ info@tajammul.pk</p>
          </div>

          <div className="flex flex-col">
            <p className="mb-2 font-bold text-lg sm:text-base text-xs">
              Our Company
            </p>

            <a href="#about" className="mb-2 text-xs">
              About
            </a>
            <a href="#serviceOfferings" className="mb-2 text-xs">
              Product
            </a>
            <a href="#serviceOfferings" className="mb-2 text-xs">
              Services
            </a>
            <a href="#contact" className="mb-2 text-xs">
              Contact us
            </a>
            <Link to="/privacy-policy-business" className="text-xs">
              Privacy Policy Business
            </Link>
            <Link to="/privacy-policy-customer" className="text-xs">
              Privacy Policy Customer
            </Link>
          </div>

          <div>
            <p className="mb-6 font-bold text-lg text-xs">Social Contacts</p>
            <div className="flex gap-x-2 items-center flex-wrap">
              <div
                style={{ border: "2px solid white" }}
                className="w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center"
              >
                <FaFacebookF size={14} />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center"
              >
                <FaTwitter size={14} />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center"
              >
                <FaLinkedinIn size={14} />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center"
              >
                <FaInstagram size={14} />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center"
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
          <p className="text-[#273B60] text-center w-screen text-sm">
            Copyright © 2022 tajammul. All Rights Reserved
          </p>
        </div>
      </div>

      {/* FOOTER TOP IMAGE  */}
      <div className="absolute top-0 -z-50 w-[100vw] bg-gradient-to-r from-gray-900 via-blue-900 to-blue-900">
        <img
          src={FooterImage}
          alt=""
          className="h-[10rem] bg-cover w-[100vw] rotate-180"
        />
      </div>
    </div>
  );
};

export default Footer;
