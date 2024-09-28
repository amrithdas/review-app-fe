import React, { useEffect, useState } from 'react';
import baseURL from '../config';

interface RatingCounts {
  [key: number]: number;
}

const RatingProgress: React.FC<{ restaurantName: string }> = ({ restaurantName }) => {
  const [counts, setCounts] = useState<RatingCounts>({});

  useEffect(() => {
    const fetchRatingCounts = async () => {
      try {
        const response = await fetch(`${baseURL}restaurants/api/get-rating-counts/${restaurantName}/`);
        const data: RatingCounts = await response.json();
        setCounts(data);
      } catch (error) {
        console.error('Error fetching rating counts:', error);
      }
    };

    fetchRatingCounts();
  }, [restaurantName]);

  // Calculate the total number of reviews
  const totalReviews = Object.values(counts).reduce((sum, count) => sum + count, 0);

  // Calculate percentage widths for progress bars
  const getPercentage = (count: number) => (totalReviews > 0 ? (count / totalReviews) * 100 : 0);

  return (
    <div className="space-y-1 w-3/5">
      {Array.from({ length: 5 }, (_, i) => 5 - i).map((rating) => (
        <div className="flex items-center" key={rating}>
          <span className="text-gray-700 text-sm flex-shrink-0 w-24">{`${rating} star${rating > 1 ? 's' : ''}`}</span>
          <div className="flex-1 bg-gray-200 rounded-full h-2.5 mx-4">
            <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: `${getPercentage(counts[rating] || 0)}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingProgress;
