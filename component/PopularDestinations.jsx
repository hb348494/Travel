import React from 'react'

const KeepExploring = () => {
  const destinations = [
    ['Las Vegas', 'Paradise', 'New York', 'Orlando'],
    ['Chicago', 'Houston', 'Miami Beach', 'Kissimmee'],
    ['San Diego', 'Los Angeles', 'San Antonio', 'Atlanta'],
    ['Atlantic City', 'Nashville', 'New Orleans', 'Fort Lauderdale'],
    ['San Francisco', 'Dallas', 'Tampa', 'Charlotte'],
    ['Austin', 'Denver', 'Washington', 'Phoenix'],
    ['Anaheim', 'Myrtle Beach']
  ]

  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        {/* Centered Header */}
        <div className="text-center mb-10">
          {/* <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Keep exploring
          </h1> */}
          <h1 className="text-2xl font-semibold text-gray-700">
            Popular destinations
          </h1>
        </div>

        {/* Centered Content */}
        <div className="flex flex-col items-center">
          {destinations.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-8 mb-2">
              {row.map((destination, colIndex) => (
                <a
                  key={`${rowIndex}-${colIndex}`}
                  href="/"
                  className="text-lg text-gray-900 hover:text-blue-600 hover:underline py-2 px-4"
                >
                  {destination}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Optional: Simple horizontal list for mobile */}
        {/* 
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl">
            {destinations.flat().map((destination, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-900 hover:text-blue-600 hover:underline text-center"
              >
                {destination}
              </a>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  )
}

export default KeepExploring