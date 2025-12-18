"use client"

import { activityCards, stay } from "@/config/italymessage";
import React from "react";

const ThingsToDo = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-12">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Things to Do in Europe
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-4xl">
          Discover the local charm by exploring popular landmarks, hidden
          streets, and nearby attractions. Every place has its own story waiting
          to be uncovered.
        </p>
      </div>

      {/* Activity Cards */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activityCards.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4">
                <div className="relative w-full h-40 sm:h-44 overflow-hidden rounded-xl mb-3">
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

      {/* Stay Section */}
      <div className="max-w-7xl mx-auto py-10">
        
        {/* Stay Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Where to Stay in Europe
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl">
            Hotels in Europe come in all shapes, sizes, and personalities. From
            budget to luxury, there are hundreds of hotels to choose from.
          </p>
        </div>

        {/* Stay Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stay.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 sm:h-64 w-full">
                <img
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="p-4">
                <p className="text-base sm:text-lg font-semibold text-gray-800">
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
