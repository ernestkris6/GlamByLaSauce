import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='py-10 px-6 md:px-10 lg:px-24 bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] h-[50%] text-white/80'>
        <div className='pb-10 text-white/60' onClick={() => scrollTo(0,0)}>
            <Logo />
        </div>

        <div className='flex flex-col space-y-8 md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]'>
            {/*---------Left Section-----------*/}

            <div>
                 <p className='w-full md:w-3/4 lg:w-full text-[15px] leading-6 '>Lorem ipsum dolor sit amet 
                   consectetur adipisicing elit. 
                   Nemo autem impedit asperiores soluta iusto necessitatibus magnam, 
                   repellat maiores omnis molestiae quasi iste delectus, harum voluptatibus 
                   consequuntur nisi rerum maxime est.</p>
               </div>


            {/*---------Center Section-----------*/}
              <div className='lg:ml-12 lg:pl-12'>
                <p className='font-bold'>QUICK LINKS</p>
                <p className='text-[15px] hover:text-white/60 hover:font-bold' onClick={()=> scrollTo(0,0)}><Link to='/'>Home</Link></p>
                <p className=' text-[15px] hover:text-white/60 hover:font-bold'><Link to='about' onClick={()=> scrollTo(0,0)}>About</Link></p>
                <p className='text-[15px] hover:text-white/60 hover:font-bold'><Link to='services' onClick={()=> scrollTo(0,0)}>Services</Link></p>
                <p className='text-[15px] hover:text-white/60 hover:font-bold' onClick={()=> scrollTo(0,0)}><Link to='works'>Works</Link></p>
                <p className='text-[15px] hover:text-white/60 hover:font-bold' onClick={()=> scrollTo(0,0)}><Link to='contact'>Contact</Link></p>

              </div>

            {/*---------Right Section-----------*/}
            <div className='space-y-1 text-[15px]'>
                <p className='font-bold'>CONTACT</p>
                <p>Phone: +234-8065292598</p>
                <p>Email: succychris675@gmail.com</p>
                <p>Instagram: Glambylasauce</p>
                <p>WhatsApp: +234-8065292598</p>
                <p>Location: Bariga, Lagos.</p>

            </div>
        </div>
            <hr className='mt-2' />
        <p className="text-center pt-3 pb-[-12px] text-[12px]">Copyright &copy; GlambyLaSauce 2025</p>
    </footer>
  )
}























