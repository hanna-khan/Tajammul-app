import React from 'react'
import AppleButton from '../assests/AppleBtn.png'
import GoogleButton from '../assests/GoogleBtn.png'
import LeftCard from '../assests/leftcard.png'
import RightCard from '../assests/rightcard.png'
import Line from '../assests/line.png'
import Message from '../assests/msg.png'
import Message2 from '../assests/msg2.png'
import MobileNav from '../assests/mobileNav.png'
import MobileScreen from '../assests/mobilescreen.png'
import MobileBg from '../assests/bg.png'



const Hero = () => {
  return (

    <div className='w-screen relative font-poppins'>


      {/* MAIN HERO SECTION CODE  */}
      <div className='flex'>

        {/* LEFT SECTION  */}
        <div className=' absolute top-[7rem] left-[9rem]'>

          {/* TEXT  */}
          <div>
            <h1 className='text-[#F16427] text-3xl font-bold mb-2'>Life</h1>
            <h1 className='text-[#fdce0c] text-4xl font-bold mb-2'>Made Easy</h1>
            <p className='text-[#273b60] text-sm mb-2 w-[40%] tracking-wide'>Tajammul.app is a complete eCommerce solution that aims to ease your life by providing you with online delivery services for food, grocery and other essentials. Not only do we serve you with the best of our quality products, but with Tajammul.app you can book your services anytime and anywhere, by tracking the availability of the restaurants, clinics and salons. You can book both, as a merchant and get profits, as well as book as a consumer and avail offered services.</p>
          </div>

          {/* BUTTONS  */}
          <div className=' flex gap-4 items-center mt-3'>
            <img src={GoogleButton} alt="" className='h-[2.8rem]' />
            <img src={AppleButton} alt="" className='h-[2.8rem]' />
          </div>

        </div>

        {/* RIGHT SECTION  */}

        <div className=' w-screen relative'>

          {/* MOBILE BACKGROUND BLACK */}
          <div className='absolute right-[12rem] top-[7rem] pb-[1rem]'>
            <img src={MobileBg} alt="" className='h-[30rem]' />
          </div>

          {/* MOBILE MAIN SCREEN */}
          <div className='absolute right-[12.7rem] top-[8rem] pb-[1rem]'>
            <img src={MobileScreen} alt="" className='h-[28rem]' />
          </div>

          {/* LEFT SIDE DECORATERS */}

          <div>
            <div className='absolute right-[28.5rem] top-[7.3rem]'>
              <img src={Message} alt="" />
            </div>

            <div className='absolute right-[27rem] top-[12.3rem]'>
              <img src={LeftCard} alt="" />
            </div>

            <div className='absolute right-[22.5rem] top-[30.3rem]'>
              <img src={MobileNav} alt="" />
            </div>
          </div>

          {/* RIGHT SIDE DECORATORS  */}
          <div>

            <div className='absolute right-[3.5rem] top-[13.3rem]'>
              <img src={Message2} alt="" />
            </div>

            <div className='absolute right-[4.7rem] top-[14.5rem] font-bold text-white'>
              <p>Products</p>
            </div>

            <div className='absolute right-[3rem] top-[18.3rem]'>
              <img src={RightCard} alt="" className='h-[14rem]' />
            </div>

            <div className='absolute right-[7.7rem] top-[36.5rem]'>
              <img src={Line} alt="" className='' />
            </div>

          </div>
        </div>

      </div>


    </div>

  )
}

export default Hero