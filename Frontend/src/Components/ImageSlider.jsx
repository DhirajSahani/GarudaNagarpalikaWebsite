import React, { useState, useRef, useEffect } from "react";
import sport from "../assets/sport.jpg";
import sport2 from "../assets/sport2.jpg";
import sport3 from "../assets/sport3.jpg";

// Use imported images here:
const images = [sport, sport2, sport3];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = images.length;

  // Auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    const slider = sliderRef.current;
    if (slider) {
      const slideWidth = slider.clientWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Update slide position on change or resize
  useEffect(() => {
    goToSlide(currentSlide);
    const handleResize = () => goToSlide(currentSlide);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        ref={sliderRef}
        style={{ height: "80vh" }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src} // FIX: use dynamic src
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 p-3 rounded-full hover:bg-black/50 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 p-3 rounded-full hover:bg-black/50 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;
