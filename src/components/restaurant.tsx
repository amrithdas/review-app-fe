import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import RestaurantSideBar from "./restaurantSideBar";
import Footer from "./footer";
import Navbar from "./navbar";
import baseURL from '../config';
import { useAuth } from "../modals/authContext";
import LoginModalManager from "../modals/loginModalManager";
import GoogleMapComponent from "./googleMapComponent";

interface RestaurantData {
    name: string;
    address: string;
    description: string;
    contact_info: string;
    tags: string[];
    cafe: boolean;
    bakery: boolean;
    website: string;
    location: string; // This should contain latitude and longitude
    reviews: number;
    rating: string;
    opening_time: string;
    closing_time: string;
}

const Restaurant: React.FC = () => {
    const { handleSignupOpen, handleLoginOpen } = useAuth();
    const [restaurantData, setRestaurantData] = useState<RestaurantData[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [sortBy, setSortBy] = useState<string>('recommended'); // Track sorting criteria

    const fetchRestaurants = async (page: number, sortBy: string, lat: number = 0, lng: number = 0) => {
        try {
            const response = await fetch(`${baseURL}restaurants/api/get-restaurants/?page=${page}&sort_by=${sortBy}&lat=${lat}&lng=${lng}`);
            const data = await response.json();
            setRestaurantData(data.restaurants);
            setTotalPages(data.total_pages);
            setCurrentPage(data.current_page);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    };

    const handleSortChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSortBy = event.target.value;
        setSortBy(newSortBy); // Update sort criteria
        setCurrentPage(1); // Reset page to 1 when sorting changes

        // if (newSortBy === 'nearest') {
        //     try {
        //         const { latitude, longitude } = await getUserLocation();
        //         fetchRestaurants(1, newSortBy, latitude, longitude); // Fetch first page with new sort criteria
        //     } catch (error) {
        //         console.error("Error getting user location:", error);
        //     }
        // } else {
        //     fetchRestaurants(1, newSortBy); // Fetch first page with new sort criteria
        // }
    };

    const getUserLocation = (): Promise<GeolocationCoordinates> => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => resolve(position.coords),
                (error) => reject(error)
            );
        });
    };

    useEffect(() => {
        // Ensure currentPage and sortBy are used correctly for fetching data
        if (sortBy === 'nearest') {
            getUserLocation().then(({ latitude, longitude }) => {
                fetchRestaurants(currentPage, sortBy, latitude, longitude);
            }).catch((error) => {
                console.error("Error getting user location:", error);
            });
        } else {
            fetchRestaurants(currentPage, sortBy);
        }
    }, [currentPage, sortBy]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const center = {
        lat: 9.677964248783864, // Replace with a central latitude for Kochi
        lng: 76.30516811712164, // Replace with a central longitude for Kochi
    };

    return (
        <>
        <Navbar onSignupClick={handleSignupOpen} onLoginClick={handleLoginOpen} isFixed={true} />
        <div className="flex flex-col lg:flex-row gap-2 mb-6 mt-16">
            <div className="lg:w-1/5 p-4 text-black">
                <RestaurantSideBar />
            </div>
            <div className="lg:w-3/5 p-4 text-black flex flex-col">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Top 10 Best Rated Restaurants Near Kochi, Kerala</h1>
                    <div className="flex flex-row justify-between items-center mb-4">
                        <p className="text-base font-normal">Sort:</p>
                        <select className="text-base font-medium bg-white rounded p-1" value={sortBy} onChange={handleSortChange}>
                            <option value="recommended">Recommended</option>
                            <option value="nearest">Nearest</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>
                    {
                        restaurantData.map((item, key) => {
                            return (
                                <div key={key} className="flex flex-col lg:flex-row gap-2 p-4 border-b-2 border-neutral-300 hover:shadow-md">
                                    <div className="lg:w-1/2 p-2 text-black flex flex-col">
                                        <div className="w-full overflow-hidden rounded-lg">
                                            {/* <img src={item.image} alt="img" /> */}
                                        </div>
                                    </div>
                                    <div className="lg:w-full p-2 text-black flex flex-col">
                                        <h2 className="text-lg font-bold">{item.name}</h2>
                                        <div className="flex flex-row gap-2 items-center">
                                            <FaStar style={{ color: "orange" }} />
                                            <FaStar style={{ color: "orange" }} />
                                            <FaStar style={{ color: "orange" }} />
                                            <FaStar style={{ color: "orange" }} />
                                            <FaRegStar style={{ color: "grey" }} />
                                            <p>{item.rating}<span className="text-gray-500">({item.reviews} reviews)</span></p>
                                        </div>
                                        <p>{item.description} <span className="text-indigo-400"></span></p>
                                        <div className="flex flex-wrap mt-2 gap-2 items-center text-xs font-medium text-slate-600">
                                            {item.tags.map((tag, index) => (
                                                <a key={index} href="restaurant" className="bg-gray-200 px-2 rounded hover:bg-gray-300 pointer">{tag}</a>
                                            ))}
                                        </div>
                                        <div className="flex flex-row gap-2 mt-2 items-center">
                                            <p className="text-gray-500 font-medium">{item.address}</p>
                                        </div>
                                        <div className="flex flex-row gap-2 mt-2 items-center">
                                            <p>Working Hours:</p>
                                            <p><span className="text-gray-500 font-medium">{item.opening_time} - {item.closing_time}</span></p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div className="flex justify-between items-center mt-4">
                        <button
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <div className="flex items-center">
                            <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
                        </div>
                        <button
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
                    <GoogleMapComponent restaurantData={restaurantData} center={center} />
            </div>
            <Footer />
            <LoginModalManager />
        </>
    );
}

export default Restaurant;
