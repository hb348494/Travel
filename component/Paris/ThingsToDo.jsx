"use client"

import { activityCards, stay } from "@/config/parismessage";
import React from "react";

const ThingsToDo = () => {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Things to Do in France
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto lg:mx-0">
          Discover the local charm by exploring popular landmarks, hidden streets,
          and nearby attractions. Every place has its own story waiting to be uncovered.
        </p>
      </div>

      {/* ACTIVITY CARDS */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activityCards.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl
              transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-4">
                <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden rounded-xl mb-3">
                  <img
                    src={activity.imageUrl}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STAY SECTION */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Where to Stay in France
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto lg:mx-0">
            Hotels in France come in all shapes, sizes, and personalities.
            From budget to luxury, there are hundreds of options across the city.
          </p>
        </div>

        {/* STAY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stay.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl
              transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-full h-52 sm:h-60 md:h-64">
                <img
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="p-4">
                <p className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                  {hotel.name}
                </p>

                <div className="flex items-center gap-1 text-gray-600">
                  <span>⭐</span>
                  <span className="font-medium">
                    {hotel.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ThingsToDo;
