import { useState } from "react";
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review }: { review: any }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const words = review.description.split(' ');
  
    return (
      <div key={review.id} className="p-4 mb-4 border border-gray-200 rounded-lg">
        <div className="flex items-center mb-2">
          <img
            src={`https://ui-avatars.com/api/?name=${review.user_name}`}
            alt={`${review.user_name}'s avatar`}
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="font-bold">{review.user_name}</p>
            <p className="text-gray-500 text-sm">{new Date(review.created_at).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar 
                key={i} 
                className={`${i < review.rating ? 'text-white bg-yellow-400 rounded p-1' : 'text-white bg-gray-100 rounded p-1'} text-xl mx-1`} 
              />
            ))}
          </div>
        </div>
        <p className="text-gray-800">
          {isExpanded ? review.description : words.slice(0, 50).join(' ') + (words.length > 50 ? '...' : '')}
        </p>
        {words.length > 50 && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue-500">
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    );
  };

export default ReviewCard;