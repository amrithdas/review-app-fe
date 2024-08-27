import React from "react";
import RestaurantCarousel from "./restaurantCarousel";
import { TbHandFinger } from "react-icons/tb";
import { FaPencilAlt } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { LiaDirectionsSolid } from "react-icons/lia";
import LocationHours from "./locationHours";
import ReviewPage from "./reviewPage";




function RestaurantReview() {
    return (
        <>
            <RestaurantCarousel />
            <div className="m-48 my-4 m-36 flex row gap-10">
                <div className=" w-3/5	">

                    <div className="flex row gap-4 my-4 ">
                        <button className="bg-red-500 text-white px-4 py-2 rounded">Write a review</button>
                        <button className=" text-black px-4 py-2 rounded border border-solid border-black">Add photo</button>
                        <button className=" text-black px-4 py-2 rounded border border-solid border-black">Share</button>
                        <button className=" text-black px-4 py-2 rounded border border-solid border-black">Save</button>
                    </div>
                    <br></br>
                    <hr />
                        <main className="p-4">
                            <LocationHours />
                        </main>
                        <div>
                            <ReviewPage/>
                        </div>
                </div>
                {/* ////////////////////////////Right section /////////////////////////////////////// */}
                <div className=" w-2/5 flex flex-col gap-2 mt-4">

                    <div className="   p-4  border rounded-lg">
                        <b className=" row flex gap-2 mb-2"><TbHandFinger style={{ fontSize: 32 }} />
                            This Way to Our Legendary Crispy, Curly Pepperoni</b>
                        <button className="bg-red-600 text-white py-2 px-8 rounded-lg mb-4 w-full ">Order Now</button>
                    </div>
                    <div className="  p-4 flex flex-col gap-2 border rounded-lg">
                        <a href="#" className="text-blue-500  mb-4 justify-between	 flex flex-row items-center ">
                            mountainmikespizza.com <RiShareBoxLine style={{ color: "black", fontSize: 24 }} /></a>

                        <hr />
                        <p className="text-gray-700 mt-2 justify-between	 flex flex-row items-center ">(415) 830-5064 <LuPhoneCall style={{ color: "black", fontSize: 24 }} />
                        </p>
                        <hr />
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <a href="#" className="text-blue-500 mt-2">Get Directions
                                </a>
                                <p className="text-gray-700  justify-between	flex flex-row items-center ">35 Skyline Plz Daly City, CA 94015</p>
                            </div>
                            <LiaDirectionsSolid style={{ color: "black", fontSize: 28 }} />
                        </div>
                        <hr />
                        <button className="border border-solid border-black py-2 px-4 rounded-lg mt-4 w-full justify-center flex flex-row items-center gap-2"><FaPencilAlt />
                            Suggest an edit</button>
                    </div>
                </div>


            </div>




        </>

    )
}
export default RestaurantReview