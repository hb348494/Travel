"use client";
import React, { useState } from "react";

const FlightEnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    flightDetails: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative text-black">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">
            Flight Enquiry
          </h2>
          <button
            onClick={onClose}
            className="text-black hover:opacity-70 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="flightDetails"
            placeholder="Flight Details (From, To, Date, Passengers)"
            rows="3"
            required
            value={formData.flightDetails}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md text-black hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-black font-medium rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightEnquiryModal;
