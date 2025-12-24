import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../ui/Logo'
import menu from '../assets/menu_icon.svg'
import cross from '../assets/cross_icon.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  function toggleMenu() {
    setIsOpen(prev => !prev)
  }

  // 👉 OUTSIDE CLICK HANDLER
  useEffect(() => {
    function handleOutsideClick(e) {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      console.log(handleOutsideClick, 'click outside');      
    }
  }, [isOpen])

  return (
    <header className="px-6 md:px-10 lg:px-24 pt-4 pb-1 relative">
      {/* ---------------- NAV BAR ---------------- */}
      <nav className="flex justify-between items-center">
        <Logo />

        {/* -------- Desktop Menu -------- */}
        <ul className="hidden md:flex space-x-8">
          <li><NavLink to="about" className="font-bold hover:text-amber-800">About</NavLink></li>
          <li><NavLink to="services" className="font-bold hover:text-amber-800">Services</NavLink></li>
          <li><NavLink to="works" className="font-bold hover:text-amber-800">Works</NavLink></li>
          <li><NavLink to="contact" className="font-bold hover:text-amber-800">Contact</NavLink></li>
        </ul>
      </nav>

      {/* -------- Hamburger Icon -------- */}
      <button
        onClick={toggleMenu}
        className={`md:hidden absolute right-6 top-6 transition-opacity duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <img src={menu} alt="Open menu" className="w-7" />
      </button>

      {/* -------- Overlay (click to close) -------- */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )} */}

      {/* -------- Mobile Menu -------- */}
      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 h-[100dvh] w-1/2 z-20 md:hidden
        bg-white/80 backdrop-blur-md cursor-pointer
        transform transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close icon */}
        <button
          onClick={toggleMenu}
          className="absolute right-6 top-6"
        >
          <img src={cross} alt="Close menu" className="w-7 cursor-pointer" />
        </button>

        {/* Menu Links */}
        <ul className="flex flex-col items-center gap-4 mt-20 text-lg font-medium">
          <Link to="/" onClick={toggleMenu} className="px-4 py-2 rounded hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] hover:text-white">HOME</Link>
          <Link to="about" onClick={toggleMenu} className="px-4 py-2 rounded hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] hover:text-white">ABOUT</Link>
          <Link to="services" onClick={toggleMenu} className="px-4 py-2 rounded hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] hover:text-white">SERVICES</Link>
          <Link to="works" onClick={toggleMenu} className="px-4 py-2 rounded hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] hover:text-white">WORKS</Link>
          <Link to="contact" onClick={toggleMenu} className="px-4 py-2 rounded hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] hover:text-white">CONTACT</Link>
        </ul>
      </nav>
    </header>
  )
}


















// import React, { useState, useRef, useEffect } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import Logo from '../ui/Logo'
// import menu from '../assets/menu_icon.svg';
// import cross from '../assets/cross_icon.png';

// export default function Header() {

  
//   const [ isOpen, setIsOpen ] = useState(false);
//   const  menuRef = useRef(null)

//   function handleClick() {
//     setIsOpen((show) => !show)
//   }

//   useEffect(function(){
//     function handleOutsideClick(e) {
//       if (isOpen && ref.current && !ref.current.contains(e.target)) {
//         setIsOpen(false);
        
//       }
//       document.addEventListener("mousedown", handleOutsideClick)
      
//       return () => {
//         document.removeEventListener("mousedown", handleOutsideClick)
//       }
//     }
//     console.log(handleOutsideClick);
//   }, [isOpen])

  
  


//   //items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400
//   return (
//     <header className='px-6 md:px-10 lg:px-24 pt-4 pb-1'>
//       <nav className='flex justify-between items-center'>
//         <Logo />
//       {/*----------desktop menu----------*/}

//         <ul className='hidden md:flex space-x-8 mx-4 md:ml-[72px]'>
//         <li>
//           <NavLink  to='about' className='font-bold text-black hover:text-amber-800'>About</NavLink>
//         </li>
        
//           <li>
//             <NavLink to='services' className='font-bold text-black hover:text-amber-800'>Services</NavLink>
//           </li>
          
//           <li>
//             <NavLink to='works' className='font-bold text-black hover:text-amber-800'>Works</NavLink>
//           </li>
          
//           <li>
//             <NavLink to='contact' className='font-bold text-black hover:text-amber-800'>Contact</NavLink>
//           </li>
//         </ul>  
//       </nav>
        
//         {/*----------mobile menu----------*/}

//          <div className='absolute right-[18px] top-[28px] bottom-0 md:hidden '>
//           <img className={`w-7 cursor-pointer md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} src={menu} onClick={handleClick} alt="" />
//         </div>
       
//             <nav ref={menuRef} className={`fixed top-0 right-0 h-[100dvh] w-1/2 md:hidden z-20 bg-white/70 transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
//                   <div className='absolute right-[18px] top-[28px] bottom-0 md:hidden'>
//                     <img className={`${isOpen ? 'block' : 'hidden'} w-7 cursor-pointer`} src={cross} onClick={handleClick} alt="Close menu" />
//                 </div>
                
//                 {/*----------nav links----------*/}

//                   <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
//                     <Link to='/' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>HOME</Link>
//                     <Link to='about' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>ABOUT</Link>
//                     <Link to='services' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>SERVICES</Link>
//                     <Link to='works' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>WORKS</Link>
//                     <Link to='contact' className='hover:bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] px-4 py-2 rounded inline-block' onClick={handleClick}>CONTACT</Link>
//                   </ul>
//             </nav>        
//         </header>   

        
//   )
// }


//<div className='flex items-center cursor-pointer justify-between py-4'></div>





