"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Hero Component
export default function Hero() {
  // Slider Images
  const images = [
    "/assets/first1.png",
    "/assets/second2.jpg",
    "/assets/third.png",
    "/assets/fourth.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Manual control for Previous
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Manual control for Next
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
        {/* Left Side: Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bridge the Startup Gap
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            <span className=" ">Connect. Learn. Grow.</span> <br />A platform
            where aspiring founders meet seasoned entrepreneurs and domain
            experts for one-on-one guidance, startup insights, and real-time
            support. Whether you're launching your first idea or scaling your
            venture — get the mentorship, advice, and resources you
            need to succeed.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Side: Image Slider */}
        <div className="md:w-1/2 relative w-full max-w-lg">
          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="Startup Slide"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg transition-all duration-700"
          />

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 text-gray-950"
          >
            <FaChevronLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100  text-gray-950"
          >
            <FaChevronRight />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
