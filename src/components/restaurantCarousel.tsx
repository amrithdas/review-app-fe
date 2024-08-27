import React, { useEffect, useState } from 'react';
import rest from "../assets/pic/rest.jpg"
import rest2 from "../assets/pic/rest2.jpg"
import rest3 from "../assets/pic/rest2.jpg"
import { FaStar } from 'react-icons/fa';


const RestaurantCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      src: rest,


    },
    {
      src: rest2,

    },
    {
      src: rest3,

    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExampleCaptions" className="relative" data-twe-carousel-init data-twe-ride="carousel">
      {/* Carousel indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-twe-target="#carouselExampleCaptions"
            data-twe-slide-to={index}
            onClick={() => handleIndicatorClick(index)}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] ${activeIndex === index ? 'opacity-100' : 'opacity-50'} transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
            aria-current={activeIndex === index}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${activeIndex === index ? '' : 'hidden'}`}
            data-twe-carousel-item
            style={{ backfaceVisibility: 'hidden' }}
          >
            <img src={slide.src} className="block w-full h-[60vh] object-cover" alt="..." />
            <div className="absolute inset-x-[13%] bottom-5 hidden py-5  text-white md:block">
              <h5 className="text-6xl font-bold">Mountain's Pizza</h5>
              <div className="flex items-center mb-1">
                {[1, 2, 3, 4, 5].map(() => (
                  <button className="text-3xl focus:outline-none text-gray-200 p-2">
                    <FaStar className={'text-white bg-orange-400 rounded p-1'} />
                  </button>
                ))}
              </div>
              <p className="text-sm">4.1 (118 reviews)</p>
              <p className="text-sm">$5 Pizza, Chicken Wings</p>
              <p className="text-sm">Closed • 11:00 AM - 12:00 AM (Next day)</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="prev"
        onClick={handlePrev}
      >
        <span className="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="next"
        onClick={handleNext}
      >
        <span className="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  );
};

export default RestaurantCarousel;
