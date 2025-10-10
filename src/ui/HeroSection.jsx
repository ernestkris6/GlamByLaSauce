import React from 'react'
import Button from './Button'
import unsplash1 from '../assets/unsplash1.png'

export default function HeroSection() {
  return (
    <div className='flex flex-col sm:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-24'>

      {/* Text and button */}

      <div className='flex flex-col md:w-1/2 items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
          <p className='uppercase font-bold text-4xl text-center'>professional</p>
          <p className='uppercase font-bold text-4xl '>makeup artist</p>
          <div className='mt-4 w-full font-semibold'>
            <p className='justify-center pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum autem esse quae quos! Tenetur quos ea facilis necessitatibus molestias architecto esse rem harum culpa, dicta, sapiente fuga corporis unde!</p>
          </div>
          <Button type="primary">Booking Now</Button> <br />
          {/* <Button type="flat">Booking Now</Button> */}
      </div>



      {/*Image*/}
      <div className='md:w-1/2 relative'>
        <img className='m-auto bg-cover bottom-0 h-20dvh rounded-lg relative' src={unsplash1} alt="" />
      </div>
    </div>
  )
}


//https://www.figma.com/design/a5Qy7QsBDuwweCjBpUbwhZ/Makeup-website--Community-?node-id=0-1&p=f&t=n6z1lIEzUtqFni4e-0