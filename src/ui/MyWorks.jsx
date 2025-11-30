import React from 'react'
import { Link } from 'react-router-dom'

import succy from "../assets/succy.jpg"
import { BsArrowRight } from 'react-icons/bs'

const imageData = [
    {
        id : 1,
        img: succy,  
        text: "Prewed",
    },
    {
        id : 2,
        img: succy,
        text: "Bridal",
    },
    {
        id : 3,
        img: succy,
        text: "Photo shoot",
    },
    {
        id : 4,
        img: succy,  
        text: "Prewed",
    },
    {
        id : 5,
        img: succy,  
        text: "Engagement",
    },
    {
        id : 6,
        img: succy,
        text: "Prewed",  
    },
    {
        id : 7,
        img: succy,
        text: "Graduation", 
    },
    {
        id : 8,
        img: succy,  
        text: "Photo shoot",
    },

]

export default function MyWorks() {
  return (
    <section className='py-10 px-6 md:px-10 lg:px-24 mb-6 md:mb-8'>
        {/*Texts*/}
        <div className='flex flex-row justify-between items-center pb-6 md:pb-8'>
            <p className='text-black uppercase font-bold text-xl'>my works</p>
            <Link to='works' onClick={()=> scrollTo(0,0)}>
                <p className='text-amber-800 font-semibold text-sm underline'>See All</p>
                
            </Link>
        </div>

        {/*Photos*/}
        <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] gap-4">
          {imageData?.map((item, id) => {
            return (
                <div className='pb-8' key={id}>
                    <img className='pb-1 rounded hover:-translate-y-2 duration-500 transition-transform cursor-pointer' src={item.img} alt="" />
                    <p className='font-medium text-sm md:text-base'>{item.text}</p>
                    <hr/>
                   
                </div>
            )
          })}
        </div>
    </section>
  )
}
