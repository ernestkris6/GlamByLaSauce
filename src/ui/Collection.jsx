import React from 'react'
import bg from '../assets/bg.jpg'

export default function Collection() {
  return (
   <section>
        <div 
            style={{backgroundImage: `url(${bg})`}}
            className={`relative mt-16 md:mt-14 bg-cover bg-no-repeat pb-10 w-full h-[50vh] md:h-[65vh] mb-14`}>
                {/* <div className='absolute justify-center items-center top-12 bottom-12 sm:top-18 sm:bottom-18 bg-[#fff]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero officia nemo necessitatibus. Alias, est obcaecati. Magni quod aliquam facere similique minus labore, quam totam maiores tempore, quibusdam nihil odit.</p>

                    <img src="" alt="" />
                </div> */}
        </div>
   </section>
  )
}



