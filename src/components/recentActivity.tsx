// src/components/RecentActivity.tsx
import React from 'react';
import ReviewBox from './reviewbox';

const reviews = [
    { title: "Great Place!", content: "Had an amazing time.", author: "John Doe" },
    { title: "Good Service", content: "Friendly staff and quick service.", author: "Jane Smith" },
    { title: "Loved the Ambience", content: "The atmosphere was fantastic.", author: "Emily Johnson" },
    { title: "Delicious Food", content: "The food was absolutely delicious.", author: "Chris Lee" },
    { title: "Will Visit Again", content: "Definitely coming back soon.", author: "Patricia Brown" },
    { title: "Highly Recommend", content: "Highly recommend to everyone.", author: "Michael Davis" },
    { title: "Nice Decor", content: "The decor was very nice and cozy.", author: "Jessica Wilson" },
    { title: "Affordable", content: "Great prices for the quality.", author: "David Martinez" },
    { title: "Friendly Staff", content: "The staff were very friendly.", author: "Sarah Thomas" },
    { title: "Quick Service", content: "Service was quick and efficient.", author: "Robert Taylor" },
    { title: "Perfect Date Spot", content: "Perfect place for a date night.", author: "Laura Anderson" },
    { title: "Family Friendly", content: "Great place for family gatherings.", author: "James White" },
  ];

const RecentActivity: React.FC = () => {
  return (
    <div className="px-4">
      <h2 className="text-3xl font-bold mb-10 my-10 text-center">Recent Activity</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <ReviewBox
            key={index}
            title={review.title}
            content={review.content}
            author={review.author}
          />
        ))}
      </div>
      <div className="text-l mt-11 text-center mt-4">
        <a href="#more-activity" className="text-blue-500 hover:underline">Show More Activity</a>
      </div>
      <hr className="my-14 opacity-50 border-t border-gray-300" />
    </div>
  );
};

export default RecentActivity;
