import React from 'react'
import Logo from '../assests/tajamul.png'
import HalfCircle from '../assests/navCircle.png'
import Circle from '../assests/cicle.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { navLinks } from '../constants/navData';

const Navbar = () => {
    return (

        <div className='w-screen  pb-10 relative'>

            {/* NAVBAR  */}
            <div className='flex absolute top-[2rem] justify-center items-center w-[100%] h-fit z-50'>

                {/* MAIN NAVBAR  */}
                <div className='w-[80%] h-[100%] shadow-navbarShadow bg-white flex justify-between items-center pl-2 pr-2'>

                    {/* LOGO SECTION  */}
                    <div>
                        <img src={Logo} alt="" className='h-[3rem]' />
                    </div>

                    {/* NAVLINKS SECTION  */}

                    <div className='flex gap-x-3 items-center'>
                        {
                            navLinks?.map((item, index) => {
                                return (
                                    <p key={index + 1} className='text-[#313131] font-poppins cursor-pointer'>{item?.title}</p>
                                )
                            })
                        }
                    </div>

                    {/* SOCIALLINKS SECTION  */}

                    <div className='flex gap-x-3 items-center'>
                        <FaFacebookF className='text-[#F16427] text-lg' />
                        <FaInstagram className='text-[#F16427] text-lg' />
                        <FaTwitter className='text-[#F16427] text-lg' />
                        <FaLinkedinIn className='text-[#F16427] text-lg' />
                    </div>

                </div>

            </div>

            {/* NAVBAR DECORATORS  */}

            <div>
                {/* RIGHT CIRCLE  */}
                <div className=' absolute right-0 top-0'>
                    <img src={Circle} alt="" className='h-[13rem]' />
                </div>
                {/* LEFT CIRCLE  */}
                <div className=' absolute left-0 top-0'>
                    <img src={HalfCircle} alt="" className='h-[13rem]' />
                </div>
            </div>


        </div>
    )
}

export default Navbar
