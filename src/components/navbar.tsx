import React from 'react';
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
  // console.log(isAuthenticated)

  const handleLogout = async () => {
    try {

      const headers = {
        'X-CSRFToken': Cookies.get('csrftoken')
      };
      const response = await axios.post(`${baseURL}accounts/logout/`, {}, {
        headers: headers,
        withCredentials: true
      });

      if (response.status === 200) {
        // setUser(null);
        window.location.reload();
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  }

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <nav>
      <div className={isFixed ? "fixed top-0 left-0 right-0 z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-white border-b-2 border-gray-300 h-16" : "relative top-0 left-0 right-0 z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-300 bg-transparent h-16"}>
        <div className="flex justify-between h-16">
          <div className="text-black flex-shrink-0 flex items-center">
            <h2><a href='/'>Piktio</a></h2>
          </div>
          <div className="flex items-center">
            <a href="/WriteaReview" className="text-black text-sm mr-4">
              Write a Review
            </a>
            {!isAuthenticated ?
              <><button
                onClick={onLoginClick}
                className="text-black border-solid border-2 border-black-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </button><button
                onClick={onSignupClick}
                className="ml-4 text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                  Signup
                </button></> : <><button
                  onClick={handleLogout}
                  className="text-black border-solid border-2 border-black-600 hover:text-white-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
                <img
                  src="images/ppic_1.png"
                  alt="Profile"
                  className="ml-4 w-9 h-9 rounded-full cursor-pointer"
                  onClick={handleProfileClick}
                /></>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
