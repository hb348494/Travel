"use client";
import React, { useState } from "react";
import FlightEnquiryModal from "../../component/FlightEnquiryModal";

const page = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="w-full bg-white text-black overflow-hidden">

      {/* HERO */}
      <section className="relative w-full py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          <div>
            <p className="text-blue-600 font-semibold tracking-wide mb-3">
              ABOUT THEELITETRAVEL
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Travel smarter, <br /> explore deeper.
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed max-w-xl">
              We believe travel should be exciting, simple, and affordable.
              Our mission is to remove the stress of planning so you can focus
              on creating unforgettable memories.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border">
            <p className="text-xl font-semibold mb-4">Our Promise</p>
            <p className="text-gray-700 leading-relaxed">
              From budget-friendly flights to authentic experiences, we curate
              everything you need to travel with confidence.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-blue-50">✈️ Smart Flights</div>
              <div className="p-4 rounded-xl bg-pink-50">🏨 Trusted Stays</div>
              <div className="p-4 rounded-xl bg-green-50">📍 Local Insights</div>
              <div className="p-4 rounded-xl bg-yellow-50">🍽️ Food Picks</div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">
        <h2 className="text-3xl font-bold">
          More than bookings. A better way to travel.
        </h2>

        <p className="text-lg leading-relaxed">
          At <span className="font-semibold">TheEliteTravel</span>, we help you
          travel smarter with curated flights, stays, attractions, food, and
          unforgettable experiences.
        </p>

        <p className="text-lg leading-relaxed">
          Whether you’re a budget traveler or an adventure seeker, we personalize
          your journey to match your travel style.
        </p>
      </section>

      {/* WHY US */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["✈️", "Affordable Flights"],
              ["🏨", "Handpicked Stays"],
              ["📍", "Hidden Gems"],
              ["🍽️", "Food Experiences"],
              ["🧗", "Adventure & Leisure"],
              ["🌍", "Personalized Planning"],
            ].map(([icon, title], i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <p className="text-4xl mb-4">{icon}</p>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for your next journey?
          </h2>

          <p className="text-lg text-gray-800 mb-10">
            Travel more. Spend less. Experience more.
          </p>

          {/* 🔥 OPEN MODAL */}
          <button
            onClick={() => setOpenModal(true)}
            className="px-8 py-4 rounded-xl bg-blue-600 text-white font-medium
                       hover:bg-blue-700 transition-all"
          >
            Start Planning Your Trip
          </button>
        </div>
      </section>

      {/* MODAL */}
      <FlightEnquiryModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />

    </main>
  );
};

export default page;
