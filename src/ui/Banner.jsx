import React from 'react'
import succy from '../assets/succy.jpg'
import Button from './Button'
import { Link } from 'react-router-dom'
//ml-24 mr-64 mt-[-64px] mb-8 px-6 md:px-10 lg:px-48

export default function Banner() {
  return (
    <div className='relative bg-[#fff] mx-[14px] shadow-2xl pb-2 px-6 mt-4 mb-8 md:mb-24 md:mt-[-64px] lg:mt-[-142px] md:mr-[64px] md:ml-[48px] lg:mr-[132px] lg:ml-24 md:px-10 lg:px-24'>
              <div className='pt-6'>
                  <h3 className='font-semibold text-2xl text-center md:text-start'>About Me</h3>
              </div>
                <div className='flex flex-col md:flex-row gap-12 pt-3 mb-4'>
                      <img className='hidden md:flex md:max-w-[240px] rounded-md' src={succy} alt="" />
                        <div className='items-center text-gray-600 justify-center m-auto'>  
                              <p className='text-[15px] font-semibold pb-4 text-justify'>
                                Hi, I’m SUCCESS CHRISTOPHER, the artist behind Glam by La Sauce. I’m passionate about creating looks that highlight your natural beauty while reflecting your personal style. From soft glam to bold transformations, my goal is to make you feel confident, radiant, and uniquely you—one brush stroke at a time.</p>
                                <div className='text-center md:text-start'>
                                  <Link onClick={()=> scrollTo(0,0)} to='about'>
                                    <Button type="flat">See More</Button>
                                  </Link>
                                </div> 
                        </div>      
                 </div>
    </div>
  )
}


