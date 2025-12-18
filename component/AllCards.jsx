"use client";

import destinationCards from "@/config/allcardresponse";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AllCards = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCardClick = (route) => {
    setLoading(true);
    router.push(route);
    setTimeout(() => setLoading(false), 500);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen fixed inset-0 bg-white backdrop-blur-sm z-50">
        <DotLottieReact
          src="https://lottie.host/ae5fb18b-4cf0-4446-800f-111558cf9122/InmwUHkQVs.lottie"
          loop
          autoplay
          style={{ width: 100, height: 100 }}
        />
      </div>
    );
  }

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 py-8">
          Deals for top destinations
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto">
        {destinationCards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 overflow-hidden bg-white 
            hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-44 sm:h-52 md:h-60 w-full">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-yellow-400 text-black text-xs sm:text-sm font-medium px-3 py-1 rounded-lg">
                🎟 {card.badgeText}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-lg sm:text-xl font-semibold text-gray-900">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-1 text-sm text-gray-600">
                {card.subtitle}
              </p>

              {/* CTA */}
              <button
                onClick={() => handleCardClick(card.ctaRoute)}
                className="
                  mt-5 w-full sm:w-auto
                  px-5 py-2.5
                  text-blue-500 bg-gray-200 hover:bg-gray-300
                  text-sm font-medium rounded-lg
                  transition
                "
              >
                {card.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCards;
