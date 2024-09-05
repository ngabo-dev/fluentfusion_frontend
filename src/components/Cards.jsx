import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from 'axios';
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icons to be dynamically rendered
import { FaUtensils, FaBusinessTime, FaLaptopCode, FaMusic, FaBook } from "react-icons/fa";

const iconMap = {
  Cooking: <FaUtensils className="w-24 h-24 mb-3 p-3 text-gray-700" />,
  Business: <FaBusinessTime className="w-24 h-24 mb-3 p-2 text-gray-700" />,
  Technology: <FaLaptopCode className="w-24 h-24 mb-3 p-2 text-gray-700" />,
  Music: <FaMusic className="w-24 h-24 mb-3 p-2 text-gray-700" />,
  Education: <FaBook className="w-24 h-24 mb-3 p-2 text-gray-700" />,
};

const Cards = () => {
  const [categories, setCategories] = useState([]);
  const [words, setWords] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [animate, setAnimate] = useState(false);

  // Fetch categories from the API
  useEffect(() => {
    axios.get('http://localhost:8000/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the categories!", error);
      });

    const timer = setTimeout(() => setAnimate(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleLearnMore = (categoryId) => {
    axios.get(`http://localhost:8000/api/words/?category_id=${categoryId}`)
      .then(response => {
        setWords(response.data);
        setSelectedCategory(categoryId);
      })
      .catch(error => {
        console.error("There was an error fetching the words!", error);
      });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <div className="px-24 py-10 text-center">
        <h1 className="text-3xl font-bold text-black mb-2">Explore Top Categories</h1>
      </div>

      <div className="px-12 py-24">
        <Slider {...settings}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`w-54 px-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow ${animate ? 'animate__animated animate__fadeIn' : ''} hover:animate__pulse`}
            >
              <div className="flex flex-col items-center pb-10 px-8">
                {iconMap[category.category_name] || <img src={category.icon} alt={category.category_name} className="w-24 h-24 mb-3 p-2" />}
                <span className="text-lg mb-2 text-black">{category.category_name}</span>
                <button
                  type="button"
                  className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                  onClick={() => handleLearnMore(category.id)}
                >
                  <p className="px-2">Learn More</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {selectedCategory && (
        <div className="px-12 py-24">
          <h2 className="text-2xl font-bold text-black mb-2">Words in Selected Category</h2>
          <ul>
            {words.length === 0 ? (
              <p>No words available in this category</p>
            ) : (
              words.map(word => (
                <li key={word.id}>{word.word}</li>
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cards;
