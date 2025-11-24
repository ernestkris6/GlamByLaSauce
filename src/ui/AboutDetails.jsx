import React from 'react'
import succy from '../assets/succy.jpg'
import Button from '../ui/Button'

export default function AboutDetails() {
  return (
    <div className='px-6 md:px-10 lg:px-24'>
      <div className='text-center text-2xl py-6 text-gray-500'>
        <p>ABOUT <span className='font-medium'>US</span></p>
      </div>

     <div className='flex flex-col md:flex-row gap-12 mb-12'>
          <img className='w-full md:max-w-[360px] rounded-md' src={succy} alt="" />
            <div className='items-center text-gray-600  justify-center text-justify'>
              <h1 className='font-bold md:pt-2  mb:pb-6 gap-1'>Get to <span>KNOW US</span></h1>
            <p className='text-[15px]'>Welcome to Glam by La Sauce!!!

              At Glam by La Sauce, beauty isn’t just a look—it's an experience, a feeling, a moment to celebrate yourself. We believe that every person deserves to feel glamorous in their own way, and our mission is to make beauty fun, expressive, and effortlessly accessible for everyone.

              Born from a passion for creativity and a love for all things glam, Glam by La Sauce was created to inspire confidence through high-quality beauty essentials that elevate your everyday routine. From bold, statement-making styles to soft, natural radiance, we’re here to bring your vision to life—your way..</p> <br />

            <p className='text-[15px]'>Born from a passion for creativity and a love for all things glam, Glam by La Sauce was created to inspire confidence through high-quality beauty essentials that elevate your everyday routine. From bold, statement-making styles to soft, natural radiance, we’re here to bring your vision to life—your way.</p>

            <div className='mt-6 md:mt-12'>
              <h2 className='text-start text-gray-600  font-bold'>Our <span>VISION</span></h2>

            <p className='text-[15px]'>Our vision is to redefine beauty as a celebration of individuality—creating a space where every person feels seen, confident, and empowered. We strive to inspire self-expression through high-quality beauty solutions that honor every skin tone, every style, and every story.”</p>
            </div>
          </div>      
     </div>


      <div className='pt-12 mb-12'>
        <h2 className='font-bold pb-3 text-gray-800  text-center'>WHY <span>CHOOSE US</span></h2>

        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer'>
            <b>PREMIUM QUALITY:</b>
            <p>
              High-performing, long-lasting products made to enhance your natural beauty.</p>
          </div>

          <div className='border rounded-lg mt-2 mb-2 md:mt-0 md:mb-0 md:ml-2 md:mr-2 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer'>
          <b>INCLUSIVE FOR EVERYONE:</b>
          <p>Shades and styles that flatter every skin tone and personality—versatile and empowering.</p>
          </div>

          <div className='border rounded-lg px-10 md:px-12 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer'>
          <b>TREND-FORWARD GLAM:</b>
          <p>Modern, confidence-boosting designs for any look—either soft or bold, innovative, inspiring.</p>
          </div>
      </div>
          <div className='text-center mt-[-24px]'>
            <Button type='flat'>BOOK US NOW</Button>
          </div>
      </div>
    </div>
  )
}
