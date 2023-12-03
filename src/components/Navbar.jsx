import React, { useState } from 'react'
import Logo from '../assests/tajamul.png'
import HalfCircle from '../assests/navCircle.png'
import Circle from '../assests/cicle.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi'
import { navLinks } from '../constants/navData';

const Navbar = () => {

    const [showNavLinks, setshowNavLinks] = useState(false)
    return (

        <div className='w-screen  pb-10 relative'>

            {/* NAVBAR  */}
            <div className='flex absolute top-[2rem] justify-center items-center w-[100%] h-fit z-50'>

                {/* MAIN NAVBAR  */}
                <div className='w-[90%] lg:w-[85%] h-[100%] shadow-navbarShadow bg-white flex justify-between items-center pl-2 pr-2 relative'>

                    {/* LOGO SECTION  */}
                    <div>
                        <img src={Logo} alt="" className='lg:h-[3rem] h-[2rem]' />
                    </div>

                    {/* NAVLINKS SECTION  */}
                    <div className='sm:flex hidden gap-x-3 items-center p-0 bg-none '>
                        {
                            navLinks?.map((item, index) => {
                                return (
                                    <p key={index + 1} className='text-[#313131] text-sm lg:text-base font-poppins cursor-pointer'>{item?.title}</p>
                                )
                            })
                        }
                    </div>

                    {/* RESPONSIVE NAVLINK SECTION  */}
                    {
                        showNavLinks && (
                            <div className='absolute right-0 top-[2rem] block sm:hidden w-[100%] pt-5 pb-5 pl-3 bg-white '>
                                {
                                    navLinks?.map((item, index) => {
                                        return (
                                            <p key={index + 1} className='text-[#313131] mb-2 text-sm font-poppins cursor-pointer'>{item?.title}</p>
                                        )
                                    })
                                }
                            </div>

                        )
                    }

                    {/* SOCIALLINKS SECTION  */}

                    <div className='flex gap-x-3 items-center'>
                        <FaFacebookF className='text-[#F16427] text-sm lg:text-lg' />
                        <FaInstagram className='text-[#F16427] text-sm lg:text-lg' />
                        <FaTwitter className='text-[#F16427] text-sm lg:text-lg' />
                        <FaLinkedinIn className='text-[#F16427] text-sm lg:text-lg' />
                        <GiHamburgerMenu onClick={() => setshowNavLinks(!showNavLinks)} className='text-[#F16427] text-sm lg:text-lg block sm:hidden' />
                    </div>

                </div>

            </div>

            {/* NAVBAR DECORATORS  */}

            <div>
                {/* RIGHT CIRCLE  */}
                <div className='absolute right-0 top-0'>
                    <img src={Circle} alt="" className='md:h-[10rem] h-[6rem]' />
                </div>

                {/* LEFT CIRCLE  */}
                <div className='absolute left-0 top-0'>
                    <img src={HalfCircle} alt="" className='md:h-[13rem] h-[7rem]' />
                </div>

            </div>


        </div>
    )
}

export default Navbar

