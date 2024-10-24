import React from "react";

const UrbanizationPage = () => {
  return (
    <div>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img src="/urban.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

    <div class="min-h-[550px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 class="text-4xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Urbanization and Sustainable Development</h2>
      <p class="sm:text-lg text-base  text-gray-200 z-20">Exploring key aspects of modern urbanization and sustainable city solutions</p>


    </div>
  </div>



      {/* Content Sections with Images */}
      <div className="">
      <section className="p-8" id="green-urbanization">
        <div className="flex flex-col md:flex-row items-center">
          <img src='/Green.jpg' alt="Green Urbanization" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-green-600">Green Urbanization</h2>
            <p className="text-lg text-black mt-4">
              Green urbanization focuses on integrating nature into urban environments through sustainable practices such as
              green buildings, parks, and eco-friendly urban design.
            </p>
          </div>
        </div>
      </section>
      </div>

      <section className="p-8 " id="smart-city-technologies">
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-pink-600">Smart City Technologies</h2>
            <p className="text-lg text-black mt-4">
              Smart cities use technology to enhance urban services and improve quality of life for residents through innovations
              in infrastructure, energy efficiency, and connectivity.
            </p>
          </div>
          <img src='/smart City.jpeg' alt="Smart City Technologies" className="w-96 h-96 md:w-1/2 rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="p-8 " id="urban-resilient">
        <div className="flex flex-col md:flex-row items-center">
          <img src='env.jpg' alt="Urban Resilient" className="w-full h-96 md:w-1/2 rounded-lg shadow-lg" />
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-green-600">Urban Resilient</h2>
            <p className="text-lg text-black mt-4">
              Urban resilience involves designing cities to withstand and recover from challenges such as climate change, natural
              disasters, and social inequities.
            </p>
          </div>
        </div>
      </section>

      <section className="p-8" id="urban-agriculture">
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-pink-600">Urban Agriculture</h2>
            <p className="text-lg text-black mt-4">
              Urban agriculture refers to growing and producing food in urban areas, helping cities become more self-sufficient and
              reducing their carbon footprint.
            </p>
          </div>
          <img src='/Urban agriculture1.jpeg' alt="Urban Agriculture" className="w-full h-96 md:w-1/2 rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="p-8 " id="urban-heritage">
        <div className="flex flex-col md:flex-row items-center">
          <img src='/Urban Heritage.jpeg' alt="Urban Heritage" className="w-full h-96 md:w-1/2 rounded-lg shadow-lg" />
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-green-600">Urban Heritage</h2>
            <p className="text-lg text-black mt-4">
              Urban heritage preserves the cultural, historical, and architectural legacy of cities while promoting sustainable
              development that respects the past.
            </p>
          </div>
        </div>
      </section>

      <section className="p-8 " id="transportation">
        <div className="flex flex-col md:flex-row items-center">
         
          <div className="mt-4 md:ml-8 md:mt-0">
            <h2 className="text-3xl font-bold text-pink-600">Transportation</h2>
            <p className="text-lg text-black mt-4">
              Transportation planning focuses on sustainable mobility solutions to reduce congestion, lower emissions, and create
              efficient urban transit systems.
            </p>
          </div>
          <img src='/Transportation 1.jpeg' alt="Transportation" className="w-full h-96 md:w-1/2 rounded-lg shadow-lg" />
        </div>
      </section>
    </div>
  );
};

export default UrbanizationPage;
