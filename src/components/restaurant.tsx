import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantSideBar from "./restaurantSideBar";
import Footer from "./footer";
import Navbar from "./navbar";
import baseURL from '../config';
import { useAuth } from "../modals/authContext";
import LoginModalManager from "../modals/loginModalManager";
import GoogleMapComponent from "./googleMapComponent";
import StarRating from "./starRating";

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

const Restaurant: React.FC = () => {
    const { handleSignupOpen, handleLoginOpen } = useAuth();
    const [restaurantData, setRestaurantData] = useState<RestaurantData[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [sortBy, setSortBy] = useState<string>('recommended');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const navigate = useNavigate();

    const fetchRestaurants = async (page: number, sortBy: string, selectedCategories: string[], lat: number = 0, lng: number = 0) => {
        try {
            const category = selectedCategories.join(",");
            console.log(category);
            const response = await fetch(`${baseURL}restaurants/api/get-restaurants/?page=${page}&sort_by=${sortBy}&lat=${lat}&lng=${lng}&category=${category}`);
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
        setSortBy(newSortBy);
        setCurrentPage(1);
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
        if (sortBy === 'nearest') {
            getUserLocation().then(({ latitude, longitude }) => {
                fetchRestaurants(currentPage, sortBy, selectedCategories, latitude, longitude);
            }).catch((error) => {
                console.error("Error getting user location:", error);
            });
        } else {
            fetchRestaurants(currentPage, sortBy, selectedCategories);
        }
    }, [currentPage, sortBy, selectedCategories]);

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

    const handleRestaurantClick = (name: string) => {
        navigate(`/restaurant/${name}`);
    };

    const handleCategoryChange = (categories: string[]) => {
        setSelectedCategories(categories);
        setCurrentPage(1);
      };

    const center = {
        lat: 9.677964248783864,
        lng: 76.30516811712164,
    };

    return (
        <>
            <Navbar onSignupClick={handleSignupOpen} onLoginClick={handleLoginOpen} isFixed={true} />
            <div className="flex flex-col lg:flex-row gap-2 mb-6 mt-16">
                <div className="lg:w-1/5 p-4 text-black">
                    <RestaurantSideBar onCategoryChange={handleCategoryChange} />
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
                                <div key={key} className="flex flex-col lg:flex-row gap-2 p-4 border-b-2 border-neutral-300 hover:shadow-md cursor-pointer"
                                     onClick={() => handleRestaurantClick(item.name)}>
                                    <div className="lg:w-1/2 p-2 text-black flex flex-col">
                                        <div className="w-full overflow-hidden rounded-lg">                                            
                                            {item.image_urls && item.image_urls.length > 0 ? (
                                                <img src={item.image_urls[0]} alt="Restaurant" />
                                                ) : (
                                                <img src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" alt="Fallback" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="lg:w-full p-2 text-black flex flex-col">
                                        <h2 className="text-lg font-bold">{item.name}</h2>
                                        <div className="flex flex-row gap-2 items-center">
                                            <StarRating ratingStr={item.rating}/>
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
};

export default Restaurant;
