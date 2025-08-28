import React, { useState } from "react";
import img from "../assets/img.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";

const images = [img, img2, img3, img4, img5, img6, img7, img8];
 
 const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (src) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-100 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
     केहि तस्बिरहरु
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
            onClick={() => openLightbox(src)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 sm:h-52 md:h-56 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery
