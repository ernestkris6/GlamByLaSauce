import React from 'react'
import contactImg2 from '../assets/contactImg2.jpg'
import Button from '../ui/Button'


export default function ContactDetails() {
  return (
    <div className='px-6 md:px-10 lg:px-24'>
      <div className='text-center text-2xl py-2 text-gray-500'>
        <p>CONTACT <span className='font-medium'>US</span></p>
      </div>

      <section className='flex flex-col md:flex-row my-10 justify-center gap-10 mb-28 text-sm'>
          <img className='w-full lg:max-h-[65vh] md:max-w-[360px]' src={contactImg2} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'>Onike Yaba, Lagos Nigeria</p>

            <p className='text-gray-500'>Tel/WhatsApp: (234) 8065292598 <br /> Email: succychris6@gmail.com <br /> Instagram: glamby_lasauce</p>

            <p  className='text-lg font-semibold text-gray-600'>ACTIVITIES at GLAM-BY-LASAUCE</p>
            <p className='text-gray-500'>Learn more about our activities and events.</p>
            <Button type='flat'>Explore more</Button>
          </div>
        </section>
    </div>
  )
}



