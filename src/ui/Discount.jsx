import React from 'react'
import succy from '../assets/succy.jpg'
import Button from './Button'
import { FiCheckCircle } from 'react-icons/fi';
import imageLine from '../assets/image.png'


export default function Discount() {

  return (
    <section className='bg-[#fff] mx-[14px] shadow-2xl px-6 mt-4 mb-8 md:mb-24 md:mt-[64px] lg:mt-[78px] md:mr-[64px] md:ml-[48px] lg:mr-[132px] lg:ml-24 md:px-10 lg:px-24'>
       <div className='grid grid-cols-[1fr_1fr] justify-between gap-4 md:gap-12 xl:gap-x-18 md:mb-12'>
             <img className='order-last min-w-[120px] min-h-[360px] py-12 sm:w-full sm:h-full sm:py-6 sm:max-w-[360px]' src={succy} alt="" />
                <div className='text-black'>  
                    <div className='pt-12 sm:pt-8'>
                             <p className='text-xs sm:text-sm font-bold'><span>CHOOSE YOUR PLAN</span></p>
                             <p className='text-start font-semibold text-md sm:text-2xl pt-4'>Get Discount</p>
                             <p className='text-start font-semibold text-md  sm:text-2xl'>up to 60% off</p>
                             <p className='text-start font-semibold text-md sm:text-2xl sm:space-x-3.5'>for Limited Time</p>
                             <img className='hidden md:max-w-[360px] h-7 ml-10 sm:ml-12 sm:block' src={imageLine} alt="" />
                    
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
                            <a href="https://wa.me/+2348065292598?text=Hi%20GlamByLa_Sauce,%20I%E2%80%99interested%20in%20exploring%20your%20beauty%20services!" target="_blank" rel="noopener noreferrer">
                             <Button type="small">Reserve</Button>
                            </a>
                           </div>
                            <div className='hidden sm:block'>
                                <a href="https://wa.me/+2348065292598?text=Hi%20GlamByLa_Sauce,%20I%E2%80%99interested%20in%20exploring%20your%20beauty%20services!" target="_blank" rel="noopener noreferrer">
                                <Button type="flat">Book Now</Button>
                                </a>
                            </div> 
                </div>      
        </div> 
    </section>
  )
}
