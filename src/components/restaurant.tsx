import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";
import food1 from "../assets/pic/food1.jpeg"
import img1 from "../assets/pic/img1.jpg"
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";





const Restaurant: React.FC = () => {
    return (
        <>
            <div className="flex gap-2 ">
                <div className="w-1/5 bg-blue-500 p-4 text-black">


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
                    <div className="flex gap-2 	p-4 border-b-2 border-neutral-300 hover:shadow-md">
                        <div className="w-1/2  p-2 text-black flex flex-col">
                            <div className="w-full  overflow-hidden rounded-lg">
                                <img src={food1} alt="img" />
                            </div>
                        </div>
                        <div className="w-full  p-2 text-black flex flex-col ">
                            <h2 className="text-lg font-bold">Mountain's Mike Pasta</h2>
                            <div className="flex flex-row gap-2 items-center">
                                <FaStar style={{ color: "orange" }} />
                                <FaStar style={{ color: "orange" }} />
                                <FaStar style={{ color: "orange" }} />
                                <FaStar style={{ color: "orange" }} />
                                <FaRegStar style={{ color: "grey" }} />
                                <p>4.1<span className="text-gray-500">(106 reviews)</span></p>
                            </div>
                            <div className="flex flex-row mt-2 gap-2 mt-2 items-center text-xs font-medium text-slate-600">
                                <a href="restaurant" className="bg-gray-200 px-2 rounded hover:bg-gray-300 pointer">Arcades</a>
                                <a href="restaurant" className="bg-gray-200 px-2 rounded hover:bg-gray-300 pointer">Pasta</a>
                                <a href="restaurant" className="bg-gray-200 px-2 rounded hover:bg-gray-300 pointer">Kids Activities</a>
                            </div>
                            <div className="flex flex-row gap-2 mt-2 items-center">
                                <p><span className="text-red-500 font-medium">Closed </span> until 10:00AM tomorrow</p>
                            </div>
                            <a href="restaurant" className="flex gap-2 	mt-4 border-solid border-2 border-neutral-100 rounded-lg">
                                <div className="w-3/4  p-2 text-black flex flex-col ">
                                    <p className="font-bold">Summer Fun Pass</p>
                                    <p>Get Two months of summer fun, starting @ Rs499 <span className="text-indigo-400">Read more</span></p>
                                </div>
                                <div className="w-1/4 text-black flex flex-col">
                                    <div className="w-full  overflow-hidden">
                                        <img src={img1} alt="img"/>
                                    </div>
                                </div>
                            </a>
                            <div className="flex flex-row gap-5 items-center mt-4">
                                <div className="flex flex-row gap-1 items-center ">
                                    <IoClose style={{ fontSize: 18, color: "red" }} />
                                    <p className="text-xs">Outdoor Seating</p>
                                </div>
                                <div className="flex flex-row gap-1 items-center ">
                                    <FaCheck style={{ fontSize: 18, color: "green" }} />
                                    <p className="text-xs">Outdoor Seating</p>
                                </div>
                                <div className="flex flex-row gap-1 items-center ">
                                    <FaCheck style={{ fontSize: 18, color: "green" }} />
                                    <p className="text-xs">Outdoor Seating</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="w-1/5 bg-red-500 p-4 text-black">

                </div>
            </div>

        </>
    )
}
export default Restaurant;