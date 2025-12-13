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

// import gele from "../assets/gele.jpg"
import gram19 from '../assets/gram19.jpg'
import gele1 from "../assets/gele1.jpg"
import gele2 from "../assets/gele2.jpg"
import gele3 from "../assets/gele3.jpg"

// import manic7 from '../assets/manic7.jpg'
// import manic9 from '../assets/manic9.jpg'
import gemini1 from '../assets/gemini1.jpeg'
import gemini2 from '../assets/gemini2.jpeg'
import gemini3 from '../assets/gemini3.jpeg'
// import gemini4 from '../assets/gemini4.jpeg'
import gemini5 from '../assets/gemini5.jpeg'


import acc1 from '../assets/acc1.jpeg'
import acc2 from '../assets/acc2.jpeg'
import acc4 from '../assets/acc4.jpeg'
import acc5 from '../assets/acc5.jpeg'

import training1 from '../assets/training1.jpeg'


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
        text: "Photo Shoot",
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


const imageData2 = [
{
    id: 0,
    img: gram19,
    text: "Pinky Gele"

},
{
    id: 1,
    img: gele1,
    text: "Bridal Gele"

},
{
    id: 2,
    img: gele2,
    text: "Nigerian Auto Gele"

},
{
    id: 3,
    img: gele3,
    text: "Elegant Pre Tie"

},
]

const imageData3 = [
    {
        id: 0,
        img: gemini1,
        text: "Elegant Pre Tie"
    },
    {
        id:1,
        img: gemini2,
        text: "Elegant Pre Tie"
    },
     {
        id:2,
        img: gemini3,
        text: "Elegant Pre Tie"
    },
     {
        id:3,
        img: gemini5,
        text: "Elegant Pre Tie"
    }

]

const imageData4 = [
    {
        id:0,
        img: acc1,
        text: "Beauty Cream" 
    },
    {
        id:1,
        img: acc2,
        text: "Brush & Foundation" 
    },
    {
        id:2,
        img: acc5,
        text: "Lipstick"
    },
    {
        id:3,
        img: acc4,
        text: "Hair Cream" 
    }
]

const imageData5 = [
    {
        id: 0,
        img: training1,
        text: 'Makeup session',
    },
]



export default function Works() {
  return (
    <>
    <div className='text-center text-2xl pt-4 text-gray-500'>
        <p>LA_SAUCE'S <span className='font-medium'>GALLERY</span></p>
        <p className='py-1 text-sm md:text-base font-medium'>Welcome to our Catalogue...a place of beautiful experiences.</p>
    </div>
    <Gallery title='MakeOver' images={imageData} showSeeAllLink={false} />
    <Gallery title='Gele tying' images={imageData2} showSeeAllLink={false} />
    <Gallery title='Manicure & Pedicure' images={imageData3} showSeeAllLink={false} />
    <Gallery title='Sales of Accessories' images={imageData4} showSeeAllLink={false} />
    <Gallery title='Training' images={imageData5} showSeeAllLink={false} />
    </>
  )
}

