import React from 'react'
import { Link } from 'react-router-dom'
import dall from '../assets/dall.jpg'

export default function Logo() {
  return (
    <Link className='flex h-[4rem] w-[4rem] items-center justify-center overflow-hidden rounded-full bg-white px-[6px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:h-[6rem] md:w-[6rem] ">'  to='/'>
      {/* <strong>GLAM-BY-LASAUCE</strong> */}
      <img className='w-24 md:w-32 rounded-full' src={dall} alt="" />
    </Link>
  )
}


//h-[5rem] w-[5rem] rounded-full scale-[80%] cursor-pointer object-contain