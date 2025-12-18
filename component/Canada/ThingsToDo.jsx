"use client"

import { activityCards, stay } from "@/config/canadamessage";
import React from "react";

const ThingsToDo = () => {
  return (
    <div className="min-h-screen bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-10">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Discover Canada: Boundless Nature , Vibrant Culture.  
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto lg:mx-0">
         Your definitive guide to exploring the Great White North, from coastal rainforests to historic cities.
        </p>
      </div>

      {/* Activity Cards */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activityCards.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden
              hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-4">
                <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden rounded-xl mb-3">
                  <img
                    src={activity.imageUrl}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
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

      {/* Stay Section */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Where to Stay in Canada
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto lg:mx-0">
            Hotels in Canada come in all shapes, sizes and personalities.
            From budget to luxury, there are hundreds of hotels to choose from.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stay.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden
              hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-56 md:h-64 w-full">
                <img
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <p className="text-base sm:text-lg font-bold text-gray-800">
                  {hotel.name}
                </p>

                <div className="flex items-center gap-1 text-gray-600 mt-1">
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
