import React from 'react'
import succy from '../assets/succy.jpg'
import Button from './Button'
import { FiCheckCircle } from 'react-icons/fi';
import imageLine from '../assets/image.png'


export default function Discount() {
  return (
    <div className='bg-[#fff] mx-[14px] shadow-2xl px-6 mt-4 mb-8 md:mb-24 md:mt-[64px] lg:mt-[78px] md:mr-[64px] md:ml-[48px] lg:mr-[132px] lg:ml-24 md:px-10 lg:px-24'>
       <div className='flex flex-col md:flex-row-reverse justify-between gap-12 mb-12'>
             <img className='w-full py-6 md:max-w-[360px]' src={succy} alt="" />
                <div className='text-black'>  
                    <div className='pt-8'>
                             <h2 className=' font-bold'><span>CHOOSE YOUR PLAN</span></h2>
                             <p className='text-start font-semibold text-2xl pt-4'>Get Discount</p>
                             <p className='text-start font-semibold text-2xl'>up to 60% off</p>
                             <p className='text-start font-semibold text-2xl space-x-3.5'>for Limited Time</p>
                             <img className='ml-12' src={imageLine} alt="" />
                             
                                
                             
                    </div>
                    <div className='pt-4 pb-4'>
                        <ul className='font-medium'>

                            <li className='flex flex-row items-center py-2'>
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
                                <p className='ml-2'>Wedding</p>
                            </li>

                            <li className='flex flex-row items-center py-2'>
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
                                <p className='ml-2'>SFX Makeup</p>
                            </li>

                            <li className='flex flex-row items-center py-2'>

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
                                <p className='ml-2'>Photo Shoot</p>
                            </li>

                            <li className='flex flex-row items-center py-2'>
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
                                <p className='ml-2'>Graduation</p>
                            </li>

                            
                        </ul>
                    </div>
                           <Button type="flat">Booking Now</Button> 
                </div>      
        </div> 
    </div>
  )
}





{/* <div className='pt-6'>
                  <h3 className='font-semibold text-2xl text-center md:text-start'>About Me</h3>
              </div>
                <div className='flex flex-col md:flex-row gap-12 pt-3 mb-4'>
                      <img className='hidden md:flex md:max-w-[240px] rounded-md' src={succy} alt="" />
                        <div className='items-center text-gray-600 justify-center m-auto'>  
                              <p className='text-[15px] font-semibold pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores nostrum ad architecto nihil, sequi tenetur cumque maiores vitae distinctio voluptatum molestiae, quasi quisquam culpa, animi iste similique minus ipsam?</p>
                                <div className='text-center md:text-start'>
                                  <Button type="flat">See More</Button>
                                </div> 
                      </div>      
                 </div> */}