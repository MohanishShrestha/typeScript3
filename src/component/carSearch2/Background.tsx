import React, { useState } from 'react'
import CarSearchCard3 from './CarSearchCard3';

const Background = () => {
    const [bgIndex, setBgIndex] = useState(0);
    
      const images = ["/car1.jpg", "/car2.jpg", "/car3.jpg"];
    
      const handleNextImage = () => {
        setBgIndex((prev) => (prev + 1) % images.length);
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

        {/* Button Positioned at Bottom Center */}
        <button
          onClick={handleNextImage}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-orange-500 border border-white px-6 py-2 rounded-lg hover:border-orange-700 transition-colors duration-300 z-20"
        >
          Change Background
        </button>
      </div>
    </div>
  )
}

export default Background
