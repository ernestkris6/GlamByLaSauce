import React from 'react';
import succy from '../assets/succy.jpg'
import Button from './Button';


export default function Discount() {
  return (

    <div className='relative bg-[#fff] mx-[14px] shadow-2xl mt-4 mb-8 md:mb-24 pb-6 md:mt-[64px] lg:mt-[42px] md:mr-[64px] md:ml-[48px] lg:mr-[132px] lg:ml-24 px-6 md:px-10 lg:px-24'>
        <div className='flex flex-col md:flex-row'>
                    <p>CHOOSE YOUR PLAN</p>
                        <div>
                            <p>Get Discount up to</p>
                            <p>up to 60% off</p>
                            <p>for Limited Time</p>
                        </div>

                        <div>
                            <ul>
                                <li>Wedding</li>
                                <li>Photo Shoot</li>
                                <li>SFX Makeup</li>
                                <li>Graduation</li>
                            </ul>
                            <Button type='flat'>BOOKING NOW</Button>
                        </div>
                        <div>
                            <img className='w-48' src={succy} alt="" />
                        </div>
        </div>
    </div>

        // <div className='bg-[#fff]'>
                


        //     </div>
   
  )
}

{/* <div className='pt-12 w-full md:w-1/3'>
                   
                  
                        <img className='hidden md:flex sm:w-64' src={succy} alt="" />
                    
                </div> */}