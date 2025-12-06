import React from 'react'
import Gallery from '../ui/Gallery'

import gram2 from "../assets/gram2.jpg"
import gram3 from "../assets/gram3.jpg"
import gram8 from "../assets/gram8.jpg"
import gram28 from "../assets/gram28.jpg"
import glam24 from "../assets/glam24.jpg"
import gram25 from "../assets/gram25.jpg"
import gram26 from "../assets/gram26.jpg"
import gram27 from "../assets/gram27.jpg"


const imageData = [
    {
        id : 1,
        img: glam24,  
        text: "Photo Shoot",
    },
    {
        id : 2,
        img: gram3,
        text: "Bridal",
    },
    {
        id : 3,
        img: gram25,
        text: "Prewed",
    },
    {
        id : 4,
        img: gram8,  
        text: "Photo shoot",
    },
    {
        id : 5,
        img: gram2,  
        text: "Engagement",
    },
    {
        id : 6,
        img: gram26,
        text: "Graduation",  
    },
    {
        id : 7,
        img: gram27,
        text: "Photo Shoot", 
    },
    {
        id : 8,
        img: gram28,  
        text: "Facials",
    },

]


export default function Works() {
  return (
    <>
    <div className='text-center text-2xl py-2 text-gray-500'>
        <p>LA_SAUCE'S <span className='font-medium'>GALLERY</span></p>
        <p className='py-1 text-lg md:text-xl font-medium'>Welcome to our Catalogue...a place of beautiful experiences.</p>
    </div>
    <Gallery title='' images={imageData} showSeeAllLink={false} />
    </>
  )
}
