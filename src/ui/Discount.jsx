import React from 'react'
import succy from '../assets/succy.jpg'
import Button from './Button'
import { FiCheckCircle } from 'react-icons/fi';
import imageLine from '../assets/image.png'


export default function Discount() {


  return (
    <div className='bg-[#fff] mx-[14px] shadow-2xl px-6 mt-4 mb-8 md:mb-24 md:mt-[64px] lg:mt-[78px] md:mr-[64px] md:ml-[48px] lg:mr-[132px] lg:ml-24 md:px-10 lg:px-24'>
       <div className='flex flex-row-reverse justify-between gap-12 mb-12'>
             <img className='max-w-[180px] min-h-[360px] py-12 sm:w-full sm:h-full sm:py-6 sm:max-w-[360px]' src={succy} alt="" />
                <div className='text-black'>  
                    <div className='pt-12 sm:pt-8'>
                             <p className='text-xs sm:text-sm font-bold'><span>CHOOSE YOUR PLAN</span></p>
                             <p className='text-start font-semibold text-xs sm:text-2xl pt-4'>Get Discount</p>
                             <p className='text-start font-semibold text-xs  sm:text-2xl'>up to 60% off</p>
                             <p className='text-start font-semibold text-xs sm:text-2xl sm:space-x-3.5'>for Limited Time</p>
                             <img className='hidden w-24 h-4 ml-10 sm:w-full sm:h-full sm:ml-12 sm:block' src={imageLine} alt="" />
                    
                    </div>
                        <div className='pt-2 pb-2 sm:pt-4 sm:pb-4'>
                            <ul className='font-medium'>
                                <li className='flex flex-row items-center py-0.5 sm:py-2'>
                                    {/*SVG_1*/}
                                <svg width="0" height="0">
                                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="#92400E" offset="0%" />
                                        <stop stopColor="#DF8908" offset="100%" />
                                    </linearGradient> 
                                </svg>

                                <FiCheckCircle 
                                    style={{
                                        stroke: "url(#blue-gradient)" 
                                    }} /> 
                                    <p className='text-xs sm:text-lg ml-2'>Wedding</p>
                                </li>

                                <li className='flex flex-row items-center py-0.5 sm:py-2'>
                                    {/*SVG_2*/}
                                <svg width="0" height="0">
                                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="#92400E" offset="0%" />
                                        <stop stopColor="#DF8908" offset="100%" />
                                    </linearGradient> 
                                </svg>

                                <FiCheckCircle 
                                    style={{
                                        stroke: "url(#blue-gradient)" 
                                    }} /> 
                                    <p className='text-xs sm:text-lg ml-2'>SFX Makeup</p>
                                </li>

                                <li className='flex flex-row items-center py-0.5 sm:py-2'>

                                    {/*SVG_3*/}
                                <svg width="0" height="0">
                                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="#92400E" offset="0%" />
                                        <stop stopColor="#DF8908" offset="100%" />
                                    </linearGradient> 
                                </svg>

                                <FiCheckCircle 
                                    style={{
                                        stroke: "url(#blue-gradient)" 
                                    }} /> 
                                    <p className='text-xs sm:text-lg ml-2'>Photo Shoot</p>
                                </li>

                                <li className='flex flex-row items-center py-0.5 sm:py-2'>
                                    {/*SVG_4*/}
                                <svg width="0" height="0">
                                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="#92400E" offset="0%" />
                                        <stop stopColor="#DF8908" offset="100%" />
                                    </linearGradient> 
                                </svg>

                                <FiCheckCircle 
                                    style={{
                                        stroke: "url(#blue-gradient)" 
                                    }} /> 
                                    <p className='text-xs sm:text-lg ml-2'>Graduation</p>
                                </li>
                            </ul>
                        </div>
                           <div className='block sm:hidden'>
                             <Button type="small">Booking Now</Button>
                           </div>
                            <div className='hidden sm:block'>
                                <Button type="flat">Booking Now</Button>
                            </div> 
                </div>      
        </div> 
    </div>
  )
}
