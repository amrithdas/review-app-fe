import React, { useEffect, useState } from "react";
import RestaurantCarousel from "./restaurantCarousel";
// import { TbHandFinger } from "react-icons/tb";
// import { FaPencilAlt } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { LiaDirectionsSolid } from "react-icons/lia";
import LocationHours from "./locationHours";
import ReviewPage from "./reviewPage";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./navbar";
import { useAuth } from "../modals/authContext";
import UserAuth from "../hooks/userAuth";
import LoginModalManager from "../modals/loginModalManager";
import Footer from "./footer";
import ErrorMessage from "./errorPopup";
import axios from "axios";
import baseURL from "../config";

interface RestaurantData {
    id: number;
    name: string;
    address: string;
    description: string;
    contact_info: string;
    tags: string[];
    website: string;
    location: string;
    reviews: number;
    rating: string;
    opening_time: string;
    closing_time: string;
    image_urls: string[];
}

const RestaurantReview: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [restaurantData, setRestaurantData] = useState<RestaurantData>();
    const [error, setError] = useState(false);
    const [reviewCount, setReviewCount] = useState<number>(0);
    const { handleSignupOpen, handleLoginOpen } = useAuth();
    const isAuthenticated = UserAuth();
    const navigate = useNavigate();

    const handleWriteReviewClick = () => {
        if (isAuthenticated) {
            navigate(`/restaurants/review?name=${name}`);
        } else {
            setError(true);
            handleLoginOpen();
        }
    };

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                if (name) {
                    const response = await axios.get(`${baseURL}restaurants/api/restaurant/${name}/`);
                    const data = response.data.restaurant;
                    setRestaurantData(data);
                    const reviewsResponse = await axios.get(`${baseURL}restaurants/api/${name}/review_count/`);
                    setReviewCount(reviewsResponse.data.review_count);
                }
            } catch (error) {
                console.error("Error fetching restaurant details:", error);
            }
        };
        fetchRestaurantDetails();
    }, [name]);

    const getWebsiteUrl = (url?: string) => {
        if (!url) return "/";
        return /^https?:\/\//i.test(url) ? url : `http://${url}`;
    };

    const getGoogleMapsUrl = (location: string) => {
        const [latitude, longitude] = location.split(",").map(coord => coord.trim());
        return `https://www.google.com/maps?q=${latitude},${longitude}`;
    };

    return (
        <>
            <Navbar onSignupClick={handleSignupOpen} onLoginClick={handleLoginOpen} isFixed={false} />
            <RestaurantCarousel 
                opening_time={restaurantData?.opening_time} 
                closing_time={restaurantData?.closing_time} 
                name={restaurantData?.name} 
                ratingStr={restaurantData?.rating} 
                image_urls={restaurantData?.image_urls} 
                reviewCount={reviewCount} 
            />
            <div className="m-4 sm:m-8 lg:m-36 flex flex-col lg:flex-row gap-4">
                {/* Left section - Main content */}
                <div className="w-full lg:w-3/5 flex flex-col gap-4">
                    <div className="flex flex-row gap-2">
                        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleWriteReviewClick}>Write a review</button>
                        {/* <button className=" text-black px-4 py-2 rounded border border-solid border-black">Add photo</button> */}
                        {/* <button className=" text-black px-4 py-2 rounded border border-solid border-black">Share</button> */}
                        {/* <button className=" text-black px-4 py-2 rounded border border-solid border-black">Save</button> */}
                    </div>
                    <hr />
                    <main className="p-4">
                        <LocationHours 
                            location={restaurantData?.location} 
                            openingTime={restaurantData?.opening_time} 
                            closingTime={restaurantData?.closing_time} 
                            address={restaurantData?.address} 
                        />
                    </main>
                    <ReviewPage 
                        name={restaurantData?.name} 
                        reviewCount={reviewCount} 
                        ratingStr={restaurantData?.rating} 
                    />
                </div>
                
                {/* Right section - Info and links */}
                <div className="w-full lg:w-2/5 flex flex-col gap-2 mt-4 lg:mt-0">
                    {/* <div className="p-4 border rounded-lg">
                        <b className="flex gap-2 mb-2"><TbHandFinger style={{ fontSize: 32 }} />
                            This Way to Our Legendary Crispy, Curly Pepperoni</b>
                        <button className="bg-red-600 text-white py-2 px-8 rounded-lg mb-4 w-full">Order Now</button>
                    </div> */}
                    <div className="p-4 flex flex-col gap-2 border rounded-lg">
                        <a
                            href={getWebsiteUrl(restaurantData?.website)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 justify-between flex items-center mb-4"
                        >
                            {restaurantData?.website || "No website available"}
                            <RiShareBoxLine style={{ color: "black", fontSize: 24 }} />
                        </a>
                        <hr />
                        <p className="text-gray-700 flex justify-between items-center">
                            {restaurantData?.contact_info} <LuPhoneCall style={{ color: "black", fontSize: 24 }} />
                        </p>
                        <hr />
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <a
                                href={getGoogleMapsUrl(restaurantData?.location || "")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 mt-2"
                            >
                                Get Directions
                            </a>
                            <p className="text-gray-700">{restaurantData?.address}</p>
                            <LiaDirectionsSolid style={{ color: "black", fontSize: 28 }} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <LoginModalManager />
            {error && <ErrorMessage message="Please Login to continue" onClose={() => setError(false)} />}
        </>
    );
};

export default RestaurantReview;
