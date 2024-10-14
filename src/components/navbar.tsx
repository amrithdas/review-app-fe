import React, { useState } from 'react';
import UserAuth from '../hooks/userAuth';
import axios from 'axios';
import baseURL from '../config';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onSignupClick: () => void;
  onLoginClick: () => void;
  isFixed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onSignupClick, onLoginClick, isFixed }) => {
  const isAuthenticated = UserAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const headers = {
        'X-CSRFToken': Cookies.get('csrftoken'),
      };
      const response = await axios.post(`${baseURL}accounts/logout/`, {}, {
        headers: headers,
        withCredentials: true,
      });

      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className={`${isFixed ? "fixed" : "relative"} top-0 left-0 right-0 z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-white border-b-2 border-gray-300 h-16`}>
        <div className="flex justify-between items-center h-16">
          <div className="text-black flex-shrink-0 flex items-center">
            <h2><a href='/'>Piktio</a></h2>
          </div>

          {/* Burger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center">
            <a href="/WriteaReview" className="text-black text-sm mr-4">Write a Review</a>
            {!isAuthenticated ? (
              <>
                <button onClick={onLoginClick} className="text-black border-solid border-2 border-black-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Login</button>
                <button onClick={onSignupClick} className="ml-4 text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Signup</button>
              </>
            ) : (
              <>
                <button onClick={handleLogout} className="text-black border-solid border-2 border-black-600 hover:text-white-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Logout</button>
                <img src="images/ppic_1.png" alt="Profile" className="ml-4 w-9 h-9 rounded-full cursor-pointer" onClick={handleProfileClick} />
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white shadow-lg z-50">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button onClick={toggleMenu} className="text-black">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="flex-grow flex flex-col">
                {!isAuthenticated ? (
                  <>
                    <div className="border-b border-gray-300 py-4">
                      <button onClick={onLoginClick} className="text-black text-lg ml-5">Login</button>
                    </div>
                    <div className="border-b border-gray-300 py-4">
                      <button onClick={onSignupClick} className="text-blue-500 text-lg ml-5">Signup</button>
                    </div>
                    <div className="border-b border-gray-300 py-4">
                      <a href="/WriteaReview" className="text-black text-lg ml-5">Write a Review</a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="border-b border-gray-300 py-4">
                      <button onClick={handleLogout} className="text-black text-lg ml-5">Logout</button>
                    </div>
                    <div className="border-b border-gray-300 py-4">
                      <a href="/WriteaReview" className="text-black text-lg ml-5">Write a Review</a>
                    </div>
                    <div className="py-4 ml-5">
                      <span className="flex items-center">
                        <img
                          src="images/ppic_1.png"
                          alt="Profile"
                          className="w-12 h-12 rounded-full cursor-pointer"
                          onClick={handleProfileClick}
                        />
                        <p className="text-lg ml-4">Profile</p>
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* <div className="border-t border-gray-300 p-4 flex justify-between">
        <button className="text-gray-500">Ad Choices</button>
        <button className="text-gray-500">Support</button>
      </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
