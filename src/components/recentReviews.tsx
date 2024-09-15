import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
// import { FaStar } from 'react-icons/fa';
// import { IoBulbOutline } from 'react-icons/io5';
// import { FaHands, FaRegSurprise } from 'react-icons/fa';
// import { BsHeartFill } from 'react-icons/bs';
import baseURL from '../config';
import StarRating from './starRating';

interface Review {
  restaurant_name: string;
  description: string;
  user_name: string;
  rating: number;
  created_at: string;
}

const RecentReviews: React.FC<{ restaurantName: string }> = ({ restaurantName }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchReviews = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}restaurants/api/recent-reviews/${restaurantName}/?page=${page}`);
      const { results, next } = response.data;
      setReviews((prev) => [...prev, ...results]);
      setHasMore(!!next);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  }, [restaurantName]);

  useEffect(() => {
    fetchReviews(page);
  }, [page, fetchReviews]);

  // Infinite scrolling
  useEffect(() => {
    const handleScroll = () => {
      const loadMore = () => {
        if (!loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      };

      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
        loadMore();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.created_at} className="border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
          <div className="flex items-center space-x-4">
            <img src="/images/user.png" alt="User" className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-lg font-bold">{review.user_name}</h2>
              <p className="text-sm text-gray-600">San Francisco, CA</p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <StarRating ratingStr={review.rating.toString()} size="text-lg" />
            <p className="text-sm text-gray-500 ml-2">
              {new Date(review.created_at).toLocaleDateString()}
            </p>
          </div>
          <p className="mt-4 text-gray-700">{review.description}</p>
        </div>
      ))}
      {loading && <p className="text-center text-gray-500">Loading more reviews...</p>}
    </div>
  );
  
};

export default RecentReviews;
