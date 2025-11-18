import React from 'react'
import succy from '../assets/succy.jpg'

export default function About() {
  return (
    <div className='px-6 md:px-10 lg:px-24'>
      <div className='text-center mb-8 md:hidden'> 
        <h1>ABOUT <strong>US</strong></h1>
      </div>

     <div className='flex flex-col md:flex-row gap-12 mb-12'>
          <img className='w-full md:max-w-[360px] rounded-md' src={succy} alt="" />
            <div className='items-center justify-center md:mt-12'>
              <h1 className='font-bold'>Get to know US</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae inventore reiciendis totam illum qui labore sequi quibusdam. Cum minus optio modi odio officiis, saepe, soluta repudiandae mollitia eius accusamus aspernatur.</p> <br />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos facere rem praesentium culpa cupiditate doloremque dolorem molestias incidunt necessitatibus eum, sunt deserunt fugit illo, eveniet a veritatis voluptatibus magni.</p>

            <div className='mt-6 md:mt-12'>
              <h2 className='text-start font-bold'>Our VISION</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores nostrum ad architecto nihil, sequi tenetur cumque maiores vitae distinctio voluptatum molestiae, quasi quisquam culpa, animi iste similique minus ipsam?</p>
            </div>
          </div>      
     </div>


      <div className='pt-12 mb-12'>
        <h2 className='font-bold pb-0 text-center'>WHY CHOOSE US</h2>
        <div className='flex flex-col md:grid md:grid-cols-[1fr_1fr_1fr]'>
        <div className='py-8'>
          <p className='font-bold'>Effieciency:</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div className='py-8'>
          <p className='font-bold'>Quick service:</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div className='py-8'>
          <p className='font-bold'>Topnotch appearance:</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        </div>
      </div>
    </div>
  )
}
