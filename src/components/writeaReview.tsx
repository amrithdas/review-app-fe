import React from 'react';
import SearchBar from './searchBar';
import reviewImage from '../assets/pic/review.svg';
import thumbsUpImage from '../assets/pic/review1.svg';
import Navbar from './navbar';
import Footer from './footer';
import { useAuth } from '../modals/authContext';
import LoginModalManager from '../modals/loginModalManager';

const ReviewLanding: React.FC = () => {
  const { handleSignupOpen, handleLoginOpen } = useAuth();

  return (
    <div className='bg-white h-full'>
      <Navbar onSignupClick={handleSignupOpen} onLoginClick={handleLoginOpen} isFixed={false} />
      <div className="flex flex-col md:flex-row pt-20 md:pt-32 justify-center items-center px-4">
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">Find a business to review</h1>
          <p className="text-gray-600 mt-2 md:mt-4">Review anything from your favorite patio spot to your local flower shop.</p>
          <div className="mt-4">
            <SearchBar />
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:ml-10">
          <img src={reviewImage} alt="Review" className="w-64 md:w-96 h-auto mx-auto md:mx-0" />
        </div>
      </div>
      <div className="flex flex-col pt-16 md:pt-28 items-center px-4">
        <h1 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">Visited one of these places recently?</h1>
        <div className="flex flex-col items-center">
          <div className="p-4 mb-4">
            <img src={thumbsUpImage} alt="Thumbs Up" className="w-24 md:w-32 h-auto" />
          </div>
          <p className="text-gray-600 text-center">
            We’re out of suggestions for you right now. Keep on using Yelp and we’ll have some more for you soon.
          </p>
        </div>
      </div>
      <div className='mt-12 md:mt-24'>
        <Footer />
      </div>
      <LoginModalManager />
    </div>
  );
}

export default ReviewLanding;
