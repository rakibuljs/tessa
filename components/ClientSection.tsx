"use client";
import Image from "next/image";
import slide1 from "@/public/images/slide1.png";
import slide2 from "@/public/images/slide2.png";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { slides } from "@/utils/data";

const ClientSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Function to go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-[34px] text-center pt-2 font-serif">
        What Clients Are Saying
      </h1>

      {/* Slider Section */}
      <div className="flex justify-center items-center gap-5 py-10 flex-wrap">
        {/* Left Image */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col justify-end w-[300px] lg:min-h-screen"
        >
          <Image
            src={slide1}
            alt="Client Review"
            className="w-full h-auto hidden lg:block"
          />
        </div>

        {/* Slider - Fixed 450px Width */}
        <div className="w-[450px] relative">
          {/* Slide Content */}
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-[#FBFAFB] min-h-screen text-center items-center border border-gray-300 p-3"
          >
            <Image
              src={slides[currentIndex].image}
              alt="Client Review"
              className="w-full h-[390px] object-fill"
            />
            <p className="text-center mt-4 text-lg px-12 md:px-0 md:text-[25px] text-gray-600">
              {slides[currentIndex].text}
            </p>
            <h1 className="text-[28px] relative bottom-1 pt-2 ">
              {slides[currentIndex].name}
            </h1>

            {/* Navigation Arrows Below */}
            <div className="flex justify-center gap-4 ">
              <button
                className="bg-[#BAA084]  text-white p-2 rounded-full"
                onClick={prevSlide}
              >
                <FaChevronLeft size={18} />
              </button>
              <button
                className="bg-[#BAA084] p-2 rounded-full text-white transition"
                onClick={nextSlide}
              >
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col justify-end w-[300px] lg:min-h-screen"
        >
          <Image
            src={slide2}
            alt="Client Review"
            className="w-full h-auto hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};
export default ClientSection;
