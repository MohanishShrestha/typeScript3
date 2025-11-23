import React, { useState } from "react";
import CarSearchCard3 from "./CarSearchCard3";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Background = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const images = ["/car1.jpg", "/car2.jpg", "/car3.jpg"];

  const handleNextImage = () => {
    setBgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setBgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative w-full min-h-screen overflow-hidden">
      
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-100 ease-in-out"
          style={{ backgroundImage: `url('${images[bgIndex]}')` }}
        />

        {/* Overlay Content */}
        <div className="relative z-10 p-6">
          <CarSearchCard3 />
        </div>

        {/* Buttons */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
          <button
            onClick={handlePrevImage}
            className="bg-transparent text-white px-4 py-2 rounded-lg hover:text-orange-500 transition duration-300"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={handleNextImage}
            className="bg-transparent text-white px-4 py-2 rounded-lg hover:text-orange-500 transition duration-300"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Background;
