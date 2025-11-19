import React from 'react'
import succy from '../assets/succy.jpg'
import Button from '../ui/Button'

export default function About() {
  return (
    <div className='px-6 md:px-10 lg:px-24 mt-8'>
      <div className='text-center text-gray-600 mb-8 md:hidden'> 
        <h1 className='font-bold'>GET TO <span> KNOW US</span></h1>
      </div>

     <div className='flex flex-col md:flex-row gap-12 mb-12'>
          <img className='w-full md:max-w-[360px] rounded-md' src={succy} alt="" />
            <div className='items-center text-gray-600  justify-center'>
              <h1 className='hidden md:flex font-bold md:pt-2  mb:pb-6 gap-1'>Get to <span>KNOW US</span></h1>
            <p className='text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae inventore reiciendis totam illum qui labore sequi quibusdam. Cum minus optio modi odio officiis, saepe, soluta repudiandae mollitia eius accusamus aspernatur.</p> <br />

            <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos facere rem praesentium culpa cupiditate doloremque dolorem molestias incidunt necessitatibus eum, sunt deserunt fugit illo, eveniet a veritatis voluptatibus magni.</p>

            <div className='mt-6 md:mt-12'>
              <h2 className='text-start text-gray-600  font-bold'>Our <span>VISION</span></h2>

            <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores nostrum ad architecto nihil, sequi tenetur cumque maiores vitae distinctio voluptatum molestiae, quasi quisquam culpa, animi iste similique minus ipsam?</p>
            </div>
          </div>      
     </div>


      <div className='pt-12 mb-12'>
        <h2 className='font-bold pb-3 text-gray-800  text-center'>WHY <span>CHOOSE US</span></h2>

        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer'>
            <b>EFFICIENCY:</b>
            <p>Streamlined Appointment Scheduling That fits into Your Busy Lifestyle</p>
          </div>

          <div className='border rounded-lg mt-2 mb-2 md:mt-0 md:mb-0 md:ml-2 md:mr-2 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer'>
          <b>TOPNOTCH APPEARANCE:</b>
          <p>Access to A Network Of Trusted
          Healthcare Professionals In Your Area.</p>
          </div>

          <div className='border rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer'>
          <b>EXQUISITE SERVICE:</b>
          <p>Tailored Recommendations and Reminders
          To Help You Stay On Top of Your Health.</p>
          </div>
      </div>
      
      <div className='text-center mt-[-24px]'>
        <Button type='flat'>BOOK US NOW</Button>
      </div>
      </div>
    </div>
  )
}
