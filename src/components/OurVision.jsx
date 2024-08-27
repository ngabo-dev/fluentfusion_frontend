import React from 'react';

const OurVision = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Vision</h2>
        <p className="text-lg text-center mb-6">
          Our vision is to create a world where sign language is recognized, valued, and utilized universally, ensuring equal opportunities and representation for individuals with hearing impairments. We strive to be the leading provider of sign language education, fostering an inclusive society where everyone can communicate and engage effectively.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-2">Future Goals</h3>
            <ul className="list-disc list-inside text-lg">
              <li>To expand our sign language education programs to reach more individuals across different regions.</li>
              <li>To collaborate with educational institutions, businesses, and communities to integrate sign language into everyday practices.</li>
              <li>To continuously innovate and improve our platform to meet the evolving needs of our users.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
