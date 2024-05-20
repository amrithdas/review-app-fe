
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import user from "../assets/pic/user.png"


const SignupPopup = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-96">
                <button
                    // onClick={onClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                >
                    &times;
                </button>
                <div className='flex items-center justify-center flex-col mb-4'>
                   
                    <h2 className="text-2xl mb-1 text-center font-medium">Sign Up</h2>
                    <p className='text-sm text-slate-400 text-center text-xs'>By Proceeding you agree to <span className='text-cyan-500'>Terms of Service</span> and acknowledge<span className='text-cyan-500'> Privacy Policy</span></p>
                </div>
                <div className="relative flex-auto">
                  <form className=" rounded  pt-6 pb-8 w-full">
                  <div className="mb-4">
                     
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="text"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="mb-4">
                      
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-6">
                      
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-6">
                      
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="zipcode"
                        type="text"
                        placeholder="Zip Code"
                      />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700  mb-2" htmlFor="birthday">
                     <p className=' font-bold'>   Birthday <span className='text-gray-500 font-normal text-sm'>optional</span></p>
                      </label>
                      <input type="date" id="birthday" name="birthday" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        className="flex  w-full justify-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
                <a href='' className='text-sm mt-4 text-center font-medium flex items-center   justify-center'>Already Sign-up? <span className='ml-2 text-cyan-500	'>Sign-In</span></a>
               
            </div>
        </div>
    );
};

export default SignupPopup;
