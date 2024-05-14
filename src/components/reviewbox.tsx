// src/components/ReviewBox.tsx
import React from 'react';

interface ReviewBoxProps {
  title: string;
  content: string;
  author: string;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ title, content, author }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-700 mt-2">{content}</p>
      <p className="text-sm text-gray-500 mt-4">- {author}</p>
    </div>
  );
};

export default ReviewBox;
