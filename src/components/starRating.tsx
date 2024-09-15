import React from "react";
import { FaStar } from 'react-icons/fa';
// import { FaStarHalfStroke } from "react-icons/fa6";

interface StarRatingProps {
    ratingStr?: string;
    size?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ ratingStr, size = 'text-3xl' }) => {
    // Provide a default value of "0" if ratingStr is undefined
    const rating = parseFloat(ratingStr ?? "0");

    return (
        <div className="flex items-center mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} className="text-3xl focus:outline-none text-gray-200 pr-2">
                    {rating >= star+0.5 ? (
                        <FaStar className={`text-white bg-orange-400 rounded p-1 ${size}`} /> // Full star
                    ) : rating >= star - 0.5 ? (
                        <FaStar className={`text-white bg-gradient-to-r from-orange-400 from-50% to-gray-400 to-50% rounded p-1 ${size}`} /> // Half star
                    ) : (
                        <FaStar className={`text-white bg-gray-400 rounded p-1 ${size}`} /> // Empty star
                    )}
                </button>
            ))}
        </div>
    );
};

export default StarRating;
