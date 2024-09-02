import React from 'react';

import "animate.css";
import "slick-carousel/slick/slick.css";

const OurMission = () => {
  return (
    <section className=" px-24 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center py-10 mb-8">Goals And Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">


          <div className="bg-blue-500 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
          <div className='border-4 border-white rounded-full w-20 text-center h-20'>
              <span className='text-5xl font-bold text-white p-3.5'>1</span>
            </div>
            <h3 className="text-3xl text-gray-50 font-bold p-3.5 mb-4">Our Mission</h3>
           
              <p className='font-light text-base text-gray-50  p-3.5'>At SLTS (Sign Language Teaching System), our mission is to bridge communication gaps and promote inclusivity by providing accessible and comprehensive sign language education online.</p>
              {/* <li>To enhance communication between people with and without disabilities.</li>
              <li>To provide a reliable and accessible resource for sign language learning in Rwanda and beyond.</li> */}

          </div>
          <div className="bg-blue-500 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
          <div className='border-4 border-white rounded-full w-20 text-center h-20'>
              <span className='text-5xl font-bold text-white p-3.5'>2</span>
            </div>
            <h3 className="text-3xl text-gray-50 font-bold p-3.5 mb-4">Key Objectives</h3>
           
              <p className='font-light text-base text-gray-50  p-3.5'>To offer high-quality sign language education through our mobile app and web platform, enhancing communication between people with and without disabilities.</p>
              {/* <li>To enhance communication between people with and without disabilities.</li>
              <li>To provide a reliable and accessible resource for sign language learning in Rwanda and beyond.</li> */}

          </div>
          <div className="bg-blue-500 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
          <div className='border-4 border-white rounded-full w-20 text-center h-20'>
              <span className='text-5xl font-bold text-white py-12'>3</span>
            </div>
            <h3 className="text-3xl text-gray-50 font-bold mb-4 p-3.5">Why Choose Us</h3>

           
              <p className='font-light text-base text-gray-50 p-3.5'>Comprehensive online sign language courses tailored for different skill levels, accessible and user-friendly platforms for mobile and web.
              </p>
            
          </div>
          <div className="bg-blue-500 p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeInUp">
          <div className='border-4 border-white rounded-full w-20 text-center h-20'>
              <span className='text-5xl font-bold text-white py-12'>4</span>
            </div>
            <h3 className="text-3xl text-gray-50 font-bold mb-4 p-3.5">Our Vision</h3>
            <p className="font-light text-base text-gray-50 p-3.5">
            Our vision is to make sign language universally recognized and valued, ensuring equal opportunities for those with hearing impairments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
