import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import UserAuth from "../hooks/userAuth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../modals/authContext";
import LoginModalManager from "../modals/loginModalManager";
import ErrorMessage from "./errorPopup";
import StarRating from "./starRating";
import RatingProgress from "./ratingProgress";
import RecentReviews from "./recentReviews";

interface ReviewPageProps {
    name?: string;
    reviewCount: number;
    ratingStr?: string;
}

const ReviewPage: React.FC<ReviewPageProps> = ({ name, reviewCount, ratingStr }) => {
    const isAuthenticated = UserAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const { handleLoginOpen } = useAuth();
    const [hoverRating, setHoverRating] = useState<number>(0);

    const handleWriteReviewClick = () => {
        if (isAuthenticated) {
            navigate(`/restaurants/review?name=${name}`);
        } else {
            setError(true);
            handleLoginOpen();
        }
    };

    const handleMouseEnter = (rate: number) => {
        setHoverRating(rate);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    return (
        <div className="p-4 sm:p-6 mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-lg sm:text-xl font-medium text-gray-700">Recommended Reviews</h2>
            <div className="bg-blue-100 text-blue-700 p-2 sm:p-4 rounded-md text-sm">
                <span className="font-bold">Your trust is our top concern,</span> so businesses can't pay to alter or remove their reviews.
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border px-4 sm:px-8 py-4 rounded shadow">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
                    <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center overflow-hidden">
                        <img src="/images/user.png" alt="user" className="object-cover w-full h-full" />
                    </div>
                    <div>
                        <div className="text-gray-700 font-semibold">Username</div>
                        <div className="text-gray-500 text-sm">Location</div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>0</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 10c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8zm8 7c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm1-11h-2v4h2v-4zm0 5h-2v2h2v-2z" />
                            </svg>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start sm:items-center">
                    <div className="flex items-center space-x-1 mb-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => handleWriteReviewClick()}
                                    onMouseEnter={() => handleMouseEnter(star)}
                                    onMouseLeave={handleMouseLeave}
                                    className="focus:outline-none"
                                >
                                    <FaStar
                                        className={`w-6 h-6 ${(hoverRating) >= star ? 'text-orange-400' : 'text-gray-300'}`}
                                    />
                                </button>
                            ))}
                        </div>
                        <span className="text-gray-500 pl-3 text-xs sm:text-sm">Select your rating</span>
                    </div>
                    <p className="text-blue-500 hover:underline cursor-pointer text-xs sm:text-sm" onClick={handleWriteReviewClick}>
                        Start your review of {name}
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex flex-col w-full sm:w-2/5">
                    <div className="text-gray-700 font-semibold pb-2 text-sm sm:text-base">Overall rating</div>
                    <StarRating ratingStr={ratingStr} />
                    <div className="text-gray-500 text-xs sm:text-sm">{reviewCount} reviews</div>
                </div>
                <div className="w-full sm:w-3/5">
                    <RatingProgress restaurantName={name ?? ''} />
                </div>
            </div>
            <RecentReviews restaurantName={name ?? ''} />
            <LoginModalManager />
            {error && <ErrorMessage message="Please Login to continue" onClose={() => setError(false)} />}
        </div>
    );
}

export default ReviewPage;
