import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { SlUserFollowing } from "react-icons/sl";

function Profile() {
    const [activeTab, setActiveTab] = useState('Profile Overview');
    return (
        <>
            <div className="bg-gray-100 min-h-screen p-5">
                {/* Profile Section */}
                <div className="flex space-x-5">
                    {/* Sidebar */}
                    <div className="w-1/4 bg-white p-5 rounded-lg shadow-md">
                        <div className="text-center">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Profile"
                                className="rounded-full mx-auto"
                            />
                            <h2 className="text-xl font-bold mt-3">Mary F.</h2>
                            <p className="text-gray-500">Palo Alto, CA</p>
                            <p className="text-sm">145 Reviews</p>
                            <p className="text-sm">61 Friends</p>
                            <p className="text-sm">Joined: Sept 2020</p>

                            <div className="flex justify-center space-x-8 mt-4">
                                {/* Compliment Icon */}
                                <div className="text-center">
                                    <div className="bg-blue-500 text-white p-2 rounded-full inline-block">
                                        <FaRegHeart className="h-6 w-6" />
                                    </div>
                                    <p className="mt-2 text-sm font-medium">Compliment</p>
                                </div>

                                {/* Message Icon */}
                                <div className="text-center">
                                    <div className="bg-green-500 text-white p-2 rounded-full inline-block">
                                        <AiOutlineMessage className="h-6 w-6" />
                                    </div>
                                    <p className="mt-2 text-sm font-medium">Message</p>
                                </div>

                                {/* Followers Icon */}
                                <div className="text-center">
                                    <div className="bg-gray-500 text-white p-2 rounded-full inline-block">
                                        <SlUserFollowing className="h-6 w-6" />
                                    </div>
                                    <p className="mt-2 text-sm font-medium">Followers</p>
                                </div>
                            </div>

                        </div>

                        <nav className="mt-8">
                        <ul className="space-y-6 pl-6 mt-6">
              <li
                className={`cursor-pointer ${
                  activeTab === 'Profile Overview' ? 'text-blue-500' : ''
                }`}
                onClick={() => setActiveTab('Profile Overview')}
              >
                Profile Overview
              </li>
              <li
                className={`cursor-pointer ${
                  activeTab === 'Reviews' ? 'text-blue-500' : ''
                }`}
                onClick={() => setActiveTab('Reviews')}
              >
                Reviews
              </li>
              <li
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
              </li>
            </ul>
                        </nav>
                    </div>

                    {/* Main Content (conditionally rendered based on activeTab) */}
        <div className="w-3/4 bg-white p-5 rounded-lg shadow-md">
          {activeTab === 'Profile Overview' && (
            <div>
              <h3 className="text-xl font-bold">Profile Overview</h3>
              <p>Details about the user's profile go here...</p>
            </div>
          )}
          {activeTab === 'Reviews' && (
            <div>
              <h3 className="text-xl font-bold">Reviews</h3>
              <p>User reviews content goes here...</p>
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

        </>
    )
}
export default Profile
