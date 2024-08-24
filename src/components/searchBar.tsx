import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UserAuth from '../hooks/userAuth';
import { useAuth } from '../modals/authContext';
import ErrorMessage from './errorPopup';
import baseURL from '../config';

interface Business {
  restaurant_id: number,
  name: string;
  address: string;
}

const SearchBar:React.FC = () => {
    const [Restaurants, setRestaurants] = useState<Business[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [error, setError] = useState(false);
    const {handleLoginOpen} = useAuth();
    const navigate = useNavigate();
    const isAuthenticated = UserAuth();

    useEffect(() => {
      const fetchRestaurants = async () => {
        try {
            const response = await axios.get(`${baseURL}restaurants/api/restaurants/list?search=${searchTerm}`);
            setRestaurants(response.data);
        } catch (error) {
            console.error('Error fetching businesses:', error);
        }
    };
      fetchRestaurants();
    }, [searchTerm]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleInputFocus = () => {
        setShowDropdown(true);
    };

    const handleInputBlur = () => {
        // Delay hiding the dropdown to allow click event on dropdown items
        setTimeout(() => setShowDropdown(false), 200);
    };

    const handleSelectRestaurant = (restaurant: Business) => {
      setSearchTerm(restaurant.name);
      setShowDropdown(false);
      if (!isAuthenticated) {
        setError(true);
        handleLoginOpen();
      } else {
      navigate(`/restaurants/review?name=${restaurant.name}`);
      }
    };

    return (
        <div className="relative mt-6 flex items-center border rounded-lg bg-white shadow-md">
            <input
                type="text"
                placeholder="Business Name"
                className="py-3 px-4 rounded-l-full w-full focus:outline-none"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            {showDropdown && Restaurants.length > 0 && (
                <ul className="absolute left-0 top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {Restaurants.map((restaurant) => (
                      <li
                        key={restaurant.restaurant_id}
                        className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleSelectRestaurant(restaurant)}
                      >
                        <div>{restaurant.name}</div>
                        <div className="text-sm text-gray-500">{restaurant.address}</div>
                      </li>
                    ))}
                </ul>
            )}
            {/* <div className="border-l px-4 flex items-center">
                <input
                    type="text"
                    placeholder="Location"
                    className="py-3 px-4 focus:outline-none"
                />
            </div> */}
            <button className="bg-red-500 hover:bg-red-600 text-white py-4 px-4 rounded-r-lg">
                <FaSearch />
            </button>
            {error && <ErrorMessage message="Please Login to continue" onClose={() => setError(false)} />}
        </div>
    );
};

export default SearchBar;
