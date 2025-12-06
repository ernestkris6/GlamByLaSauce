import React from 'react'
import succy from '../assets/succy.jpg'
import Button from '../ui/Button'
import started from '../assets/started.jpg'
import started2 from '../assets/started2.jpg'
import started3 from '../assets/started3.jpg'
import started4 from '../assets/started4.jpg'
import started5 from '../assets/started5.jpg'
import started6 from '../assets/started6.jpg'
import started7 from '../assets/started7.jpg'
import started8 from '../assets/started8.jpg'

// Reusable Card Component for "Why Choose Us"
const WhyChooseCard = ({ title, children }) => (
  <div className="border rounded-lg px-6 md:px-10 py-12 md:py-10 flex flex-col gap-4 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer">
    <b>{title}</b>
    <p>{children}</p>
  </div>
);

// Reusable Image Card for the "How it Started" section
const StartedImageCard = ({ src, alt }) => (
  <div className="flex-shrink-0 snap-start w-48 sm:w-56 md:w-60 lg:w-64 h-60 sm:h-64 md:h-70 lg:h-80 rounded-md overflow-hidden group">
    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={src} alt={alt} />
  </div>
);

export default function AboutDetails() {

  const startedImages = [
    started2,
    started3,
    started5,
    started8,
    started,
    started4,
    started6,
    started7,
  ]

  return (
    <div className="px-6 md:px-10 lg:px-24">

      {/* About Us Header */}
      <div className="text-center text-2xl py-6 text-gray-500">
        <p>ABOUT <span className="font-medium">US</span></p>
      </div>

      {/* About Us Section */}
      <section className="flex flex-col md:flex-row gap-12 mb-12">
        <img className="w-full md:max-w-[360px] rounded-md" src={succy} alt="About us" />
        <div className="flex flex-col justify-center text-gray-600 text-justify">
          <h1 className="font-bold mb-6">Get to <span>KNOW US</span></h1>
          <p className="text-[15px] mb-4">
            Welcome to Glam by La Sauce! At Glam by La Sauce, beauty isn’t just a look—it's an experience, a feeling, a moment to celebrate yourself...We believe that every person deserves to feel glamorous in their own way, and our mission is to make beauty fun, expressive, and effortlessly accessible for everyone.

          </p>
          <div className="mt-6 md:mt-12">
            <h2 className="font-bold text-gray-600 mb-2">Our <span>VISION</span></h2>
            <p className="text-[15px]">
              Our vision is to redefine beauty as a celebration of individuality—creating a space where every person feels seen, confident, and empowered...
            </p>
          </div>
        </div>
      </section>

      {/* How it Started Section */}
      <section className="mb-12">
        <h2 className="font-bold text-lg md:text-xl mb-6 text-gray-600">How it all <span>STARTED!!!</span></h2>
        <p className="text-[15px] mb-6 md:mb-8 max-w-2xl text-gray-600 text-justify">
          Born from a passion for creativity and a love for all things glam, Glam by La Sauce was created to inspire confidence through high-quality beauty essentials that elevate your everyday routine.
        </p>
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide py-2">
          {/* {[...Array(7)].map((_, i) => (
            <div key={i} className="snap-start">
              <StartedImageCard src={started} alt={`Started ${i + 1}`} />
            </div>
          ))} */}
          {startedImages.map((image, i)=> (
                <StartedImageCard key={i} src={image} alt={`Started ${i + 1}`} />
            )
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-24 md:mt-12 mb-12 text-center">
        <h2 className="font-bold pb-3 text-gray-800 mb-8">WHY <span>CHOOSE US</span></h2>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <WhyChooseCard title="PREMIUM QUALITY:">
            High-performing, long-lasting products made to enhance your natural beauty.
          </WhyChooseCard>
          <WhyChooseCard title="INCLUSIVE FOR EVERYONE:">
            Shades and styles that flatter every skin tone and personality—versatile and empowering.
          </WhyChooseCard>
          <WhyChooseCard title="TREND-FORWARD GLAM:">
            Modern, confidence-boosting designs for any look—either soft or bold, innovative, inspiring.
          </WhyChooseCard>
        </div>
        <Button type="flat">BOOK US NOW</Button>
      </section>
    </div>
  )
}































// import React from 'react'
// import succy from '../assets/succy.jpg'
// import started from '../assets/started.jpg'
// import Button from '../ui/Button'

// export default function AboutDetails() {
//   return (
//     <div className='px-6 md:px-10 lg:px-24'>
//       <div className='text-center text-2xl py-6 text-gray-500'>
//         <p>ABOUT <span className='font-medium'>US</span></p>
//       </div>

//      <section className='flex flex-col md:flex-row gap-12 mb-12'>
//           <img className='w-full md:max-w-[360px] rounded-md' src={succy} alt="" />
//             <div className='items-center text-gray-600  justify-center text-justify'>
//               <h1 className='font-bold md:pt-2  mb:pb-6 gap-1'>Get to <span>KNOW US</span></h1>
//             <p className='text-[15px]'>Welcome to Glam by La Sauce!!!

//               At Glam by La Sauce, beauty isn’t just a look—it's an experience, a feeling, a moment to celebrate yourself. 
//               Born from a passion for creativity and a love for all things glam, Glam by La Sauce was created to inspire confidence through high-quality beauty essentials that elevate your everyday routine. From bold, statement-making styles to soft, natural radiance, we’re here to bring your vision to life—your way..</p> <br />

//             <div className='mt-6 md:mt-12'>
//               <h2 className='text-start text-gray-600  font-bold'>Our <span>VISION</span></h2>

//             <p className='text-[15px]'>Our vision is to redefine beauty as a celebration of individuality—creating a space where every person feels seen, confident, and empowered. We strive to inspire self-expression through high-quality beauty solutions that honor every skin tone, every style, and every story.”</p>
//             </div>
//           </div>      
//      </section>

//      <section>
//       <div className='h-[40vh] '>
//        <div className='flex flex-row gap-8'>
//           <div className='m-0 md:my-8 lg:my-24 h-[40vh]'>
//              <h1 className='font-bold text-sm md:text-lg'>How it all<span> STARTED!!!</span></h1>
//             <p className='text-[15px] text-justify w-[40vw]'>Born from a passion for creativity and a love for all things glam, Glam by La Sauce was created to inspire confidence through high-quality beauty essentials that elevate your everyday routine. From bold, statement-making styles to soft, natural radiance, we’re here to bring your vision to life—your way.</p>
//           </div>
//         <div className='flex grid-row-[1fr_1fr_1fr_1fr] gap-1 overflow-x-auto cursor-pointer'>
//         <img className='w-full h-[40vh] md:w-48 md:h-70 rounded-md' src={started} alt="" />
//         <img className='w-full h-[40vh] md:w-48 md:h-70 rounded-md' src={started} alt="" />
//         <img className='w-full h-[40vh] md:w-48 md:h-70 rounded-md' src={started} alt="" />
//         <img className='w-full h-[40vh] md:w-48 md:h-70 rounded-md' src={started} alt="" />
//         <img className='w-full h-[40vh] md:w-48 md:h-70 rounded-md' src={started} alt="" />
//         <img className='w-full h-[40vh] md:w-48 md:h-70 rounded-md' src={started} alt="" />
//         <img className='w-full h-[10vh] md:w-48 md:h-70 rounded-md' src={started} alt="" />
//        </div>
//         </div>
//       </div>

//      </section>


//       <section className='mt-24 md:mt-12 mb-12'>
//         <h2 className='font-bold pb-3 text-gray-800  text-center'>WHY <span>CHOOSE US</span></h2>

//         <div className='flex flex-col md:flex-row mb-20'>
//           <div className='border rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer'>
//             <b>PREMIUM QUALITY:</b>
//             <p>
//               High-performing, long-lasting products made to enhance your natural beauty.</p>
//           </div>

//           <div className='border rounded-lg mt-2 mb-2 md:mt-0 md:mb-0 md:ml-2 md:mr-2 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer'>
//           <b>INCLUSIVE FOR EVERYONE:</b>
//           <p>Shades and styles that flatter every skin tone and personality—versatile and empowering.</p>
//           </div>

//           <div className='border rounded-lg px-10 md:px-12 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer'>
//           <b>TREND-FORWARD GLAM:</b>
//           <p>Modern, confidence-boosting designs for any look—either soft or bold, innovative, inspiring.</p>
//           </div>
//       </div>
//           <div className='text-center mt-[-24px]'>
//             <Button type='flat'>BOOK US NOW</Button>
//           </div>
//       </section>

      
//     </div>
//   )
// }
