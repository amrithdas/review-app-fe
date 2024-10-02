import React, { useEffect, useState } from "react";
// import { FaRegHeart } from "react-icons/fa";
// import { AiOutlineMessage } from "react-icons/ai";
// import { SlUserFollowing } from "react-icons/sl";
import Navbar from "./navbar";
import Footer from "./footer";
import LoginModalManager from "../modals/loginModalManager";
import { useAuth } from "../modals/authContext";
import axios from "axios";
import baseURL from "../config";
import { FaStar } from "react-icons/fa";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Profile Overview');
  const { handleSignupOpen, handleLoginOpen } = useAuth();
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [user, setUser] = useState<{ name: string; pincode: string, bio: string } | null>(null);
  const [location, setLocation] = useState<{ name: string; district: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseURL}accounts/profile/`, {
          withCredentials: true
        });
        setUser({
          name: response.data.name,
          pincode: response.data.pincode,
          bio: response.data.bio
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchReviewsCount = async () => {
      if (user) {
        try {
          const response = await axios.get(`${baseURL}restaurants/api/get-reviews/`, {
            withCredentials: true
          });
          setReviewCount(response.data.review_count);
        } catch (error) {
          console.error('Error fetching review count:', error);
        }
      }
    };

    fetchReviewsCount();
  }, [user]);

  useEffect(() => {
    const fetchLocationData = async () => {
      if (user?.pincode) {
        try {
          const response = await axios.get(`https://api.postalpincode.in/pincode/${user.pincode}`);
          const postOffices = response.data[0]?.PostOffice;
          if (postOffices && postOffices.length > 0) {
            setLocation({
              name: postOffices[0].Name,
              district: postOffices[0].District,
            });
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      }
    };

    fetchLocationData();
  }, [user]);

  useEffect(() => {
    const fetchUserReviews = async () => {
      if (activeTab === 'Reviews' && user) {
        try {
          const response = await axios.get(`${baseURL}restaurants/api/get-user-reviews/`, {
            withCredentials: true
          });
          setReviews(response.data);
        } catch (error) {
          console.error('Error fetching user reviews:', error);
        }
      }
    };

    fetchUserReviews();
  }, [activeTab, user]);

  useEffect(() => {
    if (user !== null) {
      setLoading(false);
    }
  }, [user, reviewCount]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEditClick = () => {
    console.log("Edit button clicked");
  };

  return (
    <>
      <Navbar onSignupClick={handleSignupOpen} onLoginClick={handleLoginOpen} isFixed={false} />
      <div className="bg-slate-200 min-h-screen p-5 pt-8">
        <div className="flex space-x-5">
          <div className="w-1/4 bg-white p-5 rounded-lg shadow-md">
            <div className="text-center">
              <img
                src="images/ppic_1.png"
                alt="Profile"
                className="rounded-full mx-auto w-1/2"
              />
              {user && (
                <>
                  <h2 className="text-xl font-bold mt-3">{user.name}</h2>
                  {location && (
                    <p className="text-gray-500">
                      {location.name}, {location.district}
                    </p>
                  )}
                  <p className="text-sm">{reviewCount} Reviews</p>
                </>
              )}
              {/* <p className="text-sm">61 Friends</p> */}
              {/* <p className="text-sm">Joined: Sept 2020</p> */}

              {/* <div className="flex justify-center space-x-8 mt-4">
                                <div className="text-center">
                                    <div className="bg-blue-500 text-white p-2 rounded-full inline-block">
                                        <FaRegHeart className="h-6 w-6" />
                                    </div>
                                    <p className="mt-2 text-sm font-medium">Compliment</p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-green-500 text-white p-2 rounded-full inline-block">
                                        <AiOutlineMessage className="h-6 w-6" />
                                    </div>
                                    <p className="mt-2 text-sm font-medium">Message</p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-gray-500 text-white p-2 rounded-full inline-block">
                                        <SlUserFollowing className="h-6 w-6" />
                                    </div>
                                    <p className="mt-2 text-sm font-medium">Followers</p>
                                </div>
                            </div> */}

            </div>

            <nav className="mt-8">
              <ul className="space-y-6 pl-6 mt-6">
                <li
                  className={`cursor-pointer ${activeTab === 'Profile Overview' ? 'text-blue-500' : ''
                    }`}
                  onClick={() => setActiveTab('Profile Overview')}
                >
                  Profile Overview
                </li>
                <li
                  className={`cursor-pointer ${activeTab === 'Reviews' ? 'text-blue-500' : ''
                    }`}
                  onClick={() => setActiveTab('Reviews')}
                >
                  Reviews
                </li>
                {/* <li
                className={`cursor-pointer ${
                  activeTab === 'Photos and Videos' ? 'text-blue-500' : ''
                }`}
                onClick={() => setActiveTab('Photos and Videos')}
              >
                Photos and Videos
              </li>
              <li
                className={`cursor-pointer ${
                  activeTab === 'Compliments' ? 'text-blue-500' : ''
                }`}
                onClick={() => setActiveTab('Compliments')}
              >
                Compliments
              </li>
              <li
                className={`cursor-pointer ${
                  activeTab === 'Friends' ? 'text-blue-500' : ''
                }`}
                onClick={() => setActiveTab('Friends')}
              >
                Friends
              </li> */}
              </ul>
            </nav>
          </div>

          <div className="w-3/4 bg-white p-5 rounded-lg shadow-md">
            {activeTab === 'Profile Overview' && (
              <div>
                <h3 className="text-xl font-bold">About Me</h3>
                {user && (
                  <p>
                    {user.bio ? user.bio : "No description available."}
                  </p>
                )}
              </div>
            )}
            <div className="flex justify-end mt-10">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleEditClick()}
              >
                Edit
              </button>
            </div>
            {activeTab === 'Reviews' && (
              <div>
                <h3 className="text-xl font-bold">Reviews</h3>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-300 pb-4 mb-4">
                      <h4 className="font-semibold">{review.restaurant_name}</h4>
                      <div className="flex items-center mb-2">
                        {/* Display rating as stars */}
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar
                            key={i}
                            className={`${i < review.rating ? 'text-white bg-yellow-400 rounded p-1' : 'text-white bg-gray-100 rounded p-1'} text-xl mx-1`}
                          />
                        ))}
                      </div>
                      <p>{review.description}</p>
                      <p className="text-gray-500 text-sm">{new Date(review.created_at).toLocaleString()}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews found.</p>
                )}
              </div>
            )}
            {activeTab === 'Photos and Videos' && (
              <div>
                <h3 className="text-xl font-bold">Photos and Videos</h3>
                <p>Photos and videos content goes here...</p>
              </div>
            )}
            {activeTab === 'Compliments' && (
              <div>
                <h3 className="text-xl font-bold">Compliments</h3>
                <p>Compliments content goes here...</p>
              </div>
            )}
            {activeTab === 'Friends' && (
              <div>
                <h3 className="text-xl font-bold">Friends</h3>
                <p>Friends content goes here...</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <LoginModalManager />
    </>
  )
}
export default Profile
