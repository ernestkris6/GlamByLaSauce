import React from 'react'
import succy from '../assets/succy.jpg'
import Button from '../ui/Button'


export default function Contact() {
  return (
    <div className='px-6 md:px-10 lg:px-24'>
      <div className='text-center text-2xl py-6 text-gray-500'>
        <p>CONTACT <span className='font-medium'>US</span></p>
      </div>

      <div className='flex flex-col md:flex-row my-10 justify-center gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={succy} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'>Bariga, Lagos Nigeria</p>
            <p className='text-gray-500'>Tel/WhatsApp: (234) 8065292598 <br /> Email: succychris675@gmail.com</p>
            <p  className='text-lg font-semibold text-gray-600'>ACTIVITIES at GLAM-BY-LASAUCE</p>
            <p className='text-gray-500'>Learn more about our activities and events.</p>
            {/* <button className='border py-3 px-6 bg-white hover:bg-primary hover:text-white duration-500 transition-all'>Explore more</button> */}
            <Button type='flat'>Explore more</Button>
          </div>
        </div>
    </div>
  )
}
