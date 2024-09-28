// src/components/ReviewBox.tsx
import React from 'react';
import StarRating from './starRating';

interface ReviewBoxProps {
  title: string;
  content: string;
  author: string;
  rating: number;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ title, content, author, rating }) => {

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold text-lg">{title}</h3>
      <StarRating ratingStr={rating.toString()} size="text-lg"/>
      <p className="text-sm text-gray-700 mt-2">{content}</p>
      <p className="text-sm text-gray-500 mt-4">- {author}</p>
    </div>
  );
};

export default ReviewBox;
