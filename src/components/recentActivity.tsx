// src/components/RecentActivity.tsx
import React, { useEffect, useState } from 'react';
import ReviewBox from './reviewbox';
import axios from 'axios';
import baseURL from '../config';

interface Review {
  restaurant_name: string;
  description: string;
  user_name: string;
  rating: number;
  created_at: string;
}

const RecentActivity: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadReviews = async (page: number) => {
    try {
      const response = await axios.get(`${baseURL}restaurants/api/recent-reviews?page=${page}`);
      const newReviews = response.data.reviews;

      if (newReviews.length < 12) {
        setHasMore(false);  // No more reviews to load
      }

      setReviews(prevReviews => [...prevReviews, ...newReviews]);
    } catch (error) {
      console.error("There was an error fetching the reviews!", error);
    }
  };

  useEffect(() => {
    loadReviews(page);
  }, [page]);

  const handleShowMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="px-4">
      <h2 className="text-3xl font-bold mb-10 my-10 text-center">Recent Activity</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <ReviewBox
            key={index}
            title={review.restaurant_name}
            content={review.description}
            author={review.user_name}
            rating={review.rating}
          />
        ))}
      </div>
      {hasMore && (
        <div className="text-l mt-11 text-center mt-4">
          <button onClick={handleShowMore} className="text-blue-500 hover:underline">
            Show More Activity
          </button>
        </div>
      )}
      <hr className="my-14 opacity-50 border-t border-gray-300" />
    </div>
  );
};

export default RecentActivity;
