import React from 'react';
import OurMission from '../components/OurMission';
import Team from '../components/Team';
import Partners from '../components/Partners';
import CustomSlider from '../components/CustomSlider';

const About = () => {
  return (
    <>
      {/* Welcome Text Overlay */}
      <div className="relative w-full h-screen">
        {/* Welcome Text Positioned Absolutely */}
        <div className="absolute inset-0 flex flex-col items-center justify-center  text-white z-20">
          <h1 className="text-5xl font-bold mb-4"><span className='text-pink-600 leading-relaxed'>About Us</span> <br></br>Welcome to Our Sustainable Future!</h1>

        </div>

        {/* CustomSlider with images in the background */}
        <CustomSlider>
          <img src="/Green.jpg" alt="Green" className="object-cover w-full h-screen" loading="lazy" />
          <img src="/Urban resilient.jpeg" alt="Urban Resilient" className="object-cover w-full h-screen" loading="lazy" />
          <img src="/Nature based solution.jpeg" alt="Nature-Based Solution" className="object-cover w-full h-screen" loading="lazy" />
          <img src="/Urban agriculture1.jpeg" alt="Urban Agriculture" className="object-cover w-full h-screen" loading="lazy" />
          <img src="/smart City.jpeg" alt="Smart City" className="object-cover w-full h-screen" loading="lazy" />
        </CustomSlider>
      </div>

      <OurMission />
      <Team />
      <Partners />
    </>
  );
};

export default About;
