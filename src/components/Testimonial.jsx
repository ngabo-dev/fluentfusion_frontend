import React, { useState, useEffect } from 'react';
import axios from 'axios';  // For making API requests
import "animate.css";  // For animations
import md5 from 'md5';  // For hashing email to get Gravatar avatar

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showMore, setShowMore] = useState(false); // To toggle additional testimonials
  const [name, setName] = useState(''); // Input state for the testimonial form
  const [message, setMessage] = useState(''); // Input state for the testimonial form
  const [email, setEmail] = useState(''); // Input state for the email to fetch Gravatar
  const [loading, setLoading] = useState(true); // To manage loading state

  // Fetch testimonials from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/testimonials/');
        console.log(response.data);  // Log the response data for debugging
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Function to get Gravatar URL based on email
  const getGravatarUrl = (email) => {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=mp`;  // 'mp' is for a generic avatar with face
  };

  // Function to add a new testimonial
  const handleSubmitTestimonial = async (e) => {
    e.preventDefault();
    const gravatarUrl = getGravatarUrl(email); // Get the avatar from Gravatar
    const newTestimonial = { name, message, image: gravatarUrl };

    try {
      await axios.post('http://localhost:8000/api/testimonials/create/', newTestimonial); // Endpoint for creating a testimonial
      setTestimonials([...testimonials, newTestimonial]);
      setName(''); // Clear form fields
      setMessage('');
      setEmail('');
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    }
  };

  const handleShowMore = () => {
    setShowMore(true); // Show more testimonials when button is clicked
  };

  return (
    <div className="col-span-2 mt-20 px-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Are Saying</h2>
      
      {loading ? (
        <p className="text-center">Loading testimonials...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200  hover:bg-blue-500 hover:text-white rounded-lg shadow-md">
              {testimonial.image ? (
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}'s testimonial`} 
                  className="w-16 h-16 rounded-full mb-4"
                  onError={(e) => {
                    e.target.onerror = null; // prevents looping
                    e.target.src = 'path/to/your/default-image.png'; // Replace with a default image URL
                  }}
                />
              ) : (
                <p>No image available</p>
              )}
              <h4 className="text-lg font-bold hover:text-white">{testimonial.name}</h4>
              <p className="mt-4 text-gray-600 hover:text-white">{testimonial.message}</p>
            </div>
          ))}

          {/* Show the rest of the testimonials with animation */}
          {showMore && testimonials.slice(3).map((testimonial, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md animate__animated animate__fadeIn">
              {testimonial.image ? (
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}'s testimonial`} 
                  className="w-16 h-16 rounded-full mb-4"
                  onError={(e) => {
                    e.target.onerror = null; // prevents looping
                    e.target.src = 'path/to/your/default-image.png'; // Replace with a default image URL
                  }}
                />
              ) : (
                <p>No image available</p>
              )}
              <h4 className="text-lg font-bold">{testimonial.name}</h4>
              <p className="mt-4 text-gray-600">{testimonial.message}</p>
            </div>
          ))}
        </div>
      )}

      {/* Show More Button */}
      {!showMore && !loading && (
        <div className="text-center mt-8">
          <button 
            onClick={handleShowMore} 
            className="py-3 px-6 text-white bg-blue-600 rounded-lg"
          >
            Show More Testimonials
          </button>
        </div>
      )}

      {/* Share Your Testimonial Section */}
      <div className="grid py-24 grid-cols-2">
        <div>
          <img src='../src/images/share.png' className='mt-12 h-96 w-96 border-8 border-blue-500 rounded-full' />
        </div>
        <form onSubmit={handleSubmitTestimonial} className="max-w-lg ml-16 mt-12">
          <h3 className="text-3xl font-semibold mb-6 text-center">Share Your Testimonial</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-3 px-6 bg-blue-600 text-white w-full rounded-lg"
            >
              Submit Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
