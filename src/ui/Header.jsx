import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'

export default function Header() {
  return (
    <div className='flex p-8 justify-between md:mx-10'>
      <Logo />
      <div className='hidden sm:block space-x-6 mx-8'>
        <Link className='font-bold text-black hover:text-amber-800' to='about'>About</Link>
        <Link className='font-bold text-black hover:text-amber-800' to='services'>Services</Link>
        <Link className='font-bold text-black hover:text-amber-800' to='works'>Works</Link>
        <Link className='font-bold text-black hover:text-amber-800' to='contact'>Contact</Link>
      </div>
    </div>
  )
}
