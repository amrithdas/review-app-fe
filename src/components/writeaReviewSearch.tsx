import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Navbar from './navbar';
import { useAuth } from '../modals/authContext';
import LoginModalManager from '../modals/loginModalManager';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import ReviewCard from './reviewCard';
import baseURL from '../config';
import ErrorMessage from './errorPopup';

const WriteaReviewSearch: React.FC = () => {
  const { handleSignupOpen, handleLoginOpen } = useAuth();

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const restaurantName = queryParams.get('name') || 'Loading..';
  const csrfToken = Cookies.get('csrftoken');
  const navigate = useNavigate();

  const handleSubmit = async () => {

    if (!reviewText || reviewText.length < 80) {
      setErrorMessage('Review must be at least 80 characters long and cannot be empty');
      return;
    }

    if(rating<1){
      setErrorMessage('Choose a rating');
      return;
    }

    try {
      const response = await axios.post(`${baseURL}restaurants/api/createrestaurantreviews/`, {
        restaurant_name: restaurantName,
        rating,
        description: reviewText,
      }, {
        headers: {
          'X-CSRFToken': csrfToken,
        },
        withCredentials: true,
      });

      console.log('Review posted successfully:', response.data);
      navigate(`/restaurant/${restaurantName}`)
    } catch (error) {
      console.error('Error posting review:', error);
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${baseURL}restaurants/api/restaurants/${restaurantName}/reviews/`, {
          headers: {
            'X-CSRFToken': csrfToken,
          },
          withCredentials: true,
        });
        setReviews(response.data.reviews);
      } catch (err) {
        setError('Error fetching reviews');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [restaurantName, csrfToken]);

  return (
    <>
      <Navbar onSignupClick={handleSignupOpen} onLoginClick={handleLoginOpen} isFixed={false} />
      <div className="max-w-2xl mx-auto p-6 mt-16 flex flex-col items-center">
        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
          <h1 className="text-3xl font-bold mb-4">{restaurantName}</h1>
          <p className="text-blue-500 mb-4 cursor-pointer">Read our review guidelines</p>
        </div>
        <div className="border p-4 mb-4 focus:ring-violet-300 w-full">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="flex items-center mb-4 md:mb-0">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="text-3xl focus:outline-none text-gray-200 p-2"
                >
                  <FaStar className={rating >= star ? 'text-white bg-yellow-400 rounded p-1' : 'text-white bg-gray-100 rounded p-1'} />
                </button>
              ))}
              <span className="ml-2">Select your rating</span>
            </div>

          </div>
          <p className="mb-4">A few things to consider in your review</p>
          <div className="flex space-x-2 mb-4">
            <span className="bg-gray-200 px-2 py-1 rounded">Food</span>
            <span className="bg-gray-200 px-2 py-1 rounded">Service</span>
            <span className="bg-gray-200 px-2 py-1 rounded">Ambiance</span>
          </div>
          <textarea
            rows={8}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-2 focus:outline-none resize-none no-scrollbar overflow-hidden"
            style={{ height: 'auto' }}
          />
        </div>
        <button onClick={handleSubmit} className="mt-12 bg-red-600 text-white px-14 py-2 rounded font-medium">Post Review</button>
        <div className="w-full mt-8 md:hidden">
          <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            reviews.map((review: any, index: number) => (
              <ReviewCard key={index} review={review} />
            ))
          )}
        </div>
      </div>

      {/************* Expand and Collapse review bar *********************************************8*/}
      <div className="hidden md:flex justify-end items-start h-screen fixed top-0 right-0 mt-16">
        <div className="w-full max-w-sm">
          <div className="flex items-start">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mt-4 bg-white border text-black py-4 rounded-tl-lg rounded-bl-lg flex items-center"
            >
              <span className="ml-2">
                {isOpen ? <FiChevronRight /> : <FiChevronLeft />}
              </span>
            </button>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-200"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="p-4 bg-white border border-gray-200 rounded-lg max-h-[95vh] overflow-y-auto">
                <div className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>
                  {loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>{error}</p>
                  ) : (
                    reviews.map((review: any, index: number) => (
                      <ReviewCard key={index} review={review} />
                    ))
                  )}
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <LoginModalManager />
      {errorMessage && <ErrorMessage message={errorMessage} onClose={() => setError('')} />}
    </>
  );
};

export default WriteaReviewSearch;
