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
    <div className='flex justify-between items-center px-6 md:px-10 lg:px-24 pt-4 pb-1'>
      <Logo />
  
      {/*----------desktop menu----------*/}

        <ul className='hidden md:flex space-x-6 mx-8'>
        <li>
          <NavLink  to='about' className='font-bold text-black hover:text-amber-800'>About</NavLink>
        </li>
        
          <li>
            <NavLink to='services' className='font-bold text-black hover:text-amber-800'>Services</NavLink>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </li>
          
          <li>
            <NavLink to='works' className='font-bold text-black hover:text-amber-800'>Works</NavLink>
          </li>
          
          <li>
            <NavLink to='contact' className='font-bold text-black hover:text-amber-800'>Contact</NavLink>
          </li>
        </ul>  

       

        
        {/*----------mobile menu----------*/}


         <div className='absolute right-[18px] top-[28px] bottom-0 md:hidden'>
          <img className={`${isOpen ? 'hidden' : 'block'} w-7 cursor-pointer`} src={menu} onClick={handleClick} alt="" />
        </div>
       
            <div className={`${isOpen ? 'fixed w-1/2' : 'h-0 w-0'} lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white/80 transition-all`}>
                <div className='flex items-center cursor-pointer justify-between py-4'>

                  <div className='absolute right-[18px] top-[28px] bottom-0 md:hidden'>
                    <img className={`${isOpen ? 'block' : 'hidden'} w-7 cursor-pointer`} src={cross} onClick={handleClick} alt="" />
                  </div>
                </div>
                
                {/*----------nav links----------*/}

                  <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
                    <Link to='/' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>HOME</Link>
                    <Link to='about' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>ABOUT</Link>
                    <Link to='services' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>SERVICES</Link>
                    <Link to='works' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>WORKS</Link>
                    <Link to='contact' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>CONTACT</Link>
                  </ul>
            </div>        
        </div>   

        
  )
}





