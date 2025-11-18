import React from 'react'
import succy from '../assets/succy.jpg'
//ml-24 mr-64 mt-[-64px] mb-8 px-6 md:px-10 lg:px-48

export default function Banner() {
  return (
    <div className='relative bg-[#fff] mx-[14px] shadow-2xl mt-4 mb-8 md:mb-24 pb-6 md:mt-[-64px] lg:mt-[-142px] md:mr-[64px] md:ml-[48px] lg:mr-[132px] lg:ml-24 px-6 md:px-10 lg:px-24'>
        <div className='flex flex-col md:flex-row'>
          <div className='pt-12 w-full md:w-1/3'>
            <p className='font-bold text-lg md:text-2xl text-center md:text-start pb-4'>About Me</p>
          
                <img className='hidden md:flex sm:w-64' src={succy} alt="" />
            
        </div>

        <div className='w-full sm:w-full align-middle sm:items-center sm:justify-center sm:pt-24 sm:pl-8 md:pt-32 md:pb-32'>
            <p className='text-justify text-sm md:text-md lg:text-xl leading-tight tracking-tight
            '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ex possimus? Esse numquam explicabo, harum deserunt animi inventore provident, quidem expedita sapiente labore tenetur debitis iure obcaecati cupiditate, veritatis quae?</p> <br />

            <p className='text-justify text-xs md:text-sm lg:text-lg leading-tight tracking-tight
            '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi laborum eos. </p>
        </div>
        </div>
    </div>
  )
}
