import React from 'react'
import SearchBar from './searchBar';
import reviewImage from '../assets/pic/review.svg'
import thumbsUpImage from '../assets/pic/review1.svg'
import Navbar from './navbar';
import Footer from './footer';
import { useAuth } from '../modals/authContext';
import LoginModalManager from '../modals/loginModalManager';

const ReviewLanding: React.FC = () => {
  const { handleSignupOpen, handleLoginOpen} = useAuth();
  
  return (

    <div className='bg-white-100 h-screen'>
      <Navbar onSignupClick={handleSignupOpen} onLoginClick={handleLoginOpen} isFixed={false} />
      <div className="flex pt-32 justify-center  ">
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold">Find a business to review</h1>
          <p className="text-gray-600 mt-4">Review anything from your favorite patio spot to your local flower shop.</p>
          <div className="mt-4">
            <SearchBar />
          </div>
        </div>
        <div className="ml-10">
          <img src={reviewImage} alt="Review" className="w-96 h-auto" />
        </div>
      </div>
      <div className="flex flex-col pt-28 justify-center ">
      
        <h1 className="text-2xl font-bold mb-4 pl-64">Visited one of these places recently?</h1>
        <div className="flex flex-col items-center">
          <div className=" p-4 mb-4">
            <img src={thumbsUpImage} alt="Thumbs Up" className="w-32 h-" />
          </div>
          <p className="text-gray-600 text-center">
            We’re out of suggestions for you right now. Keep on using Yelp and we’ll have some more for you soon.
          </p>
        </div>
       
      </div>
      <div className='mt-24'>
        <Footer/>
      </div>
      <LoginModalManager />
    </div>


  );
}

export default ReviewLanding;
