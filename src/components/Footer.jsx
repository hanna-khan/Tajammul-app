/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FooterImage from "../assests/footer.png";
import FooterImage2 from "../assests/yellowlayer.svg";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div data-aos='' id="contact" className="w-[100vw] relative top-[8vh] font-poppins">
      {/* UPPER PART  */}
      <div className="p-3 mt-8 mb-2 z-50">
        <p className="text-[#273b60] font-extrabold text-3xl text-center mb-4">
          Get In Touch
        </p>
        <p className="text-[#273b60] font-bold text-2xl text-center">@</p>
      </div>

      {/* MAIN FOOTER  */}

      <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-gray-900 h-[26rem] relative">
        {/* UPPER EMAIL  */}
        <div className="text-center pt-4">
          <p className="text-[#273B60]">info@tajammul.app</p>
        </div>

        {/* MAIN LINKS  */}
        <div className="flex justify-center items-start gap-x-10 sm:pt-[2rem] pt-[1rem] pl-3 pr-3 sm:pl-0 sm:pr-0 text-white">
          <div>
            <p className="font-bold mb-2 sm:text-base text-xs">Contact Us</p>
            <p className="sm:text-base text-xs">@ info@tajammul.pk</p>
            <p className="font-bold mb-2">Contact Us</p>
            <p>@ info@tajammul.app</p>
          </div>

          <div className="flex flex-col">
            <p className="mb-2 font-bold sm:text-base text-xs">Our Company</p>

            <a href="#about" className="mb-2 sm:text-base text-xs">
              About
            </a>
            <a href="#serviceOfferings" className="mb-2 sm:text-base text-xs">
              Product
            </a>
            <a href="#serviceOfferings" className="mb-2 sm:text-base text-xs">
              Services
            </a>
            <a href="#contact" className="mb-2 sm:text-base text-xs">
              Contact us
            </a>
            <Link to="/privacy-policy-business">Privacy Policy Business</Link>
            <Link to="/privacy-policy-customer">Privacy Policy  Customer</Link>


          </div>

          <div>
            <p className="mb-6 font-bold sm:text-base text-xs">
              Social Contacts
            </p>
            <div className="flex gap-x-2 items-center flex-wrap">
              <div
                style={{ border: "2px solid white" }}
                className="w-[2rem] h-[2rem] rounded-full flex justify-center items-center"
              >
                <FaFacebookF />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[2rem] h-[2rem] rounded-full flex justify-center items-center"
              >
                <FaTwitter />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[2rem] h-[2rem] rounded-full flex justify-center items-center"
              >
                <FaLinkedinIn />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[2rem] h-[2rem] rounded-full flex justify-center items-center"
              >
                <FaInstagram />
              </div>
              <div
                style={{ border: "2px solid white" }}
                className="w-[2rem] h-[2rem] rounded-full flex justify-center items-center"
              >
                <FaYoutube />
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
      {/* <div className="absolute top-0 -z-50 w-[100vw] bg-slate-100">
        <img
          src={FooterImage2}
          alt=""
          className="h-[7rem] bg-cover w-[100vw]"
        />
      </div> */}
    </div>
  );
};

export default Footer;
