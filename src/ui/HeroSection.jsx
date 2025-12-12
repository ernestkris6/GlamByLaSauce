import React from 'react'
import Button from './Button'
import unsplash1 from '../assets/unsplash1.png'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className='px-6 md:px-10 lg:px-24 pt-8'>
      <div className='flex flex-col md:flex-row-reverse gap-12 mb-12'>
                <img className='w-full md:max-w-[360px] rounded-md' src={unsplash1} alt="" />
                  <div className='items-center text-gray-600 justify-center'>  
                    <div className='mt-0 md:mt-6'>
                      <h2 className='text-start text-gray-600  font-bold'>GLAM BY <span>LA SAUCE</span></h2>
                      <p className='text-start uppercase font-bold text-4xl'><span>professional</span></p>
                      <p className='text-start uppercase font-bold text-4xl pb-8 '><span>makeup artist</span></p>
                      <p className='text-[15px] font-semibold pb-4'>Discover makeup crafted with intention, skill, and a touch of signature glam that make you radiant, confident, and authentically you.
                      </p>
                    </div>
                    <Link to='contact' onClick={()=> scrollTo(0,0)}><Button  type="span">Book Us Now</Button></Link> 
                </div>      
           </div>
      
    </section>
  )
}






//At Glam by La Sauce, every look is tailored to elevate your confidence and celebrate your unique beauty.













//gap-4 py-10 m-auto

//m-auto sm:mt-[42px] bg-cover bottom-0 h-20vh rounded-lg relative

//w-full md:max-w-[360px] rounded-md

//bg-gradient-to-r from-red-500 via-orange-500 to-purple-500


//https://www.figma.com/design/a5Qy7QsBDuwweCjBpUbwhZ/Makeup-website--Community-?node-id=0-1&p=f&t=n6z1lIEzUtqFni4e-0


{/* <div className='flex flex-col sm:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-24 md:mt-[-24]'>

      {/* Text and button */}

      // <div className='flex flex-col md:w-1/2 items-start justify-center pt-12 sm:pt-18 lg:pt-24 pb-8 sm:pb-24 md:pb-32 lg:pb-44'>
      //     <p className='uppercase font-bold text-4xl text-center'><span>professional</span></p>
      //     <p className='uppercase font-bold text-4xl pb-8 '><span>makeup artist</span></p>
      //     <div className='w-full font-semibold'>
      //       <p className='text-justify justify-center tracking-tight pb-2 md:pr-6 xl:pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum autem esse quae quos! Tenetur quos ea facilis necessitatibus molestias architecto esse rem harum culpa, dicta, sapiente fuga corporis unde!</p>
      //       <Button type="span">Booking Now</Button> 
      //     </div>
      // </div>

      {/*Image*/}
    //   <div className='md:w-1/2 md:gap-8 lg:pl-48 md:mt-8 xl:pl-72'>
    //     <img className='w-full md:max-w-[360px] rounded-md relative' src={unsplash1} alt="" />
    //   </div>
    // </div> */}