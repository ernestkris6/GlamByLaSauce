import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../ui/Logo'
import menu from '../assets/menu_icon.svg';
import cross from '../assets/cross_icon.png';

export default function Header() {

  
  const [ isOpen, setIsOpen ] = useState(false);

  function handleClick() {
    setIsOpen((show) => !show)
  }

  //items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400
  return (
    <header className='px-6 md:px-10 lg:px-24 pt-4 pb-1'>
      <nav className='flex justify-between items-center'>
        <Logo />
      {/*----------desktop menu----------*/}

        <ul className='hidden md:flex space-x-8 mx-4 md:ml-[72px]'>
        <li>
          <NavLink  to='about' className='font-bold text-black hover:text-amber-800'>About</NavLink>
        </li>
        
          <li>
            <NavLink to='services' className='font-bold text-black hover:text-amber-800'>Services</NavLink>
          </li>
          
          <li>
            <NavLink to='works' className='font-bold text-black hover:text-amber-800'>Works</NavLink>
          </li>
          
          <li>
            <NavLink to='contact' className='font-bold text-black hover:text-amber-800'>Contact</NavLink>
          </li>
        </ul>  
      </nav>
        
        {/*----------mobile menu----------*/}

         <div className='absolute right-[18px] top-[28px] bottom-0 md:hidden '>
          <img className={`${isOpen ? 'hidden' : 'block'} w-7 cursor-pointer`} src={menu} onClick={handleClick} alt="" />
        </div>
       
            <nav className={`${isOpen ? 'fixed w-1/2' : 'h-0 w-0'} lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white/80 transition-all duration-500`}>
                  <div className='absolute right-[18px] top-[28px] bottom-0 md:hidden'>
                    <img className={`${isOpen ? 'block' : 'hidden'} w-7 cursor-pointer`} src={cross} onClick={handleClick} alt="" />
                </div>
                
                {/*----------nav links----------*/}

                  <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
                    <Link to='/' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>HOME</Link>
                    <Link to='about' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>ABOUT</Link>
                    <Link to='services' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>SERVICES</Link>
                    <Link to='works' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>WORKS</Link>
                    <Link to='contact' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>CONTACT</Link>
                  </ul>
            </nav>        
        </header>   

        
  )
}


//<div className='flex items-center cursor-pointer justify-between py-4'></div>





