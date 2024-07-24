import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="mt-6 flex items-center border rounded-lg bg-white shadow-md">
      <input
        type="text"
        placeholder="Try lunch, yoga studio, plumber"
        className="py-3 px-4 rounded-l-full w-80 focus:outline-none"
      />
      <div className="border-l px-4 flex items-center">
        <input
          type="text"
          placeholder="San Francisco, CA"
          className="py-3 px-4 focus:outline-none"
        />
      </div>
      <button className="bg-red-500 hover:bg-red-600 text-white py-4 px-4 rounded-r-lg">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
