import React from 'react'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'
import ServicesDetails from '../ui/ServicesDetails'
import gram2 from "../assets/gram2.jpg"
import gram3 from "../assets/gram3.jpg"
import gram8 from "../assets/gram8.jpg"
import gemini4 from '../assets/gemini4.jpeg'
import training1 from '../assets/training1.jpeg'
import gele2 from '../assets/gele2.jpg'
import gram26 from "../assets/gram26.jpg"
import acc3 from "../assets/acc3.jpeg"
// import makeup2 from "../assets/makeup2.jpg"


// export default function Services() {
//   return (
//     <ServicesDetails />
//   )
// }

// import ServicesDetails from "./ServiceSection";
// import bridal from "../assets/bridal.jpg";
// import photoshoot from "../assets/photoshoot.jpg";
// import graduation from "../assets/graduation.jpg";

const image = [gram2, gram3, gram8, gemini4, training1, gele2, gram26, acc3,]

export default function Services() {
  return (
    <>
    <div className='text-center text-2xl pt-4 text-gray-500'>
      <p>OUR <span className='font-medium'>SERVICES</span></p>
        <p className='py-1 text-sm md:text-base font-medium'>What we DO!</p>
    </div>
      <ServicesDetails
        title="Bridal Makeup"
        description="A flawless, long-lasting bridal look tailored to your big day."
        image={image[0]}
        features={["HD finish", "All skin tones", "Long-lasting glam"]}
        reverse={false}
      />

      <ServicesDetails
        title="Studio Makeup"
        description="Camera-ready makeup that enhances your natural beauty."
        image={image[6]}
        features={["Studio lighting ready", "Matte & glow options"]}
        reverse={true}
      />

      <ServicesDetails
        title="Gele Tying"
        description="Soft glam that expresses beauty and culture."
        image={image[5]}
        features={["Elegant look", "Lightweight finish"]}
        reverse={false}
      />

      <ServicesDetails
        title="Manicure & Pedicure"
        description="Artistic painting and polish that creates a perfect style."
        image={image[3]}
        features={["Carefully polished nails", "Soft touch"]}
        reverse={true}
      />

      <ServicesDetails
        title="Training Sessions"
        description="Book ahead for our training sessions to become a professional."
        image={image[4]}
        features={["Hands on training", "Real world experience"]}
        reverse={false}
      />
      
      <ServicesDetails
        title="Sales of Accessories and more..."
        description="Purchase of makeup items at affordable prices."
        image={image[7]}
        features={["Order now", "Swift delivery"]}
        reverse={true}
      />

      <div className='text-center py-8'>
        <Link to='/contact'>
          <Button type='flat'>CONTACT US</Button>
        </Link>
      </div>
    </>
  );
}
 