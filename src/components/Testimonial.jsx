import React, { useState, useEffect, useRef } from 'react';
import 'animate.css'; // Import Animate.css

const testimonialsData = [
  {
    name: "John Doe",
    role: "Urban Planner",
    message: "NGU-Link Hub has transformed our city's growth with innovative, sustainable solutions and a global network of urban stakeholders.",
    image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  },
  {
    name: "Mark Adair",
    role: "Government Official",
    message: "NGU-Link Hub gave us insights, resources, and expertise, helping tackle urban challenges and improve citizens' quality of life.",
    image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  },
  {
    name: "Simon Konecki",
    role: "Technology Provider",
    message: "NGU-Link Hub connected us with global city leaders, fostering collaboration, innovation, and showcasing our solutions.",
    image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  },
  {
    name: "Alice Smith",
    role: "Community Leader",
    message: "The innovative approaches from NGU-Link Hub have greatly improved our community's infrastructure.",
    image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  },
  {
    name: "Bob Johnson",
    role: "Urban Developer",
    message: "Thanks to NGU-Link Hub, our urban projects are more efficient and environmentally friendly.",
    image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  },
  {
    name: "Belyse Niyonsenga",
    role: "Urban Developer",
    message: "Thanks to NGU-Link Hub, our urban projects are more efficient and environmentally friendly.",
    image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsToShow = testimonialsData.slice(currentIndex, currentIndex + 3);
  const refs = useRef([]); // Create a refs array for each testimonial
  const [isVisible, setIsVisible] = useState(Array(testimonialsToShow.length).fill(false)); // Initialize visibility state

  const handleNext = () => {
    if (currentIndex < testimonialsData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setIsVisible(prev => {
            const newVisibility = [...prev];
            newVisibility[index] = true; // Set to true when in view
            return newVisibility;
          });
        } else {
          const index = Number(entry.target.dataset.index);
          setIsVisible(prev => {
            const newVisibility = [...prev];
            newVisibility[index] = false; // Reset to false when out of view
            return newVisibility;
          });
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each testimonial
    refs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      // Cleanup the observer on component unmount
      refs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [testimonialsToShow]);

  return (
    <div className="pl-10 font-[sans-serif] mt-4 py-20">
      <div className="max-w-6xl mx-4 sm:mx-20">
        <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
          <div className="col-span-2">
            <h2 className="text-pink-600 text-5xl font-bold">Testimonials</h2>
          </div>

          <div className="flex space-x-4 items-end justify-end">
            <div
              className="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 inline" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" />
              </svg>
            </div>
            <div
              className="bg-green-900 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer"
              onClick={handleNext}
              disabled={currentIndex >= testimonialsData.length - 3}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 lg:gap-12 gap-6 mt-16">
          {testimonialsToShow.map((testimonial, index) => (
            <div
              key={index}
              data-index={index} // Assign index to data attribute
              ref={el => (refs.current[index] = el)} // Assign ref
              className={`max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative 
                ${isVisible[index] ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutDown'}`}
            >
              <img src="/profileimage.jpeg" className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300 object-cover" alt={testimonial.name} />
              <div>
                <h4 className="text-gray-800 text-base font-light">{testimonial.name}</h4>
                <p className="mt-1 text-xs text-gray-500">{testimonial.role}</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-800 leading-relaxed font-light text-base">{testimonial.message}</p>
              </div>
              <div className="flex space-x-1 mt-4">
                {/* Star rating SVGs */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L9.4687 3.60213L13.1439 4.25161L10.4315 7.56387L11.1563 11.2975L7 9.06312L2.84375 11.2975L3.56851 7.56387L0.856077 4.25161L4.53125 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
