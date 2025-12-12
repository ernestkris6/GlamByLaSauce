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
          <div className='flex flex-col justify-center items-start gap-2'>
            <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-600 pb-4'>Onike Yaba, Lagos Nigeria</p>
            <div className='text-gray-600'>
                <a href="https://wa.me/+2348065292598?text=Hi%20GlamByLa_Sauce,%20I%E2%80%99interested%20in%20exploring%20your%20beauty%20services!"
                target='_blank'>
                  <p>Tel/WhatsApp: (+234) 8065292598</p>
                </a>
                <a href="mailto:succychris6@gmail.com"
                   target='_blank'>
                  <p>Email: succychris6@gmail.com</p>
                </a>
                <a href="https://www.instagram.com/glamby_lasauce?igsh=NTIhYWJwZDN6dWIz&utm_-source=gr">
                  <p>Instagram: glamby_lasauce</p>
                </a>
                  <p  className='text-lg font-semibold pt-4 text-gray-600'>ACTIVITIES at GLAM-BY-LASAUCE</p>
                  <p className='text-gray-500 py-4'>Learn more about our activities and events.</p>
              </div>
            <a href="https://www.instagram.com/glamby_lasauce?igsh=NTIhYWJwZDN6dWIz&utm_-source=gr" target="_blank" rel="noopener noreferrer">
            <Button type='flat'>Explore more</Button>
            </a>
          </div>
        </section>
    </div>
  )
}



