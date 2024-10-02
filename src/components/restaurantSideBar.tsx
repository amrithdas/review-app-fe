import React, { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "../config";
import Popup from "./popUp";
const RestaurantSideBar: React.FC = () => {
    // const [priceRange, setPriceRange] = useState([0, 1000]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
  // const [distance, setDistance] = useState(0);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseURL}restaurants/api/get-tags/`);
        setCategories(response.data.distinct_tags);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  useState<string[]>([]);

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handlePopupSave = (selectedCategories: string[]) => {
    setSelectedCategories(selectedCategories);
  };

  return (
    <div className="w-64 p-4 ">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* <div className="mb-4">
        <h3 className="font-medium mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          className="w-full mb-2"
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full"
        />
        <div className="flex justify-between text-xs mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div> */}

      <div className="mb-4">
        <h3 className="font-medium mb-2">Categories</h3>
        {categories.slice(0, 6).map((category) => (
          <label key={category} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            {category}
          </label>
        ))}
        {categories.length > 6 && (
          <button 
            onClick={openPopup}
            className="text-blue-500 underline mt-2"
          >
            See All
          </button>
        )}
      </div>

      {/* <div className="mb-4">
        <h3 className="font-medium mb-2">Distance</h3>
        <input
          type="range"
          min="0"
          max="50"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-xs mt-2">
          <span>{distance} km</span>
        </div>
      </div> */}
      {isPopupOpen && (
        <Popup 
          categories={categories}
          selectedCategories={selectedCategories}
          onClose={handlePopupClose}
          onSave={handlePopupSave}
        />
      )}
    </div>
  );
}
export default RestaurantSideBar;
