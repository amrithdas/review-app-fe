import React from 'react';

const Navbar: React.FC = () => {
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
            <a href="/login" className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </a>
            <a href="/signup" className="ml-4 text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Signup
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
