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
    <div className='flex justify-between px-6 md:px-10 lg:px-24 py-8'>
      <Logo />
  
        <ul className='hidden md:flex space-x-6 mx-8'>
        <li>
          <NavLink to='about' className='font-bold text-black hover:text-amber-800'>About</NavLink>
        </li>
        {/* <NavLink className={({ isActive}) => (isActive ? 'font-bold text-black hover:text-amber-800' : 'font-bold text-black hover:text-amber-800')} to='about'>About</NavLink> */}

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

       

        {/* <img onClick={()=> setIsOpen(true)} className='flex w-6 justify-end md:hidden' src={menu} alt="" /> */}
        
        {/*----------mobile menu----------*/}


     <div className='absolute right-[18px] top-[28px] bottom-0 lg:hidden'>
          <img className={`${isOpen ? 'hidden' : 'block'} w-7 cursor-pointer`} src={menu} onClick={handleClick} alt="" />
        </div>
       

        {/* Mobile menu */}
        <div className={`${isOpen ? 'fixed w-1/2' : 'h-0 w-0'} lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white/80 transition-all`}>
            <div className='flex items-center cursor-pointer justify-between py-4'>
              {/* <img className='w-32 ml-4' src={menu} alt="" /> */}
              <img className='ml-75 mt-2 w-7 justify-end' src={cross} onClick={handleClick} alt="" />
            </div>
              <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>

              <Link to='/' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>HOME</Link>
              <Link to='about' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>ABOUT</Link>
              <Link to='services' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>SERVICES</Link>
              <Link to='works' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>WORKS</Link>
              <Link to='contac' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>CONTACT</Link>



                {/* <Link className='hover:bg-purple-500 cursor-pointer px-4 py-2 rounded inline-block' onClick={handleClick} to='/'><p className='px-2 rounded inline-block'>HOME</p></Link>
                <a href='#about'  onClick={handleClick} to='doctors'><p className='hover:bg-purple-500 px-4 py-2 rounded inline-block'>ABOUT ME</p></a>
                <a href='#services' onClick={handleClick} to='about'><p className='hover:bg-purple-500 px-4 py-2 rounded inline-block'>SERVICES</p></a>
                <a href='#works' onClick={handleClick} to='contact'><p className='hover:bg-purple-500 px-4 py-2 rounded inline-block'>PORTFOLIO</p></a>
                <a href='#connect' onClick={handleClick} to='login'><p className='hover:bg-purple-500 px-4 py-2 rounded inline-block'>CONTACT</p></a>
                <a href='#connect' onClick={handleClick} to='login'><p className='hover:bg-purple-500 px-4 py-2 rounded inline-block'>CONNECT</p></a> */}
              </ul>
        </div>
    

          
        </div>   

        
  )
}





