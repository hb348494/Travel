"use client"

import React from "react";

const HomeHeroSection = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[60vh] overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20 flex items-center">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left py-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight">
              Italy
            </h1>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 
              text-gray-900 font-bold text-sm sm:text-base md:text-lg 
              px-5 sm:px-6 py-3 rounded-full mb-8 inline-block shadow-lg">
              Claim 10% off select flights to Italy
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-black font-semibold 
                px-6 sm:px-8 py-3 sm:py-4 rounded-full 
                text-base sm:text-lg hover:bg-gray-100 
                transition-all shadow-lg hover:scale-105 duration-300">
                Search Flights
              </button>

              <button className="bg-transparent border-2 border-black text-black 
                font-semibold px-6 sm:px-8 py-3 sm:py-4 
                rounded-full text-base sm:text-lg 
                hover:bg-black/5 transition-all shadow-lg hover:scale-105 duration-300">
                Search Hotels
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Homepage/ItalyFamous.jpeg"
              alt="Italy scenic view"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
                rounded-2xl shadow-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
