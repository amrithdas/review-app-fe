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
import UserAuth from "../hooks/userAuth"
import LoginModalManager from "../modals/loginModalManager";
import Footer from "./footer";
import ErrorMessage from "./errorPopup";
import axios from "axios";
import baseURL from "../config";

interface RestaurantData {
    id: number; // Assuming you have an ID for each restaurant
    name: string;
    address: string;
    description: string;
    contact_info: string;
    tags: string[];
    cafe: boolean;
    bakery: boolean;
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
            handleLoginOpen(); // Open login modal if user is not logged in
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
        // Check if URL starts with "http://" or "https://"
        return /^https?:\/\//i.test(url) ? url : `http://${url}`;
    };

    const getGoogleMapsUrl = (location: string) => {
        const [latitude, longitude] = location.split(",").map(coord => coord.trim());
        return `https://www.google.com/maps?q=${latitude},${longitude}`;
    };

    return (
        <>
        <Navbar onSignupClick={handleSignupOpen} onLoginClick={handleLoginOpen} isFixed={false} />
            <RestaurantCarousel opening_time={restaurantData?.opening_time} closing_time={restaurantData?.closing_time} name={restaurantData?.name} ratingStr={restaurantData?.rating} image_urls={restaurantData?.image_urls} reviewCount={reviewCount} />
            <div className="m-48 my-4 m-36 flex row gap-10">
                <div className=" w-3/5	">

                    <div className="flex row gap-4 my-4 ">
                        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleWriteReviewClick}>Write a review</button>
                        {/* <button className=" text-black px-4 py-2 rounded border border-solid border-black">Add photo</button> */}
                        {/* <button className=" text-black px-4 py-2 rounded border border-solid border-black">Share</button> */}
                        {/* <button className=" text-black px-4 py-2 rounded border border-solid border-black">Save</button> */}
                    </div>
                    <br></br>
                    <hr />
                        <main className="p-4">
                            <LocationHours location={restaurantData?.location} openingTime={restaurantData?.opening_time} closingTime={restaurantData?.closing_time} address={restaurantData?.address} />
                        </main>
                        <div>
                            <ReviewPage name={restaurantData?.name} reviewCount={reviewCount} ratingStr={restaurantData?.rating}/>
                        </div>
                </div>
                {/* ////////////////////////////Right section /////////////////////////////////////// */}
                <div className=" w-2/5 flex flex-col gap-2 mt-4">

                    {/* <div className="   p-4  border rounded-lg">
                        <b className=" row flex gap-2 mb-2"><TbHandFinger style={{ fontSize: 32 }} />
                            This Way to Our Legendary Crispy, Curly Pepperoni</b>
                        <button className="bg-red-600 text-white py-2 px-8 rounded-lg mb-4 w-full ">Order Now</button>
                    </div> */}
                    <div className="  p-4 flex flex-col gap-2 border rounded-lg">
                        <a
                          href={getWebsiteUrl(restaurantData?.website)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 mb-4 justify-between flex flex-row items-center"
                        >
                          {restaurantData?.website || "No website available"}
                          <RiShareBoxLine style={{ color: "black", fontSize: 24 }} />
                        </a>
                        <hr />
                        <p className="text-gray-700 mt-2 justify-between flex flex-row items-center ">{restaurantData?.contact_info} <LuPhoneCall style={{ color: "black", fontSize: 24 }} />
                        </p>
                        <hr />
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <a
                                  href={getGoogleMapsUrl(restaurantData?.location || "")}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 mt-2"
                                >
                                  Get Directions
                                </a>
                                <p className="text-gray-700  justify-between	flex flex-row items-center ">{restaurantData?.address}</p>
                            </div>
                            <LiaDirectionsSolid style={{ color: "black", fontSize: 28 }} />
                        </div>
                        {/* <hr />
                        <button className="border border-solid border-black py-2 px-4 rounded-lg mt-4 w-full justify-center flex flex-row items-center gap-2"><FaPencilAlt />
                            Suggest an edit</button> */}
                    </div>
                </div>


            </div>

            <Footer />
            <LoginModalManager />
            {error && <ErrorMessage message="Please Login to continue" onClose={() => setError(false)} />}
        </>

    )
};

export default RestaurantReview