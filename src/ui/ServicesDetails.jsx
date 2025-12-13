import React from "react";

export default function ServicesDetails({
  title,
  description,
  image,
  features = [],
  reverse=false,
}) {
  return (
    <section className="py-10 px-6 md:px-10 lg:px-24">
      <div className={`flex flex-row justify-center items-center gap-4 px-4 ${reverse ? "flex-row-reverse" : ""}`}>
        
        {/* Image (50%) */}
        <div className="w-72 rounded-2xl shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full rounded-2xl h-[full] shadow-2xl object-cover cursor-pointer md:max-h-[368px] md:max-w-[368px]"
          />
        </div>

        {/* Text (50%) */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {title}
          </h3>

          <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
            {description}
          </p>

          {features.length > 0 && (
            <ul className="mt-1 space-y-2">
              {features.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 bg-amber-600 rounded-full" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </section>
  );
}











// import React from "react";

// export default function ServicesDetails({
//   title,
//   description,
//   image,
//   features = [],
// }) {
//   return (
//     <section className="py-12 md:py-20">
//       <div
//         className={`w-full mx-auto px-6 flex flex-row  md:grid-cols-2 gap-3 justify-center items-center`}
//       >
//         {/* Image */}
//         <div className="">
//           <div className="overflow-hidden rounded-2xl shadow-lg">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-[40vh] object-cover transition-transform duration-500 hover:scale-105"
//             />
//           </div>
//         </div>

//         {/* Text */}
//         <div>
//           <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
//             {title}
//           </h3>

//           <p className="mt-4 text-gray-600 leading-relaxed">
//             {description}
//           </p>

//           {features.length > 0 && (
//             <ul className="mt-6 space-y-3">
//               {features.map((item, index) => (
//                 <li key={index} className="flex items-center ">
//                   <span className="w-2 h-2 bg-amber-600 rounded-full" />
//                   <span className="text-gray-700">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </section>
//   );
//}



















// import React from 'react'


// const SectionComponents =({img, text, alt}) => {
//   return (
//     <section>
    
//     </section>
//   )
// }

// export default function ServicesDetails() {
//   return (
//     <div className='px-6 md:px-10 lg:px-24'>
//       <div className='text-center text-2xl text-gray-500 py-6'>
//         <p>OUR <span className='font-medium'>SERVICES</span></p>
//       </div>

//       <p className='text-center text-gray-500 text-sm md:text-base font-medium'>What we DO at GlamByLaSauce!</p>


//       <ul>
//         <li>Studio make up</li>
//         <li>Outdoor make up</li>
//         <li>Bridals</li>
//         <li>Gele tying</li>
//         <li>Manicure and Pedicure</li>
//         <li>Sales of Makeup products and equipments</li>
//         <li>Training</li>
//         <li>Sales of accessories and more</li>
//       </ul>
//     </div>
//   )
// }

// //py-1 text-sm md:text-base font-medium