import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

const Whatwedo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);  // Trigger animation when in view
        } else {
          setIsVisible(false); // Reset when out of view
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white font-[sans-serif] py-12 px-4 md:px-12 overflow-x-hidden mt-[250px] sm:mt-[100px]"> {/* Adjust margin for small screens */}
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-8 overflow-hidden"
      >
        <div
          className={`p-4 ${
            isVisible ? 'animate__animated animate__fadeInRight' : ''
          }`}
        >
          <h2 className="text-pink-600 text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px] capitalize">
            What we do
          </h2>
          <p className="text-black text-base font-light leading-relaxed">
            At our hub, we bring together urban planners, technology providers,
            governments, Communities, and other stakeholders to share knowledge,
            resources, and strategies for addressing next-generation urban
            challenges.
          </p>
        </div>
        <div
          className={`md:text-right max-md:mt-12 ${
            isVisible ? 'animate__animated animate__fadeInRight' : ''
          }`}
        >
          <img
            src="/smart City2.jpeg"
            alt="what we do image"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
