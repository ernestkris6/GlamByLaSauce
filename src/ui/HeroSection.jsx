import React from 'react'
import Button from './Button'
import unsplash1 from '../assets/unsplash1.png'

export default function HeroSection() {
  return (
    <div className='flex flex-col sm:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-24'>

      {/* Text and button */}

      <div className='flex flex-col md:w-1/2 items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:pb-[-30px]'>
          <p className='uppercase font-bold text-4xl text-center'><span>professional</span></p>
          <p className='uppercase font-bold text-4xl '><span>makeup artist</span></p>
          <div className='mt-4 w-full font-semibold'>
            <p className='text-justify justify-center tracking-tight pb-2 md:pr-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum autem esse quae quos! Tenetur quos ea facilis necessitatibus molestias architecto esse rem harum culpa, dicta, sapiente fuga corporis unde!</p>
          </div>
          <div className='md:mb-8'>
            <Button type="span">Booking Now</Button> 
          </div>
      </div>

      {/*Image*/}
      <div className='md:w-1/2 md:gap-8 lg:pl-48 md:mt-8 xl:pl-64'>
        <img className='w-full md:max-w-[360px] rounded-md relative' src={unsplash1} alt="" />
      </div>
    </div>
  )
}

//m-auto sm:mt-[42px] bg-cover bottom-0 h-20vh rounded-lg relative

//w-full md:max-w-[360px] rounded-md

//bg-gradient-to-r from-red-500 via-orange-500 to-purple-500


//https://www.figma.com/design/a5Qy7QsBDuwweCjBpUbwhZ/Makeup-website--Community-?node-id=0-1&p=f&t=n6z1lIEzUtqFni4e-0