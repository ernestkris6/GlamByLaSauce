import React from 'react'
import succy from '../assets/succy.jpg'
import Button from './Button'
//ml-24 mr-64 mt-[-64px] mb-8 px-6 md:px-10 lg:px-48

export default function Banner() {
  return (
    <div className='relative bg-[#fff] mx-[14px] shadow-2xl pb-2 px-6 mt-4 mb-8 md:mb-24 md:mt-[-64px] lg:mt-[-142px] md:mr-[64px] md:ml-[48px] lg:mr-[132px] lg:ml-24 md:px-10 lg:px-24'>
              <div className='pt-6'>
                  <h3 className='font-semibold text-2xl'>About Me</h3>
              </div>
      <div className='flex flex-col md:flex-row gap-12 pt-3 mb-4'>
                      <img className='hidden md:flex md:max-w-[240px] rounded-md' src={succy} alt="" />
                        <div className='items-center text-gray-600 justify-center m-auto'>  
                          
                            <p className='text-[15px] font-semibold pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores nostrum ad architecto nihil, sequi tenetur cumque maiores vitae distinctio voluptatum molestiae, quasi quisquam culpa, animi iste similique minus ipsam?</p>
                        
                          <Button type="flat">See More</Button> 
                      </div>      
                 </div>

        
    </div>
  )
}


