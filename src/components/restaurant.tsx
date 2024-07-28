import React, { useEffect, useState } from "react";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { FiAlertCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
// import { IoClose } from "react-icons/io5";
// import { FaCheck } from "react-icons/fa6";
import RestaurantSideBar from "./restaurantSideBar";
import Footer from "./footer";
import Navbar from "./navbar";
import { useAuth } from "../modals/authContext";
import LoginModalManager from "../modals/loginModalManager";

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

    const { handleSignupOpen, handleLoginOpen} = useAuth();

    // function formatTime(dateTime: string) {
    //     const time = dateTime.split(' ')[1]; // Extract the time part
    //     let [hour, minute] = time.split(':');
    //     let hourNum = parseInt(hour, 10);
    //     const ampm = hourNum >= 12 ? 'PM' : 'AM';
    //     hourNum = hourNum % 12;
    //     hourNum = hourNum ? hourNum : 12; // the hour '0' should be '12'
    //     return `${hourNum}:${minute} ${ampm}`;
    // }

    const [restaurantData, setRestaurantData] = useState<RestaurantData[]>([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantData | null>(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const baseURL = process.env.NODE_ENV === 'production'
                    ? process.env.REACT_APP_PROD_ENDPOINT
                    : process.env.REACT_APP_DEV_ENDPOINT;
                const response = await fetch(`${baseURL}restaurants/api/get-restaurants/`);
                const data = await response.json();
                console.log(data);
                setRestaurantData(data.restaurants);
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            }
        };

        fetchRestaurants();
    }, []);
    
    const mapContainerStyle = {
        width: "100%",
        height: "100%",
    };

    const center = {
        lat: 9.677964248783864, // Replace with a central latitude for Kochi
        lng: 76.30516811712164, // Replace with a central longitude for Kochi
    };

    return (
        <>
            <Navbar onSignupClick={handleSignupOpen} onLoginClick={handleLoginOpen} isFixed={true} />
            <div className="flex gap-2 mb-6 mt-16">
                <div className="w-1/5  p-4 text-black">
                    <RestaurantSideBar />
                </div>
                <div className="w-3/5  p-4 text-black flex flex-col">
                    <div className="flex flex-row justify-between items-center mb-4">
                        <h1 className="text-2xl	font-bold">Top 10 Best Restaurants Near Kochi, Kerala</h1>
                        <div className="flex flex-row justify-between items-center mb-4">
                            <p className="text-base font-normal">Sort:</p>
                            <select className="text-base font-medium bg-white rounded p-1">
                                <option value="recommended">Recommended</option>
                                <option value="nearest">Nearest</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>
                    </div>
                    {/* <div className="flex flex-row items-center gap-2">
                        <p className="text-lg	font-medium">Sponsored Results</p>
                        <FiAlertCircle style={{ fontSize: 16, marginTop: 4 }} />
                    </div> */}
                    {
                        restaurantData.map((item, key) => {
                            return (
                                <div key={key} className="flex gap-2 p-4 border-b-2 border-neutral-300 hover:shadow-md">
                                    <div className="w-1/2 p-2 text-black flex flex-col">
                                        <div className="w-full overflow-hidden rounded-lg">
                                            {/* <img src={item.image} alt="img" /> */}
                                        </div>
                                    </div>
                                    <div className="w-full p-2 text-black flex flex-col">
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
                                        <div className="flex flex-row mt-2 gap-2 items-center text-xs font-medium text-slate-600">
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
                                        {/* <a href="restaurant" className="flex gap-2 mt-4 border-solid border-2 border-neutral-100 rounded-lg"> */}
                                            {/* <div className="w-3/4 p-2 text-black flex flex-col">
                                                <p className="font-bold">{item.offerTitle}</p>
                                                <p>{item.offerDescription} <span className="text-indigo-400">Read more</span></p>
                                            </div> */}
                                            {/* <div className="w-1/4 text-black flex flex-col">
                                                <div className="w-full overflow-hidden">
                                                    <img src={item.offerImage} alt="img" />
                                                </div>
                                            </div> */}
                                        {/* </a> */}
                                        {/* <div className="flex flex-row gap-5 items-center mt-4">
                                            {item.amenities.map((amenity, index) => (
                                                <div key={index} className="flex flex-row gap-1 items-center">
                                                    {amenity.available ? (
                                                        <FaCheck style={{ fontSize: 18, color: "green" }} />
                                                    ) : (
                                                        <IoClose style={{ fontSize: 18, color: "red" }} />
                                                    )}
                                                    <p className="text-xs">{amenity.name}</p>
                                                </div>
                                            ))}
                                        </div> */}
                                    </div>
                                </div>
                            );
                        })
                    }


                </div>
                <div className="w-1/5 bg-red-500 p-1 text-black">
                <LoadScript googleMapsApiKey="AIzaSyDRl2V_KIzWoXQ8wBeK7xDWbKcfE2MtV-g">
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={12}
                        >
                            {restaurantData.map((item, index) => {
                                const [lat, lng] = item.location.split(',').map(Number); // Assuming location is "lat,lng"
                                return (
                                    <Marker
                                        key={index}
                                        position={{ lat, lng }}
                                        title={item.name}
                                        label={{ text: (index + 1).toString(), color: "white" }}
                                        icon={{
                                            path: window.google.maps.SymbolPath.CIRCLE,
                                            scale: 15,
                                            fillColor: "#EA5231",
                                            fillOpacity: 1,
                                            strokeWeight: 2,
                                            strokeColor: "white",
                                        }}
                                        onClick={() => setSelectedRestaurant(item)}
                                    />
                                );
                            })}
                            {selectedRestaurant && (
                                <InfoWindow
                                    position={{
                                        lat: Number(selectedRestaurant.location.split(',')[0]),
                                        lng: Number(selectedRestaurant.location.split(',')[1]),
                                    }}
                                    onCloseClick={() => setSelectedRestaurant(null)}
                                >
                                    <div>
                                        <h2 className="font-bold">{selectedRestaurant.name}</h2>
                                        <p>{selectedRestaurant.description}</p>
                                        <p>{selectedRestaurant.address}</p>
                                        <p>Rating: {selectedRestaurant.rating} ({selectedRestaurant.reviews} reviews)</p>
                                    </div>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
            <Footer/>
            <LoginModalManager />
        </>
    )
}
export default Restaurant;