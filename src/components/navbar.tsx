import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Cookies from 'js-cookie';

interface NavbarProps {
  onSignupClick: () => void;
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignupClick, onLoginClick }) => {

  const isAuthenticated = useAuth();
  console.log(isAuthenticated)

  const handleLogout = async () => {
    try {
      
      const headers = {
        'X-CSRFToken': Cookies.get('csrftoken')
      };

      const response = await axios.post('http://127.0.0.1:8000/accounts/logout/', {}, {
          headers: headers,
          withCredentials: true  // Ensure credentials are included
      });
      
      if (response.status === 200) {
          // Clear any user-related state
          // setUser(null);
          // Redirect or refresh the page
          window.location.reload();
      }
  } catch (error) {
      console.error('An error occurred during logout:', error);
  }
  }

  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="text-white flex-shrink-0 flex items-center">
            <h2>placeholder</h2>
          </div>
          <div className="flex items-center">
          <a href="/signup" className="text-white text-sm mr-4">
              Write a Review
            </a>
            {!isAuthenticated?
            <><button
                onClick={onLoginClick}
                className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </button><button
                onClick={onSignupClick}
                className="ml-4 text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                  Signup
                </button></>:<button
                onClick={handleLogout}
              className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
