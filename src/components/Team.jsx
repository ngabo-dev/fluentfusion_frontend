import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Team = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: 'John Doe',
      message: 'SLTS has been a great resource in helping me learn sign language!',
      image: null,
    },
    {
      name: 'Jane Smith',
      message: 'I was able to complete my sign language course, and the team was supportive throughout.',
      image: null,
    },
  ]);

  const [testimonialInput, setTestimonialInput] = useState({
    name: '',
    message: '',
    email: '',
    image: null, // Add image field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestimonialInput({ ...testimonialInput, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create an object URL to preview the image
      const imageUrl = URL.createObjectURL(file);
      setTestimonialInput({ ...testimonialInput, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message, image } = testimonialInput;
    setTestimonials([...testimonials, { name, message, image }]);
    setTestimonialInput({ name: '', message: '', email: '', image: null });
  };

  return (
    <div className='grid grid-cols-2 mt-40'>
      <div className='grid grid-cols-2 gap-8'>
        {/* Team Member Cards */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img className="rounded-t-lg" src="../src/images/home.jpeg" alt="Pacience" />
          </a>
          <div className="p-5 text-center">
            <h5 className="mb-2 text-lg font-bold text-black">Pacience</h5>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} className="text-blue-400 hover:text-blue-600" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="text-pink-500 hover:text-pink-700" />
              </a>
            </div>
          </div>
        </div>
        {/* Repeat for other team members */}
      </div>

      {/* Team Information Section */}
      <div className='py-40'>
        <span className='px-24 text-lg text-blue-500 mb-8'>Join Us in Making a Difference</span>
        <h1 className='px-24 mb-2 text-4xl font-bold text-black'>Meet With Our Team</h1>
        <p className='px-24 mb-2 py-4'>
          At SLTS, our dedicated team of passionate individuals is driven by a shared vision of making sign
          language education accessible to everyone.
        </p>
        <div className='inline-flex px-24 py-10 gap-5'>
          <button className="inline-flex w-52 py-4 text-white bg-blue-700 hover:bg-blue-800 rounded-lg">Learn More</button>
          <button className="inline-flex w-52 py-4 text-white bg-black rounded-lg">Learn More</button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="col-span-2 mt-20 px-40">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
              {testimonial.image && (
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}'s testimonial`} 
                  className="w-16 h-16 rounded-full  mb-4"
                />
              )}
              <h4 className="text-lg font-bold">{testimonial.name}</h4>
              <p className="mt-4 text-gray-600">{testimonial.message}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Form */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Share Your Testimonial</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={testimonialInput.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={testimonialInput.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={testimonialInput.email}
                onChange={handleInputChange}
                placeholder="Your Email (for contact purposes)"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <button type="submit" className="py-3 px-6 text-white bg-blue-600 rounded-lg">
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Team;
