import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Works from './Pages/Works'
import Services from './Pages/Services'
import About from './Pages/About'
import Error from './Pages/Error'

//https://www.figma.com/design/a5Qy7QsBDuwweCjBpUbwhZ/Makeup-website--Community-?node-id=0-1&p=f&t=f73OolI0QXpV02oL-0


export default function App() {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='works' element={<Works />} />
          <Route path='services' element={<Services />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
  )
}
