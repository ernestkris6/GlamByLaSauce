import React from 'react'

export default function Works() {
  return (
    <div className='px-6 md:px-10 lg:px-24'>
      <div className='text-center text-2xl text-gray-500 py-6'>
        <p>OUR <span className='font-medium'>WORKS</span></p>
      </div>

      <h3 className='py-4 font-medium'>Welcome to our Catalogue...a place of beautiful experiences.</h3>


      <h1 className='text-center font-extrabold text-2xl pb-4'>C O M I N G -  S O O N 😎</h1>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white duration-500 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined Appointment Scheduling That fits into Your Busy Lifestyle</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white duration-500 text-gray-600 cursor-pointer'>
        <b>CONVENIENCE:</b>
        <p>Access to A Network Of Trusted
        Healthcare Professionals In Your Area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-red-200 hover:text-red-700 duration-500 text-gray-600 cursor-pointer'>
        <b>PERSONALIZATION:</b>
        <p>Tailored Recommendations and Reminders
        To Help You Stay On Top of Your Health.</p>
        </div>
      </div>
    </div>
  )
}
