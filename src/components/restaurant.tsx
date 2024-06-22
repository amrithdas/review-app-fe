import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";
import food1 from "../assets/pic/food1.jpeg"
import food2 from "../assets/pic/food2.jpg"
import food3 from "../assets/pic/food3.jpg"
import food4 from "../assets/pic/food4.jpeg"
import food6 from "../assets/pic/food6.jpg"
import img1 from "../assets/pic/img1.jpg"
import img2 from "../assets/pic/img2.jpeg"
import img3 from "../assets/pic/img3.webp"
import img4 from "../assets/pic/img4.jpeg"
import img5 from "../assets/pic/img5.webp"
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import RestaurantSideBar from "./restaurantSideBar";

const Restaurant: React.FC = () => {

    const restaurantData = [
        {
            image: food1,
            title: "Mountain's Mike Pasta",
            rating: 4.1,
            reviews: 106,
            tags: ["Arcades", "Pasta", "Kids Activities"],
            status: "Closed",
            time: " until 10:00AM tomorrow",
            offerImage: img1,
            offerTitle: "Summer Fun Pass",
            offerDescription: "Get Two months of summer fun, starting @ Rs499",
            amenities: [
                { name: "Outdoor Seating", available: false },
                { name: "WiFi", available: true },
                { name: "Pet Friendly", available: true },
            ],
        },
        {
            image: food2,
            title: "Blind Butcher",
            rating: 3.1,
            reviews: 87,
            tags: ["Noodles", "Pizza", "Night Activities"],
            status: "Open",
            time: " until 3:00AM tomorrow",
            offerImage: img2,
            offerTitle: "Night Fun Pass",
            offerDescription: "Get ulitimate Night fun near you",
            amenities: [
                { name: "Outdoor Seating", available: false },
                { name: "Delivery", available: true },
                { name: "Take Out", available: true },
            ],
        },
        {
            image: food3,
            title: "KFC",
            rating: 3.1,
            reviews: 87,
            tags: ["Fried Chicken", "Zinger burgers", "Games"],
            status: "Open",
            time: " until 3:00AM tomorrow",
            offerImage: img4,
            offerTitle: "Night Fun Pass",
            offerDescription: "Get ulitimate Night fun near you",
            amenities: [
                { name: "Outdoor Seating", available: false },
                { name: "Delivery", available: true },
                { name: "Take Out", available: true },
            ],
        },
        {
            image: food4,
            title: "Burger Castle",
            rating: 3.1,
            reviews: 87,
            tags: ["Burgers", "Wraps", "Live Music"],
            status: "Open",
            time: " until 3:00AM tomorrow",
            offerImage: img3,
            offerTitle: "Night Fun Pass",
            offerDescription: "Get ulitimate Night fun near you",
            amenities: [
                { name: "Outdoor Seating", available: false },
                { name: "Delivery", available: true },
                { name: "Take Out", available: true },
            ],
        },
        {
            image: food6,
            title: "Hot Oven Bakes",
            rating: 3.1,
            reviews: 87,
            tags: ["Cakes", "pastries", "surprise celebrations"],
            status: "Open",
            time: " until 3:00AM tomorrow",
            offerImage: img5,
            offerTitle: "Surprise celebration",
            offerDescription: "Surprise your near ones with us",
            amenities: [
                { name: "Outdoor Seating", available: false },
                { name: "Delivery", available: true },
                { name: "Take Out", available: true },
            ],
        },
    ];
    return (
        <>
            <div className="flex gap-2 ">
                <div className="w-1/5  p-4 text-black">
                    <RestaurantSideBar />

                </div>
                <div className="w-3/5  p-4 text-black flex flex-col">
                    <div className="flex flex-row justify-between items-center mb-4">
                        <h1 className="text-2xl	font-bold">Top 10 Best Restaurants Near Kochi, Kerala</h1>
                        <div className="flex flex-row items-center justify-center gap-1">
                            <p className="text-base	font-normal">sort :</p>
                            <p className="text-base	font-medium">Recommended</p>
                            <RiArrowDownSLine style={{ fontSize: 20, marginTop: 4 }} />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <p className="text-lg	font-medium">Sponsored Results</p>
                        <FiAlertCircle style={{ fontSize: 16, marginTop: 4 }} />
                    </div>
                    {
                        restaurantData.map((item, key) => {
                            return (
                                <div key={key} className="flex gap-2 p-4 border-b-2 border-neutral-300 hover:shadow-md">
                                    <div className="w-1/2 p-2 text-black flex flex-col">
                                        <div className="w-full overflow-hidden rounded-lg">
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>
                                    <div className="w-full p-2 text-black flex flex-col">
                                        <h2 className="text-lg font-bold">{item.title}</h2>
                                        <div className="flex flex-row gap-2 items-center">
                                            <FaStar style={{ color: "orange" }} />
                                            <FaStar style={{ color: "orange" }} />
                                            <FaStar style={{ color: "orange" }} />
                                            <FaStar style={{ color: "orange" }} />
                                            <FaRegStar style={{ color: "grey" }} />
                                            <p>{item.rating}<span className="text-gray-500">({item.reviews} reviews)</span></p>
                                        </div>
                                        <div className="flex flex-row mt-2 gap-2 items-center text-xs font-medium text-slate-600">
                                            {item.tags.map((tag, index) => (
                                                <a key={index} href="restaurant" className="bg-gray-200 px-2 rounded hover:bg-gray-300 pointer">{tag}</a>
                                            ))}
                                        </div>
                                        <div className="flex flex-row gap-2 mt-2 items-center">
                                            <p><span className="text-red-500 font-medium">{item.status} </span>{item.time}</p>
                                        </div>
                                        <a href="restaurant" className="flex gap-2 mt-4 border-solid border-2 border-neutral-100 rounded-lg">
                                            <div className="w-3/4 p-2 text-black flex flex-col">
                                                <p className="font-bold">{item.offerTitle}</p>
                                                <p>{item.offerDescription} <span className="text-indigo-400">Read more</span></p>
                                            </div>
                                            <div className="w-1/4 text-black flex flex-col">
                                                <div className="w-full overflow-hidden">
                                                    <img src={item.offerImage} alt="img" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="flex flex-row gap-5 items-center mt-4">
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
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }


                </div>
                <div className="w-1/5 bg-red-500 p-4 text-black">

                </div>
            </div>

        </>
    )
}
export default Restaurant;