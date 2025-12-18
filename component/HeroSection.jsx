import React from "react";

const HeroSection = () => {
  return (
    <section
      className="
        w-full
        min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen
        bg-cover bg-center relative
        flex items-center
      "
      style={{
        backgroundImage: "url('/Homepage/background.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center text-white px-4 sm:px-6 lg:px-8">
        
        <h1
          className="
            font-bold
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            mb-4
          "
        >
          The World Awaits
        </h1>

        <p
          className="
            max-w-md sm:max-w-lg lg:max-w-xl
            text-sm sm:text-base md:text-lg
            text-gray-200
          "
        >
          Discover your next big adventure. From ancient ruins to modern cities,
          find your perfect escape today.
        </p>

        <button
          className="
            mt-6
            bg-blue-500 hover:bg-blue-600
            px-5 sm:px-6 md:px-8
            py-2.5 sm:py-3
            rounded-lg
            text-base sm:text-lg
            shadow-lg
            transition
          "
        >
          Explore Deals
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
