import React from 'react'
import succy from '../assets/succy.jpg'
import Button from '../ui/Button'
import started from '../assets/startedd.jpeg'
import started2 from '../assets/startedd2.jpeg'
import started3 from '../assets/startedd3.jpeg'
import started4 from '../assets/startedd4.jpeg'
import started5 from '../assets/startedd5.jpeg'
import started6 from '../assets/startedd6.jpeg'
import started7 from '../assets/startedd7.jpeg'
import started8 from '../assets/startedd8.jpeg'

// Reusable Card Component for "Why Choose Us"
const WhyChooseCard = ({ title, children }) => (
  <div className="border rounded-lg px-6 md:px-10 py-12 md:py-10 flex flex-col gap-4 text-[15px] hover:bg-amber-700 hover:text-white duration-500 text-gray-600 cursor-pointer">
    <b>{title}</b>
    <p>{children}</p>
  </div>
);

// Reusable Image Card for the "How it Started" section
const StartedImageCard = ({ src, alt }) => (
  <div className="flex-shrink-0 snap-start w-48 sm:w-56 md:w-60 lg:w-64 h-60 sm:h-64 cursor-pointer md:h-70 lg:h-80 rounded-md overflow-hidden group">
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
          Born from a passion for creativity and a love for all things glam, Glam by La Sauce was created to inspire confidence through high-quality beauty essentials that elevate your everyday routine. <br />
          <p className='pt-2'>Swipe left &larr;</p>
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
        <a href="https://wa.me/+2348065292598?text=Hi%20GlamByLa_Sauce,%20I%E2%80%99interested%20in%20exploring%20your%20beauty%20services!" target="_blank" rel="noopener noreferrer">
          <Button type="flat">BOOK US NOW</Button>
        </a>
      </section>
    </div>
  )
}
