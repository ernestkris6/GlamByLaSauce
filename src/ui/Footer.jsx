import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className='py-10 px-6 md:px-10 lg:px-24 bg-gradient-to-l from-[#92400E] to-[rgb(223,137,8)] h-72 text-white'>
        <div className='pb-10 text-white/60'>
            <Logo />
        </div>
        
        <div className='flex flex-cols-2 md:flex-row justify-between'>
            {/*QUICK LINKS*/}
            <div className='justify-start'>
                <p>Quick Links</p>
                <p>About</p>
                <p>Services</p>
                <p>Contact</p>
            </div>
            

            {/*CONTACTS*/}

            <div>
                <p>Phone</p>
                <p>Email</p>
                <p>Instagram</p>
                <p>WhatsApp</p>
                <p>Location</p>
            </div>
            
        </div>
    </footer>
  )
}
