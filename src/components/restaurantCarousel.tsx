import React, { useEffect, useState } from 'react';
import StarRating from './starRating';

interface RestaurantCarouselProps {
    opening_time?: String;
    closing_time?: String;
    name?: String;
    ratingStr?: string;
    image_urls?: string[];
    reviewCount:number;
}

const RestaurantCarousel: React.FC<RestaurantCarouselProps> = ({ opening_time, closing_time, name, ratingStr, image_urls, reviewCount }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState<string>('Closed');
  const [formattedOpeningTime, setFormattedOpeningTime] = useState('');
  const [formattedClosingTime, setFormattedClosingTime] = useState('');
  const [textColorClass, setTextcolorClass] = useState('');
  const fallbackImage = "https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg";
  const slides = [
    { src: (image_urls && image_urls[0]) ? image_urls[0] : fallbackImage },
    { src: (image_urls && image_urls[1]) ? image_urls[1] : fallbackImage },
    { src: (image_urls && image_urls[2]) ? image_urls[2] : fallbackImage }
  ];

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        if (name) {

          // Determine if the restaurant is open or closed
          const currentDateTime = new Date();
          const [openingHour, openingMinute] = opening_time? opening_time.split(':').map(Number): [0, 0];
          const [closingHour, closingMinute] = closing_time? closing_time.split(':').map(Number): [0, 0];
          const openingDateTime = new Date();
          openingDateTime.setHours(openingHour, openingMinute, 0, 0);

          setFormattedOpeningTime(openingDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

          const closingDateTime = new Date();
          closingDateTime.setHours(closingHour, closingMinute, 0, 0);
          setFormattedClosingTime(closingDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

          if (closingDateTime <= openingDateTime) {
            closingDateTime.setDate(closingDateTime.getDate() + 1); // Add 1 day to closing time
          }
          
          if (currentDateTime >= openingDateTime && currentDateTime < closingDateTime) {
            setIsOpen('Open');
          } else {
            setIsOpen('Closed');
          }
        }
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    setTextcolorClass(isOpen === 'Open' ? 'text-green-500' : 'text-red-500');

    fetchRestaurantDetails();
  }, [name, opening_time, closing_time, ratingStr, isOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

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
            <div className="absolute inset-x-[13%] bottom-5 hidden py-5 text-white md:block">
              <h5 className="text-6xl font-bold pb-4">{name}</h5>
              {ratingStr !== null && (
                <StarRating ratingStr={ratingStr}/>
              )}
              <p className="text-lg font-bold">{ratingStr ? `(${reviewCount} reviews)` : 'No rating available'}</p>
              <div className="flex items-center space-x-2">
                <p className={`text-xl font-bold ${textColorClass}`}>
                  {isOpen}
                </p>
                <p className="text-lg font-bold">
                  {formattedOpeningTime} - {formattedClosingTime}
                </p>
              </div>
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
