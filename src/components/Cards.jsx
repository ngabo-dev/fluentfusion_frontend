import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaUtensils, FaBusinessTime, FaLaptopCode, FaMusic, FaBook, FaArtstation } from "react-icons/fa";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Set timeout for 5 seconds to start the animation
    const timer = setTimeout(() => setAnimate(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <>
      {/* <div className="border-r-2 w-96 border-gray-200">
        <button
          type="button"
          className="inline-flex w-60 mt-20 mx-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <p className="px-2">View All Categories</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div> */}

      <div className=" px-24 py-10 text-center">
        <span className="text-lg text-blue-500 mb-2">Sign Language Categories</span>
        <h1 className="text-3xl font-bold text-black mb-2">Explore Top Categories</h1>
      </div>

      <div className=" px-12 py-24">
        <Slider {...settings}>
          <div className={`w-54 px-4   max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 ${animate ? 'animate__animated animate__fadeIn' : ''} hover:animate__pulse`}>
            <div className="flex flex-col items-center pb-10 px-8">
              <FaUtensils className="w-24 h-24 mb-3 p-3 text-gray-700" />
              <span className="text-lg mb-2 text-black">Cooking</span>
              <button
                type="button"
                className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <p className="px-2">Learn More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={`w-60 px-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 ${animate ? 'animate__animated animate__fadeIn' : ''} hover:animate__pulse`}>
            <div className="flex flex-col items-center pb-10">
              <FaBusinessTime className="w-24 h-24 mb-3 p-2 text-gray-700" />
              <span className="text-lg mb-2 text-black">Business</span>
              <button
                type="button"
                className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <p className="px-2">Learn More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={`w-60 px-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 ${animate ? 'animate__animated animate__fadeIn' : ''} hover:animate__pulse`}>
            <div className="flex flex-col items-center pb-10">
              <FaLaptopCode className="w-24 h-24 mb-3 p-2 text-gray-700" />
              <span className="text-lg mb-2 text-black">Technology</span>
              <button
                type="button"
                className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <p className="px-2">Learn More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={`w-60 px-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 ${animate ? 'animate__animated animate__fadeIn' : ''} hover:animate__pulse`}>
            <div className="flex flex-col items-center pb-10">
              <FaMusic className="w-24 h-24 mb-3 p-2 text-gray-700" />
              <span className="text-lg mb-2 text-black">Music</span>
              <button
                type="button"
                className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <p className="px-2">Learn More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={`w-60  px-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 ${animate ? 'animate__animated animate__fadeIn' : ''} hover:animate__pulse`}>
            <div className="flex flex-col items-center pb-10">
              <FaBook className="w-24 h-24 mb-3 p-2 text-gray-700" />
              <span className="text-lg mb-2 text-black">Education</span>
              <button
                type="button"
                className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <p className="px-2">Learn More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={`w-60 px-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-200 ${animate ? 'animate__animated animate__fadeIn' : ''} hover:animate__pulse`}>
            <div className="flex flex-col items-center pb-10">
              <FaArtstation className="w-24 h-24 mb-3 p-2 text-gray-700" />
              <span className="text-lg mb-2 text-black">Art</span>
              <button
                type="button"
                className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <p className="px-2">Learn More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Cards;
