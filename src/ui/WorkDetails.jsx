import React from 'react'
import MyWorks from './MyWorks'

export default function WorksDetails() {
  return (
    <div className='px-6 md:px-10 lg:px-24'>
      <div className='text-center text-2xl text-gray-500 py-6'>
        <p>OUR <span className='font-medium'>WORKS</span></p>
      <h3 className='py-4 font-medium'>Welcome to our Catalogue...a place of beautiful experiences.</h3>
      <MyWorks />
      </div>



      {/* <h1 className='text-center font-extrabold text-2xl pb-4'>C O M I N G -  S O O N 😎</h1> */}
    </div>
  )
}
