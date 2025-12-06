import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import gram2 from "../assets/gram2.jpg"
import gram3 from "../assets/gram3.jpg"
import gram8 from "../assets/gram8.jpg"
import gram28 from "../assets/gram28.jpg"
import glam24 from "../assets/glam24.jpg"
import gram25 from "../assets/gram25.jpg"
import gram26 from "../assets/gram26.jpg"
import gram27 from "../assets/gram27.jpg"
import Gallery from './Gallery'


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

export default function MyWorks() {
    return(
        <Gallery  title="My Works" images={imageData} seeAllLink="works" />
    )
}

// export default function MyWorks() {


//     const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <section className='py-10 px-6 md:px-10 lg:px-24 mb-6 md:mb-8'>
//         {/*Texts*/}
//         <div className='flex flex-row justify-between items-center pb-6 md:pb-8'>
//             <p className='text-black uppercase font-bold text-xl'>my works</p>
//             <Link to='works'>
//                 <p onClick={() => scrollTo(0,0)} className='text-amber-800 font-semibold text-sm underline'>See All</p>
//             </Link>
//         </div>

//         {/*Photos*/}
//         <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] gap-4">
//           {imageData?.map((item, id) => {
//             return (
//                 <div className='pb-8' key={id}>
//                     <img 
//                         className='pb-1 rounded hover:-translate-y-2 duration-500 transition-transform cursor-pointer w-72' src={item.img} 
//                         alt="" 
//                         onClick={() => setSelectedImage(item.img)}
//                     />
//                     <p className='font-medium text-sm md:text-base'>{item.text}</p>
//                     <hr/>
                   
//                 </div>
//             )
//           })}
//         </div>

//         {/*Modal images*/}

//         {selectedImage && (
//             <div
//                 className="fixed inset-0 bg-black/ flex items-center justify-center z-50 p-3 "
//                 onClick={() => setSelectedImage(null)}
//             >
//                 <div
//                 className="
//                     bg-white rounded-lg 
//                     max-w-[85vw] md:max-w-[70vw] lg:max-w-[50vw]
//                     max-h-[85vh]
//                     overflow-auto
//                     shadow-xl
//                 "
//                 onClick={(e) => e.stopPropagation()}
//                 >
//                 <img
//                     src={selectedImage}
//                     alt=""
//                     className="w-full h-auto max-h-[70vh] object-contain cursor-pointer"
//                 />

//                 {/* <button
//                     className="w-full bg-amber-600 text-white cursor-pointer py-2 transition"
//                     onClick={() => setSelectedImage(null)}
//                 >
//                     Close
//                 </button> */}
//                 </div>
//             </div>)}

   



// {/**3--------------- */}
//           {/* {selectedImage && (
//   <div
//     className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 md:p-4"
//     onClick={() => setSelectedImage(null)}
//   >
//     <div
//       className="bg-white rounded-lg p-3 max-w-[95vw] md:max-w-3xl max-h-[90vh] overflow-auto shadow-lg"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <img
//         src={selectedImage}
//         alt=""
//         className="rounded w-full h-auto max-h-[75vh] object-contain mx-auto"
//       />

//       <button
//         className="mt-4 w-full bg-amber-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         onClick={() => setSelectedImage(null)}
//       >
//         Close
//       </button>
//     </div>
//   </div>
// )} */}
//     </section>
//   )
// }
