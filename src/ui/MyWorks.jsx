import React from 'react'

import succy from "../assets/succy.jpg"

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
    <section className='py-10 px-6 md:px-10 lg:px-24'>
        {/*Texts*/}
        <div className='flex flex-row justify-between items-center pb-4'>
            <p className='text-black uppercase font-bold text-xl'>my works</p>
            <p className='text-amber-800 font-semibold'>See All</p>
        </div>

        {/*Photos*/}
        <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] gap-2 ">
          {imageData?.map((item, id) => {
            return (
                <div key={id}>
                    <img className='pb-1' src={item.img} alt="" />
                    <p>{item.text}</p>
                    <hr className='pb-3'/>
                   
                </div>
            )
          })}
        </div>
    </section>
  )
}


//  {imageData?.map((item, id) => {
//             return(
//                 <div key={id}>
//                     <p>{item.text}</p>
//                 </div>
//             )
//            })}