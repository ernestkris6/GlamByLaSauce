import React from 'react'
import bg from '../assets/bg.jpg'

export default function Collection() {
  return (
   <div>
        <section 
            style={{backgroundImage: `url(${bg})`}}
            className={`relative mt-16 md:mt-14 bg-cover bg-no-repeat pb-10 w-full h-[50vh] md:h-[65vh] mb-14`}>
                <div className='absolute justify-center items-center top-12 bottom-12 sm:top-18 sm:bottom-18 bg-[#fff]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero officia nemo necessitatibus. Alias, est obcaecati. Magni quod aliquam facere similique minus labore, quam totam maiores tempore, quibusdam nihil odit.</p>

                    <img src="" alt="" />
                </div>
        </section>
   </div>
  )
}

//url(${bg})
//w-full absolute bottom-0 right-0 max-w-md
//bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white

//bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center

////  <section className=''>
    //     <img className='' src={bg} alt="" />
        
    // </section>