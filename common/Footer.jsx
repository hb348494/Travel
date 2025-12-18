import React from 'react'
import { MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-300">
      <div className="container mx-auto px-15 py-8">
        {/* Main Content with Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Left Column: Contact Information */}
          <div className="space-y-6">
            {/* Brand Name */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                <span className="text-orange-600">The</span>Elite<span className="text-gray-600">Travel</span>
              </h2>
              <p className="text-gray-600 max-w-md">
                Your premium travel partner for luxury experiences and unforgettable journeys.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Hotel Address</h3>
                  <p className="text-gray-700">
                    Hyatt Centric Janakpuri New Delhi<br />
                    Janakpuri District Centre,<br />
                    New Delhi, Delhi 110058<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-600 flex items-center justify-center">
                  📞
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Phone</p>
                  <a href="tel:+911123456789" className="font-semibold text-gray-900 hover:text-blue-600 transition">
                    +91 11 2345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-600 flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <a href="mailto:info@hyattcentricjanakpuri.com" className="font-semibold text-gray-900 hover:text-blue-600 transition">
                    info@hyattcentricjanakpuri.com
                  </a>
                </div>
              </div>
            </div>

          
          </div>

          {/* Right Column: Map Embed */}
          <div>
            {/* <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">Hyatt Centric Janakpuri...</h3>
              <button className="text-blue-600 hover:underline text-sm font-medium mt-1">
                View larger map
              </button>
            </div> */}
            
            {/* Google Map Embed */}
            <div className="rounded-lg overflow-hidden border border-gray-300 shadow-sm mt-12 ">
              <div className="relative w-full h-80">
                {/* Actual Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.348826319005!2d77.0785077!3d28.6288785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d053ddaf10da9%3A0xa9f695b3b1bd31c!2sHyatt%20Centric%20Janakpuri%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                //   width="100%"
                //   height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hyatt Centric Janakpuri Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Map Legend like in image */}
              {/* <div className="bg-gray-50 px-4 py-3 border-t border-gray-300">
                <div className="flex flex-wrap items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3" />
                    <span>Legend Yatri</span>
                  </div>
                  <span>Hyatt Centric</span>
                  <div className="space-x-4">
                    <a href="#" className="hover:underline">Keyboard shortcuts</a>
                    <a href="#" className="hover:underline">Map Data</a>
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Report a map error</a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer