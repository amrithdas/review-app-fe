// src/components/ReviewBox.tsx
import React from 'react';

interface ReviewBoxProps {
  title: string;
  content: string;
  author: string;
  rating: number;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ title, content, author, rating }) => {
  // Function to render the star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.142c.969 0 1.371 1.24.588 1.81l-3.357 2.444a1 1 0 00-.364 1.118l1.286 3.948c.3.921-.755 1.688-1.54 1.118l-3.357-2.444a1 1 0 00-1.175 0l-3.357 2.444c-.784.57-1.838-.197-1.54-1.118l1.286-3.948a1 1 0 00-.364-1.118L2.293 8.375c-.783-.57-.381-1.81.588-1.81h4.142a1 1 0 00.95-.69l1.286-3.948z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold text-lg">{title}</h3>
      {renderStars(rating)}
      <p className="text-sm text-gray-700 mt-2">{content}</p>
      <p className="text-sm text-gray-500 mt-4">- {author}</p>
    </div>
  );
};

export default ReviewBox;
