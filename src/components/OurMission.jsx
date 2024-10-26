import React from 'react';
import "animate.css";
import "slick-carousel/slick/slick.css";

const OurMission = () => {
  return (
    <section className=" py-24 px-2 md:px-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center py-10 mb-8 text-pink-600">Goals And Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          <div className="bg-green-900 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
            <div className='border-4 border-white rounded-full w-20 text-center h-20'>
              <span className='text-5xl font-bold text-white p-3.5'>1</span>
            </div>
            <h3 className="text-3xl text-white font-bold p-3.5 mb-4">Our Mission</h3>
            <p className='font-light text-base text-white p-3.5'>
              Our mission is to serve as an international hub that connects young city planners, technology providers, governments, communities, and other key stakeholders to collaboratively share knowledge, resources, and strategies in order to build resilient, inclusive, and smart cities for future generations.
            </p>
          </div>

          <div className="bg-green-900 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
            <div className='border-4 border-white rounded-full w-20 text-center h-20'>
              <span className='text-5xl font-bold text-white p-3.5'>2</span>
            </div>
            <h3 className="text-3xl text-white font-bold p-3.5 mb-4">Key Objectives</h3>
            <div className="objectives-list text-white">
  <p className="font-light text-base p-3.5 flex items-start">
    <span className="icon mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
      </svg>
    </span>
    To establish a collaborative platform for urban planners, technology providers, governments, communities, and other stakeholders to share expertise, best practices, and innovative strategies for tackling next-generation urban challenges.
  </p>
  <p className="font-light text-base p-3.5 flex items-start">
    <span className="icon mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
      </svg>
    </span>
    To enable the pooling and optimization of resources from various sectors to create efficient and sustainable solutions for urban development, enhancing the synergy between technological advancements and urban planning needs.
  </p>
  <p className="font-light text-base p-3.5 flex items-start">
    <span className="icon mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
      </svg>
    </span>
    To foster the co-creation of strategies and action plans that address emerging urban issues by engaging diverse stakeholders in discussions, ensuring inclusive, forward-thinking urban solutions.
  </p>
</div>

          </div>

          <div className="bg-green-900 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
            <div className='border-4 border-white rounded-full w-20 text-center h-20'>
              <span className='text-5xl font-bold text-white py-12'>3</span>
            </div>
            <h3 className="text-3xl text-white font-bold mb-4 p-3.5">Our Values</h3>
            <div className="values-list text-white">
  <p className="font-light text-base p-3.5 flex items-start">
    <span className="icon mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
      </svg>
    </span>
    <span><span className='font-bold'>Collaboration:</span> Prioritizing teamwork and cooperation among diverse stakeholders to create holistic solutions for urban development.</span> 
  </p>
  <p className="font-light text-base p-3.5 flex items-start">
    <span className="icon mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
      </svg>
    </span>
    <span><span className='font-bold'>Innovation:</span> Embracing cutting-edge technology and forward-thinking strategies to address the evolving challenges of urbanization.</span> 
  </p>
  <p className="font-light text-base p-3.5 flex items-start">
    <span className="icon mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
      </svg>
    </span>
    <span><span className='font-bold'>Sustainability:</span> Committing to sustainable practices that ensure the well-being of communities and the environment in urban planning.</span> 
  </p>
</div>

          </div>

          <div className="bg-green-900 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
            <div className='border-4 border-white rounded-full w-20 text-center h-20'>
              <span className='text-5xl font-bold text-white py-12'>4</span>
            </div>
            <h3 className="text-3xl text-white font-bold mb-4 p-3.5">Our Vision</h3>
            <p className="font-light text-base text-white p-3.5">
              Our vision is to create a global ecosystem where urban planners, technology innovators, governments, communities, and stakeholders work hand-in-hand to design cities that are smarter, more sustainable, and inclusive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
