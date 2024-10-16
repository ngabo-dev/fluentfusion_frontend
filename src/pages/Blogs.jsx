import React from 'react'

const Blogs = () => {
  return (
    <>
      <div className="md:px-10 px-4 font-[sans-serif] py-48">
        <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
          {/* Events Section */}
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Latest Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
            <div className="bg-white rounded overflow-hidden">
              <img src="/greenrrrr.jpg" alt="Global Urban Summit" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Global Urban Summit 2024</h3>
                <p className="text-gray-500 text-sm">Join us at the Global Urban Summit where urban planners, tech providers, and governments come together to share innovative strategies for future cities...</p>
                <p className="text-pink-600 text-[13px] font-semibold mt-4">10 March 2024</p>
                <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden">
              <img src="/Urban agriculture1.jpeg" alt="Technology for Smart Cities" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Technology for Smart Cities</h3>
                <p className="text-gray-500 text-sm">A deep dive into how cutting-edge technologies are being integrated into urban infrastructure to build smart, resilient cities...</p>
                <p className="text-pink-600 text-[13px] font-semibold mt-4">15 April 2024</p>
                <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden">
              <img src="Transportation.jpeg" alt="Sustainability in Urban Development" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Sustainability in Urban Development</h3>
                <p className="text-gray-500 text-sm">Explore how sustainable practices are transforming urban planning to create eco-friendly, future-ready cities...</p>
                <p className="text-pink-600 text-[13px] font-semibold mt-4">28 May 2024</p>
                <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]">Read More</a>
              </div>
            </div>
          </div>

          {/* News Section */}
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 mt-12">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
            <div className="bg-white rounded overflow-hidden">
              <img src="smart City.jpeg" alt="Urban Development Trends" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Urban Development Trends</h3>
                <p className="text-gray-500 text-sm">Latest trends in urban development and planning that are shaping cities around the globe...</p>
                <p className="text-pink-600 text-[13px] font-semibold mt-4">01 September 2024</p>
                <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden">
              <img src="Green City.jpeg" alt="Green Architecture" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Green Architecture</h3>
                <p className="text-gray-500 text-sm">Innovative architectural practices that prioritize sustainability and eco-friendliness...</p>
                <p className="text-pink-600 text-[13px] font-semibold mt-4">10 September 2024</p>
                <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden">
              <img src="/Urban resilient.jpeg" alt="Urban Mobility Innovations" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Urban Mobility Innovations</h3>
                <p className="text-gray-500 text-sm">How cities are embracing new technologies to improve urban mobility and public transport...</p>
                <p className="text-pink-600 text-[13px] font-semibold mt-4">20 September 2024</p>
                <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-pink-600 to-green-900 py-16 px-6 font-[sans-serif] mb-64 mx-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white md:text-5xl text-4xl font-extrabold mb-6">Join Our Exclusive Newsletter</h2>
          <p className="text-xl text-gray-300">Be part of our elite community. Get VIP access to curated content, early product releases, and special promotions.</p>

          <div className="bg-white shadow-lg rounded-lg p-8 mt-12 flex flex-col md:flex-row items-center justify-center">
            <input type="email" placeholder="Enter your email" className="w-full md:w-96 bg-transparent border-b-2 border-pink-600 py-3 px-4 text-pink-600 text-base focus:outline-none placeholder-pink-600 placeholder-opacity-70" />
            <button className="max-md:mt-6 md:ml-4 bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded hover:shadow-md hover:transform hover:scale-105 focus:outline-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
