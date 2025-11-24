import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function ErrorDetails() {
  return (
    <div className='my-12'>
        <div className='border-2 border-amber-700 rounded-sm max-w-[368px] md:w-[50%] flex flex-col items-center justify-center md:hover:bg-amber-50 mx-auto py-12'>
            <h1 className='font-bold pb-6'>Error: Page not Found😢</h1>
            <p className='font-medium text-[15px] pb-4'>Kindly click the button below to begin your glam😍</p>
            <Link to='/'>
                <div className='hidden md:block'>
                    <Button type='span'>Return Home</Button>
                </div>
                <div className='text-center md:hidden'>
                     <Button type='small'>Return Home</Button>
                </div>
            </Link>
        </div>
    </div>
  )
} 