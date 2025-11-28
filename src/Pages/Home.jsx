import React from 'react'
import HeroSection from '../ui/HeroSection'
import Banner from '../ui/Banner'
import Collection from '../ui/Collection'
import Discount from '../ui/Discount'
import Testimonials from '../ui/Testimonials'

export default function Home() {
  return (
    <div>
        <HeroSection />
        <Banner />
        <Collection />
        <Testimonials />
        <Discount />
    </div>
  )
}
 