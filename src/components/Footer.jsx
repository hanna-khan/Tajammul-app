import React from 'react'
import FooterImage from '../assests/footer.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' w-[100vw] relative top-[55vh] font-poppins'>

      {/* UPPER PART  */}
      <div className='p-3 mt-8 mb-2'>
        <p className='text-[#273b60] font-extrabold text-3xl text-center mb-4'>Get In Touch</p>
        <p className='text-[#273b60] font-bold text-2xl text-center'>@</p>
      </div>

      {/* MAIN FOOTER  */}

      <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-gray-900 h-[26rem] relative">

        {/* UPPER EMAIL  */}
        <div className='text-center pt-4'>
          <p className='text-[#273B60]'>info@tajammul.app</p>
        </div>

        {/* MAIN LINKS  */}
        <div className='flex justify-center items-start gap-x-10 sm:pt-[5rem] pt-[1rem] pl-3 pr-3 sm:pl-0 sm:pr-0 text-white'>

          <div>
            <p className='font-bold mb-2 sm:text-base text-xs'>Contact Us</p>
            <p className='sm:text-base text-xs'>@ info@tajammul.pk</p>
            <p className='font-bold mb-2'>Contact Us</p>
            <p>@ info@tajammul.app</p>
          </div>

          <div>
            <p className='mb-2 font-bold sm:text-base text-xs'>Our Company</p>
            <p className='mb-2 sm:text-base text-xs'>About</p>
            <p className='mb-2 sm:text-base text-xs'>Product</p>
            <p className='mb-2 sm:text-base text-xs'>Services</p>
            <p className='mb-2 sm:text-base text-xs'>Contact us</p>
          </div>

          <div>

            <p className='mb-6 font-bold sm:text-base text-xs'>Social Contacts</p>
            <div className='flex gap-x-2 items-center flex-wrap'>
              <div style={{border:"2px solid white"}} className='w-[2rem] h-[2rem] rounded-full flex justify-center items-center'>
                <FaFacebookF/>
              </div>
              <div style={{border:"2px solid white"}} className='w-[2rem] h-[2rem] rounded-full flex justify-center items-center'>
                <FaTwitter/>
              </div>
              <div style={{border:"2px solid white"}} className='w-[2rem] h-[2rem] rounded-full flex justify-center items-center'>
                <FaLinkedinIn/>
              </div>
              <div style={{border:"2px solid white"}} className='w-[2rem] h-[2rem] rounded-full flex justify-center items-center'>
                <FaInstagram/>
              </div>
              <div style={{border:"2px solid white"}} className='w-[2rem] h-[2rem] rounded-full flex justify-center items-center'>
                <FaYoutube/>
              </div>
            </div>

          </div>

        </div>

        {/* FOOTER IMAGE  */}
        <div className=' absolute bottom-0'>
          <img src={FooterImage} alt="" className='h-[7rem] bg-cover w-[100vw]' />
        </div>

        {/* FOOTER COPYRIGHT  */}
        <div className=' absolute bottom-2'>
          <p className='text-[#273B60] text-center w-screen text-sm'>Copyright © 2022 tajammul. All Rights Reserved</p>
        </div>

      </div>

    </div>
  )
}

export default Footer
