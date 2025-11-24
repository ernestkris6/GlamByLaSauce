import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function ErrorDetails() {
  return (
    <div className='my-12'>
        <section className='flex flex-col border-1 border-amber-700 rounded-sm mx-auto max-w-[368px] items-center justify-center md:hover:bg-amber-50  py-12'>
            <h1 className='font-bold pb-6'>Error: Page not Found😢</h1>
            <p className='font-medium text-[15px] pb-4'>Kindly click the button below to begin your glam😍</p>
            <Link to='/'>
               <Button type='span'>Return Home</Button>
            </Link>
        </section>
    </div>
  )
} 