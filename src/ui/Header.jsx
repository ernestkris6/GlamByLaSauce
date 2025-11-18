import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../ui/Logo'

export default function Header() {

  //items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400
  return (
    <div className='flex justify-between px-6 md:px-10 lg:px-24 py-8'>
      <Logo />
  
      <ul className='hidden md:flex space-x-6 mx-8'>
       <li>
         <NavLink className='font-bold text-black hover:text-amber-800' to='about'>About</NavLink>
       </li>
      {/* <NavLink className={({ isActive}) => (isActive ? 'font-bold text-black hover:text-amber-800' : 'font-bold text-black hover:text-amber-800')} to='about'>About</NavLink> */}

        <li>
          <NavLink className='font-bold text-black hover:text-amber-800' to='services'>Services</NavLink>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </li>
        
        <li>
          <NavLink className='font-bold text-black hover:text-amber-800' to='works'>Works</NavLink>
        </li>
        
        <li>
          <NavLink className='font-bold text-black hover:text-amber-800' to='contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

