import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Props:
 * - title: string (section title)
 * - images: array of { id, img, text }
 * - seeAllLink: string (URL for 'See All')
 */
export default function Gallery({ title = "", images = [], seeAllLink = "#", showSeeAllLink = true }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-10 px-6 md:px-10 lg:px-24 mb-6 md:mb-8">
      {/* Header */}
      <div className="flex flex-row justify-between items-center pb-6 md:pb-8">
        <p className="text-black uppercase font-bold text-xl">{title}</p>
        {showSeeAllLink && seeAllLink && (
          <Link to={seeAllLink}>
            <p onClick={() => scrollTo(0, 0)} className="text-amber-800 font-semibold text-sm underline">
              See All
            </p>
          </Link>
        )}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] gap-4">
        {images?.map((item) => (
          <div className="pb-8" key={item.id}>
            <img
              className="pb-1 rounded hover:-translate-y-2 duration-500 transition-transform cursor-pointer w-72"
              src={item.img}
              alt={item.text}
              onClick={() => setSelectedImage(item.img)}
            />
            <p className="font-medium text-sm md:text-base">{item.text}</p>
            <hr />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-lg max-w-[85vw] md:max-w-[70vw] lg:max-w-[50vw] max-h-[85vh] overflow-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt=""
              className="w-full h-auto max-h-[70vh] object-contain cursor-pointer"
            />
          </div>
        </div>
      )}
    </section>
  );
}
