import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold  mr-36 text-center mb-6">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-2">1. Inclusive Education</h3>
            <p className="text-lg">
              SLTS offers a comprehensive and accessible platform for learning sign language, tailored to the needs of individuals with hearing impairments. Our services are designed to ensure that everyone has the opportunity to learn and use sign language in various aspects of life.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-2">4. Community Focus</h3>
            <p className="text-lg">
              SLTS is dedicated to supporting communities, schools, universities, religious institutions, and businesses by offering tailored sign language education solutions. We work closely with various stakeholders to promote sign language and enhance communication accessibility.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-2">5. Expertise and Innovation</h3>
            <p className="text-lg">
              With a team of dedicated professionals and educators, SLTS is at the forefront of sign language education and technology. We continuously update and expand our offerings to provide the best learning experience and meet the needs of our diverse user base.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
