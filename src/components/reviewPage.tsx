import React from "react";
import { FaStar } from 'react-icons/fa';
import { IoBulbOutline } from "react-icons/io5";
import { FaHands } from "react-icons/fa6";
import { BsHeartFill } from "react-icons/bs";
import { FaRegSurprise } from "react-icons/fa";




const ReviewPage = () => {
    return (
        <div className="p-6  mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-medium text-gray-700">Recommended Reviews</h2>
            <div className="bg-blue-100 text-blue-700 p-4 rounded-md">
                <span className="font-bold">Your trust is our top concern,</span> so businesses can't pay to alter or remove their reviews.
            </div>
            <div className="flex row  items-center justify-between	border px-8 rounded shadow">
                <div className="flex items-center space-x-4 py-4">
                    <div className="bg-gray-200 rounded-full h-16 w-16"></div>
                    <div >
                        <div className="text-gray-700 font-semibold">Username</div>
                        <div className="text-gray-500">Location</div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>0</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8zm8 7c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm1-11h-2v4h2v-4zm0 5h-2v2h2v-2z" /></svg>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-1">
                        <div className="flex items-center space-x-0.5">
                            {[...Array(4)].map((_, index) => (
                                <svg key={index} className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.464 4.513h4.743c.97 0 1.371 1.24.588 1.81l-3.833 2.787 1.464 4.513c.3.921-.755 1.688-1.539 1.13L10 13.011l-3.833 2.788c-.783.557-1.838-.209-1.539-1.13l1.464-4.513-3.833-2.787c-.783-.57-.382-1.81.588-1.81h4.743l1.464-4.513z" /></svg>
                            ))}
                            <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.464 4.513h4.743c.97 0 1.371 1.24.588 1.81l-3.833 2.787 1.464 4.513c.3.921-.755 1.688-1.539 1.13L10 13.011l-3.833 2.788c-.783.557-1.838-.209-1.539-1.13l1.464-4.513-3.833-2.787c-.783-.57-.382-1.81.588-1.81h4.743l1.464-4.513z" /></svg>
                        </div>
                        <span className="text-gray-500">Select your rating</span>
                    </div>
                    <a href="/" className="text-blue-500 hover:underline">Start your review of Mountain Mike's Pizza</a>
                </div>
            </div>
            <div className="flex row w-full">
                <div className="flex w-2/5 flex-col">
                    <div className="text-gray-700 font-semibold">Overall rating</div>
                    <div className="flex items-center mb-1">
                        {[1, 2, 3, 4, 5].map(() => (
                            <button className="text-3xl focus:outline-none text-gray-200 pr-2">
                                <FaStar className={'text-white bg-orange-400 rounded p-1'} />
                            </button>
                        ))}
                    </div>
                    <div className="text-gray-500">120 reviews</div>
                </div>
                <div className="space-y-1 w-3/5	">
                    <div className="flex items-center">
                        <span className="text-gray-700">5 stars</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mx-4">
                            <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-700">4 stars</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mx-4">
                            <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-700">3 stars</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mx-4">
                            <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-700">2 stars</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mx-4">
                            <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-700">1 star</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mx-4">
                            <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*******************************review***********************************/}
            <div className="">
                <div className="flex items-center space-x-4">
                    <img src="user-image-url" alt="User" className="w-12 h-12 rounded-full" />
                    <div>
                        <h2 className="text-lg font-bold">Jennifer K.</h2>
                        <p className="text-sm text-gray-600">San Francisco, CA</p>
                    </div>
                </div>
                <div className="flex items-center mt-2">
                    <div className="flex items-center mb-1">
                        {[1, 2, 3, 4, 5].map(() => (
                            <button className="text-xl focus:outline-none text-gray-200 pr-2">
                                <FaStar className={'text-white bg-red-400 rounded p-1'} />
                            </button>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 ml-2">Jun 18, 2024</p>
                    <span className="text-xs text-gray-400 ml-2">• Updated review</span>
                </div>
                <p className="mt-4 text-gray-700">
                    Staff has changed along with name & gym management - everyone is great here, 5+ stars!
                </p>

                <div className="flex space-x-4 mt-4">
                    <div className="flex flex-col items-center">
                        <span className="border border-gray-500 rounded-full p-2"> <IoBulbOutline /></span>
                        <button className="text-sm text-gray-500 hover:text-gray-700">Helpful 0</button>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="border border-gray-500 rounded-full p-2"> <FaHands />   </span>
                        <button className="text-sm text-gray-500 hover:text-gray-700">Thanks 0</button>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="border border-gray-500 rounded-full p-2"> <BsHeartFill /> </span>
                        <button className="text-sm text-gray-500 hover:text-gray-700">Love this 0</button>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="border border-gray-500 rounded-full p-2"> <FaRegSurprise /></span>
                        <button className="text-sm text-gray-500 hover:text-gray-700">Oh no 0</button>
                    </div>
                </div>
                <div className="mt-6 border-t pt-4">
                    <div className="flex items-center space-x-4">
                        <img src="business-manager-image-url" alt="Business Manager" className="w-8 h-8 rounded-full" />
                        <div>
                            <p className="text-sm font-bold">Kim A.</p>
                            <p className="text-xs text-gray-500">Business Manager - Aug 9, 2018</p>
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">Hey Jennifer, ...</p>
                </div>
                <div className="mt-4">
                    <p className="text-sm font-bold">Previous review</p>
                    <div className="flex items-center mt-2">
                    <div className="flex items-center mb-1">
                        {[1, 2, 3, 4, 5].map(() => (
                            <button className="text-xl focus:outline-none text-gray-200 pr-2">
                                <FaStar className={'text-white bg-red-400 rounded p-1'} />
                            </button>
                        ))}
                    </div>
                        <p className="text-sm text-gray-500 ml-2">Aug 7, 2018</p>
                    </div>
                    <p className="mt-2 text-gray-700">
                        This gym has great top roping, lead & bouldering with a beautiful view of the GGB and Crissy Field, but...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ReviewPage;